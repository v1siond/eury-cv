// Server-only: uses Node.js 'fs'. Do NOT import this from client components.
// For types and defaults, import from './content-defaults' instead.
import fs from "fs";
import path from "path";

import {
  defaultSiteConfig,
  defaultHero,
  defaultForWho,
  defaultHowItWorks,
  defaultPlans,
  defaultWhatsAppContact,
  defaultFAQ,
  defaultPolicy,
} from "./content-defaults";

// Re-export everything from content-defaults for convenience in server components
export * from "./content-defaults";

// ─── Deep Merge ───────────────────────────────────────────────────────────────

function deepMerge<T>(defaults: T, override: unknown): T {
  if (
    typeof defaults !== "object" ||
    defaults === null ||
    typeof override !== "object" ||
    override === null
  ) {
    return (
      override !== undefined && override !== null ? override : defaults
    ) as T;
  }
  if (Array.isArray(defaults) || Array.isArray(override)) {
    return (Array.isArray(override) ? override : defaults) as T;
  }
  const result = { ...(defaults as Record<string, unknown>) };
  const src = override as Record<string, unknown>;
  for (const key of Object.keys(src)) {
    if (src[key] !== undefined && src[key] !== null) {
      result[key] = deepMerge(result[key], src[key]);
    }
  }
  return result as T;
}

// ─── Reader ───────────────────────────────────────────────────────────────────

function readSection<T>(filePath: string, defaults: T): T {
  const fullPath = path.join(process.cwd(), "content", filePath);
  try {
    const raw = fs.readFileSync(fullPath, "utf-8");
    const parsed = JSON.parse(raw) as unknown;
    return deepMerge(defaults, parsed);
  } catch {
    return defaults;
  }
}

// ─── Public API (server components only) ─────────────────────────────────────

export function getSiteConfig() {
  return readSection("site-config.json", defaultSiteConfig);
}
export function getHeroContent() {
  return readSection("home/hero.json", defaultHero);
}
export function getForWhoContent() {
  return readSection("home/for-who.json", defaultForWho);
}
export function getHowItWorksContent() {
  return readSection("home/how-it-works.json", defaultHowItWorks);
}
export function getPlansContent() {
  return readSection("home/plans.json", defaultPlans);
}
export function getWhatsAppContactContent() {
  return readSection("home/whatsapp-contact.json", defaultWhatsAppContact);
}
export function getFAQContent() {
  return readSection("home/faq.json", defaultFAQ);
}
export function getPolicyContent() {
  return readSection("home/policy.json", defaultPolicy);
}

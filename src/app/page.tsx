import Hero from "@/components/sections/Hero";
import ForWho from "@/components/sections/ForWho";
import HowItWorks from "@/components/sections/HowItWorks";
import Plans from "@/components/sections/Plans";
import WhatsAppContact from "@/components/sections/WhatsAppContact";
import FAQ from "@/components/sections/FAQ";
import Policy from "@/components/sections/Policy";
import {
  getHeroContent,
  getForWhoContent,
  getHowItWorksContent,
  getPlansContent,
  getWhatsAppContactContent,
  getFAQContent,
  getPolicyContent,
} from "@/lib/content";

export default function Home() {
  const hero = getHeroContent();
  const forWho = getForWhoContent();
  const howItWorks = getHowItWorksContent();
  const plans = getPlansContent();
  const whatsapp = getWhatsAppContactContent();
  const faq = getFAQContent();
  const policy = getPolicyContent();

  return (
    <main>
      <Hero content={hero} />
      <ForWho content={forWho} />
      <HowItWorks content={howItWorks} />
      <Plans content={plans} />
      <WhatsAppContact content={whatsapp} />
      <FAQ content={faq} />
      <Policy content={policy} />
    </main>
  );
}

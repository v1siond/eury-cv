// Client-safe: NO Node.js imports. Import this from both server and client components.
// ─── Types ────────────────────────────────────────────────────────────────────

export type SiteConfig = {
  professional_name: string;
  professional_title: string;
  whatsapp_number: string;
};

export type HeroContent = {
  badges: string[];
  headline_part1: string;
  headline_highlight: string;
  headline_part2: string;
  subheadline: string;
  body: string;
  cta_text: string;
  whatsapp_number: string;
  image: string;
  profile_name: string;
  profile_subtitle: string;
  profile_tags: string[];
};

export type ForWhoContent = {
  section_tag: string;
  title: string;
  subtitle: string;
  ninos: {
    title: string;
    age_range: string;
    intro: string;
    items: string[];
  };
  adultos: {
    title: string;
    age_range: string;
    intro: string;
    items: string[];
    note: string;
  };
};

export type HowItWorksContent = {
  section_tag: string;
  title: string;
  subtitle: string;
  steps: Array<{
    number: string;
    title: string;
    description: string;
  }>;
};

export type PlansContent = {
  section_tag: string;
  title: string;
  subtitle: string;
  plans: Array<{
    name: string;
    tagline: string;
    description: string;
    features: string[];
    highlighted: boolean;
    badge: string;
    whatsapp_number: string;
    cta_text: string;
  }>;
};

export type WhatsAppContactContent = {
  title: string;
  body: string;
  cta_text: string;
  whatsapp_number: string;
  response_time: string;
};

export type FAQContent = {
  section_tag: string;
  title: string;
  subtitle: string;
  items: Array<{
    question: string;
    answer: string;
  }>;
};

export type PolicyContent = {
  title: string;
  subtitle: string;
  policies: Array<{
    icon: string;
    title: string;
    body: string;
  }>;
};

// ─── Defaults ─────────────────────────────────────────────────────────────────

export const defaultSiteConfig: SiteConfig = {
  professional_name: "Eurymar Bustillo",
  professional_title: "Especialista en Integración Neuro-Motora",
  whatsapp_number: "XXXXXXXXXXX",
};

export const defaultHero: HeroContent = {
  badges: ["100% Online", "Niños 3–16 años", "Adultos"],
  headline_part1: "Integración",
  headline_highlight: "Neuro-Motora",
  headline_part2: "Online",
  subheadline:
    "Programa mensual para niños con reflejos primitivos retenidos · Evaluación funcional para adultos",
  body: "¿Tu hijo tiene dificultades en el aprendizaje, la coordinación o la atención? Los reflejos primitivos retenidos pueden ser la causa. Eurymar Bustillo, especialista en integración neuro-motora, diseña programas personalizados 100 % online para liberar el potencial de tu hijo.",
  cta_text: "Escríbeme por WhatsApp →",
  whatsapp_number: "XXXXXXXXXXX",
  image: "",
  profile_name: "Eurymar Bustillo",
  profile_subtitle: "Especialista en Integración Neuro-Motora",
  profile_tags: ["Reflejos primitivos", "Desarrollo infantil"],
};

export const defaultForWho: ForWhoContent = {
  section_tag: "¿Para quién es?",
  title: "Pensado para cada etapa",
  subtitle:
    "El programa se adapta tanto a niños en pleno desarrollo como a adultos que buscan optimizar su bienestar neurológico.",
  ninos: {
    title: "Para niños",
    age_range: "De 3 a 16 años",
    intro:
      "Si tu hijo presenta alguna de estas situaciones, los reflejos primitivos retenidos podrían estar influyendo:",
    items: [
      "Dificultades en el aprendizaje (lectura, escritura, matemáticas)",
      "Déficit de atención o hiperactividad (TDAH)",
      "Problemas de coordinación y equilibrio",
      "Torpeza motora o dificultad con el deporte",
      "Retraso en el habla o lenguaje",
      "Hipersensibilidad sensorial",
      "Dislexia, disgrafía o discalculia",
    ],
  },
  adultos: {
    title: "Para adultos",
    age_range: "Sin límite de edad",
    intro:
      "Los reflejos primitivos también afectan en la edad adulta. El programa de evaluación funcional te ayuda con:",
    items: [
      "Tensión crónica o dolor postural",
      "Dificultades de concentración o estrés sostenido",
      "Recuperación funcional tras lesiones",
      "Optimización del rendimiento deportivo o laboral",
      "Búsqueda de bienestar neurológico general",
    ],
    note: "💡 La evaluación funcional para adultos identifica patrones de movimiento compensatorios y diseña un plan de integración adaptado.",
  },
};

export const defaultHowItWorks: HowItWorksContent = {
  section_tag: "El proceso",
  title: "Cómo funciona",
  subtitle:
    "Un proceso estructurado y medible, diseñado para adaptarse a cada caso y lograr resultados reales.",
  steps: [
    {
      number: "01",
      title: "Evaluación",
      description:
        "Entrevista inicial + vídeo de movimiento. Identificamos los reflejos activos y su impacto en el desarrollo.",
    },
    {
      number: "02",
      title: "Plan personalizado",
      description:
        "Diseño de un programa específico con ejercicios diarios de 10–20 minutos adaptados a la edad y necesidades.",
    },
    {
      number: "03",
      title: "Seguimiento",
      description:
        "Revisión de progreso, ajuste de ejercicios y soporte continuo vía mensajería o videollamada semanal.",
    },
    {
      number: "04",
      title: "Reevaluación",
      description:
        "Medimos el avance, celebramos los logros y actualizamos el plan para el siguiente mes.",
    },
  ],
};

export const defaultPlans: PlansContent = {
  section_tag: "Planes",
  title: "Encuentra tu plan",
  subtitle:
    "Todos los planes incluyen evaluación inicial y programa personalizado. Consulta precios directamente por WhatsApp.",
  plans: [
    {
      name: "Premium",
      tagline: "Máximo acompañamiento",
      description:
        "Para familias que quieren el mayor nivel de seguimiento y atención personalizada en cada paso del proceso.",
      features: [
        "Evaluación completa inicial",
        "Plan personalizado mensual",
        "Seguimiento diario por mensajería",
        "Revisiones semanales por videollamada",
        "Acceso prioritario a sesiones en vivo",
        "Biblioteca de vídeos de ejercicios",
        "Informes de progreso mensuales",
      ],
      highlighted: true,
      badge: "⭐ Más completo",
      whatsapp_number: "XXXXXXXXXXX",
      cta_text: "Consultar por WhatsApp",
    },
    {
      name: "Supervisado",
      tagline: "Equilibrio ideal",
      description:
        "El plan más elegido. Evaluación, programa personalizado y revisión semanal por videollamada.",
      features: [
        "Evaluación completa inicial",
        "Plan personalizado mensual",
        "Revisión semanal por videollamada",
        "Soporte por mensajería",
        "Biblioteca de vídeos de ejercicios",
      ],
      highlighted: false,
      badge: "👍 Más popular",
      whatsapp_number: "XXXXXXXXXXX",
      cta_text: "Consultar por WhatsApp",
    },
    {
      name: "8 Semanas",
      tagline: "Programa intensivo",
      description:
        "Programa estructurado de 8 semanas. Ideal para empezar con una base sólida y ver resultados rápido.",
      features: [
        "Evaluación inicial completa",
        "Plan estructurado de 8 semanas",
        "Revisión a mitad de programa (semana 4)",
        "Evaluación final de cierre",
        "Biblioteca de vídeos de ejercicios",
      ],
      highlighted: false,
      badge: "",
      whatsapp_number: "XXXXXXXXXXX",
      cta_text: "Consultar por WhatsApp",
    },
    {
      name: "Mantenimiento",
      tagline: "Para seguir progresando",
      description:
        "Para familias que ya completaron un programa y quieren continuar con apoyo mensual.",
      features: [
        "Reevaluación mensual",
        "Actualización del plan de ejercicios",
        "Revisión mensual por videollamada",
        "Soporte por mensajería",
      ],
      highlighted: false,
      badge: "",
      whatsapp_number: "XXXXXXXXXXX",
      cta_text: "Consultar por WhatsApp",
    },
  ],
};

export const defaultWhatsAppContact: WhatsAppContactContent = {
  title: "¿Tienes dudas? Escríbeme directamente",
  body: "Sin compromiso. Cuéntame la situación de tu hijo o tu caso y te oriento sin coste. Respondo personalmente a cada mensaje.",
  cta_text: "Abrir WhatsApp",
  whatsapp_number: "XXXXXXXXXXX",
  response_time: "Tiempo de respuesta habitual: menos de 24 horas",
};

export const defaultFAQ: FAQContent = {
  section_tag: "Preguntas frecuentes",
  title: "Resolvemos tus dudas",
  subtitle:
    "Si tienes alguna pregunta que no está aquí, escríbeme directamente por WhatsApp.",
  items: [
    {
      question: "¿Qué son los reflejos primitivos retenidos?",
      answer:
        "Son reflejos automáticos presentes desde el nacimiento que deberían integrarse (desaparecer) en los primeros años de vida. Cuando persisten más allá de la infancia, interfieren con el aprendizaje, la atención, la coordinación y el comportamiento. Su integración mediante ejercicios específicos puede mejorar significativamente el desarrollo neurológico.",
    },
    {
      question: "¿A partir de qué edad se puede hacer el programa?",
      answer:
        "El programa para niños está diseñado para edades de 3 a 16 años, aunque podemos valorar casos específicos fuera de ese rango. Para adultos no existe límite de edad; los patrones de movimiento pueden trabajarse en cualquier etapa de la vida.",
    },
    {
      question: "¿Cuánto tiempo tarda en verse resultados?",
      answer:
        "La mayoría de las familias reportan cambios notables entre la 4.ª y la 8.ª semana: mejoras en la concentración, el sueño, la coordinación y el comportamiento en clase. La integración completa es un proceso gradual que depende de cada caso y de la constancia con los ejercicios diarios.",
    },
    {
      question: "¿Necesitamos material especial para los ejercicios?",
      answer:
        "No. Los ejercicios se realizan en casa con una esterilla y el suelo. No se necesita ningún equipo especial ni aparatos. El programa está diseñado para ser accesible y fácil de integrar en la rutina diaria del hogar.",
    },
    {
      question: "¿Las sesiones son en directo o grabadas?",
      answer:
        "El programa combina ambas modalidades: los ejercicios diarios se realizan con vídeos grabados que puedes hacer a vuestro ritmo en casa, y las sesiones de seguimiento y reevaluación son en directo por videollamada, para que pueda observar el movimiento y hacer los ajustes necesarios.",
    },
  ],
};

export const defaultPolicy: PolicyContent = {
  title: "Privacidad y consentimiento",
  subtitle: "Tu confianza y la seguridad de tu familia son nuestra prioridad.",
  policies: [
    {
      icon: "🔒",
      title: "Privacidad",
      body: "Los datos personales se usan exclusivamente para la prestación del servicio y no se comparten con terceros bajo ningún concepto. Cumplimos con el RGPD.",
    },
    {
      icon: "📝",
      title: "Consentimiento informado",
      body: "Al iniciar el programa se firma un consentimiento informado digital que explica el alcance del servicio, la metodología y las condiciones.",
    },
    {
      icon: "🤫",
      title: "Confidencialidad",
      body: "Toda la información clínica, vídeos y datos del usuario son estrictamente confidenciales y se tratan con absoluta discreción profesional.",
    },
  ],
};


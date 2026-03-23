import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      loading: "INITIALIZING",
      name: "OLIVER",
      faces: {
        about: "ABOUT ME",
        work: "PROJECTS",
        skills: "SKILLS",
        contact: "CONTACT",
        education: "EDUCATION",
        experience: "EXPERIENCE"
      },
      aboutContent: {
        title: "About Me",
        text: "Hey! I'm Oliver Megale — a front-end developer with a graphic design soul, based in sunny Tenerife. For 5 years I've been turning ideas into pixel-perfect, interactive experiences. I speak three languages, think in components, and never stop learning. Design meets code in everything I build."
      },
      workContent: {
        title: "Projects",
        items: [
          { name: "[PROJECT — Add your best project]", desc: "[Add a brief description: what it does, tech stack, and your role.]" },
          { name: "[PROJECT — Add another project]", desc: "[Add a brief description: what it does, tech stack, and your role.]" },
          { name: "[PROJECT — Add another project]", desc: "[Add a brief description: what it does, tech stack, and your role.]" }
        ]
      },
      skillsContent: {
        title: "Skills",
        text: "Front-end architecture, responsive design, component-driven UI, design systems, cross-browser optimization, performance tuning, UX/UI sensibility, team leadership, agile workflows."
      },
      contactContent: {
        title: "Contact",
        email: "[your@email.com]",
        github: "[github.com/yourusername]",
        linkedin: "[linkedin.com/in/yourusername]",
        text: "Got a project in mind? Let's build something amazing together. I'm always open to new challenges and collaborations."
      },
      educationContent: {
        title: "Education",
        items: [
          { name: "IT-Focused High School Diploma", desc: "Italy — Computer science specialization with a strong foundation in programming, logic, and systems." },
          { name: "Continuous Learning", desc: "Various online courses and certifications in front-end development, React, TypeScript, and graphic design." }
        ]
      },
      experienceContent: {
        title: "Experience",
        items: [
          { name: "Head Front-End Developer", desc: "Liberi dal Lavoro — Leading the front-end team, architecting scalable React applications, and bridging design with development." },
          { name: "5 Years in the Industry", desc: "From junior to team lead — building everything from landing pages to complex web apps, always pushing the craft forward." }
        ]
      },
      techBubbles: {
        html: { text: "The foundation. Semantic, accessible, clean.", level: 3 },
        css: { text: "Where design comes alive. Animations, layouts, magic.", level: 3 },
        javascript: { text: "My main language. DOM, async, ES6+ — fluent.", level: 3 },
        typescript: { text: "Type-safe code. Fewer bugs, better DX.", level: 2 },
        react: { text: "My daily weapon. Hooks, state, architecture.", level: 3 },
        styledcomp: { text: "CSS-in-JS done right. Scoped, dynamic, elegant.", level: 3 },
        java: { text: "OOP fundamentals. Solid backend awareness.", level: 2 },
        git: { text: "Branching, rebasing, PRs. Clean git history.", level: 3 }
      },
      themeLabel: "THEME",
      langLabel: "LANG",
      clickToExplore: "CLICK A FACE TO EXPLORE",
      backToCube: "BACK",
      enterPortfolio: "ENTER"
    }
  },
  it: {
    translation: {
      loading: "INIZIALIZZAZIONE",
      name: "OLIVER",
      faces: {
        about: "CHI SONO",
        work: "LAVORI",
        skills: "COMPETENZE",
        contact: "CONTATTI",
        education: "FORMAZIONE",
        experience: "ESPERIENZA"
      },
      aboutContent: {
        title: "Chi Sono",
        text: "Ciao! Sono Oliver Megale — sviluppatore front-end con un'anima da graphic designer, basato nella soleggiata Tenerife. Da 5 anni trasformo idee in esperienze interattive pixel-perfect. Parlo tre lingue, penso in componenti e non smetto mai di imparare. Design e codice si incontrano in tutto quello che creo."
      },
      workContent: {
        title: "Lavori",
        items: [
          { name: "[PROGETTO — Aggiungi il tuo miglior progetto]", desc: "[Aggiungi una breve descrizione: cosa fa, tech stack e il tuo ruolo.]" },
          { name: "[PROGETTO — Aggiungi un altro progetto]", desc: "[Aggiungi una breve descrizione: cosa fa, tech stack e il tuo ruolo.]" },
          { name: "[PROGETTO — Aggiungi un altro progetto]", desc: "[Aggiungi una breve descrizione: cosa fa, tech stack e il tuo ruolo.]" }
        ]
      },
      skillsContent: {
        title: "Competenze",
        text: "Architettura front-end, design responsivo, UI component-driven, design system, ottimizzazione cross-browser, performance, sensibilita UX/UI, leadership di team, workflow agile."
      },
      contactContent: {
        title: "Contatti",
        email: "[tua@email.com]",
        github: "[github.com/tuousername]",
        linkedin: "[linkedin.com/in/tuousername]",
        text: "Hai un progetto in mente? Costruiamo qualcosa di straordinario insieme. Sono sempre aperto a nuove sfide e collaborazioni."
      },
      educationContent: {
        title: "Formazione",
        items: [
          { name: "Diploma Superiore Indirizzo Informatico", desc: "Italia — Specializzazione in informatica con solide basi in programmazione, logica e sistemi." },
          { name: "Formazione Continua", desc: "Vari corsi online e certificazioni in sviluppo front-end, React, TypeScript e graphic design." }
        ]
      },
      experienceContent: {
        title: "Esperienza",
        items: [
          { name: "Head Front-End Developer", desc: "Liberi dal Lavoro — Guida del team front-end, architettura di applicazioni React scalabili e ponte tra design e sviluppo." },
          { name: "5 Anni nel Settore", desc: "Da junior a team lead — costruendo di tutto, dalle landing page alle web app complesse, spingendo sempre il craft avanti." }
        ]
      },
      techBubbles: {
        html: { text: "La base. Semantico, accessibile, pulito.", level: 3 },
        css: { text: "Dove il design prende vita. Animazioni, layout, magia.", level: 3 },
        javascript: { text: "Il mio linguaggio principale. DOM, async, ES6+ — fluente.", level: 3 },
        typescript: { text: "Codice type-safe. Meno bug, migliore DX.", level: 2 },
        react: { text: "La mia arma quotidiana. Hooks, state, architettura.", level: 3 },
        styledcomp: { text: "CSS-in-JS fatto bene. Scopato, dinamico, elegante.", level: 3 },
        java: { text: "Fondamenti OOP. Solida consapevolezza backend.", level: 2 },
        git: { text: "Branching, rebasing, PR. Storico git pulito.", level: 3 }
      },
      themeLabel: "TEMA",
      langLabel: "LINGUA",
      clickToExplore: "CLICCA UNA FACCIA PER ESPLORARE",
      backToCube: "INDIETRO",
      enterPortfolio: "ENTRA"
    }
  },
  es: {
    translation: {
      loading: "INICIALIZANDO",
      name: "OLIVER",
      faces: {
        about: "SOBRE MI",
        work: "PROYECTOS",
        skills: "HABILIDADES",
        contact: "CONTACTO",
        education: "EDUCACION",
        experience: "EXPERIENCIA"
      },
      aboutContent: {
        title: "Sobre Mi",
        text: "Hola! Soy Oliver Megale — desarrollador front-end con alma de disenador grafico, basado en la soleada Tenerife. Llevo 5 anos transformando ideas en experiencias interactivas pixel-perfect. Hablo tres idiomas, pienso en componentes y nunca dejo de aprender. Diseno y codigo se encuentran en todo lo que construyo."
      },
      workContent: {
        title: "Proyectos",
        items: [
          { name: "[PROYECTO — Anade tu mejor proyecto]", desc: "[Anade una breve descripcion: que hace, tech stack y tu rol.]" },
          { name: "[PROYECTO — Anade otro proyecto]", desc: "[Anade una breve descripcion: que hace, tech stack y tu rol.]" },
          { name: "[PROYECTO — Anade otro proyecto]", desc: "[Anade una breve descripcion: que hace, tech stack y tu rol.]" }
        ]
      },
      skillsContent: {
        title: "Habilidades",
        text: "Arquitectura front-end, diseno responsivo, UI basada en componentes, design systems, optimizacion cross-browser, rendimiento, sensibilidad UX/UI, liderazgo de equipo, flujos agiles."
      },
      contactContent: {
        title: "Contacto",
        email: "[tu@email.com]",
        github: "[github.com/tuusuario]",
        linkedin: "[linkedin.com/in/tuusuario]",
        text: "Tienes un proyecto en mente? Construyamos algo increible juntos. Siempre estoy abierto a nuevos retos y colaboraciones."
      },
      educationContent: {
        title: "Educacion",
        items: [
          { name: "Bachillerato en Informatica", desc: "Italia — Especializacion en informatica con una solida base en programacion, logica y sistemas." },
          { name: "Aprendizaje Continuo", desc: "Varios cursos online y certificaciones en desarrollo front-end, React, TypeScript y diseno grafico." }
        ]
      },
      experienceContent: {
        title: "Experiencia",
        items: [
          { name: "Head Front-End Developer", desc: "Liberi dal Lavoro — Liderando el equipo front-end, arquitectando aplicaciones React escalables y conectando diseno con desarrollo." },
          { name: "5 Anos en la Industria", desc: "De junior a team lead — construyendo de todo, desde landing pages hasta web apps complejas, siempre empujando el oficio hacia adelante." }
        ]
      },
      techBubbles: {
        html: { text: "La base. Semantico, accesible, limpio.", level: 3 },
        css: { text: "Donde el diseno cobra vida. Animaciones, layouts, magia.", level: 3 },
        javascript: { text: "Mi lenguaje principal. DOM, async, ES6+ — fluido.", level: 3 },
        typescript: { text: "Codigo type-safe. Menos bugs, mejor DX.", level: 2 },
        react: { text: "Mi arma diaria. Hooks, state, arquitectura.", level: 3 },
        styledcomp: { text: "CSS-in-JS bien hecho. Aislado, dinamico, elegante.", level: 3 },
        java: { text: "Fundamentos OOP. Solida conciencia backend.", level: 2 },
        git: { text: "Branching, rebasing, PRs. Historial git limpio.", level: 3 }
      },
      themeLabel: "TEMA",
      langLabel: "IDIOMA",
      clickToExplore: "CLIC EN UNA CARA PARA EXPLORAR",
      backToCube: "VOLVER",
      enterPortfolio: "ENTRAR"
    }
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n

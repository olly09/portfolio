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
        text: "[PLACEHOLDER — Write a short bio about yourself, your passions, and what drives you as a developer.]"
      },
      workContent: {
        title: "Projects",
        items: [
          { name: "[Project Name 1]", desc: "[PLACEHOLDER — Brief description of the project, tech used, and your role.]" },
          { name: "[Project Name 2]", desc: "[PLACEHOLDER — Brief description of the project, tech used, and your role.]" },
          { name: "[Project Name 3]", desc: "[PLACEHOLDER — Brief description of the project, tech used, and your role.]" }
        ]
      },
      skillsContent: {
        title: "Skills",
        text: "[PLACEHOLDER — List your core technical and soft skills here.]"
      },
      contactContent: {
        title: "Contact",
        email: "[PLACEHOLDER — your@email.com]",
        github: "[PLACEHOLDER — github.com/yourusername]",
        linkedin: "[PLACEHOLDER — linkedin.com/in/yourusername]",
        text: "[PLACEHOLDER — Add a message inviting people to reach out.]"
      },
      educationContent: {
        title: "Education",
        items: [
          { name: "[Degree / Course 1]", desc: "[PLACEHOLDER — Institution, year, and brief description.]" },
          { name: "[Degree / Course 2]", desc: "[PLACEHOLDER — Institution, year, and brief description.]" }
        ]
      },
      experienceContent: {
        title: "Experience",
        items: [
          { name: "[Job Title 1]", desc: "[PLACEHOLDER — Company, period, and brief description of your role.]" },
          { name: "[Job Title 2]", desc: "[PLACEHOLDER — Company, period, and brief description of your role.]" }
        ]
      },
      techBubbles: {
        react: "[PLACEHOLDER — Your React experience and skill level]",
        javascript: "[PLACEHOLDER — Your JavaScript experience and skill level]",
        typescript: "[PLACEHOLDER — Your TypeScript experience and skill level]",
        nodejs: "[PLACEHOLDER — Your Node.js experience and skill level]",
        python: "[PLACEHOLDER — Your Python experience and skill level]",
        css: "[PLACEHOLDER — Your CSS/Styling experience and skill level]",
        git: "[PLACEHOLDER — Your Git experience and skill level]",
        docker: "[PLACEHOLDER — Your Docker experience and skill level]",
        sql: "[PLACEHOLDER — Your SQL/Database experience and skill level]",
        threejs: "[PLACEHOLDER — Your Three.js experience and skill level]"
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
        text: "[SEGNAPOSTO — Scrivi una breve bio su di te, le tue passioni e cosa ti motiva come sviluppatore.]"
      },
      workContent: {
        title: "Lavori",
        items: [
          { name: "[Nome Progetto 1]", desc: "[SEGNAPOSTO — Breve descrizione del progetto, tecnologie usate e il tuo ruolo.]" },
          { name: "[Nome Progetto 2]", desc: "[SEGNAPOSTO — Breve descrizione del progetto, tecnologie usate e il tuo ruolo.]" },
          { name: "[Nome Progetto 3]", desc: "[SEGNAPOSTO — Breve descrizione del progetto, tecnologie usate e il tuo ruolo.]" }
        ]
      },
      skillsContent: {
        title: "Competenze",
        text: "[SEGNAPOSTO — Elenca le tue competenze tecniche e trasversali qui.]"
      },
      contactContent: {
        title: "Contatti",
        email: "[SEGNAPOSTO — tua@email.com]",
        github: "[SEGNAPOSTO — github.com/tuousername]",
        linkedin: "[SEGNAPOSTO — linkedin.com/in/tuousername]",
        text: "[SEGNAPOSTO — Aggiungi un messaggio che inviti le persone a contattarti.]"
      },
      educationContent: {
        title: "Formazione",
        items: [
          { name: "[Titolo / Corso 1]", desc: "[SEGNAPOSTO — Istituto, anno e breve descrizione.]" },
          { name: "[Titolo / Corso 2]", desc: "[SEGNAPOSTO — Istituto, anno e breve descrizione.]" }
        ]
      },
      experienceContent: {
        title: "Esperienza",
        items: [
          { name: "[Ruolo 1]", desc: "[SEGNAPOSTO — Azienda, periodo e breve descrizione del ruolo.]" },
          { name: "[Ruolo 2]", desc: "[SEGNAPOSTO — Azienda, periodo e breve descrizione del ruolo.]" }
        ]
      },
      techBubbles: {
        react: "[SEGNAPOSTO — La tua esperienza con React]",
        javascript: "[SEGNAPOSTO — La tua esperienza con JavaScript]",
        typescript: "[SEGNAPOSTO — La tua esperienza con TypeScript]",
        nodejs: "[SEGNAPOSTO — La tua esperienza con Node.js]",
        python: "[SEGNAPOSTO — La tua esperienza con Python]",
        css: "[SEGNAPOSTO — La tua esperienza con CSS/Styling]",
        git: "[SEGNAPOSTO — La tua esperienza con Git]",
        docker: "[SEGNAPOSTO — La tua esperienza con Docker]",
        sql: "[SEGNAPOSTO — La tua esperienza con SQL/Database]",
        threejs: "[SEGNAPOSTO — La tua esperienza con Three.js]"
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
        text: "[MARCADOR — Escribe una breve bio sobre ti, tus pasiones y lo que te motiva como desarrollador.]"
      },
      workContent: {
        title: "Proyectos",
        items: [
          { name: "[Nombre Proyecto 1]", desc: "[MARCADOR — Breve descripcion del proyecto, tecnologias usadas y tu rol.]" },
          { name: "[Nombre Proyecto 2]", desc: "[MARCADOR — Breve descripcion del proyecto, tecnologias usadas y tu rol.]" },
          { name: "[Nombre Proyecto 3]", desc: "[MARCADOR — Breve descripcion del proyecto, tecnologias usadas y tu rol.]" }
        ]
      },
      skillsContent: {
        title: "Habilidades",
        text: "[MARCADOR — Lista tus habilidades tecnicas y blandas aqui.]"
      },
      contactContent: {
        title: "Contacto",
        email: "[MARCADOR — tu@email.com]",
        github: "[MARCADOR — github.com/tuusuario]",
        linkedin: "[MARCADOR — linkedin.com/in/tuusuario]",
        text: "[MARCADOR — Agrega un mensaje invitando a contactarte.]"
      },
      educationContent: {
        title: "Educacion",
        items: [
          { name: "[Titulo / Curso 1]", desc: "[MARCADOR — Institucion, año y breve descripcion.]" },
          { name: "[Titulo / Curso 2]", desc: "[MARCADOR — Institucion, año y breve descripcion.]" }
        ]
      },
      experienceContent: {
        title: "Experiencia",
        items: [
          { name: "[Puesto 1]", desc: "[MARCADOR — Empresa, periodo y breve descripcion del rol.]" },
          { name: "[Puesto 2]", desc: "[MARCADOR — Empresa, periodo y breve descripcion del rol.]" }
        ]
      },
      techBubbles: {
        react: "[MARCADOR — Tu experiencia con React]",
        javascript: "[MARCADOR — Tu experiencia con JavaScript]",
        typescript: "[MARCADOR — Tu experiencia con TypeScript]",
        nodejs: "[MARCADOR — Tu experiencia con Node.js]",
        python: "[MARCADOR — Tu experiencia con Python]",
        css: "[MARCADOR — Tu experiencia con CSS/Styling]",
        git: "[MARCADOR — Tu experiencia con Git]",
        docker: "[MARCADOR — Tu experiencia con Docker]",
        sql: "[MARCADOR — Tu experiencia con SQL/Database]",
        threejs: "[MARCADOR — Tu experiencia con Three.js]"
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

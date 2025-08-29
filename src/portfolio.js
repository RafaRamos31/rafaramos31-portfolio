/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Rafa Ramos",
  title: "Mucho gusto, soy Rafa",
  subTitle: emoji(
    "Tengo experiencia en la creación de aplicaciónes con React.js y Laravel, asi como Dashboards y visualización de datos. Me preocupo por la creación de software adaptado a las necesidades y presupuesto del cliente."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ZPHXG4fbDP5D5Rd2sXJvcq8nLSvqt8s_/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/RafaRamos31",
  linkedin: "https://www.linkedin.com/in/rafael-antonio-ramos-9a3a1a213/",
  gmail: "rafaelramos19972@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "¿A qué me dedico?",
  subTitle: "Desde lenguajes de programación hasta macros en Excel, pasando por Bases de Datos y formularios multiplataforma. Donde se puede aplicar lógica, es una oportunidad para crear algo útil. 💡",
  skills: [
    emoji(
      "⚡ Desarrollo de aplicaciones web con JavaScript (ReactJS, NodeJS y ExpressJS) y PHP (Laravel)"
    ),
    emoji("⚡ Creación y administración de bases de datos SQL y NoSQL"),
    emoji(
      "⚡ Integraciones de terceros, servicios en la nube y software para formularios y visualización de datos"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Universidad Nacional Autónoma de Honduras",
      logo: require("./assets/images/unahLogo.png"),
      subHeader: "Ingeniero en Sistemas",
      duration: "2019 - 2024",
      desc: "Enfoque recibido en Administración de Sistemas Informáticos, Auditoria Informática y Ciberseguridad.",
      descBullets: [
        "Participación activa en proyectos de desarrollo de software",
        "Colaboración con otras universidades en proyectos de investigación",
      ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend y Bases de datos", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Formularios, Dashboards y Visualización de datos",
      progressPercentage: "70%"
    },
    {
      Stack: "Frontend y UX/UI",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Técnico de Monitoreo y Evaluación, Desarrollador de Software",
      company: "JSI / USAID / Feed the Future",
      companylogo: require("./assets/images/usaidLogo.png"),
      date: "Junio 2023 – Febrero 2025",
      desc: "Asistencia técnica en la implementación de sistemas de monitoreo y evaluación para proyecto de seguridad alimentaria. Desarrollo de aplicaciones web y móviles para la recolección y análisis de datos.",
      descBullets: [
        "Seguimiento y recolección de datos de indicadores de seguridad alimentaria.",
        "Creación de herramientas para facilitar la recolección de datos en campo.",
        "Desarrollo de software para la visualización y análisis de datos.",
        "Colaboración con equipos multidisciplinarios para mejorar la eficiencia de los procesos de monitoreo y evaluación.",
        "Trabajo conjunto con personal del gobierno y organizaciones locales en temas de monitoreo, recolección de información y uso de tecnología."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Mis Creaciones",
  subtitle: "Algunos de los proyectos más destacados en los que he trabajado.",
  projects: [
    {
      image: require("./assets/images/torresHanoi.png"),
      projectName: "Torres de Hanoi",
      projectDesc: "De los primeros proyectos que hice como parte de mi formación académica, desarrollado en C++, un juego de lógica que consiste en mover discos entre torres.",
      footerLink: [
        {
          name: "Descargar ejecutable en Google Drive",
          url: "https://drive.google.com/file/d/19oFZdyiPGRUfeKnB9PhhGnbBjybBez9z/view?usp=sharing"
        }
      ]
    },
    {
      image: require("./assets/images/webRegional.png"),
      projectName: "Sitio Web para las Regiones Sanitarias Departamentales de Honduras",
      projectDesc: "Un sitio web desarrollado para las regiones sanitarias departamentales de Honduras, con el objetivo de dar una herramienta para la gestión de información, almacenamiento de archivos y publicidad para el sector salud nacional.",
      footerLink: [
        {
          name: "Ver Sitio Web",
          url: "https://preview-website-chi.vercel.app/"
        }
      ]
    },
    {
      image: require("./assets/images/tableauRedian.png"),
      projectName: "Dashboard de Tableau - Análisis de Datos de Datos de Nutrición Infantil",
      projectDesc: "Un dashboard interactivo desarrollado en Tableau para visualizar y analizar datos del Registro Digital de Actividades de Nutrición (REDI-AN), implementado en 6 Gestores de Salud de Honduras por el proyecto USAID/FTF.",
      footerLink: [
        {
          name: "Ver Sitio Web",
          url: "https://public.tableau.com/views/REDI-ANGestorMacuelizo_17298056040400/TableroIndicadores1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
        }
      ]
    },
    {
      image: require("./assets/images/indicadoresView.png"),
      projectName: "Sistema de Monitoreo y Evaluación - Módulo de Seguimiento de Indicadores",
      projectDesc: "Un sistema desarrollado para la gestión de actividades, indicadores y resultados del proyecto, el módulo se seguimiento de indicadores permite visualizar el avance de los indicadores de seguridad alimentaria y nutricional.",
      footerLink: [
        {
          name: "Ver Sitio Web",
          url: "https://indicadores-dashboard.vercel.app/"
        }
      ]
    },
    {
      image: require("./assets/images/kanbanView.png"),
      projectName: "Sistema de Monitoreo y Evaluación - Módulo de Planificación de Actividades",
      projectDesc: "El modulo de planificación de actividades permite a los usuarios planificar y gestionar las actividades del proyecto, establecer estados de ejecución y reportar avances por medio de un tablero Kanban, donde pueden arrastrar elementos (Drag N Drop).",
      footerLink: [
        {
          name: "Ver Sitio Web",
          url: "https://tareas-panel.vercel.app/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certificaciones"),

  achievementsCards: [
    {
      title: "FreeCodeCamp - Responsive Web Design",
      subtitle:
        "Conceptos de HTML, CSS y diseño responsivo.",
      image: require("./assets/images/freeCodeCampLogo.png"),
      imageAlt: "FreeCodeCamp Logo",
      footerLink: [
        {
          name: "Certificado",
          url: "https://www.freecodecamp.org/certification/RafaRamos31/responsive-web-design"
        }
      ]
    },
    {
      title: "FreeCodeCamp - JavaScript Algorithms and Data Structures",
      subtitle:
        "Fundamentos de JavaScript, Algoritmos y Estructuras de Datos, incluyendo ES6, Objetos, Arreglos y Algoritmos de Búsqueda y Ordenamiento.",
      image: require("./assets/images/freeCodeCampLogo.png"),
      imageAlt: "FreeCodeCamp Logo",
      footerLink: [
        {
          name: "Certificado",
          url: "https://www.freecodecamp.org/certification/RafaRamos31/javascript-algorithms-and-data-structures"
        }
      ]
    },

    {
      title: "Udemy - Docker & Kubernetes: The Practical Guide",
      subtitle: "Curso completo sobre Docker y Kubernetes, cubriendo desde la creación de contenedores hasta la orquestación de aplicaciones en producción.",
      image: require("./assets/images/dockerCourse.webp"),
      imageAlt: "Docker Course",
      footerLink: [
        {
          name: "Certificado",
          url: "https://www.udemy.com/certificate/UC-7eb2f36a-8c15-4305-97cf-fd8cc3983cc8/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contacto"),
  subtitle:
    "¡Gracias por llegar hasta aquí! Si tienes alguna pregunta, duda o simplemente quieres charlar, no dudes en contactarme. Estoy aquí para ayudarte y compartir ideas.",
  number: "(+504) 9628-8276",
  email_address: "rafaelramos19972@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

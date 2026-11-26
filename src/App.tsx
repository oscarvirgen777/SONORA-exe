
import { useState } from 'react'
import {
  Sun,
  Moon,
  Code2,
  MapPin,
  Terminal,
  Database,
  Globe,
  Server,
  Cpu,
  GitBranch,
} from 'lucide-react'
import heroImage from './assets/sonora-hero.png'

function App() {
  const [language, setLanguage] = useState<'es' | 'en'>(() => {
    if (typeof navigator !== 'undefined') {
      return navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en'
    }
    return 'es'
  })

  const [darkMode, setDarkMode] = useState(true)

  const email = 'oscarcomputer666@gmail.com'
  const currentYear = new Date().getFullYear()

  const translations = {
    es: {
      navAbout: 'Sobre mí',
      navProjects: 'Proyectos',
      navStack: 'Tecnologías',
      navContact: 'Contacto',

      heroGreeting: 'HOLA, SOY DESARROLLADOR EN FORMACIÓN',
      heroTitle: 'Construyendo el futuro desde el desierto.',
      heroDescription:
        'Un espacio donde la tecnología, la creatividad y las raíces de Sonora se encuentran.',
      heroLocation: 'Ciudad Obregón, Sonora, México',
      heroButton: 'Conoce mi trabajo',
      heroSecondary: 'Explorar proyectos',
      terminalTitle: 'sistema.iniciado',
      terminalLine1: 'Desarrollador en formación',
      terminalLine2: 'Construyendo nuevas ideas...',

      aboutLabel: '02 // SOBRE MÍ',
      aboutTitle: 'Tecnología con identidad.',
      aboutDescription:
        'Soy una persona interesada en el desarrollo de software y en crear soluciones que tengan un propósito. Actualmente estoy aprendiendo y fortaleciendo mis conocimientos en desarrollo web, programación y bases de datos.',
      aboutDescription2:
        'Me gusta enfrentar nuevos retos, aprender de mis errores y convertir cada proyecto en una oportunidad para mejorar.',
      aboutLocation: 'Originario de Sonora, México',
      aboutStatus: 'Siempre aprendiendo',
      aboutTerminal: 'perfil.dev',
      aboutTerminalLine1: 'Aprendiendo constantemente',
      aboutTerminalLine2: 'Explorando nuevas tecnologías',
      aboutTerminalLine3: 'Creando proyectos',

      projectsLabel: '03 // PROYECTOS',
      projectsTitle: 'Cosas que estoy construyendo.',
      projectsDescription:
        'Una selección de proyectos y ejercicios que forman parte de mi camino como desarrollador.',
      projectStatus: 'EN DESARROLLO',
      projectTech: 'TECNOLOGÍAS',
      projectItems: [
        {
          number: '001',
          title: 'API de gestión de pacientes',
          description:
            'Proyecto backend enfocado en la administración de pacientes y el manejo de información mediante endpoints.',
          technologies: ['NestJS', 'TypeScript', 'Prisma', 'PostgreSQL'],
        },
        {
          number: '002',
          title: 'Sistema de libros y préstamos',
          description:
            'Sistema para trabajar con libros y préstamos, aplicando relaciones entre modelos y operaciones de base de datos.',
          technologies: ['NestJS', 'TypeScript', 'Prisma'],
        },
        {
          number: '003',
          title: 'Historial de visitas',
          description:
            'Módulo orientado al registro y consulta de historiales de visitas utilizando herramientas del ecosistema TypeScript.',
          technologies: ['TypeScript', 'Prisma'],
        },
      ],

      stackLabel: '04 // STACK TECNOLÓGICO',
      stackTitle: 'Herramientas para crear.',
      stackDescription:
        'Tecnologías con las que he trabajado, estoy practicando y continúo aprendiendo.',
      stackGroups: [
        {
          title: 'Frontend',
          description: 'Interfaces y experiencias web',
          items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS'],
        },
        {
          title: 'Backend',
          description: 'Lógica y desarrollo de APIs',
          items: ['Node.js', 'NestJS', 'TypeScript'],
        },
        {
          title: 'Bases de datos',
          description: 'Almacenamiento y gestión de información',
          items: ['PostgreSQL', 'Prisma ORM'],
        },
        {
          title: 'Herramientas',
          description: 'Flujo de trabajo y desarrollo',
          items: ['Git', 'GitHub', 'Visual Studio Code'],
        },
      ],
      stackNote:
        'Mi stack sigue evolucionando. Estas tecnologías representan herramientas que he utilizado o que estoy explorando durante mi aprendizaje.',

      contactLabel: '05 // CONTACTO',
      contactTitle: '¿Construimos algo juntos?',
      contactDescription:
        'Estoy abierto a conocer personas, aprender de nuevos proyectos y explorar oportunidades para seguir creciendo en el mundo del desarrollo de software.',
      contactEmailTitle: 'ESCRÍBEME',
      contactEmailDescription: 'Puedes contactarme directamente por correo electrónico.',
      contactButton: 'Enviar un correo',
      contactAvailability: 'Disponible para conversar y aprender',

      footerText: 'Hecho con código y un poco de esencia sonorense.',
      footerBack: 'VOLVER ARRIBA',
      footerNavigation: 'NAVEGACIÓN',
      footerContact: 'CONTACTO',
      footerRights: 'Todos los derechos reservados.',
    },

    en: {
      navAbout: 'About me',
      navProjects: 'Projects',
      navStack: 'Technologies',
      navContact: 'Contact',

      heroGreeting: "HELLO, I'M A DEVELOPER IN TRAINING",
      heroTitle: 'Building the future from the desert.',
      heroDescription:
        'A place where technology, creativity and Sonoran roots come together.',
      heroLocation: 'Ciudad Obregón, Sonora, Mexico',
      heroButton: 'Discover my work',
      heroSecondary: 'Explore projects',
      terminalTitle: 'system.started',
      terminalLine1: 'Developer in training',
      terminalLine2: 'Building new ideas...',

      aboutLabel: '02 // ABOUT ME',
      aboutTitle: 'Technology with identity.',
      aboutDescription:
        'I am interested in software development and creating solutions with a purpose. I am currently learning and strengthening my knowledge of web development, programming and databases.',
      aboutDescription2:
        'I enjoy facing new challenges, learning from mistakes and turning every project into an opportunity to improve.',
      aboutLocation: 'From Sonora, Mexico',
      aboutStatus: 'Always learning',
      aboutTerminal: 'profile.dev',
      aboutTerminalLine1: 'Constantly learning',
      aboutTerminalLine2: 'Exploring new technologies',
      aboutTerminalLine3: 'Building projects',

      projectsLabel: '03 // PROJECTS',
      projectsTitle: 'Things I am building.',
      projectsDescription:
        'A selection of projects and exercises that are part of my journey as a developer.',
      projectStatus: 'IN DEVELOPMENT',
      projectTech: 'TECHNOLOGIES',
      projectItems: [
        {
          number: '001',
          title: 'Patient Management API',
          description:
            'Backend project focused on patient management and handling information through endpoints.',
          technologies: ['NestJS', 'TypeScript', 'Prisma', 'PostgreSQL'],
        },
        {
          number: '002',
          title: 'Books and Loans System',
          description:
            'A system for working with books and loans, applying model relationships and database operations.',
          technologies: ['NestJS', 'TypeScript', 'Prisma'],
        },
        {
          number: '003',
          title: 'Visit History',
          description:
            'A module designed to register and consult visit histories using tools from the TypeScript ecosystem.',
          technologies: ['TypeScript', 'Prisma'],
        },
      ],

      stackLabel: '04 // TECHNOLOGY STACK',
      stackTitle: 'Tools to create.',
      stackDescription:
        'Technologies I have worked with, am practicing and continue to learn.',
      stackGroups: [
        {
          title: 'Frontend',
          description: 'Web interfaces and experiences',
          items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS'],
        },
        {
          title: 'Backend',
          description: 'Logic and API development',
          items: ['Node.js', 'NestJS', 'TypeScript'],
        },
        {
          title: 'Databases',
          description: 'Information storage and management',
          items: ['PostgreSQL', 'Prisma ORM'],
        },
        {
          title: 'Tools',
          description: 'Development workflow and tools',
          items: ['Git', 'GitHub', 'Visual Studio Code'],
        },
      ],
      stackNote:
        'My stack is constantly evolving. These technologies represent tools I have used or am exploring throughout my learning journey.',

      contactLabel: '05 // CONTACT',
      contactTitle: 'Shall we build something together?',
      contactDescription:
        'I am open to meeting people, learning from new projects and exploring opportunities to keep growing in software development.',
      contactEmailTitle: 'GET IN TOUCH',
      contactEmailDescription: 'You can contact me directly by email.',
      contactButton: 'Send an email',
      contactAvailability: 'Open to conversations and learning',

      footerText: 'Made with code and a little Sonoran spirit.',
      footerBack: 'BACK TO TOP',
      footerNavigation: 'NAVIGATION',
      footerContact: 'CONTACT',
      footerRights: 'All rights reserved.',
    },
  }

  const t = translations[language]

  const stackIcons = [Globe, Server, Database, GitBranch]

  const stackColors: Record<string, string> = {
    HTML: 'border-orange-500/30 text-orange-400',
    CSS: 'border-blue-500/30 text-blue-400',
    JavaScript: 'border-yellow-500/30 text-yellow-400',
    TypeScript: 'border-blue-500/30 text-blue-400',
    React: 'border-cyan-500/30 text-cyan-400',
    'Tailwind CSS': 'border-teal-500/30 text-teal-400',
    'Node.js': 'border-green-500/30 text-green-400',
    NestJS: 'border-red-500/30 text-red-400',
    PostgreSQL: 'border-sky-500/30 text-sky-400',
    'Prisma ORM': 'border-violet-500/30 text-violet-400',
    Git: 'border-orange-500/30 text-orange-400',
    GitHub: 'border-gray-500/30 text-gray-400',
    'Visual Studio Code': 'border-blue-500/30 text-blue-400',
  }

  return (
    <main
      className={`min-h-screen overflow-hidden transition-colors duration-700 ${
        darkMode
          ? 'bg-[#080d13] text-white'
          : 'bg-[#f5f7fa] text-slate-900'
      }`}
    >
      {/* NAVBAR */}
      <header
        className={`fixed top-0 z-50 w-full border-b backdrop-blur-xl transition-colors duration-700 ${
          darkMode
            ? 'border-white/10 bg-[#080d13]/80'
            : 'border-slate-200 bg-white/80'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="#inicio" className="flex items-center gap-2">
            <Terminal className="h-6 w-6 text-orange-500" />
            <span className="text-xl font-black tracking-wider">
              SONORA<span className="text-orange-500">.exe</span>
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#sobre-mi" className="text-sm transition-colors hover:text-orange-500">
              {t.navAbout}
            </a>
            <a href="#proyectos" className="text-sm transition-colors hover:text-orange-500">
              {t.navProjects}
            </a>
            <a href="#tecnologias" className="text-sm transition-colors hover:text-orange-500">
              {t.navStack}
            </a>
            <a href="#contacto" className="text-sm transition-colors hover:text-orange-500">
              {t.navContact}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
              className={`rounded-full border px-3 py-2 text-xs font-bold transition ${
                darkMode
                  ? 'border-white/20 hover:border-orange-500'
                  : 'border-slate-300 hover:border-orange-500'
              }`}
            >
              {language.toUpperCase()}
            </button>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`rounded-full border p-2 transition ${
                darkMode
                  ? 'border-white/20 hover:border-orange-500'
                  : 'border-slate-300 hover:border-orange-500'
              }`}
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <Sun className="h-4 w-4 text-orange-400" />
              ) : (
                <Moon className="h-4 w-4 text-slate-700" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* 01 // HERO */}
      <section
        id="inicio"
        className="relative flex min-h-screen items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-[2000ms]"
          style={{
            backgroundImage: `url(${heroImage})`,
            filter: darkMode
              ? 'brightness(0.42) saturate(0.85) contrast(1.1) hue-rotate(8deg)'
              : 'brightness(1) saturate(1.05) contrast(1)',
            transform: darkMode ? 'scale(1.04)' : 'scale(1)',
          }}
        />

        <div
          className={`absolute inset-0 transition-opacity duration-[2000ms] ${
            darkMode
              ? 'bg-gradient-to-b from-[#07111f]/60 via-[#101b2b]/30 to-[#080d13]'
              : 'bg-gradient-to-b from-orange-100/20 via-transparent to-[#f5f7fa]'
          }`}
        />

        <div
          className={`absolute inset-0 transition-opacity duration-[2000ms] ${
            darkMode ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage:
              'radial-gradient(2px 2px at 20% 30%, white 50%, transparent 100%), radial-gradient(1px 1px at 70% 20%, white 50%, transparent 100%), radial-gradient(2px 2px at 85% 55%, white 50%, transparent 100%), radial-gradient(1px 1px at 40% 70%, white 50%, transparent 100%), radial-gradient(2px 2px at 60% 40%, white 50%, transparent 100%)',
            backgroundSize: '300px 300px',
          }}
        />

        <div
          className={`absolute right-[12%] top-28 h-20 w-20 rounded-full bg-slate-100 shadow-[0_0_60px_15px_rgba(255,255,255,0.15)] transition-all duration-[2000ms] ${
            darkMode ? 'translate-y-0 opacity-80' : '-translate-y-10 opacity-0'
          }`}
        />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 px-6 py-32 lg:grid-cols-2 lg:px-10">
          <div className="animate-[fadeIn_1s_ease-out]">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-orange-500" />
              <span className="text-xs font-bold tracking-[0.3em] text-orange-400">
                {t.heroGreeting}
              </span>
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[1.08] tracking-tight md:text-7xl lg:text-8xl">
              {t.heroTitle.split(' ').slice(0, -2).join(' ')}{' '}
              <span className="text-orange-500">
                {t.heroTitle.split(' ').slice(-2).join(' ')}
              </span>
            </h1>

            <p className={`mt-8 max-w-xl text-lg leading-relaxed ${
              darkMode ? 'text-slate-300' : 'text-slate-700'
            }`}>
              {t.heroDescription}
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm text-orange-400">
              <MapPin className="h-4 w-4" />
              {t.heroLocation}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#sobre-mi"
                className="rounded-lg bg-orange-500 px-7 py-4 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/20"
              >
                {t.heroButton}
              </a>

              <a
                href="#proyectos"
                className="rounded-lg border border-white/30 px-7 py-4 text-sm font-bold transition-all hover:-translate-y-1 hover:border-orange-500 hover:text-orange-400"
              >
                {t.heroSecondary}
              </a>
            </div>
          </div>

          <div className={`hidden overflow-hidden rounded-2xl border shadow-2xl backdrop-blur-xl transition-all duration-700 lg:block ${
            darkMode
              ? 'border-white/10 bg-[#080d13]/80'
              : 'border-white/60 bg-white/75'
          }`}>
            <div className={`flex items-center gap-2 border-b px-5 py-4 ${
              darkMode ? 'border-white/10' : 'border-slate-200'
            }`}>
              <span className="h-3 w-3 rounded-full bg-red-500" />
              <span className="h-3 w-3 rounded-full bg-yellow-500" />
              <span className="h-3 w-3 rounded-full bg-green-500" />
              <span className="ml-3 text-xs text-slate-400">
                {t.terminalTitle}
              </span>
            </div>

            <div className="space-y-4 p-8 font-mono text-sm">
              <p className="text-green-400">$ initializing portfolio...</p>
              <p className="text-orange-400">&gt; {t.terminalLine1}</p>
              <p className="text-slate-400">&gt; {t.terminalLine2}</p>
              <p className="text-green-400">
                &gt; status: <span className="text-white">online</span>
              </p>
              <p className="animate-pulse text-orange-400">_</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs tracking-[0.3em] text-white/60">
          SCROLL TO EXPLORE ↓
        </div>
      </section>

      {/* 02 // SOBRE MÍ */}
      <section id="sobre-mi" className="relative px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14">
            <p className="mb-4 text-xs font-bold tracking-[0.3em] text-orange-500">
              {t.aboutLabel}
            </p>
            <h2 className="text-4xl font-black md:text-6xl">
              {t.aboutTitle}
            </h2>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <p className={`text-lg leading-relaxed ${
                darkMode ? 'text-slate-300' : 'text-slate-600'
              }`}>
                {t.aboutDescription}
              </p>

              <p className={`text-lg leading-relaxed ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}>
                {t.aboutDescription2}
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className={`flex items-center gap-2 rounded-full border px-4 py-3 text-sm ${
                  darkMode ? 'border-white/10 bg-white/5' : 'border-slate-200 bg-white'
                }`}>
                  <MapPin className="h-4 w-4 text-orange-500" />
                  {t.aboutLocation}
                </div>

                <div className={`flex items-center gap-2 rounded-full border px-4 py-3 text-sm ${
                  darkMode ? 'border-white/10 bg-white/5' : 'border-slate-200 bg-white'
                }`}>
                  <Code2 className="h-4 w-4 text-green-500" />
                  {t.aboutStatus}
                </div>
              </div>
            </div>

            <div className={`rounded-2xl border p-8 shadow-xl ${
              darkMode
                ? 'border-white/10 bg-[#101923]'
                : 'border-slate-200 bg-white'
            }`}>
              <div className="mb-8 flex items-center gap-3">
                <Terminal className="h-6 w-6 text-orange-500" />
                <span className="font-mono text-sm">{t.aboutTerminal}</span>
              </div>

              <div className="space-y-6 font-mono text-sm">
                <p className="text-orange-500">const developer = {'{'}</p>
                <p className="pl-6 text-slate-400">
                  status: <span className="text-green-400">'learning'</span>,
                </p>
                <p className="pl-6 text-slate-400">
                  location: <span className="text-green-400">'Sonora'</span>,
                </p>
                <p className="pl-6 text-slate-400">
                  mindset: <span className="text-green-400">'growth'</span>
                </p>
                <p className="text-orange-500">{'}'}</p>
                <div className="border-t border-white/10 pt-5 text-slate-400">
                  <p className="mb-3 text-green-400">// {t.aboutTerminalLine1}</p>
                  <p className="mb-3">// {t.aboutTerminalLine2}</p>
                  <p>// {t.aboutTerminalLine3}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 // PROYECTOS */}
      <section
        id="proyectos"
        className={`px-6 py-28 lg:px-10 ${
          darkMode ? 'bg-[#0c131c]' : 'bg-slate-100'
        }`}
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14">
            <p className="mb-4 text-xs font-bold tracking-[0.3em] text-orange-500">
              {t.projectsLabel}
            </p>
            <h2 className="text-4xl font-black md:text-6xl">
              {t.projectsTitle}
            </h2>
            <p className={`mt-5 max-w-2xl text-lg ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              {t.projectsDescription}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {t.projectItems.map((project) => (
              <article
                key={project.number}
                className={`group rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-2 hover:border-orange-500/50 ${
                  darkMode
                    ? 'border-white/10 bg-[#111b27]'
                    : 'border-slate-200 bg-white shadow-sm'
                }`}
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="font-mono text-3xl font-black text-orange-500/50">
                    {project.number}
                  </span>
                  <Code2 className="h-6 w-6 text-orange-500 transition-transform group-hover:rotate-12" />
                </div>

                <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-[10px] font-bold tracking-wider text-orange-500">
                  {t.projectStatus}
                </span>

                <h3 className="mb-4 mt-6 text-2xl font-bold">
                  {project.title}
                </h3>

                <p className={`min-h-28 leading-relaxed ${
                  darkMode ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {project.description}
                </p>

                <div className="mt-7 border-t border-white/10 pt-5">
                  <p className="mb-3 text-[10px] font-bold tracking-[0.2em] text-orange-500">
                    {t.projectTech}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`rounded-md border px-2 py-1 text-xs ${
                          darkMode
                            ? 'border-white/10 bg-white/5 text-slate-300'
                            : 'border-slate-200 bg-slate-50 text-slate-600'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 04 // STACK TECNOLÓGICO */}
      <section id="tecnologias" className="px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14">
            <p className="mb-4 text-xs font-bold tracking-[0.3em] text-orange-500">
              {t.stackLabel}
            </p>
            <h2 className="text-4xl font-black md:text-6xl">
              {t.stackTitle}
            </h2>
            <p className={`mt-5 max-w-2xl text-lg ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              {t.stackDescription}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {t.stackGroups.map((group, index) => {
              const Icon = stackIcons[index]

              return (
                <article
                  key={group.title}
                  className={`group rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/50 ${
                    darkMode
                      ? 'border-white/10 bg-[#101923]'
                      : 'border-slate-200 bg-white shadow-sm'
                  }`}
                >
                  <div className="mb-6 flex items-center gap-4">
                    <div className={`rounded-xl border p-3 ${
                      darkMode
                        ? 'border-white/10 bg-white/5'
                        : 'border-slate-100 bg-slate-50'
                    }`}>
                      <Icon className="h-7 w-7 text-orange-400" />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">{group.title}</h3>
                      <p className="mt-1 text-sm text-slate-500">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {group.items.map((technology) => (
                      <span
                        key={technology}
                        className={`rounded-lg border bg-transparent px-4 py-2 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500/10 ${
                          stackColors[technology] ?? 'border-orange-500/30 text-orange-400'
                        }`}
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </article>
              )
            })}
          </div>

          <div className={`mt-8 flex items-start gap-4 rounded-xl border p-5 ${
            darkMode
              ? 'border-orange-500/20 bg-orange-500/5'
              : 'border-orange-200 bg-orange-50'
          }`}>
            <Cpu className="mt-1 h-5 w-5 shrink-0 text-orange-500" />
            <p className={`text-sm leading-relaxed ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              {t.stackNote}
            </p>
          </div>
        </div>
      </section>

      {/* 05 // CONTACTO */}
      <section
        id="contacto"
        className={`relative overflow-hidden px-6 py-28 lg:px-10 ${
          darkMode ? 'bg-[#0c131c]' : 'bg-slate-100'
        }`}
      >
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="mb-4 text-xs font-bold tracking-[0.3em] text-orange-500">
            {t.contactLabel}
          </p>

          <h2 className="text-4xl font-black md:text-6xl">
            {t.contactTitle}
          </h2>

          <p className={`mx-auto mt-6 max-w-2xl text-lg leading-relaxed ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            {t.contactDescription}
          </p>

          <div className={`mx-auto mt-12 max-w-2xl rounded-2xl border p-8 md:p-12 ${
            darkMode
              ? 'border-white/10 bg-[#101923]'
              : 'border-slate-200 bg-white shadow-sm'
          }`}>
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-orange-500/30 bg-orange-500/10">
              <Terminal className="h-8 w-8 text-orange-500" />
            </div>

            <p className="text-xs font-bold tracking-[0.25em] text-orange-500">
              {t.contactEmailTitle}
            </p>

            <p className={`mt-4 text-sm ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              {t.contactEmailDescription}
            </p>

            <p className="mt-5 break-all text-lg font-bold md:text-2xl">
              {email}
            </p>

            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                email
              )}&su=${encodeURIComponent(
                language === 'es'
                  ? 'Contacto desde SONORA.exe'
                  : 'Contact from SONORA.exe'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-3 rounded-lg bg-orange-500 px-8 py-4 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/20"
            >
              {t.contactButton}
              <span aria-hidden="true">↗</span>
            </a>

            <div className={`mt-8 border-t pt-6 text-sm ${
              darkMode
                ? 'border-white/10 text-slate-500'
                : 'border-slate-200 text-slate-500'
            }`}>
              <span className="mr-2 text-green-500">●</span>
              {t.contactAvailability}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER MEJORADO */}
      <footer
        className={`border-t px-6 py-12 lg:px-10 ${
          darkMode
            ? 'border-white/10 bg-[#080d13]'
            : 'border-slate-200 bg-white'
        }`}
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-3">

            {/* IDENTIDAD */}
            <div>
              <a href="#inicio" className="inline-flex items-center gap-2">
                <Terminal className="h-6 w-6 text-orange-500" />
                <span className="text-xl font-black tracking-wider">
                  SONORA<span className="text-orange-500">.exe</span>
                </span>
              </a>

              <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
                {t.footerText}
              </p>

              <p className="mt-4 text-xs font-mono text-orange-500/70">
                &lt; Built in Sonora /&gt;
              </p>
            </div>

            {/* NAVEGACIÓN */}
            <div>
              <h3 className="mb-5 text-xs font-bold tracking-[0.2em] text-orange-500">
                {t.footerNavigation}
              </h3>

              <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                <a
                  href="#inicio"
                  className="text-sm text-slate-500 transition-colors hover:text-orange-500"
                >
                  Inicio
                </a>

                <a
                  href="#sobre-mi"
                  className="text-sm text-slate-500 transition-colors hover:text-orange-500"
                >
                  {t.navAbout}
                </a>

                <a
                  href="#proyectos"
                  className="text-sm text-slate-500 transition-colors hover:text-orange-500"
                >
                  {t.navProjects}
                </a>

                <a
                  href="#tecnologias"
                  className="text-sm text-slate-500 transition-colors hover:text-orange-500"
                >
                  {t.navStack}
                </a>

                <a
                  href="#contacto"
                  className="text-sm text-slate-500 transition-colors hover:text-orange-500"
                >
                  {t.navContact}
                </a>
              </div>
            </div>

            {/* CONTACTO */}
            <div>
              <h3 className="mb-5 text-xs font-bold tracking-[0.2em] text-orange-500">
                {t.footerContact}
              </h3>

              <p className="mb-3 text-sm text-slate-500">
                {t.contactEmailDescription}
              </p>

              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="break-all text-sm font-semibold transition-colors hover:text-orange-500"
              >
                {email}
              </a>
            </div>
          </div>

          {/* BARRA INFERIOR */}
          <div className={`mt-12 flex flex-col items-center justify-between gap-5 border-t pt-7 text-center md:flex-row ${
            darkMode ? 'border-white/10' : 'border-slate-200'
          }`}>
            <p className="text-xs text-slate-500">
              © {currentYear} SONORA.exe. {t.footerRights}
            </p>

            <a
              href="#inicio"
              className="text-xs font-bold tracking-[0.2em] text-orange-500 transition hover:text-orange-400"
            >
              {t.footerBack} ↑
            </a>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        html {
          scroll-behavior: smooth;
        }

        ::selection {
          background: #f97316;
          color: white;
        }
      `}</style>
    </main>
  )
}

export default App

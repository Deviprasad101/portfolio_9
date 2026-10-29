export const portfolioData = {
  personal: {
    firstName: 'Devi Prasad',
    lastName: 'Chinthamreddy',
    fullName: 'Devi Prasad Chinthamreddy',
    monogram: 'DP',
    role: 'Full Stack Developer',
    tagline:
      'Building resilient full-stack web applications, geospatial platforms, and containerized APIs with Python, React, and PostgreSQL.',
    location: 'Tirupati, Andhra Pradesh, India',
    shortLocation: 'Tirupati, India',
    coordinates: '13.6288° N, 79.4192° E',
    email: 'cdpreddyap@gmail.com',
    phone: '+91 6281604440',
    phoneRaw: '+916281604440',
    resumeUrl: '/Devi_Prasad_Full_Stack_Developer_Resume.pdf',
    // Drop hero.mp4 (or hero.webm) into /public to automatically activate the full-bleed video
    heroVideoSources: ['/hero.mp4', '/hero.webm'],
    // Drop portrait.jpg, portrait.png, or portrait.webp into /public to automatically display your photo
    portraitCandidates: [
      '/portrait.jpg',
      '/portrait.jpeg',
      '/portrait.png',
      '/portrait.webp',
    ],
    availability: 'Open to Full Stack, Backend & DevOps / SRE Roles',
  },

  heroStats: [
    {
      label: 'Experience',
      value: 'IITTNiF · Full Stack',
      detail: '2025 — 2026',
    },
    {
      label: 'Base',
      value: 'Tirupati, India',
      detail: 'Andhra Pradesh · IST',
    },
    {
      label: 'Core Focus',
      value: 'Web, APIs & Geo-Tech',
      detail: 'Python · React · PostGIS',
    },
    {
      label: 'Next Horizon',
      value: 'DevOps, Cloud & SRE',
      detail: 'Docker · CI/CD · Reliability',
    },
  ],

  about: {
    eyebrow: '01 / About',
    headline:
      'Turning complex data and real-world workflows into fast, dependable web software.',
    paragraphs: [
      'I am a Full Stack Developer based in Tirupati, Andhra Pradesh, with hands-on industry experience at the IIT Tirupati Navavishkar I-Hub Foundation (IITTNiF). My work centers on architecting clean web interfaces and high-reliability backend services using Python (FastAPI, Flask), JavaScript, React.js, and PostgreSQL.',
      'From building multi-stop pilgrimage routing platforms with QR verification to unifying 2D/3D geospatial catalogs with PostGIS, GeoServer, and Cesium, I enjoy bridging intuitive product design with solid systems engineering. Looking ahead, I am actively expanding these foundations toward DevOps, Cloud Engineering, and Site Reliability Engineering (SRE).',
    ],
    skillGroups: [
      {
        category: 'Backend & APIs',
        items: ['Python', 'FastAPI', 'Flask', 'REST APIs'],
      },
      {
        category: 'Frontend & Web',
        items: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3'],
      },
      {
        category: 'Data & Geospatial',
        items: ['PostgreSQL', 'SQL', 'PostGIS', 'GeoServer', 'Leaflet', 'CesiumJS'],
      },
      {
        category: 'DevOps & Workflow',
        items: ['Docker', 'Git', 'GitHub', 'Testing & Optimization', 'AI-Assisted Dev'],
      },
    ],
    languages: ['English', 'Telugu'],
  },

  experience: [
    {
      id: 'iittnif',
      type: 'Work Experience',
      company: 'IIT Tirupati Navavishkar I-Hub Foundation (IITTNiF)',
      role: 'Full Stack Developer',
      dates: 'Nov 2025 — Sep 2026',
      location: 'Tirupati, Andhra Pradesh',
      description:
        'Developed and deployed full-stack and geospatial web applications using Python, FastAPI, Flask, and React.js. Designed and integrated PostgreSQL-backed REST APIs, engineered responsive interfaces, and streamlined testing, debugging, and Docker-based containerized deployments.',
      highlights: [
        'Built end-to-end web platforms across Python (FastAPI, Flask), React.js, HTML5, CSS3, and JavaScript.',
        'Architected relational schemas and high-throughput REST API integrations with PostgreSQL and SQL.',
        'Containerized services with Docker and maintained clean Git/GitHub release, testing, and optimization workflows.',
      ],
      tags: [
        'Python',
        'FastAPI',
        'Flask',
        'React.js',
        'PostgreSQL',
        'REST APIs',
        'Docker',
        'Git / GitHub',
      ],
    },
    {
      id: 'btech',
      type: 'Education',
      company: 'Malla Reddy Engineering College',
      role: 'B.Tech — Computer Science & Engineering (AI & ML)',
      dates: '2021 — 2025',
      location: 'Hyderabad, India · 7.06 CGPA',
      description:
        'Completed Bachelor of Technology specializing in Artificial Intelligence & Machine Learning, building strong engineering foundations in algorithms, relational databases, software systems, and full-stack development.',
      highlights: [],
      tags: [
        'CSE (AI & ML)',
        'Python',
        'SQL',
        'Software Engineering',
        'Problem Solving',
      ],
    },
    {
      id: 'pre-university',
      type: 'Academic Foundation',
      company: 'Viswa Sai Junior College & Narayana School',
      role: 'Intermediate (MPC) & Secondary School Certificate',
      dates: '2018 — 2021',
      location: 'Nellore, Andhra Pradesh',
      description:
        'Completed Intermediate education at Viswa Sai Junior College (2020–2021 · 7.17 CGPA) following Secondary School Certificate at Narayana (2018–2019 · 8.3 CGPA).',
      highlights: [],
      tags: ['Mathematics & Sciences', '7.17 CGPA (Intermediate)', '8.3 CGPA (SSC)'],
    },
  ],

  projects: [
    {
      id: 'geo-trip-planner',
      index: '01',
      title: 'Geo Trip Planner',
      subtitle: 'Smart Pilgrimage Itinerary, Route Mapping & QR Check-In System',
      description:
        'A full-stack trip planning platform tailored for multi-stop Tirupati pilgrimages—combining budget-based package selection, interactive OSRM route mapping, personal temple QR check-ins, and a real-time admin visitor dashboard.',
      outcome:
        'Accelerates multi-stop route planning, enables shareable live maps, lets temple staff log visits via instant QR scans, and centralizes visitor analytics.',
      tags: [
        'Python',
        'Flask',
        'Leaflet.js',
        'PostgreSQL',
        'SQLite',
        'OpenStreetMap / OSRM',
        'HTML / CSS / JS',
        'Session Auth',
      ],
      // Drop a real screenshot into /public/projects/geo-trip-planner.jpg later and set coverImage to swap!
      coverImage: '',
      coverVariant: 'route-planner',
      repoUrl: 'https://github.com/Deviprasad101',
      liveUrl: '',
    },
    {
      id: 'geo-intel-meta-hub',
      index: '02',
      title: 'Geo Intel Meta Hub',
      subtitle: 'Unified 2D/3D Geospatial Data Catalog & OGC Publishing Pipeline',
      description:
        'A centralized spatial data hub that ingests scattered vectors, rasters, LAS point clouds, and 3D assets—automating PostGIS storage and GeoServer publishing into a searchable web catalog with interactive 2D maps and Cesium 3D globe previews.',
      outcome:
        'Replaces fragmented spatial files with a single WMS/WFS & 3D catalog so teams can discover, preview, and serve geospatial layers from one platform.',
      tags: [
        'Python',
        'Flask',
        'PostgreSQL / PostGIS',
        'GeoServer',
        'CesiumJS',
        'GDAL / PDAL / ogr2ogr',
        'WMS / WFS',
        'JavaScript',
      ],
      // Drop a real screenshot into /public/projects/geo-intel-meta-hub.jpg later and set coverImage to swap!
      coverImage: '',
      coverVariant: 'geo-hub',
      repoUrl: 'https://github.com/Deviprasad101',
      liveUrl: '',
    },
  ],

  socials: [
    {
      label: 'LinkedIn',
      handle: 'Deviprasad Reddy Chinthamreddy',
      url: 'https://www.linkedin.com/in/deviprasad-reddy-chinthamreddy-759b2326b/',
    },
    {
      label: 'GitHub',
      handle: '@deviprasad101',
      url: 'https://github.com/Deviprasad101',
    },
    {
      label: 'Current Live Site',
      handle: 'deviprasad-portfolio.vercel.app',
      url: 'https://deviprasad-portfolio.vercel.app/',
    },
    {
      label: 'Phone',
      handle: '+91 6281604440',
      url: 'tel:+916281604440',
    },
  ],
};


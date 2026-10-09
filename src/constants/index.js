const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 30, suffix: "%", label: "Faster Document Review" },
  { value: 20, suffix: "%", label: "Better Protocol Accuracy" },
  { value: 50, suffix: "+", label: "Documents Searchable by AI" },
  { value: 1, suffix: "st", label: "Place, TSA Webmasters Nevada 2026" },

 // { value: 90, suffix: "%", label: "Client Retention Rate" },  ////////////////
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Problem Solving",
    desc: "I like breaking problems down and working through them until they actually make sense and get solved.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Team Mindset",
    desc: "I work well with others and try to make sure everyone is aligned and moving in the same direction.",
  },
  {
    imgPath: "/images/time.png",
    title: "Fast Learner",
    desc: "I pick up new concepts quickly and adapt when things change or get challenging.",
  },
];

const techStackImgs = [  //image variation
  {
    name: "PostgreSQL Database",
    imgScale: "0.7",
    imgPath: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1280px-Postgresql_elephant.svg.png",
  },
  
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Java",
    modelPath: "/models/java.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  // {
  //   name: "Python Developer",
  //   modelPath: "/models/python-transformed.glb",
  //   scale: 0.8,
  //   rotation: [0, 0, 0],
  // },
  {
    name: "Node Backend",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
  {
    name: "MongoDB",
    modelPath: "/models/mongodb.glb",
    scale: 56,
    rotation: [0, 0, 0],
  },
  //  {
  //   name: "Blender",
  //   modelPath: "/models/blender_logo.glb",
  //   scale: 4,
  //   rotation: [0.6, -Math.PI*0.5 , Math.PI/16],
  // },
];
const expCards = [
  {
    review:
      "Founder and lead engineer of a live lead-intelligence platform, launched to production and onboarding its first users.",
    logoPath: "/mainLogo.png",
    title: "Founder & Lead Engineer (Full-Stack) - Jellyhook",
    date: "Feb 2026 - Present",
    responsibilities: [
      "Built a typed query engine that lets non-technical users query visitor behavior, using Postgres EXPLAIN estimates to reorder conditions, stage execution, and reject over-budget queries before they run.",
      "Built a first-party JavaScript tracker and API-key-authenticated ingestion API (sessions, scroll depth, UTM attribution, per-field form timing) with bot filtering and idempotent, deduplicated event handling.",
      "Linked form submissions to visitor sessions to show the exact path to each lead, with a session-replay timeline of page visits and form friction.",
      "Implemented multi-tenant site access (roles, per-site API keys, signed webhooks) and billing sync, including EU consent handling.",
      "Developed spec-first: wrote specs and migrations, implemented with AI coding tools, and verified with typed interfaces, tests, and review.",
    ],
  },
  {
    review:
      "An AI platform for clinic staff that answers questions in plain language, with every answer cited to its source document and page.",
    logoPath: "https://cdn-icons-png.flaticon.com/512/5072/5072860.png",
    title: "Caregiver - Tesh Group Home (Portland, OR)",
    date: "Aug 2026 - Present",
    responsibilities: [
      "Designed and built an AI platform that lets staff query clinic protocols and documentation in plain language, with every answer cited back to the source document and page; cut document review time by 30% and improved protocol and documentation accuracy by 20% across 50+ documents.",
      "Built a retrieval-augmented generation pipeline (PDF parsing with table reconstruction, chunking, embeddings, pgvector similarity search) and a multi-step LLM flow that analyses each question, plans targeted searches, and answers only from approved documents.",
    ],
  },
  {
    review:
      "A natural-language 3D scene editor where malformed AI output can never corrupt the scene.",
    logoPath: "/images/logos/3DMesh.png",
    title: "AI-Powered 3D Scene Editor (Project)",
    date: "Jun 2026 - Aug 2026",
    responsibilities: [
      "Built a natural-language scene editor using a Gemini-powered pipeline and a custom DSL/parser that converts prompts into validated add, edit, and delete operations.",
      "Added server-side validation and deterministic execution so malformed AI output cannot mutate scene state.",
    ],
  },
];
const expLogos = [
  {
    name: "logo1",
    //imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    //imgPath: "https://p7.hiclipart.com/preview/501/438/467/web-development-web-developer-web-design-web-development.jpg",
  },
  {
    name: "logo3",
   // imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
  name: "Nardos Bekele",
  mentions: "@nardoszbelete10@gmail.com",
  review:
    "Joshua was great to work with throughout the development of my custom cake ordering website. He listened carefully to my ideas, communicated clearly, and delivered a clean and easy-to-use platform that made it simple for customers to place orders. His professionalism and dedication exceeded my expectations.",
  imgPath: "",
},
{
  name: "Tina Quinn",
  mentions: "fayecd@nv.ccsd.net",
  review:
    "Joshua consistently approaches challenges with curiosity and determination. What stands out most is his ability to analyze problems from different angles and develop creative solutions. He is goal-driven, highly motivated, and demonstrates a level of initiative that is uncommon among students.",
  imgPath: "https://www.sierravistahighschool.org/ourpages/auto/profiles/1399078/SVHS1763009356847.jpg",
},

// {
//   name: "Dr. Belay Mekonen",
//   mentions: "@drbelaymekonen",
//   review:
//     "Joshua created a professional portfolio website that effectively represented my work and background. He was attentive to feedback, responsive throughout the project, and delivered a polished final product. I appreciated his commitment to quality and his ability to transform ideas into a modern online presence.",
//   imgPath: "/images/client5.png",
// },
{
  name: "Dionne Russell",
  mentions: "@russeld1@nv.ccsd.net",
  review:
    "Joshua is an exceptionally fast learner who approaches new opportunities with enthusiasm and professionalism. He is dependable, punctual, and consistently follows through on his commitments. His strong work ethic and willingness to take initiative make him someone I confidently recommend.",
  imgPath: "https://www.sierravistahighschool.org/ourpages/auto/profiles/1675135/SVHS1763009946744.jpg",
},
];

const socialImgs = [
  // {
  //   name: "insta",
  //   url: "https://www.instagram.com/",
  //   imgPath: "/images/insta.png",
  // },
  // {
  //   name: "fb",
  //   url: "https://www.facebook.com/",
  //   imgPath: "/images/fb.png",
  // },
  // {
  //   name: "x",
  //   url: "https://www.x.com/",
  //   imgPath: "/images/x.png",
  // },
  {
    name: "Github",
    url: "https://www.github.com/jax2dax",
    imgPath: "https://pngimg.com/uploads/github/github_PNG32.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/joshuazerihun9",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
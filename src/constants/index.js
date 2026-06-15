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
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "+", label: "Satisfied Clients" },
  { value: 10, suffix: "+", label: "Completed Projects" },
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
];
const expCards = [
  {
    review:
      "Joshua consistently delivered high-quality web applications with a strong focus on user experience, performance, and scalable architecture. His ability to turn ideas into production-ready products has been impressive.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Freelance Full Stack Developer",
    date: "January 2024 - Present",
    responsibilities: [
      "Designed and developed custom websites and SaaS applications for clients and personal ventures.",
      "Built full-stack solutions using Next.js, TypeScript, Supabase, PostgreSQL, and Clerk.",
      "Implemented authentication systems, dashboards, analytics, payments, and API integrations.",
    ],
  },

  {
    review:
      "Joshua demonstrated strong technical and communication skills while creating a professional online presence tailored to a healthcare client's needs.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Web Developer (Healthcare Client Project)",
    date: "2025",
    responsibilities: [
      "Designed and developed a professional portfolio website for a medical professional.",
      "Created responsive user interfaces with modern animations and optimized performance.",
      "Worked directly with the client to gather requirements and implement revisions.",
    ],
  },

  {
    review:
      "Joshua has built multiple production-level SaaS and AI applications that showcase advanced frontend and backend engineering skills.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Independent Software Developer",
    date: "2023 - Present",
    responsibilities: [
      "Built AI-powered learning platforms featuring voice assistants and personalized tutoring systems.",
      "Developed analytics dashboards, event tracking systems, and lead intelligence tools.",
      "Managed deployment, databases, authentication, API integrations, and application architecture.",
    ],
  },
];
const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
  name: "Nardos Bekele",
  mentions: "@nardoszbelete10@gmail.com",
  review:
    "Joshua was great to work with throughout the development of my custom cake ordering website. He listened carefully to my ideas, communicated clearly, and delivered a clean and easy-to-use platform that made it simple for customers to place orders. His professionalism and dedication exceeded my expectations.",
  imgPath: "/images/client1.png",
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
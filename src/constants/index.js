import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  ktmbees,
  dansonsolution,
  cloudfactory,
  threejs,
  level3d,
  petushopu,
  restaurant,
  simplequiz,
  nccs,
  // tu,
  ims,
  sigma
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects", // New ID for your Projects/Works section
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Website Developer",
    icon: web,
  },
  {
    title: "Ui/Ux Designer",
    icon: mobile,
  },
  { 
    title: "Full Stack MERN Developer",
    icon: backend,
  },
  {
    title: "Python Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "AI/ML Intern",
    company_name: "KTMBees",
    icon: ktmbees,
    iconBg: "#1f2937",
    date: "Sept 2025 – Dec 2025",
    points: [
      "Developed an AI-driven Smart City detection system using YOLO to identify potholes and waste from images.",
      "Built Flask-based backend APIs and automated the detection pipeline.",
      "Implemented structured data storage for fast, reliable, and accurate results.",
    ],
  },
  {
    title: "Game Designer",
    company_name: "Danson Solution",
    icon: dansonsolution,
    iconBg: "#383E56",
    date: "Dec 2024 – Mar 2025",
    points: [
      "Designed interactive game interfaces and visual assets.",
      "Implemented motion effects and animations for engaging gameplay.",
      "Developed prototypes to ensure smooth user experience.",
    ],
  },
  {
    title: "Data Specialist",
    company_name: "CloudFactory",
    icon: cloudfactory,
    iconBg: "#0f172a",
    date: "Jun 2023 – Mar 2024",
    points: [
      "Processed and digitized large volumes of data with high accuracy.",
      "Maintained organized records across multiple projects.",
      "Collaborated with team leads to optimize workflows and train new members.",
    ],
  },
];


const educations = [
  {
    title: "Bachelor of Science in Computer Science and Information Technology",
    education_name: "National College of Computer Studies (NCCS), Paknajol",
    // icon: tu,
    icon: nccs,
    iconBg: "#383E56",
    date: "2022 – Running",
    points: [
      "Developed full-stack web and 3D interactive applications using MERN and Three.js.",
      "Applied C, C++, Java, and Python to build efficient software solutions.",
      "Implemented ML algorithms for recommendation and classification systems.",
      "Mentored team members while maintaining high coding standards.",
    ],
  },
  {
    title: "Higher Secondary (+2) in Science",
    education_name: "Ideal Model School, Lalitpur",
    icon: ims,
    iconBg: "#383E56",
    date: "2019 – 2021",
    points: [
      "Completed Science stream with strong foundations in Mathematics and Computing.",
      "Developed analytical, logical, and problem-solving skills.",
    ],
  },
  { title: "School Leaving Certificate", education_name: "Sigma Secondary School,Sorhakhutte", 
    icon: sigma, iconBg: "#383E56", 
    date: "Nov 2002 - April 2016", 
    points: [ "Specialized in Optional Mathematics and Science, demonstrating advanced analytical, logical, and quantitative problem-solving skills.", "Developed proficiency in Computer Applications and Accounting, acquiring strong technical, computational, and data management capabilities.", "Cultivated problem-solving, critical thinking, and collaborative skills through project-based learning and group initiatives.", "Developed problem-solving, critical thinking, and collaborative skills through school projects and group activities.",
     ], 
    },
];


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Abinash proved me wrong during his internship period.",
    name: "Sushil Subedi",
    designation: "Founder",
    company: "Robust InfoTech",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS38q24-mOA8IBBrOStB750OwqQK-ifcBYU5w&s",
  },
  {
    testimonial:
      "I've never met a developer who truly cares about his minor and major project' success like Abinash does with Machine Learning projects.",
    name: "Mahesh Singh Khathayat",
    designation: "Project Supervisor",
    company: "Projects",
    image:
      "https://i1.rgstatic.net/ii/profile.image/11431281182808934-1692594170366_Q512/Mahesh-Kathayat-2.jpg",
  },
  {
    testimonial:
      "After I met Abinash as a Bachelor Student in Computer Engineer course who sincercely does his work accurately within time and also good in his study period of time.!",
    name: "Sudeep Shakya",
    designation: "HOD",
    company: "Computer Department",
    image:
      "https://wms.edigitalnepal.com/wms/files/ws-file-manager-images/1684059869251_6da22c76-40cb-4591-8b60-8665a6a4e580.jpg",
  },
];

const projects = [
  {
    name: "Restaurant Recommendation System",
    description:
      "Built a personalized restaurant recommendation system using MERN and Python based on user preferences and restaurant data.",
    tags: [
      { name: "MERN", color: "blue-text-gradient" },
      { name: "Python", color: "green-text-gradient" },
      { name: "ML", color: "pink-text-gradient" },
    ],
    image: restaurant,
    source_code_link: "https://github.com/bleualien/CraveHunt..git",
  },
  {
    name: "3D Exotic Pet Store(KuruKuru Petu Shopu)",
    description:
      "Developed a 3D interactive pet store using MERN, Blender, and Three.js for immersive product exploration.",
    tags: [
      { name: "Three.js", color: "blue-text-gradient" },
      { name: "MERN", color: "green-text-gradient" },
      { name: "Blender", color: "pink-text-gradient" },
    ],
    image: petushopu,
    source_code_link: "https://github.com/mintrgm/KuruKuru-Petto-Shoppu",
  },
{
  name: "LEVEL3D Gaming Store",
  description:
    "Built a 3D interactive gaming store where users can walk through the store instead of scrolling. Developed immersive frontend experiences using Three.js, interactive product sections, smooth transitions, and detailed product pages for a fun, gamer-focused prototype.",
  tags: [
    { name: "LEVEL3D", color: "from-[#5b2c6f] to-[#8e44ad] bg-gradient-to-r text-white" },
    { name: "Three.js", color: "blue-text-gradient" },
    { name: "Frontend", color: "green-text-gradient" },
  ],
  image: level3d, // replace with actual 3D store screenshot if available
  source_code_link: "https://github.com/bleualien",
},
{
  name: "Interactive Quiz Web App",
  description:
    "Built an interactive quiz web application using vanilla JavaScript, HTML, and CSS. Users can choose Easy, Medium, or Hard difficulty, answer questions one at a time, get instant feedback, and see a final score with a full summary. The app also allows users to restart and try again.",
  tags: [
    { name: "JavaScript", color: "yellow-text-gradient" },
    { name: "HTML/CSS", color: "blue-text-gradient" },
    { name: "Frontend", color: "green-text-gradient" },
  ],
  image: simplequiz, // replace with a screenshot of your quiz app if available
  source_code_link: "https://github.com/bleualien/Simple-Quiz-web-app.git",
}


];


export {
  services,
  technologies,
  experiences,
  educations,
  testimonials,
  projects,
};

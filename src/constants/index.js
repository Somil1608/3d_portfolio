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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  webpage,
  sfs,
  threejs,live
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
    id: "contact",
    title: "Contact",
  }
];

const services = [
  {
    title: "Web Developer",
    icon: web,
    link: "https://your-link.com",
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
  title: "Software Engineer",
  company_name: "ENTAIN | Ivy Comptech",
  icon: starbucks, // Replace with Ivy logo if available
  iconBg: "#fff",
  date: "Sep 2023 - Present",
  points: [
    "Core member of the Compliance team, focusing on software development and integration.",
    "Led migration projects by writing PL/SQL scripts to migrate users from various platforms.",
    "Developed Java and SQL scripts for the White Labelling project, supporting compliance operations.",
    "Worked on compliance-related developments, including Cron job scheduling for automated tasks and sending reports to regulators via SFTP.",
    "Created safe reporting tools using Java and PL/SQL for regulatory transaction reporting.",
    "Tools Used: JIRA, IntelliJ/Eclipse, ServiceNow (SNOW), Oracle SQL Developer, GitLab, MobaXterm, PuTTY, WinSCP, Kleopatra.",
  ],
},
{
  title: "Software Engineering Trainee",
  company_name: "Ivy Comptech",
  icon: meta, // Replace with Ivy logo if available
  iconBg: "#fff",
  date: "Sep 2022 - Sep 2023",
  points: [
    "Gained foundational experience in software development within the Compliance team.",
    "Assisted in writing migration scripts and participated in various development tasks.",
    "Developed skills in Java, SQL, and PL/SQL, and worked on practical applications in a regulatory context.",
    "Tools Used: JIRA, IntelliJ/Eclipse, ServiceNow (SNOW), Oracle SQL Developer, GitLab, MobaXterm, PuTTY, WinSCP, Kleopatra.",
  ],
},
  {
   
    title: "Computer Vision Intern",
    company_name: "The Sparks Foundation",
    icon: tesla, // You can use a relevant icon like OCR/AI/computer vision
    iconBg: "#fff",
    date: "Apr 2022 - Jun 2022",
    points: [
      "Worked on developing OCR technology to convert images into editable and searchable text.",
      "Implemented text detection, character recognition, and image processing techniques.",
      "Enhanced skills in computer vision, automation, and image processing libraries.",
    ],
  },
  {
    title: "IoT Project - Smart Farming Stick",
    company_name: "Academic Project",
    icon: sfs,// Replace with an IoT/project icon
    iconBg: "#000",
    date: "2021 - 2022",
    points: [
      "Designed an IoT-based Smart Farming Stick to optimize agriculture activities.",
      "Implemented sensor integrations for soil moisture, temperature, and humidity.",
      "Utilized Arduino, sensors, and IoT protocols to build the project.",
      "Presented the solution in academic showcases and received positive feedback.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Somil proved me wrong.",
    name: "Anuj Tanwar",
    designation: "Manager",
    company: "KPMG",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQHgot4sLk5J1A/profile-displayphoto-shrink_800_800/B4DZQV.1XdGgAc-/0/1735535582598?e=1747872000&v=beta&t=hCcCcQSWS4DcRXOM5E5Iv1m3nSap5Miijo2GxjNs9Q8",
    link: "https://www.linkedin.com/in/tanweranuj/"
  },
  {
    testimonial:
      "After Somil optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "AAYUSH ARORA",
    designation: "Cloud Solutions Architect",
    company: "Google",
    image: "https://media.licdn.com/dms/image/v2/C4E03AQErVdHlq_iuHA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1607789277350?e=1747872000&v=beta&t=UnfWL5H3oGNNi47LLo4zs2tMye37W0EdRdlfT8Ut3Do",
    link: "https://www.linkedin.com/in/aayush-arora-019557102/"
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Somil does.",
    name: "Jaswinder Kaur",
    designation: "Agile Lead",
    company: "Upstox",
    image: "https://media.licdn.com/dms/image/v2/C5603AQEurReONyV97Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1517746019789?e=1747872000&v=beta&t=7mRXV-Ldvfb7_ZpJccFP7TMqdQVllSZbMN55f_EPz5o",
    link: "https://www.linkedin.com/in/jassi10/"
  },
  
  
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
    demo_link: "https://your-demo-link.com",
  },
  {
    name: "Web Page Portfolio",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: webpage,
    source_code_link: "https://github.com/Somil1608/portfolio",
    demo_link: "https://portfolio-git-main-somil1608s-projects.vercel.app/",
  },
  {
    name: "Smart Farming Stick",
    description:
      "Smart Farming Stick assists farmers by providing information to calculate and mitigate risks beforehand. Automated solutions and data-driven insights enhance efficiency and revenue generation.",
    tags: [
      {
        name: "Azure",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: sfs,
    source_code_link: "https://github.com/Somil1608/AP040-Smart_Farming_Stick",
    demo_link: "https://www.innovatefpga.com/cgi-bin/innovate/teams.pl?Id=AP040",
  },
];

export { services, technologies, experiences, testimonials, projects };

import { AiOutlineLink } from "react-icons/ai";
import {
  FaBriefcase,
  FaCode,
  FaEnvelopeOpen,
  FaFolderOpen,
  FaGraduationCap,
  FaHome,
  FaUser,
} from "react-icons/fa";
import { FiSend, FiUser } from "react-icons/fi";

import Work1 from "./assets/project-1.jpeg";
import Work2 from "./assets/project-2.jpg";
import Work3 from "./assets/project-3.jpeg";
import Work4 from "./assets/project-4.jpeg";
import Work5 from "./assets/project-5.jpg";
import Work6 from "./assets/project-6.jpg";

import Theme4 from "./assets/blue.png";
import Theme3 from "./assets/blueviolet.png";
import Theme5 from "./assets/goldenrod.png";
import Theme9 from "./assets/green.png";
import Theme6 from "./assets/magenta.png";
import Theme8 from "./assets/orange.png";
import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme10 from "./assets/yellow.png";
import Theme7 from "./assets/yellowgreen.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Sanik",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Mishra",
  },

  {
    id: 3,
    title: "Age : ",
    description: "21",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Indian",
  },

  {
    id: 5,
    title: "Address : ",
    description: "SLF VED VIHAR LONI GHAZIABAD , UP ,201102",
  },

  {
    id: 6,
    title: "Phone : ",
    description: "+91 6306115067",
  },

  {
    id: 7,
    title: "Email : ",
    description: "sanikmishra125@gmail.com",
  },

  {
    id: 8,
    title: "Langages : ",
    description: "Hindi, English",
  },
];

export const stats = [
  {
    id: 1,
    no: "1",
    title: "Years of Experience",
  },

  {
    id: 2,
    no: "6+",
    title: "React and MERN Projects Completed",
  },

  {
    id: 3,
    no: "1",
    title: "State Level Science Competition",
  },
  {
    id: 4,
    no: "200+",
    title: " Solved Data Structure & Algorithm Questions",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "April - PRESENT",
    title: "Application Engineer",
    desc: "•Creating dynamic filter-based user segments.Integrating context replies to enhance live chat conversations.Making chat assistance easily accessible across the dashboard. Implementing multimedia selection to handle multiple file types simultaneously.Additionally, I actively contributed to project development and bug fixing, monitoring production environments, troubleshooting bugs, and suggesting code fixes. I excelled at troubleshooting customer-specific issues, including code-level debugging to ensure smooth application operation. Furthermore, I actively participated in team-building activities, fostering a positive and collaborative work environment. These contributions demonstrate my dedication, technical expertise, and commitment to delivering exceptional results.",
  },
  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "Jun 2022 - Sep 2022",
    title: "Web Development  Intern",
    desc: "Worked on react technology contributed towards the Organization by developing efficient reusable components.",
  },

  {
    id: 3,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2019-2023",
    title:
      "Engineering Degree <span> ITS  Engineering College, Greater Noida </span>",
    desc: "•Have good understanding of the Data Structure and Programming. •Have learnt DSA and completed projects on Web Development.",
  },
  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2018-2019",
    title: "12th - SAJIC AnandNagar Maharajganj",
  },
  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2016-2017",
    title: "10th -SAJIC AnandNagar Maharajganj ",
  },
];

export const skills = [
  {
    id: 1,
    title: "Html",
    percentage: "75",
  },

  {
    id: 2,
    title: "CSS",
    percentage: "89",
  },

  {
    id: 3,
    title: "Javascript",
    percentage: "80",
  },

  {
    id: 4,
    title: "React.js",
    percentage: "80",
  },

  {
    id: 5,
    title: "Bootstrap",
    percentage: "95",
  },

  {
    id: 7,
    title: "Tailwind",
    percentage: "80",
  },

  {
    id: 9,
    title: "Github",
    percentage: "90",
  },
  {
    id: 10,
    title: "Git",
    percentage: "80",
  },
  {
    id: 11,
    title: "MySQL",
    percentage: "90",
  },
  {
    id: 12,
    title: "Mongo DB",
    percentage: "80",
  },
  {
    id: 13,
    title: "Java",
    percentage: "90",
  },
  {
    id: 14,
    title: "Python",
    percentage: "80",
  },
  {
    id: 15,
    title: "Node.js",
    percentage: "75",
  },
];
export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: "Task Management System",
    details: [
      {
        icon: <FiUser />,
        title: "Desc : ",
        desc: "With this app, user can easily create,organize, and track their task and projects in a visual and intuitive way. Whether you're a student , a professional , or just someone who wants to stay organized,this app has you covered.  -From creating boards and column to adding tasks and subtasks , to moving tasks across columns with drag and drop funtionality , this app offers a seamless and efficient way to manage your tasks.",
      },
      {
        icon: <FaCode />,
        title: "Technology Used : ",
        desc: "React JS",
      },
      {
        icon: <AiOutlineLink />,
        title: "Github : ",
        desc: (
          <a href="https://github.com/sanik01">
            <FiSend />
          </a>
        ),
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: "College Management System",
    details: [
      {
        icon: <FiUser />,
        title: "Desc : ",
        desc: "Developed a comprehensive college management system facilitating seamless administration, student management  and academic tracking ,enhancing operational efficiency and student experience, a course details page , and a student dashboard to display enrolled courses.",
      },
      {
        icon: <FaCode />,
        title: "Technology Used : ",
        desc: "React JS",
      },
      {
        icon: <AiOutlineLink />,
        title: "Github : ",
        desc: (
          <a href="https://github.com/sanik01">
            <FiSend />
          </a>
        ),
      },
      {
        icon: <AiOutlineLink />,
        title: "Website : ",
        desc: (
          <a href="">
            <FiSend />
          </a>
        ),
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: "Chat Application",
    details: [
      {
        icon: <FiUser />,
        title: "Desc : ",
        desc: "This is a news website where we can find the day-to-day updates on different categories like science, business, entertainment, technology etc. •It was built with the help of a NEWS API call. Have embedded that api in my website •Have loading spinner and infinite scroll bar added •With the news, we can also see the author and resource of that news",
      },
      {
        icon: <FaCode />,
        title: "Technology Used : ",
        desc: "React JS",
      },
      {
        icon: <AiOutlineLink />,
        title: "Github : ",
        desc: (
          <a href="https://github.com/sanik01">
            <FiSend />
          </a>
        ),
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: "Keeper Software",
    details: [
      {
        icon: <FiUser />,
        title: "Desc : ",
        desc: "This is a complete MERN based project •Have created an e-notes platform where we can store all our day-to-day notes •Have created APIs using thunder client •Deletion, update and addition of notes is available",
      },
      {
        icon: <FaCode />,
        title: "Technology Used : ",
        desc: "React JS",
      },
      {
        icon: <AiOutlineLink />,
        title: "Github : ",
        desc: (
          <a href="https://github.com/sanik01">
            <FiSend />
          </a>
        ),
      },
      {
        icon: <AiOutlineLink />,
        title: "Website : ",
        desc: (
          <a href="">
            <FiSend />
          </a>
        ),
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: "Online Code Editor",
    details: [
      {
        title: "Desc : ",
        desc: "Create an Online Code Editor where you can edit your html code. User will be able to see the output of their HTML file in real time. For hiring interview you can do interview with ease it help Candidate's approach towards solution with code",
      },
      {
        title: "Technology Used : ",
        desc: "React JS",
      },
      {
        icon: <AiOutlineLink />,
        title: "Github : ",
        desc: (
          <a href="https://github.com/sanik01">
            <FiSend />
          </a>
        ),
      },
      {
        icon: <AiOutlineLink />,
        title: "Website : ",
        desc: (
          <a href="">
            <FiSend />
          </a>
        ),
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: "Admin Dashboard",
    details: [
      {
        icon: <FiUser />,
        title: "Desc : ",
        desc: "Developed a admin dashboard where  user can add, edit and delete contact and also a search funtionality. to search user",
      },
      {
        icon: <FaCode />,
        title: "Technology Used : ",
        desc: "React JS",
      },
      {
        icon: <AiOutlineLink />,
        title: "Github : ",
        desc: (
          <a href="https://github.com/sanik01">
            <FiSend />
          </a>
        ),
      },
      {
        icon: <AiOutlineLink />,
        title: "Website : ",
        desc: (
          <a href="">
            <FiSend />
          </a>
        ),
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];

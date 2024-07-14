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
  username: "Abhishek",
  subTitle: emoji(
    "A passionate Full Stack Software Developer who specialize in leveraging Java, JavaScript, React, Node.js, and MongoDB, along with a range of modern libraries and frameworks. I believe in the power of technology to transform ideas into reality. My focus is on crafting seamless user experiences through innovative design and robust coding practices. I embrace challenges as opportunities for growth and collaboration. With a passion for continuous improvement, Let’s create something amazing together 🚀 "
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Abhishekd5841",
  linkedin: "https://www.linkedin.com/in/abhishekdudpuri/",
  gmail: "abhishekd5841@gmail.com",
  
  display: true 
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK AND TRY NEW THINGS",
  skills: [
    emoji(
      "💨 Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("💨 Progressive Web Applications in normal and SPA Stacks"),
    emoji(
      "💨 Integration of third party services such as Payment Gateways / Firebase"
    ),
    emoji(
      "💨 Skills in optimizing website speed and performance using techniques such as lazy loading and code splitting."
    ),
    emoji(
      "💨 Implemented secure authentication methods (OAuth, JWT) and user authorization strategies to protect sensitive data."
    ),
    emoji(
      "💨 Proficient in identifying and resolving software issues through effective debugging techniques."
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
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
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
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "mongo-DB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/codeInLogo.webp"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "IIT Mumbai",
      logo: require("./assets/images/codeInLogo.webp"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "he",
      company: "hi",
      companylogo: require("./assets/images/codeInLogo.webp"),
      date: "June 2018 – Present",
      desc: "hi",
      descBullets: [
        "hi"
      ]
    },
    {
      role: "he he",
      company: "hi",
      companylogo: require("./assets/images/codeInLogo.webp"),
      date: "May 2017 – May 2018",
      desc: "hi"
    },
    {
      role: "he he he",
      company: "hi",
      companylogo: require("./assets/images/codeInLogo.webp"),
      date: "Jan 2015 – Sep 2015",
      desc: "hi"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME PROJECTS THAT I CREATED TO HONE MY SKILLS",
  projects: [
    {
      image: require("./assets/images/Shoplift.png"),
      projectName: "ShopLift",
      projectDesc: "Shoplift is a full-stack Ecommerce Web application created with the help of MERN stack which provide a secure and streamline user experience,by the integration of payment gateway and JWT for authentication and authorisation",
      footerLink: [
        {
          name: "Github Repo",
          url: "https://github.com/Abhishekd5841/ShopLift-Project"
        },
        {
          name: "Visit Website",
          url: "https://shoplift-project.onrender.com"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Cloudpoint.png"),
      projectName: "CloudPoint",
      projectDesc: "Cloudpoint is API based web application  that provide real-time Weather data foor various cities. Utilized HTML, CSS, and JavaScript to create a responsive and user-freindly interface. It uses geolocation feature to detect user location automatically.",
      footerLink: [
        {
          name: "Github Repo",
          url: "https://github.com/Abhishekd5841/CloudPoint"
        },
        {
          name: "Visit Website",
          url: "https://cloudpoint-24.netlify.app"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Gate Qualified",
      subtitle:
        "Achieved All India Rank of 4376 out of 123,967 aspirants in the GATE (Graduate Aptitude Test in Engineering) examination",
      image: require("./assets/images/gate.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.google.com/search?q=hi&oq=hi&gs_lcrp=EgZjaHJvbWUqBwgAEAAYjwIyBwgAEAAYjwIyDAgBEAAYQxiABBiKBTIMCAIQABhDGIAEGIoFMgwIAxAAGEMYgAQYigUyDAgEEAAYQxiABBiKBTIGCAUQRRg8MgYIBhBFGD0yBggHEEUYPNIBCTExMDU4ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8"
        }
      ]
    },
    {
      title: "HackerRank",
      subtitle:
        "Earned a 5-star rating in Java on HackerRank, showcasing advanced proficiency in Java Programming and present also on leetcode",
      image: require("./assets/images/Hackerrank.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Hackerrank Profile",
          url: "https://www.google.com/search?q=hi&oq=hi&gs_lcrp=EgZjaHJvbWUqBwgAEAAYjwIyBwgAEAAYjwIyDAgBEAAYQxiABBiKBTIMCAIQABhDGIAEGIoFMgwIAxAAGEMYgAQYigUyDAgEEAAYQxiABBiKBTIGCAUQRRg8MgYIBhBFGD0yBggHEEUYPNIBCTExMDU4ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8"
        },
        {
          name: "Leetcode Profile",
          url: "https://leetcode.com/u/abhishekd5841/"
        }
      ]
    },

    {
      title: "Python for Data Science",
      subtitle: "Completed Certifcation from INFOSYS for PYTHON FOR DATA SCIENCE",
      image: require("./assets/images/dataScience.jpg"),
      imageAlt: "Data Science Certification",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.google.com/search?q=hi&oq=hi&gs_lcrp=EgZjaHJvbWUqBwgAEAAYjwIyBwgAEAAYjwIyDAgBEAAYQxiABBiKBTIMCAIQABhDGIAEGIoFMgwIAxAAGEMYgAQYigUyDAgEEAAYQxiABBiKBTIGCAUQRRg8MgYIBhBFGD0yBggHEEUYPNIBCTExMDU4ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "abhishek58@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

const greeting = {
  username: "Tejaaswini Narendra",
  mainTitle:"Ahoy!",
  title: "I'm Tejaaswini Narendra",
  // subTitle: "I Churn Ideas into Reality!",
};


const socialMediaLinks = {

  github: "https://github.com/Tejaaswini",
  linkedin: "https://www.linkedin.com/in/tejaaswini-narendra-012b93153/",
  gmail: "tejnaren07@gmail.com",
  gitlab: "https://gitlab.com/tejaaswini",
  dribble: "https://dribbble.com/tejnaren",
  instagram: "https://www.instagram.com/tej_naren/",
  twitter: "https://twitter.com/tejnaren07"
};

const skillsSection = {
  title: "What I Know",
  subTitle: "Exploring the tech stack infinities and Blockchain",
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
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "ethereum",
      fontAwesomeClassname: "fab fa-ethereum"
    },
    {
      skillName: "hyperledger fabric",
      fontAwesomeClassname: "fa fa-code"
    }
  ]
};

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Frontend Developer",  
      company: "Codemonk",
      companylogo: require("./assets/images/codemonk.png"),
      date: "April 2020– Present",
      desc: "Building Complex applications using better technologies to cater easy usage of everyday things",
    },
    {
      role: "Blockchain Intern",   
      company: "Curl Analytics",
      companylogo: require("./assets/images/curl.jpg"),
      date: "August 2019 – March 2020",
      desc: "Researched on Identity Management in Blockchain. Concentrated mainly on Hyperledger Fabric"
    },
    {
      role: "Summer Intern",   
      company: "IIIT Allahabad",
      companylogo: require("./assets/images/iiitA.png"),
      date: "July 2019 – August 2019",
      desc: "Created a LSTM model for VANETs"
    },
    {
      role: "Blockchain Intern",   
      company: "IoTracx",
      companylogo: require("./assets/images/iotracx.png"),
      date: "June 2018 – November 2018",
      desc: "Worked on a project revolving supply chain, a Farm-to-Fork model on Hyperledger Fabric"
    },
    {
      role: "Blockchain Intern",   
      company: "QTC Plus",
      companylogo: require("./assets/images/qtc.png"),
      date: "June 2018 – November 2018",
      desc: "Worked on package tracing project based on Ethereum platform"
    },
  ]
};

const projectSection = {
  title: "Fun Projects",
  subtitle: "Playing around and experimenting cool stuff!!",

  project: [
    {
      title: "Project Pragma",
      subtitle: "Final Year Project based on Ethereum that aims on P2P file transfer",
      code_url: "https://github.com/Tejaaswini/Project-Pragma",
    },
    {
      title: "Track Covid",
      subtitle: "Tracking COVID-19 cases around the world",
      code_url: "https://github.com/Tejaaswini/covid_tracker",
    },
    {
      title: "Where's My Recipe",
      subtitle: "A recipe finding application based on ReactJS",
      code_url: "https://github.com/Tejaaswini/Wheres-my-Recipe",
    }
  ]
};


const contactInfo = {
  // subtitle: "Let's Discuss the universe.",
  // number: "+91 8722709655",
  // email_address: "tejnaren07@gmail.com"
};


export { greeting, workExperiences, contactInfo, socialMediaLinks, skillsSection,projectSection};

import projects from "./projects";
import skillList from "./skillList";
import socialLinks from "./socialLinks";

const personalData = {
  name: "Dipankar Paul",
  designation: "A Frontend Developer and Blog Writer.",
  email: "dipankarpaul.dev@gmail.com",
  phoneNumber: "+91-7407725686",
  aboutMe: {
    title: "What I Do",
    description:
      "I design and develop user interfaces with react that are not only visually appealing but also functional and user-friendly. My skills in frontend technologies allow me to create responsive websites and web applications that work seamlessly across devices. I also enjoy sharing my knowledge and insights through my blogs on Hashnode, where I write about JavaScript, React and Rust.",
  },
  skills: {
    title: "Skills & Tech",
    skillList,
  },
  socialLinks,
  projects,
  resume: "https://357429452906074112.hello.cv/",
  location: "Falakata, West Bengal, India",
};

export default personalData;

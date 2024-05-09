const projects = [
  {
    title: "ReAPI Clint",
    description:
      "A simple Postman alternative, a popular API testing tool, built using React. This project aims to provide a user-friendly interface for making API requests and visualizing responses.",
    features: [
      "Create and send HTTP requests with various methods (GET, POST, PUT, PATCH, DELETE)",
      "Send your request data in JSON format",
      "View responses in a structured and easy-to-read format",
      "View responses in a fullscreen format if response is big enough",
      "View a history of your sent requests",
      "Manage history of your sent requests, like delete request, repeat request and clear history",
      "Get code snippet for JavaScript Axios and Fetch methods",
    ],
    tags: [
      "javascript",
      "reactjs",
      "react router dom",
      "zustand",
      "mantine",
      "axios",
      "bytes",
      "vite",
    ],
    links: {
      demo: "https://reapi-client.vercel.app/",
      github: "https://github.com/dipankarpaul2k/ReAPI_Client.git",
    },
    slug: "reapi-client",
    images: [
      "https://res.cloudinary.com/dysni0qfj/image/upload/v1714926609/ReAPI%20Client%20Project/reapi-client-main-page.png",
      "https://res.cloudinary.com/dysni0qfj/image/upload/v1713343022/ReAPI%20Client%20Project/ReAPI_Client_POST_request.png",
      "https://res.cloudinary.com/dysni0qfj/image/upload/v1713343388/ReAPI%20Client%20Project/ReAPI_Client_fullscreen_mode_response.png",
      "https://res.cloudinary.com/dysni0qfj/image/upload/v1713428699/ReAPI%20Client%20Project/ReAPI_Client_history.png",
      "https://res.cloudinary.com/dysni0qfj/image/upload/v1713428699/ReAPI%20Client%20Project/ReAPI_Client_code_snippet.png",
    ],
    date: "2024-04-10",
  },
  {
    title: "ReTube",
    description:
      "An almost youTube clone project built with ReactJs, Material UI and Youtube-v3 API from Rapid API hub.",
    features: [
      "You have a homepage",
      "A search feed",
      "A channel detail page with basic information and videos",
      "A video detail page with views, likes, published time, description and comments",
      "Fully responsive design",
    ],
    tags: [
      "javascript",
      "reactjs",
      "react router dom",
      "zustand",
      "mantine",
      "axios",
    ],
    links: {
      demo: "https://retube-nine.vercel.app/",
      github: "https://github.com/dipankarpaul2k/jsm_youtube_clone.git",
    },
    slug: "retube",
    images: [
      "https://res.cloudinary.com/dysni0qfj/image/upload/v1714926725/Retube/retube-nine-4.png",
      "https://res.cloudinary.com/dysni0qfj/image/upload/v1714926721/Retube/retube-nine-5.png",
      "https://res.cloudinary.com/dysni0qfj/image/upload/v1714926740/Retube/retube-nine-1.png",
    ],
    date: "2024-03-10",
  },
  {
    title: "Wordinary",
    description: "A simple online dictionary built using ReactJs.",
    features: [
      "Search word of your choice",
      "See definitions along with examples, synonyms and antonyms(if exists)",
      "Save the words you like in bookmark and manage it",
      "Bookmark's response will be saved in local storage, so you don't have to call API again",
      "",
      "All your searches will be saved in history",
    ],
    tags: [
      "javascript",
      "reactjs",
      "react router dom",
      "zustand",
      "mantine",
      "axios",
      "vite",
    ],
    links: {
      demo: "https://wordinary-sigma.vercel.app/",
      github: "https://github.com/dipankarpaul2k/Wordinary.git",
    },
    slug: "wordinary",
    images: [
      "https://res.cloudinary.com/dysni0qfj/image/upload/v1715191994/Wordinary/Wordinary-1_evbt85.png",
      "https://res.cloudinary.com/dysni0qfj/image/upload/v1715191996/Wordinary/Wordinary-2_iyolgq.png",
      "https://res.cloudinary.com/dysni0qfj/image/upload/v1715191992/Wordinary/Wordinary-3_qk1ikj.png",
      "https://res.cloudinary.com/dysni0qfj/image/upload/v1715191990/Wordinary/Wordinary-4_ijsaeu.png",
    ],
    date: "2024-01-10",
    warning:
      "For some reason React-router-dom's Outlet is not working properly. Please run this project locally or if you have any solution then please contact me.",
  },
  {
    title: "HomeBudget",
    description: "It is a simple budgeting application.",
    features: [
      "you can create a list of budgets",
      "You can also add a list of expenses to an individual budget",
      "You can view each budget individually",
      "You can delete a budget or you can delete a specific expense of the budget",
      "You can also see all the expenses in one page",
    ],
    tags: ["javascript", "reactjs", "react router dom"],
    links: {
      demo: "https://homebudget-react.vercel.app/",
      github: "https://github.com/dipankarpaul2k/Budget_App_React.git",
    },
    slug: "homebudget",
    images: [
      "https://res.cloudinary.com/dysni0qfj/image/upload/v1714927057/HomeBudget%20app/homebudget-1.png",
      "https://res.cloudinary.com/dysni0qfj/image/upload/v1714927061/HomeBudget%20app/homebudget-2.png",
      "https://res.cloudinary.com/dysni0qfj/image/upload/v1714927066/HomeBudget%20app/homebudget-3.png",
      "https://res.cloudinary.com/dysni0qfj/image/upload/v1714927070/HomeBudget%20app/homebudget-4.png",
    ],
    date: "2023-12-10",
  },
  {
    title: "Password Generator",
    description:
      "This is a simple web application for generating strong and secure passwords.",
    features: [
      "Users can specify the desired length of the generated password",
      "Users can choose which character sets to include in the generated password",
      "Users can click the copy icon next to the generated password to copy it to their clipboard",
      'The "Reset" button allows users to clear the input fields and start over',
      "The application provides a notification system that displays success, error, and invalid messages",
    ],
    tags: ["html", "css", "javascript"],
    links: {
      demo: "https://password-generator-tau-ochre.vercel.app/",
      github: "https://github.com/dipankarpaul2k/Password-Generator.git",
    },
    slug: "password-generator",
    images: [
      "https://res.cloudinary.com/dysni0qfj/image/upload/v1715191462/password%20generator/password-generator_idr69h.png",
    ],
    date: "2023-11-10",
  },
  {
    title: "Text to Speech App",
    description:
      "This is a simple web application that allows users to convert text into speech using the Speech Synthesis Web Speech API.",
    features: [
      "Choose from a list of available voices",
      "Adjust speech rate and pitch",
      "Easily input text for conversion to speech",
      "Start and stop speech synthesis",
    ],
    tags: ["html", "css", "javascript"],
    links: {
      demo: "https://text-to-speech-cyan-six.vercel.app/",
      github: "https://github.com/dipankarpaul2k/Text-to-Speech.git",
    },
    slug: "text-to-speech-app",
    images: [
      "https://res.cloudinary.com/dysni0qfj/image/upload/v1715191485/text%20to%20speech%20app/text-to-speech-app_a0zaph.png",
    ],
    date: "2023-10-10",
  },
  {
    title: "Cynthia Ugwu Website Clone",
    description:
      "A clone of the visually stunning cynthiaugwu.com website, showcasing frontend development skills with responsive design, interactive animations, and smooth navigation.",
    features: [
      "Responsive design for various screen sizes and devices",
      "Interactive animations and transitions",
      "Smooth scrolling and navigation",
    ],
    tags: ["html", "css", "javascript"],
    links: {
      demo: "https://cynthia-ugwu-landing-page-clone.vercel.app/",
      github:
        "https://github.com/dipankarpaul2k/Cynthia-Ugwu-Landing-Page-Clone.git",
    },
    slug: "cynthia-ugwu-website-clone",
    images: [
      "https://res.cloudinary.com/dysni0qfj/image/upload/v1714925963/Landing%20Pages/cynthia-ugwu-1.png",
      "https://res.cloudinary.com/dysni0qfj/image/upload/v1715191270/Landing%20Pages/cynthia-ugwu-2.png",
      "https://res.cloudinary.com/dysni0qfj/image/upload/v1715191270/Landing%20Pages/cynthia-ugwu-3.png",
    ],
    date: "2023-09-10",
  },
];

export default projects;

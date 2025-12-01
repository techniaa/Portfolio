export const myProjects = [
  {
    id: 1,
    title: "Movie Recommender System",
    description:
      "A machine-learning based movie recommendation system using content-based and collaborative filtering techniques.",
    subDescription: [
      "Built recommendation pipeline using Python, Pandas, NumPy, and Scikit-Learn.",
      "Used cosine similarity to recommend movies based on genres, cast, and descriptions.",
      "Designed a clean web interface using Streamlit.",
      "Implemented real-time recommendation generation with optimized vectorization.",
    ],
    href: "https://movie-recommender-system-xpfd3kpn9qtknwxoulrnc8.streamlit.app/",
    logo: "",
    image: "/assets/projects/movie-recommender.jpg",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/python.svg" },
      { id: 2, name: "Scikit-Learn", path: "/assets/logos/scikit-learn.svg" },
      { id: 3, name: "Pandas", path: "/assets/logos/Pandas.svg" },
      { id: 4, name: "Streamlit", path: "/assets/logos/Streamlit.svg" },
    ],
  },

  {
    id: 2,
    title: "Fake & Real News Detection (In Progress)",
    description:
      "A machine learning system that classifies news as real or fake using NLP, traditional ML models, and transformer-based transfer learning.",
    subDescription: [
      "Implementing NLP preprocessing: tokenization, stopword removal, lemmatization.",
      "Using TF-IDF vectorization to convert text into numerical features.",
      "Integrating BERT-based transfer learning for deeper semantic understanding.",
      "Adding source credibility scoring using domain reputation & publishing patterns.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/fake_news.png", 
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/python.svg" },
      { id: 2, name: "NLP", path: "/assets/logos/nlp.png" }, 
    
      { id: 4, name: "Scikit-Learn", path: "/assets/logos/scikit-learn.svg" },
    ],
  },

  {
    id: 3,
    title: "Mini Projects Collection",
    description:
      "A set of small-scale projects built to strengthen logic, problem solving, and programming fundamentals.",
    subDescription: [
      "Includes projects like To-Do App, Weather App, Calculator, and basic C++/Python programs.",
      "Practiced API integration, DOM manipulation, and responsive UI building.",
      "Strengthened fundamentals in JavaScript, React basics, and modern CSS.",
      "Improved problem-solving using multiple small exercises and utilities.",
    ],
    href: "https://mini-projects1-five.vercel.app/",
    logo: "",
    image: "/assets/projects/mini_projects.png",
    tags: [
      { id: 1, name: "JavaScript", path: "/assets/logos/javascript.svg" },
      { id: 2, name: "Tailwind", path: "/assets/logos/tailwindcss.svg" },
      { id: 3, name: "HTML/CSS", path: "/assets/logos/html5.svg" },
    ],
  },
];


// ----------------------------------------------------------------------

export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: "/assets/socials/whatsapp.svg",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/neha-shah-056332247/",
    icon: "/assets/socials/linkedin.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/jugnii_jewelss/?hl=en",
    icon: "/assets/socials/instagram.svg",
  },
  {
    
    name: "Medium",
    href: "https://medium.com/@nehagc8485",
  }
];

// ----------------------------------------------------------------------
export const experiences = [
  {
    title: "Research Analyst",
    job: "Bootup360",
    date: "Jan 2024 – Mar 2024",
    contents: [
      "Delivered actionable insights on the MSME sector through analysis of policies, funding opportunities, and market growth trends.",
      "Developed research reports that supported strategic decisions for digital transformation initiatives aimed at small businesses.",
      "Collaborated across teams and presented research findings to influence client strategies.",
    ],
  },
  {
    title: "Blockchain Developer (TSOC24 Contributor)",
    job: "Timechain Labs",
    date: "Summer 2024",
    contents: [
      "Developed a full-stack web-based Ethereum wallet using React and blockchain libraries, enabling seamless wallet management and simulated transactions.",
      "Integrated secure wallet generation using mnemonic seed phrases and implemented real-time balance display via external API integration.",
      "Contributed to blockchain-focused coding initiatives and enhanced decentralized application development skills.",
    ],
  },
  {
    title: "Freelance Developer",
    job: "Self-Employed",
    date: "2024 – Present",
    contents: [
      "Built and deployed modern web projects, including interactive interfaces and AI-powered apps using React, Node.js, and LLM Agent frameworks.",
      "Continuously expanding expertise in backend and full-stack development through hands-on learning and project delivery.",
    ],
  },
];

export const reviews = [
  {
    name: "Teacher",
    username: "@mentor",
    body: "Neha is consistent and committed to improving her development skills.",
    img: "https://robohash.org/neha1",
  },
  {
    name: "Friend",
    username: "@friend",
    body: "Her projects are simple yet very clean and well-structured.",
    img: "https://robohash.org/neha2",
  },
];

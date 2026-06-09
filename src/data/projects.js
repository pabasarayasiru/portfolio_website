import shopingImage from "../../public/projects/greencart.jpg";
import wearosImage from "../../public/projects/wearos.png";
import healthMonitoringImage from "../../public/projects/sleep_monitoring.png";
import pharmacyImage from "../../public/projects/pharmacy.png";
import trashTradeImage from "../../public/projects/trash_trade.png";
import eCalendarImage from "../../public/projects/e_calendar.png";
import smartPulseImage from "../../public/projects/fyp.png";

export const projects = [
  {
    id: 7,
    title: "Advanced Wireless CSI Sensing for Recumbent Position Monitoring",
    description:
      "Final Year Research Project focused on contactless health monitoring using Wi-Fi Channel State Information (CSI). Developed machine learning models and a real-time monitoring platform to detect presence, body posture, respiration rate, and heart rate without wearable devices or cameras.",
    image: smartPulseImage,
    category: "Research",
    technologies: [
      "Python",
      "Flutter",
      "Machine Learning",
      "ESP32",
      "WebSocket",
      "Signal Processing",
      "Wi-Fi CSI"
    ],
    metrics: "high Accuracy in Posture & Vital Sign Monitoring",
    demoUrl: "",
    githubUrl: "",
  },
  {
    
    id: 1,
    title: "Microservices-Based Online Shopping Platform",
    description:
      "A scalable e-commerce platform built using microservices architecture with independent Product, Order, Inventory, and Notification services.",
    image: shopingImage,
    category: "Full Stack",
    technologies: [
      "Spring Boot",
      "Spring Cloud",
      "Kafka",
      "MySQL",
      "MongoDB",
      "React",
      "Docker",
    ],
    metrics: "Scalable microservices architecture",
    demoUrl: "",
    githubUrl: "https://github.com/pabasarayasiru/Microservice-project",
  },

  {
    id: 2,
    title: "Real-Time Heart Rate Monitoring Wear OS App",
    description:
      "Wear OS application that collects and streams real-time heart rate data using Android Health Services API for analysis and research.",
    image: wearosImage,
    category: "Wear OS",
    technologies: [
      "Kotlin",
      "Wear OS",
      "Android Health Services API",
      "Python",
      "Android Studio",
    ],
    metrics: "Real-time physiological monitoring",
    demoUrl: "",
    githubUrl: "https://github.com/pabasarayasiru/HeartRate-WatchApp",
  },

  {
    id: 3,
    title: "Real-Time Health Monitoring System",
    description:
      "A real-time health tracking system using WebSocket-based streaming, Firebase Firestore, and cloud backend deployment.",
    image: healthMonitoringImage,
    category: "Full Stack",
    technologies: [
      "Flutter",
      "Node.js",
      "WebSocket",
      "Firebase Firestore",
      "Python",
      "numpy",
      "pandas",
      "Render",
    ],
    metrics: "Low-latency health data streaming",
    demoUrl: "https://drive.google.com/file/d/1OuBFueTA89cvIM5jc3Crj-G8_c-GziCd/view",
    githubUrl: "https://github.com/pabasarayasiru/Health-App-WIFI-CSI-monitoring",
  },

  {
    id: 4,
    title: "QuickMed – Pharmacy Locator App",
    description:
      "Mobile application that helps users locate nearby pharmacies with real-time search and secure authentication.",
    image: pharmacyImage,
    category: "Mobile App",
    technologies: [
      "React Native",
      "Node.js",
      "Firebase Auth",
      "Firestore",
      "JavaScript",
      "Vercel",
    ],
    metrics: "Fast pharmacy discovery",
    demoUrl: "https://drive.google.com/file/d/1rMdbL1YPv7u5wbzXnQArt1v7Ku4YchQB/view",
    githubUrl: "https://github.com/pabasarayasiru/quickMed-mobile-app",
  },

  {
    id: 5,
    title: "TrashTrade – Recycling Marketplace App",
    description:
      "A mobile marketplace for trading recyclable materials with secure authentication and REST API backend.",
    image: trashTradeImage,
    category: "Mobile App",
    technologies: [
      "Flutter",
      ".NET",
      "MySQL",
      "JWT",
      "AWS",
    ],
    metrics: "Sustainable waste trading platform",
    demoUrl: "",
    githubUrl: "",
  },

  {
    id: 6,
    title: "E-Calendar Web Application",
    description:
      "A digital calendar system designed to replace traditional diary systems in enterprise environments.",
    image: eCalendarImage,
    category: "Full Stack",
    technologies: [
      "ReactJS",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "Tailwind CSS",
    ],
    metrics: "Enterprise scheduling system",
    demoUrl: "",
    githubUrl: "https://github.com/navaneethanbc/e-calendar",
  },
];

export const categories = [
  "All",
  "Mobile App",
  "Full Stack",
  "Research",
  "Wear OS",
];


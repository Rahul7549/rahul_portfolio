
// import curatusImg from './curatus.jpg'
// import screenCareImg from './screenCare.jpeg'
import covidTrakerImg from './covidTrakerApp.png'
import netflixImg from './netflixClone.png'
import weatherStatusImg from './weatherApplication.png'
import RequestEase from './RequestEase.png'
import adminPanelImg from './admin-panel.png'



const projectCardData = [
  {
    imgsrc: netflixImg,
    title: "Netflix Clone",
    about:
      "Developed a Netflix-inspired streaming UI using React and TMDB APIs. Implemented dynamic movie browsing, responsive layouts, and API-driven content rendering. Deployed the application on Firebase for seamless global access.",
    view: "https://netflix-clone-e7320.web.app/",
    source: "https://github.com/Rahul7549/netflix_clone",
  },
  {
    imgsrc: adminPanelImg,
    title: "Shipment Management Admin Panel",
    about:
      "Built a scalable admin dashboard using Angular 16 to manage users, products, and shipment workflows. Implemented role-based access control, modular architecture, and interactive dialogs for efficient operations and real-time tracking.",
    view: "https://github.com/Rahul7549/shipment-admin-ui",
    source: "https://github.com/Rahul7549/shipment-admin-ui",
  },
  {
    imgsrc: RequestEase,
    title: "RequestEase Service Portal",
    about:
      "Designed a service request management platform with dedicated user and admin modules. Enabled streamlined service activation requests, approval workflows, and centralized request tracking to enhance operational efficiency.",
    view: "https://rahul7549.github.io/user-service.github.io/",
    source: "https://github.com/Rahul7549/user-service.github.io",
  },
  {
    imgsrc: covidTrakerImg,
    title: "COVID-19 Global Tracker",
    about:
      "Created a data visualization dashboard using React to monitor global COVID-19 statistics. Integrated real-time APIs and interactive charts to display cases, recoveries, and country-level insights.",
    view: "https://rahul7549.github.io/covid-tracker/",
    source: "https://github.com/Rahul7549/covid-tracker",
  },
  {
    imgsrc: weatherStatusImg,
    title: "Weather Forecast Application",
    about:
      "Developed a weather forecasting app using React with API integration to display real-time weather updates and short-term forecasts across multiple cities with a clean and responsive UI.",
    view: "https://rahul7549.github.io/weather-status/",
    source: "https://github.com/Rahul7549/weather-status",
  },
];

export const newProjectCardData = [
  {
    id: 1,
    title: "Netflix Clone",
    description:
      "Developed a Netflix-inspired streaming UI using React and TMDB APIs. Implemented dynamic movie browsing, responsive layouts, and API-driven content rendering. Deployed the application on Firebase for seamless global access.",
    images: [netflixImg,netflixImg,netflixImg], // add more screenshots here later
    live: "https://netflix-clone-e7320.web.app/",
    github: "https://github.com/Rahul7549/netflix_clone",
  },
  {
    id: 2,
    title: "Shipment Management Admin Panel",
    description:
      "Built a scalable admin dashboard using Angular 16 to manage users, products, and shipment workflows. Implemented role-based access control, modular architecture, and interactive dialogs for efficient operations and real-time tracking.",
    images: [adminPanelImg,netflixImg,netflixImg],
    live: "https://github.com/Rahul7549/shipment-admin-ui",
    github: "https://github.com/Rahul7549/shipment-admin-ui",
  },
  {
    id: 3,
    title: "RequestEase Service Portal",
    description:
      "Designed a service request management platform with dedicated user and admin modules. Enabled streamlined service activation requests, approval workflows, and centralized request tracking to enhance operational efficiency.",
    images: [RequestEase,adminPanelImg],
    live: "https://rahul7549.github.io/user-service.github.io/",
    github: "https://github.com/Rahul7549/user-service.github.io",
  },
  {
    id: 4,
    title: "COVID-19 Global Tracker",
    description:
      "Created a data visualization dashboard using React to monitor global COVID-19 statistics. Integrated real-time APIs and interactive charts to display cases, recoveries, and country-level insights.",
    images: [covidTrakerImg],
    live: "https://rahul7549.github.io/covid-tracker/",
    github: "https://github.com/Rahul7549/covid-tracker",
  },
  {
    id: 5,
    title: "Weather Forecast Application",
    description:
      "Developed a weather forecasting app using React with API integration to display real-time weather updates and short-term forecasts across multiple cities with a clean and responsive UI.",
    images: [weatherStatusImg],
    live: "https://rahul7549.github.io/weather-status/",
    github: "https://github.com/Rahul7549/weather-status",
  },
];


export default projectCardData;
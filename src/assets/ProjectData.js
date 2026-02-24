
// import curatusImg from './curatus.jpg'
// import screenCareImg from './screenCare.jpeg'
import covidTrakerImg from './covidTrakerApp.png'
import netflixImg from './netflixClone.png'
import weatherStatusImg from './weatherApplication.png'
// import RequestEase from './RequestEase.png'
import adminPanelImg from './admin-panel.png'
import RequestEase from './RequestEase.png'

import netFlixImg1 from './netflix-ss/Screenshot-1.png';
import netFlixImg2 from './netflix-ss/Screenshot-2.png'
import netFlixImg3 from './netflix-ss/Screenshot-3.png'

import shipmentAdminPane1 from './admin-shipment/Screenshot-1.png';
import shipmentAdminPane2 from './admin-shipment/Screenshot-2.png';
import shipmentAdminPane3 from './admin-shipment/Screenshot-3.png';


import shipmentImg1 from './shipment-dashboard/Screenshot-1.png';
import shipmentImg2 from './shipment-dashboard/Screenshot-2.png';
import shipmentImg3 from './shipment-dashboard/Screenshot-3.png';
import shipmentImg4 from './shipment-dashboard/Screenshot-4.png';
// import shipmentImg5 from './shipment-dashboard/Screenshot-5.png';

import matrixImg1 from './matrix-dashboard/Screenshot-1.png';
import matrixImg2 from './matrix-dashboard/Screenshot-2.png';
import matrixImg3 from './matrix-dashboard/Screenshot-3.png';
import matrixImg4 from './matrix-dashboard/Screenshot-4.png';
import matrixImg5 from './matrix-dashboard/Screenshot-5.png';








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

  /* ================= ENTERPRISE PROJECTS ================= */

  {
    id: 1,
    title: "Shipment Dashboard",
    period: "Nov 2024 – Present",
    tech: [
      "Angular 17",
      "TypeScript",
      "RxJS",
      "NgRx",
      "PrimeNG",
      "REST APIs",
      "JWT Auth",
      "Lazy Loading",
      "Performance Optimization"
    ],
    description:
      "Built an enterprise-grade logistics dashboard delivering real-time shipment visibility and KPI-driven insights. Implemented advanced filtering, ETD/ETA sorting, milestone tracking with contextual side panels, and shipment drill-downs with cargo details. Optimized performance and implemented secure authentication workflows.",
    images: [shipmentImg1, shipmentImg2,shipmentImg3,shipmentImg4]
  },

  {
    id: 2,
    title: "Sales, Revenue & Performance Analytics System",
    period: "Feb 2025 – Present",
    tech: [
      "Angular 17",
      "RxJS",
      "NgRx",
      "ApexCharts",
      "JWT Authentication",
      "State Management",
      "Data Visualization",
      "Role-Based Access"
    ],
    description:
      "Designed and developed a multi-module analytics platform to track sales, revenue trends, and profitability insights. Implemented scalable state management, secure authentication, and interactive dashboards with year-over-year analysis to enable data-driven decision making.",
    images: [matrixImg1, matrixImg2, matrixImg3, matrixImg4, matrixImg5]
  },

  /* ================= PROFESSIONAL PROJECTS ================= */

  {
    id: 3,
    title: "Shipment Management Admin Panel",
    period: "2024",
    tech: [
      "Angular 16",
      "TypeScript",
      "RxJS",
      "PrimeNG",
      "REST APIs",
      "Role-Based Access",
      "Component Architecture"
    ],
    description:
      "Built a scalable admin dashboard to manage users, products, and shipment workflows with role-based access and modular architecture. Implemented interactive dialogs, data tables, and workflow tracking to improve operational efficiency.",
    images: [shipmentAdminPane1, shipmentAdminPane2, shipmentAdminPane3],
    live: "https://github.com/Rahul7549/shipment-admin-ui",
    github: "https://github.com/Rahul7549/shipment-admin-ui"
  },

  /* ================= MID-LEVEL PROJECTS ================= */

  {
    id: 4,
    title: "Netflix Clone",
    period: "2023",
    tech: [
      "React",
      "Redux",
      "REST APIs",
      "Firebase",
      "Responsive Design",
      "Component Architecture"
    ],
    description:
      "Developed a Netflix-inspired streaming platform using React and TMDB APIs with dynamic movie browsing, reusable components, and responsive layouts. Deployed on Firebase for global access.",
    images: [netFlixImg1, netFlixImg2, netFlixImg3],
    live: "https://netflix-clone-e7320.web.app/",
    github: "https://github.com/Rahul7549/netflix_clone"
  },

  {
    id: 5,
    title: "RequestEase Service Portal",
    period: "2023",
    tech: [
      "Angular",
      "TypeScript",
      "REST APIs",
      "Authentication",
      "Workflow Automation"
    ],
    description:
      "Designed a service request platform with user and admin modules, enabling streamlined approval workflows and centralized request tracking to enhance operational efficiency.",
    images: [RequestEase],
    live: "https://rahul7549.github.io/user-service.github.io/",
    github: "https://github.com/Rahul7549/user-service.github.io"
  },

  /* ================= EARLY PROJECTS ================= */

  {
    id: 6,
    title: "COVID-19 Global Tracker",
    period: "2022",
    tech: [
      "React",
      "API Integration",
      "Charts",
      "Data Visualization",
      "Responsive UI"
    ],
    description:
      "Built a global COVID-19 statistics dashboard with real-time API integration and interactive charts to visualize cases, recoveries, and country-level insights.",
    images: [covidTrakerImg],
    live: "https://rahul7549.github.io/covid-tracker/",
    github: "https://github.com/Rahul7549/covid-tracker"
  },

  {
    id: 7,
    title: "Weather Forecast Application",
    period: "2022",
    tech: [
      "React",
      "API Integration",
      "State Management",
      "Responsive UI"
    ],
    description:
      "Developed a weather forecasting application displaying real-time weather conditions and short-term forecasts across multiple cities with a clean responsive interface.",
    images: [weatherStatusImg],
    live: "https://rahul7549.github.io/weather-status/",
    github: "https://github.com/Rahul7549/weather-status"
  }
];


export default projectCardData;
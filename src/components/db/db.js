import Project1InnerPhoto from "../../images/fullPageEdited.7db95c71.jpg";
import Project1Video1 from "../../images/Tira/project1_homePage.gif";
import Project1Video2 from "../../images/Tira/project1_shop.gif";
import Project1Video3 from "../../images/Tira/responsive.gif";
import Project1Video4 from "../../images/Tira/shop.gif";
import Project1Video5 from "../../images/Tira/bought.gif";

import Project2InnerPhoto from "../../images/project2.jpg";
import Project2Video1 from "../../images/mflix/Mflix_Header.gif";
import Project2Video2 from "../../images/mflix/movieSingle.gif";
import Project2Video4 from "../../images/mflix/ThemeChanger.gif";
import Project2Video3 from "../../images/mflix/movieList.gif";
import Project2Video5 from "../../images/mflix/stripe.gif";

import Project3InnerPhoto from "../../images/project3_inner.jpg";
import Project3Video1 from "../../images/realtor/homepage.gif";
import Project3Video2 from "../../images/realtor/responsive.gif";
import Project3Video3 from "../../images/realtor/search.gif";
import Project3Video4 from "../../images/realtor/niagara search.gif";
import Project3Video5 from "../../images/realtor/homevaluation.gif";

const projects = [
  {
    id: 1,
    name: "Tira",
    image: Project1InnerPhoto,
    descEn:
      "This is a full stack E-commerce application developed on top of React, Redux, Mongo and Express. The User can purchase the jewellery.",
    descFr:
      "C'est une application full-stack qui est développée en React, Redux, MongoDB et Express.js. l'Utilisateur peut acheter des bijoux.",
    technologies: [
      "Express.js",
      "React",
      "React Framer Motion",
      "Redux",
      "Javascript(ES6)/Async-Await",
      "JWT(Json Web Token)",
      "Paypal API",
      "MongoDB",
      "Mongoose",
      "GSAP",
      "Node-Sass",
      "Flexbox/Grid",
      "Axios",
      "Web Storage API",
      "Cookies",
      "Bcrypt.js",
      "Dotenv",
      "Git and Github",
      "Heroku",
      "Figma",
      "Google Fonts",
    ],
    video: [
      Project1Video1,
      Project1Video2,
      Project1Video3,
      Project1Video4,
      Project1Video5,
    ],
    url: "https://tiraecommerce.herokuapp.com/",
  },
  {
    id: 2,
    name: "MFlix",
    image: Project2InnerPhoto,
    descEn:
      "This is a full stack E-commerce application developed with Express, Handlebars and Javascript. All the data is stored in MongoDB. An admin account is set up so that the admin can change the details of the films and the series. Users can buy and rent movies or series",
    descFr:
      "C'est une application Full-Stack qui est développée en Express.js, Handlebars et Javascript. Toutes les données sont stockées dans le MongoDB. Il y a un compte de administrateur pour que l'administrateur puisse changer les détails de films et de series. l'utilisateur peut louer ou acheter des films et des séries.",
    technologies: [
      "Express.js",
      "Express-Handlebars",
      "Javascript(ES6)/Async-Await",
      "MongoDB",
      "Mongoose",
      "GSAP",
      "Node-Sass",
      "Flexbox/Grid",
      "Axios",
      "Express-Session",
      "Progressively.js",
      "Swiper.js",
      "Jimp Image Compression(JIMP)",
      "Web Storage API",
      "Cookies",
      "Express-FileUpload",
      "SendGrid/mail",
      "Stripe Payment API",
      "Bcrypt.js",
      "Moment.js",
      "Dotenv",
      "Git and Github",
      "Heroku",
      "Figma",
      "Google Fonts",
    ],
    video: [
      Project2Video1,
      Project2Video3,
      Project2Video4,
      Project2Video2,
      Project2Video5,
    ],
    url: "http://mflixharkirat.herokuapp.com/",
  },
  {
    id: 3,
    name: "Realtor",
    image: Project3InnerPhoto,
    descEn:
      "This is a Front End application developed using of React, geolocation and realtor api",
    descFr:
      "C'est une application Front-End qui est développée en React, geolocation et api de realtor",
    technologies: [
      "React",
      "Javascript(ES6)/Async-Await",
      "Node-Sass",
      "Realtor API",
      "Flexbox/Grid",
      "Axios",
      "Git and Github",
      "Netlify",
      "Figma",
      "Google Fonts",
    ],
    video: [
      Project3Video1,
      Project3Video2,
      Project3Video3,
      Project3Video4,
      Project3Video5,
    ],
    url: "http://realtorharkirat.netlify.app",
  },
];

export default projects;

// PROFILE
import profile from "../images/profile.png";

// PROJECT IMAGES
import Bodhayu1 from "../images/project/Bodhayu1.PNG";
import Bodhayu2 from "../images/project/Bodhayu2.PNG";
import Bodhayu3 from "../images/project/Bodhayu3.jpeg";

import employee1 from "../images/project/employee1.PNG";
import employee2 from "../images/project/employee2.PNG";
import employee3 from "../images/project/employee3.jpeg";

import airbnb1 from "../images/project/airbnb1.PNG";
import airbnb2 from "../images/project/airbnb2.PNG";
import airbnb3 from "../images/project/airbnb3.jpeg";

// CERTIFICATES
import googleCloud from "../images/certificates/google-cloud.jpeg";
import sigma from "../images/certificates/sigma-web-dev.jpeg";
import uiux from "../images/certificates/uiux-coursera.jpg";
import ai from "../images/certificates/ai-greate-learning.jpg";
import chatgpt from "../images/certificates/ChatGPT-greate-learning.jpg";
import ml from "../images/certificates/ml-greate-learning.jpg";
import ppt from "../images/certificates/ppt-winner.jpeg";
import olympiad from "../images/certificates/sppu-olympiad-2026.jpeg";

import avishkar1 from "../images/certificates/Avishkar-zonal-2024.jpeg";
import avishkar2 from "../images/certificates/Avishkar-zonal-2025.jpeg";
import avishkar3 from "../images/certificates/Avishkar-zonal-2026.jpeg";

const images = {
  profile,

  projects: {
    bodhayu: [Bodhayu1, Bodhayu2, Bodhayu3],
    employee: [employee1, employee2, employee3],
    airbnb: [airbnb1, airbnb2, airbnb3],
  },

  certificates: [
    { title: "Google Cloud Arcade", image: googleCloud },
    { title: "Sigma Web Dev", image: sigma },
    { title: "UI/UX Coursera", image: uiux },
    { title: "AI Great Learning", image: ai },
    { title: "ChatGPT Great Learning", image: chatgpt },
    { title: "ML Great Learning", image: ml },
    { title: "PPT Winner", image: ppt },
    { title: "SPPU Olympiad", image: olympiad },
  ],

  avishkar: [avishkar1, avishkar2, avishkar3],
};

export default images;
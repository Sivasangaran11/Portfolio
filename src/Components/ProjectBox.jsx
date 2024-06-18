import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    LevelsDesc:
      "This website is a for a local gym to help with their sales.This helped me understand React better and more clearly. I also learned how to host on vercel.",
    LevelsGithub: "https://github.com/EshaalB/Gym-Website",
    LevelsWebsite: "https://gym-website-pink.vercel.app/",

    "HP-RestaurantDesc": "In developing the Hotel Management System, I learned to use React for the frontend, make API calls, implement MVC architecture, and design MongoDB schemas. This involved creating Models for data, Controllers for logic, and Routes for navigation, enhancing my skills in building efficient web applications.",
    "HP-RestaurantGithub": "https://github.com/Sivasangaran11/Hotel-Management-System",
    "HP-RestaurantWebsite": "https://hp-restaurant.vercel.app/",

    "Online Transaction Fraud DetectionDesc": "From the Online Transaction Fraud Detection project, I learned how to collect and preprocess transaction data, train an XGBoost classifier with relevant features, and develop an accurate and robust fraud detection system. This project enhanced my skills in machine learning, data analysis, and implementing security measures for online transactions.",
    "Online Transaction Fraud DetectionGithub": "https://github.com/Sivasangaran11/online_transaction_fraud_detection",
    "Online Transaction Fraud DetectionWebsite": "https://github.com/Sivasangaran11/online_transaction_fraud_detection",

    "An Enhanced Product Recommendation SystemDesc":
      "From the Recommendation System project, I learned how to implement a deep learning-based recommendation system that merges text and image categorization for eCommerce platforms. This project enhanced my skills in using deep learning algorithms, integrating multiple data sources, and developing personalized product suggestions to improve user experience.",
      "An Enhanced Product Recommendation SystemGithub": "https://github.com/Sivasangaran11/Enhanced-Product-Recommendation-System",
      "An Enhanced Product Recommendation SystemWebsite": "https://github.com/Sivasangaran11/Enhanced-Product-Recommendation-System",
  };

  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + "Desc"]}
        <br />

        <a href={desc[projectName + "Github"]} target="_blank">
          <button className="projectbtn">
            <FaGithub /> Github
          </button>
        </a>

        <a href={desc[projectName + "Website"]} target="_blank">
          <button className="projectbtn">
            <CgFileDocument /> Site
          </button>
        </a>
      </div>
    </div>
  );
};
export default ProjectBox;

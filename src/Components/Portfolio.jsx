/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Job Shop",
    description:
      "**JobShop** is a fully responsive job portal built using the **MERN stack** (MongoDB, Express.js, React.js, and Node.js). It connects job seekers with employers, allowing users to create profiles, post jobs, and apply for listings. ",
    url: "https://job-portal-68n1.onrender.com"
  },
  {
    title: "Simon Says Game",
    description:
      "The Simon Says Game is an interactive web application built with HTML, CSS, and JavaScript, offering a modern twist to the classic memory and pattern recognition game.",
    url: "https://github.com/Mohit081/Simon-Says-Game",
  },
  {
    title: "Spotify Clone",
    description:
      "The Spotify clone is a web application that replicates the user interface of the popular music streaming service, Spotify. Developed using HTML and CSS, this project aims to showcase fundamental front-end development skills .",
    url: "https://github.com/Mohit081/spotifyclone",
  },
  {
    title: "Videotube",
    description:
      "Videotube is a youtube backend clone. it working like youtube you can login, signup , upload video , find video",
    url: "https://github.com/Mohit081/backend-project",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

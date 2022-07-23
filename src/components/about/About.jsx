import React from "react";
import "./about.css";
import ME from "../../assets/2.jpg";

const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <h4 className="about__icon">icon</h4>
              <h5>Experiance</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about__card">
              <h4 className="about__icon">icon</h4>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className="about__card">
              <h4 className="about__icon">icon</h4>
              <h5>Projects</h5>
              <small>80+ Completed </small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            numquam quas repellat saepe consectetur? Numquam voluptatibus sint
            est aperiam a recusandae consectetur impedit obcaecati repellendus
            ipsam totam iste, sequi unde?
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;

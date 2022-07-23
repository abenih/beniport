import React from "react";
import "./experiance.css";
const Experiance = () => {
  return (
    <section id="experiance">
      <h5>What Skills I Have</h5>
      <h2>My Experiance</h2>
      <div className="container experiance__container">
        <div className="experiance__frontend">
          <h3> Frontend Development</h3>
          <div className="experiance__content">
            <article className="experiance__details">
              {/* add icon with class name experiance__details-icon*/}icon
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experianced</small>
              </div>
            </article>
            <article className="experiance__details">
              icon
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experianced</small>
              </div>
            </article>
            <article className="experiance__details">
              icon
              <div>
                <h4>JAVASCRIPT</h4>
                <small className="text-light">Experianced</small>
              </div>
            </article>
            <article className="experiance__details">
              icon
              <div>
                <h4>BOOTSTRAP</h4>
                <small className="text-light">Experianced</small>
              </div>
            </article>
            <article className="experiance__details">
              icon
              <div>
                <h4>TAILWIND</h4>
                <small className="text-light">Experianced</small>
              </div>
            </article>
          </div>
        </div>
        {/*end of frontend*/}
        <div className="experiance__backend">
          <h3> Backend Development</h3>
          <div className="experiance__content">
            <article className="experiance__details">
              icon
              <div>
                <h4>Node Js</h4>
                <small className="text-light">Experianced</small>
              </div>
            </article>
            <article className="experiance__details">
              icon
              <div>
                <h4>Mongo DB</h4>
                <small className="text-light">Experianced</small>
              </div>
            </article>
            <article className="experiance__details">
              icon
              <div>
                <h4>PHP</h4>
                <small className="text-light">Experianced</small>
              </div>
            </article>

            <article className="experiance__details">
              icon
              <div>
                <h4>My Sql</h4>
                <small className="text-light">Experianced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiance;

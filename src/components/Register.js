import React from "react";
import { useGoatCounter } from "gatsby-plugin-goatcounter";

const Register = ({ title, description, register, calendar, zoomcode }) => {
  const count = useGoatCounter();

  const onRegister = () =>
    count({
      path: "outgoing:replay",
      title: "replay-down",
      event: true,
    });

  return (
    <section className="has-shadow">
      <div className="container">
        <h2
          id="informations"
          className="title section-title is-2 has-text-centered mb-6"
        >
          {title}
        </h2>
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            {description}
          </div>
        </div>
        <div className="has-text-centered">
          <a
            href={register.link}
            className="button has-shadow is-danger is-large"
            onClick={() => onRegister()}
          >
            {register.text}
          </a>
        </div>
        {/* <div className="has-text-centered pt-5">
          <span className="subtitle is-4 is-light">Zoom ID: 98595732585</span>
        </div> */}
      </div>
    </section>
  );
};

export default Register;

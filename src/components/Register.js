import React from "react"
import { useGoatCounter } from 'gatsby-plugin-goatcounter'

const Register = ({ title, description, register, calendar }) => {
  const count = useGoatCounter();

  const onRegister = () => (count({
    path: 'outgoing:google-form',
    title: 'register-down',
    event: true,
  }))

  return (
    <section className="has-shadow">
      <div className="container">
        <h2 id="informations" className="title section-title is-2 has-text-centered mb-6">
          {title}
        </h2>
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            {description}
          </div>
        </div>
        <div className="has-text-centered">
          <a href={register.link} className="button has-shadow is-danger is-large" onClick={() => onRegister()}>
            {register.text}
          </a>
        </div>
        <div className="has-text-centered mt-4">
          <a href={calendar.link}
            className="button is-info is-light">
            <span className="material-icons">
              event</span> {calendar.text}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Register
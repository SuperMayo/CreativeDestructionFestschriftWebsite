import React from "react"

const Hero = ({ title, subtitle, date, info }) => (
  <section className="hero is-dark is-fullheight has-bg-image">
    <div className="hero-body">
      <div className="container">
        <div className="column is-four-fifths">
          <h1 className="title main-title is-1 is-size-2-mobile">
            {title}
          </h1>
          <h2 className="subtitle is-3 is-size-4-mobile">
            {subtitle}
          </h2>
          <h2 className="subtitle is-2 is-size-3-mobile">
            {date}
          </h2>
          <h2 className="subtitle is-3 is-size-4-mobile">
            {info}
          </h2>
          <div className="columns is-centered">
            <div className="column is-tight">
              <a href="#program" className="button has-shadow is-primary is-rounded">
                Get the program!
            </a>
            </div>
          </div>
          <div className="columns is-centered">
            <div className="column is-tight">
              <a href="https://forms.gle/9VZmgXjs5EKpNa3K6"
                className="button has-shadow is-medium is-danger is-rounded has-text-weight-bold">
                Register
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Hero
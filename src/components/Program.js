import React from "react"
import CardImage from "./CardImage"

const Program = ({imagePath, pdf, alt, title}) => (
<section className="background-dark has-shadow">
    <div className="container">
      <h2 id="program" className="title light section-title is-2 has-text-centered mb-6">
        {title}
      </h2>
      <div className="columns is-centered">
        <div className="column is-one-third is-centered">
          <CardImage imagePath={imagePath} pdf={pdf} alt={title}/>
        </div>
      </div>
    </div>
  </section>    
)

export default Program
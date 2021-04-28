import * as React from "react"
import {graphql } from 'gatsby'
import "./style.scss"
import Seo from "../components/Seo"
import Hero from "../components/Hero"
import What from "../components/What"
import Register from "../components/Register"
import Program from "../components/Program"
import Poster from "../components/Poster"
import Ack from "../components/Acknowledgements"
import Footer from "../components/Footer"

// markup
const IndexPage = ({data}) => {
  return (
    <main>
      <Seo {...data.dataYaml.seo}/>
      <Hero {...data.dataYaml.hero}/>
      <What {...data.dataYaml.what} />
      <Register {...data.dataYaml.cta}/>
      <Program {...data.dataYaml.program}/>
      <Poster {...data.dataYaml.poster}/>
      <Ack {...data.dataYaml.acknowledgements}/>
      <Footer/>
    </main>
  )

}

export const query = graphql`
query data {
  dataYaml {
    seo {
      lang
      title
      meta {
        description
        card
        image
        twitterSite
      }
    }
    hero {
      title
      subtitle
      date
      info
    }
    what {
      title
      description
      cards {n, t}
      list {icon, text}
    }
    cta {
      title
      description
      register {text, link}
      calendar {text, link}
    }
    program {
      title
      pdf
      imagePath
      alt
    }
    poster {
      pdf
      imagePath
      alt
      twitterShare
      mailto
    }
    acknowledgements {
      tribute
      subtexts
      supporters {name, logo}
    }
  }
}
`

export default IndexPage
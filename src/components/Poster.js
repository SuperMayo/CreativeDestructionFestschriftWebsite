import React from "react"
import { useGoatCounter } from 'gatsby-plugin-goatcounter'
import CardImage from "./CardImage"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

const Poster = ({ pdf, imagePath, alt, twitterShare, mailto }) => {
  const count = useGoatCounter();

  const onTwitterShare = () => (count({
    path: 'outgoing:twitter',
    title: 'twitter-share',
    event: true,
  }))

  return (
    <section className="has-shadow">
      <div className="container">
        <div className="columns is-centered is-vcentered">
          <div className="column is-half is-centered">
            <CardImage pdf={pdf} imagePath={imagePath} alt={alt} />
          </div>
          <div className="column is-half">
            <h2 className="title is-2 has-text-centered is-light">Spread the word!</h2>
            <div className="column has-text-centered">
              <a href={twitterShare}
                target="_blank"
                rel="noreferrer"
                className="button is-large social-twitter m-2" data-url="https://www.creativedestruction2021.org"
                data-hashtags="creativedestruction2021"
                onClick={() => onTwitterShare()}>
                <span className="icon is-small">
                  <FontAwesomeIcon icon={faTwitter} />
                </span>
              </a>
              {/* <a className="button is-large social-mail m-2"
                href={mailto}>
                <span className="icon is-small">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Poster
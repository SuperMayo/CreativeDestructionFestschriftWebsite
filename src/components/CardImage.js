import React from "react"
import { GatsbyImage, getImage} from "gatsby-plugin-image"
import { graphql, useStaticQuery} from "gatsby"

const CardImage = ({imagePath, pdf, alt}) => {

    const data = useStaticQuery(graphql`
        query imagedata {
            allFile {
                nodes {
                  childImageSharp {
                    id
                    gatsbyImageData(
                        placeholder: BLURRED,
                        formats: [AUTO, WEBP, AVIF])
                  }
                  relativePath
                }
              }
        }
    `).allFile.nodes.filter(el => el.relativePath === imagePath)[0]

    const image = getImage(data.childImageSharp);

    return(
        <div className="card">
                <div className="card-image has-text-centered">
                <a href={pdf} className="is-inline-block" target="_blank" rel="noreferrer">
                    <GatsbyImage image={image} alt={alt} />
                </a>
                </div>
                <div className="card-content has-text-centered">
                <a href={pdf} className="button is-link is-outlined" target="_blank" rel="noreferrer">
                    Download as pdf
                </a>
                </div>
        </div>
    )
}

export default CardImage
import React from "react"
import { GatsbyImage, getImage} from "gatsby-plugin-image"
import {graphql, useStaticQuery} from "gatsby"

const Ack = ({ tribute, subtexts, supporters }) => {
    const data = useStaticQuery(graphql`
    query logodata {
        allFile {
            nodes {
              childImageSharp {
                id
                gatsbyImageData (
                    height: 100,
                    placeholder: BLURRED,
                    formats: [AUTO, WEBP, AVIF])
              }
              relativePath
            }
          }
    }
    `);

    return (
        <section className="background-dark has-shadow">
            <div className="container">
                <h1 className="title light has-text-centered">Acknowledgements</h1>
                <div className="column is-half is-offset-one-quarter alpha90">
                    <p className="light m-1 mb-5">
                        {tribute}
                    </p>
                    {subtexts.map((el,i) => (
                        <p key={i} className="light m-1">
                            {el}
                        </p>
                    ))}
                </div>
            </div>
            <div className="columns is-vcentered is-mobile">
                {supporters.map((el, i) =>{
                    const image = getImage(data.allFile.nodes.filter(dt => dt.relativePath === el.logo)[0].childImageSharp);
                    return(
                    <div key={i} className={`column is-quarter-mobile is-2-desktop has-text-centered ${(i === 0 && 'is-offset-1-desktop')}`}>
                        <GatsbyImage image={image} alt={el.name}/>
                    </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Ack
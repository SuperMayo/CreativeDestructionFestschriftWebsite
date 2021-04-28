import React from "react"
import Helmet from "react-helmet"

const Seo = ({ lang, meta, title }) => { 
    // Details omitted for brevity 
    return ( 
        <Helmet 
            htmlAttributes={{lang, }}
            title={title} 
            meta={[ 
                { name: `description`, content: meta.description}, 
                { property: `og:title`, content: title}, 
                { property: `og:description`, content: meta.description}, 
                { property: `og:type`, content: `website`},
                { property: `og:image`, content: meta.image},
                { property: `og:url`, content: `https://creativedestruction2021.org`},
                { name: `twitter:card`, content: meta.card},
                { name: `twitter:title`, content: title},
                { name: `twitter:description`, content: meta.description},
                { name: `twitter:image`, content: meta.image},
                { name: `twitter:site`, content: meta.twitterSite},].concat(meta)}/>
    )
}

export default Seo
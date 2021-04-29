import React from "react"
import Helmet from "react-helmet"

const Seo = ({ lang, meta, title }) => { 
    // Details omitted for brevity 
    return ( 
        <Helmet 
            htmlAttributes={{lang, }}
            title={title} 
        >
        <meta name="description" content= {meta.description} />
        <meta property="og:title" content= {title} /> 
        <meta property="og:description" content= {meta.description} /> 
        <meta property="og:type" content= "website" /> 
        <meta property="og:image" content= {meta.image} /> 
        <meta property="og:url" content= "https://creativedestruction2021.org/" />
        <meta name= "twitter:card" content= {meta.card} />
        <meta name= "twitter:title" content= {title} />
        <meta name= "twitter:description" content= {meta.description} />
        <meta name= "twitter:image" content= {meta.image} />
        <meta name= "twitter:site" content= {meta.twitterSite} />
        
        </Helmet>
    )
}

export default Seo
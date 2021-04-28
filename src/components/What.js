import React from "react"
import Card from "./Card"


const What = ({title, cards, description, list}) => (
    <section className="background-dark is-light has-shadow">
        <div className="container">
            <h2 className="title light is-2 has-text-centered light-header mb-6">{title}</h2>
                <div className="columns mt-5 mb-6">
                    <div className="column is-half">
                        <div className="columns is-mobile">
                            <Card {...cards[0]}/>
                            <Card {...cards[1]}/>
                        </div>
                    </div>
                    <div className="column is-half">
                        <div className="columns is-mobile">
                            <Card {...cards[2]}/>
                            <Card {...cards[3]}/>
                        </div>
                    </div>
                </div>
            <div className="column is-8 is-offset-2">
                <p className="is-half subtitle is-5 light">
                    {description}
                </p>
                <ul>
                    {list.map((el, i) => (
                        <li key={i} className={`subtitle is-5 ${el.icon}`}>{el.text}</li>
                    ))}
                </ul>
            </div>
        </div>
    </section>
)

export default What
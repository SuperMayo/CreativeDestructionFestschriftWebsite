import React from "react"

const Card = ({n, t}) => (
    <div className="column">
        <div className="card card-glass">
            <div className="card-content">
                <p className="title light has-text-centered">{n}</p>
                <p className="subtitle light has-text-centered">{t}</p>
            </div>
        </div>
    </div>
)

export default Card
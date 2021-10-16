import React from 'react'
import '../../assets/style/HomepageStyle/TeksTitleComponent.css'

export default function TeksTitleComponent(props) {
    return (
        <div>
            <p className="title">{props.title}</p>
            <p className="subtitle">{props.subtitle}</p>
        </div>
    )
}



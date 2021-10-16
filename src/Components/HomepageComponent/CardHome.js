import React from 'react'
import '../../assets/style/HomepageStyle/CardHome.css'

export default function CardHome(props) {
    return (
        <div className="CardHome">
            <p className='CardHomeTitle'>{props.CardHomeTitle}</p>
            <img src={props.img} alt="logo" className="cardHomeImg"/>
            <p className="CardHomeTeks">{props.CardHomeTeks}</p>
        </div>
    )
}

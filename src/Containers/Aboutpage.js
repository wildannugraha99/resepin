import React, { Component } from 'react'
import NavbarComponent from '../Components/HomepageComponent/NavbarComponent'
import JumbotronComponent from '../Components/AboutComponent/JumbotronComponent'
import QuoteComponent from '../Components/AboutComponent/QuoteComponent'
import FooterComponent from '../Components/HomepageComponent/FooterComponent'

export default class Aboutpage extends Component {
    render() {
        return (
            <div>
                <NavbarComponent/>
                <JumbotronComponent/>
                <QuoteComponent/>
                <FooterComponent/>
            </div>
        )
    }
}

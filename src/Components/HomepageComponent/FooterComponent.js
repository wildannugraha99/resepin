import React from 'react'
import '../../assets/style/HomepageStyle/FooterComponent.css'
import logo from '../../assets/icons/Logo.svg';
import WaIcon from '../../assets/icons/akar-icons_whatsapp-fill.svg'
import LinkedinIcon from '../../assets/icons/ant-design_linkedin-outlined.svg'
import BrowserIcon from '../../assets/icons/icon-park-outline_browser-safari.svg'


export default function FooterComponent() {
    return (
        <div className="footerWrapper">
            <div className="footer">
                <div className="footerLogo">
                    <img src={logo} alt="" />
                    <p className="LogoSubtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
                    venenatis, lectus magna fringilla urna, porttitor</p>
                </div>
                <div className="footerProducts">
                    <p className="productsTeksTitle">Products</p>
                    <p className="productsSubtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus 
                    venenatis, lectus magna fringilla urna, porttitor</p>
                </div>
                <div className="footerProducts">
                    <p className="productsTeksTitle">Resources</p>
                    <p className="productsSubtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus 
                    venenatis</p>
                </div>
                <div className="footerProducts">
                    <p className="productsTeksTitle">Company</p>
                    <p className="productsSubtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus 
                    venenatis</p>
                </div>
                <div className="footerProducts">
                    <p className="productsTeksTitle">Get In Touch</p>
                    <div className="iconContacts">
                        <a href="##"><img src={WaIcon} alt="" /></a>
                        <a href="https://www.linkedin.com/in/muhamad-wildan-n/"><img src={LinkedinIcon} alt="" /></a>
                        <a href="https://wildannugraha99.github.io/Wildan-Site/"><img src={BrowserIcon} alt="" /></a>
                    </div>
                </div>
            
            </div>
            <div className="lineFooter"></div>
            <p className="author">Made by Wildan</p>
        </div>
    )
}

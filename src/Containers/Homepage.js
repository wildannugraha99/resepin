import React, { Component } from 'react'
import JumbotronComponent from '../Components/HomepageComponent/JumbotronComponent';
import TeksTitleComponent from '../Components/HomepageComponent/TeksTitleComponent';
import {Container} from 'reactstrap';
import CardHomeWrapper from './CardHomeWrapper';
import BrosurComponent from '../Components/HomepageComponent/BrosurComponent';
import GalleryIMageComponent from '../Components/HomepageComponent/GalleryImageComponent'
import SubmitEmailComponent from '../Components/HomepageComponent/SubmitEmailComponent';
import NavbarComponent from '../Components/HomepageComponent/NavbarComponent'
import FooterComponent from '../Components/HomepageComponent/FooterComponent';


export default class Homepage extends Component {

    render() {
        return (
            <div>
                <NavbarComponent/>
                <JumbotronComponent />
                <Container>
                <TeksTitleComponent title='Make Your Food, Make Your Happines' subtitle='Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor 
                rhoncus dolor purus non enim '/>
                </Container>
                <CardHomeWrapper/>
                <BrosurComponent/>
                <TeksTitleComponent title='Art In The Foods' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit 
                ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor '/>
                <GalleryIMageComponent/>
                <SubmitEmailComponent/>
                <FooterComponent/>
            </div>
        )
    }
}

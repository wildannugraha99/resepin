import React from 'react'
import CardHome from '../Components/HomepageComponent/CardHome'
import '../assets/style/HomepageStyle/CardHomeWrapper.css'
import {Container} from 'reactstrap';
import logoMenu from '../assets/icons/ic_round-menu-book.svg';
import logoCooking from '../assets/icons/ph_cooking-pot-bold.svg';
import logoChef from '../assets/icons/icon-park-outline_chef-hat.svg';
import logoFastFood from '../assets/icons/ion_fast-food-outline.svg';

export default function CardHomeWrapper() {
    
    return (
        <Container>
            <div className='CardHomeWrapper'>
                <CardHome CardHomeTitle = 'Menu Variations' 
                img={logoMenu} 
                CardHomeTeks="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"/>

                <CardHome CardHomeTitle = 'Cooking Warw' 
                img={logoCooking} 
                CardHomeTeks="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"/>

                <CardHome CardHomeTitle = 'Best Chef' 
                img={logoChef} 
                CardHomeTeks="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"/>

                <CardHome CardHomeTitle = 'Fast Food' 
                img={logoFastFood} 
                CardHomeTeks="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"/>
            </div>
            <hr className="my-2" />
        </Container>
    )
}

import React, { Component } from "react";
import JumbotronComponent from "../Components/FoodpageComponent/JumbotronComponent";
import NavbarComponent from "../Components/HomepageComponent/NavbarComponent";
import Image from "../assets/img/blood-orange-gin-tonic-cocktail-served-with-slices-orange-glass-removebg-preview.png";
import CardDrinkComponent from "../Components/DrinkComponent/CardDrinkComponent";
import CategoryComponent from "../Components/DrinkComponent/CategoryComponent";
import FooterComponent from "../Components/HomepageComponent/FooterComponent";


export default class Cocktailspage extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <JumbotronComponent 
          jumbotronTitle="Discover many top drinks recipes..."
          jumbotronSubtitle=" Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis"
          jumbotronImage={Image}
        />
        <CategoryComponent/>
        <CardDrinkComponent/>
        <FooterComponent />
       
      </div>
    );
  }
}

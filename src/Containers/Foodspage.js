import React, { Component } from "react";
import JumbotronComponent from "../Components/FoodpageComponent/JumbotronComponent";
import NavbarComponent from "../Components/HomepageComponent/NavbarComponent";
import CategoryComponent from "../Components/FoodpageComponent/CategoryComponent";
import CardFoodComponent from "../Components/FoodpageComponent/CardFoodComponent";
import FooterComponent from "../Components/HomepageComponent/FooterComponent";
import Image from "../assets/img/top-view-assortment-vegetables-paper-bag-removebg-preview.png";

export default class Foodspage extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <JumbotronComponent
          jumbotronTitle="Discover the world’s top food recipes..."
          jumbotronSubtitle=" Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis"
          jumbotronImage={Image}
        />
        <CategoryComponent />
        <CardFoodComponent />
        <FooterComponent />
      </div>
    );
  }
}


import React, { Component } from "react";
import "../../assets/style/FoodpageStyle/CategoryComponent.css";

const CATEGORY_API = 'https://www.themealdb.com/api/json/v1/1/categories.php';

export default class CategoryComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch(CATEGORY_API)
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          data: response.categories
        });
      });
  }

  render() {
    const items = this.state.data;
    return (
      <div className="category-wrapper">
          {items.map((items,index) =>(
            <p key={index}>{items.strCategory}</p>
          ))}
      </div>
     );
  }
}

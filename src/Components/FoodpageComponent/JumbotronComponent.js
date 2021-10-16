import React, { Component } from "react";
import "../../assets/style/FoodpageStyle/JumbotronComponent.css";



export default class JumbotronComponent extends Component {
   render() {
    
    return (
      <div className="jumbotronComponent">
        <div className="jumbotronImage">
          <img src={this.props.jumbotronImage} alt="" />
        </div>
        <div className="jumbotronTeks">
          <p className="jumbotronTitle">
          {this.props.jumbotronTitle}
          </p>
          <p className="jumbotronSubtitle">
           {this.props.jumbotronSubtitle}
          </p>
          
        </div>
      </div>
    );
  }
}

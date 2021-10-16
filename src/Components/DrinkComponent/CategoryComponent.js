import React, { Component } from 'react'
import '../../assets/style/DrinkpageStyle/CategoryComponent.css'

const CATEGORY_API = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"

export default class CategoryComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data:[],
        }
    }
    

  componentDidMount(){
        fetch(CATEGORY_API)
        .then(response => response.json())
        .then(response =>{
            this.setState({
                data:response.drinks
            })
          
        })
    }

    render() {
        const data = this.state.data
        return (
            <div className="category-wrapper">
                {data.map((items,index) =>(
                    <p key={index}>{items.strCategory}</p>
                ))}
            </div>
        )
    }
}

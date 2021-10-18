import React, { Component } from "react";
import { Input, Button, Spinner } from 'reactstrap';
import Modal from "react-modal";
import '../../assets/style/FoodpageStyle/CardFoodComponent.css'
import Swal from 'sweetalert2'

const SEARCH_DATA_API = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const DISPLAY_DATA_API = "https://www.themealdb.com/api/json/v1/1/filter.php?a=british";
const DETAIL_DATA_API = "https://www.themealdb.com/api/json/v1/1/lookup.php?i="

Modal.setAppElement("#root");

export default class CardDrinkComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataAPI: [],
      dataModal: [],
      idMeal: null,
      inputValue: '',
      dataFetched: false,
      showModal: false,
      isLoading: true,
      modalLoading: false
    }
  }

  componentDidMount() {
    fetch(DISPLAY_DATA_API)
      .then(responDisplay => responDisplay.json())
      .then(responDisplay => {
        this.setState({
          dataAPI: responDisplay.meals,
          dataFetched: true,
          isLoading: false,
        })

      })
  }

  fncInput = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  submit = (event) => {
    event.preventDefault();
    const inputSubmit = this.state.inputValue
    this.setState({
      isLoading: true
    })
    if (inputSubmit !== '') {
      fetch(`${SEARCH_DATA_API}${inputSubmit}`)
        .then(responSearch => responSearch.json())
        .then(responSearch => {
          this.setState({
            dataAPI: responSearch.meals,
            isLoading: false,
            dataFetched: true,
          })
        })
    } else {
      Swal.fire({
        icon: 'warning',
        text: 'Please insert a food name!',
        timer: 3000,
        timerProgressBar: true,
        confirmButtonColor: '#7C7B7B'

      })
      this.setState({
        isLoading: false,
        dataFetched: false,
      })
    }
  }

  handleOpenModal = (event) => {
    const id = event.currentTarget.id;
    this.setState({
      showModal: true,
      isLoading: false,
      idMeal: id,
    });
  };

  handleCloseModal = () => {
    this.setState({
      showModal: false,
    });
  };

  dataModalOpen = () => {
    this.setState({
      modalLoading: true,
    });
    const dataId = this.state.idMeal;
    fetch(`${DETAIL_DATA_API}${dataId}`)
      .then((responDetail) => responDetail.json())
      .then((responDetail) => {
        this.setState({
          dataModal: responDetail.meals,
          modalLoading: false,
        });

      });
  };

  dataModalClose = () => {
    this.setState({
      dataModal: [],
    });
  };


  render() {
    const dataFetched = this.state.dataAPI;
    const dataModal = this.state.dataModal;
    const isLoading = this.state.isLoading;
    const modalLoading = this.state.modalLoading;

    if (dataFetched !== null) {
      return (
        <div>
          <p className="Title-food">Many Various Food Recipes</p>
          <div>
            <form onSubmit={this.submit} className="input-food">
              <Input className="search-Food"
                placeholder="Search Food..."
                type="text"
                value={this.state.inputValue}
                onChange={this.fncInput} />
              <Button className="btn-submit-food" type="submit">
                Submit
              </Button>
            </form>
          </div>

          {/* -------------------DATA DISPLAY YG PERTAMA & DATA SEARRCH DI RENDER-------------------- */}

          {isLoading ?
            <div>
              <div className="food-loading">
                <Spinner className="loading-spinner" children={false} />
                <h2> Please Wait... </h2>
              </div>

            </div>
            :
            <div>
              <div className="card-food-wrapper">
                {dataFetched.map(dataItems => (
                  <div className="card-item-food" key={dataItems.idMeal}>
                    <img src={dataItems.strMealThumb}
                      alt="food"
                      className="food-img" />
                    <div className="food-teks-card">
                      <p className="title-food">{dataItems.strMeal}</p>
                      <Button onClick={this.handleOpenModal} id={dataItems.idMeal}
                        className="btn-recipe-food">
                        See Food Recipe
                      </Button>
                    </div>
                  </div>

                ))}
              </div>

            </div>
          }
          {/* --------------------------------------------------------------------------------- */}

          {/*------------------------------- DATA DI MODAL YANG DI RENDER ----------------------------*/}
          <Modal isOpen={this.state.showModal}
            className="Modal"
            overlayClassName="Overlay"
            onAfterOpen={this.dataModalOpen}
            onAfterClose={this.dataModalClose}
          >
            {modalLoading ? (
              <div className="drink-modal-loading">
                <Spinner className="loading-spinner" children={false} />
                <h2> Please Wait... </h2>{" "}
              </div>
            )
              :
              (
                <div>
                  {dataModal.map((foodItems) => (
                    <div className="modal-body-food">
                      <div className="modal-body-food-inner">
                        <div className="img-drink">
                          <img src={foodItems.strMealThumb} alt="" />
                        </div>

                        <div className="modal-Teks-food">
                          <p className="food-title-modal"> {foodItems.strMeal} </p>
                          <p className="food-category-modal"> Category: {foodItems.strCategory} </p>
                          <p className="food-tags-modal"> Tags: {foodItems.strTags} </p>
                          <p className="food-ingredients"> Ingredients: </p>
                          <ul>
                            <li>
                              {foodItems.strMeasure1} - {foodItems.strIngredient1}
                            </li>
                            <li>
                              {foodItems.strMeasure2} - {foodItems.strIngredient2}
                            </li>
                            <li>
                              {foodItems.strMeasure3} - {foodItems.strIngredient3}
                            </li>
                            <li>
                              {foodItems.strMeasure4} - {foodItems.strIngredient4}
                            </li>
                            <li>
                              {foodItems.strMeasure5} - {foodItems.strIngredient5}
                            </li>
                            <li>
                              {foodItems.strMeasure6} - {foodItems.strIngredient6}
                            </li>
                            <li>
                              {foodItems.strMeasure7} - {foodItems.strIngredient7}
                            </li>
                            <li>
                              {foodItems.strMeasure8} - {foodItems.strIngredient8}
                            </li>
                            <li>
                              {foodItems.strMeasure9} - {foodItems.strIngredient9}
                            </li>
                            <li>
                              {foodItems.strMeasure10} - {foodItems.strIngredient10}
                            </li>
                            <li>
                              {foodItems.strMeasure11} - {foodItems.strIngredient11}
                            </li>
                            <li>
                              {foodItems.strMeasure12} - {foodItems.strIngredient12}
                            </li>
                          </ul>
                        </div>
                      </div>

                      <p className="food-instructions"> Cooking Instructions </p>
                      <p className="food-teks-instruction"> {foodItems.strInstructions} </p>

                    </div>
                  ))}
                  <hr />
                  <Button color="danger" onClick={this.handleCloseModal}>
                    Close
                  </Button>
                </div>
              )}
          </Modal>
        </div>
      )

      /* -------------------------------------------------------------------------------------- */


      // ------------------ DI RENDER JIKA ALAMAT API YANG DI MASUKAN SALAH-----------------------//

    } else {
      return (
        <div>
          <p className="Title-food">Many Various Food Recipes</p>
          <div>
            <form onSubmit={this.submit} className="input-food">
              <Input className="search-Food"
                placeholder="Search Food..."
                type="text"
                value={this.state.inputValue}
                onChange={this.fncInput} />
              <Button className="btn-submit-food" type="submit">
                Submit
              </Button>
            </form>
          </div>
          <p className="teks-data-not-found">Oopss... <br /> Food Not Found!</p>
        </div>

      )
    }
  }
}





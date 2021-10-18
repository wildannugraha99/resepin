import React, { Component } from "react";
import { Input, Button, Spinner } from 'reactstrap';
import Modal from "react-modal";
import '../../assets/style/DrinkpageStyle/CardDrinkComponent.css'
import Swal from 'sweetalert2'

const SEARCH_DATA_API = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const DISPLAY_DATA_API = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic";
const DETAIL_DATA_API = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="

Modal.setAppElement("#root");

export default class CardDrinkComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataAPI: [],
      dataModal: [],
      idDrink: null,
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
          dataAPI: responDisplay.drinks,
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
            dataAPI: responSearch.drinks,
            isLoading: false,
            dataFetched: true,
          })
        })
    } else {
      Swal.fire({
        icon: 'warning',
        text: 'Please insert a drink name!',
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
      idDrink: id,
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
    const dataId = this.state.idDrink;
    fetch(`${DETAIL_DATA_API}${dataId}`)
      .then((responDetail) => responDetail.json())
      .then((responDetail) => {
        this.setState({
          dataModal: responDetail.drinks,
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
          <p className="Title-drink">Many Drink Recipes</p>
          <div>
            <form onSubmit={this.submit} className="input-drink">
              <Input className="search-drink"
                placeholder="Search Drink..."
                type="text"
                value={this.state.inputValue}
                onChange={this.fncInput} />
              <Button className="btn-submit-drink" type="submit">
                Submit
              </Button>
            </form>
          </div>

          {isLoading ?
            <div className="drink-loading">
              <Spinner className="loading-spinner" children={false} />
              <h2> Please Wait... </h2>
            </div>
            :
            <div>
              <div className="card-drink-wrapper">
                {dataFetched.map(dataItems => (
                  <div className="card-item-drink" key={dataItems.idDrink}>
                    <img src={dataItems.strDrinkThumb}
                      alt="drink"
                      className="drink-img" />
                    <div className="drink-teks-card">
                      <p className="title-drink">{dataItems.strDrink}</p>
                      <Button onClick={this.handleOpenModal} id={dataItems.idDrink}
                        className="btn-recipe-drink">
                        See Drink Recipe
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
                <Spinner className="loading-spinner" children={null} />
                <h2> Please Wait... </h2>{" "}
              </div>
            )
              :
              (
                <div>
                  {dataModal.map((drinkItems) => (
                    <div className="modal-body-drink">
                      <div className="modal-body-drink-inner">
                        <div className="img-drink">
                          <img src={drinkItems.strDrinkThumb} alt="" />
                        </div>

                        <div className="modal-Teks-drink">
                          <p className="drink-title-modal"> {drinkItems.strDrink} </p>
                          <p className="drink-category-modal"> Category: {drinkItems.strCategory} </p>
                          <p className="drink-tags-modal"> Tags: {drinkItems.strTags} </p>
                          <p className="drink-type-modal"> Type: {drinkItems.strAlcoholic}</p>
                          <p className="drink-ingredients"> Ingredients: </p>
                          <ul>
                            <li>
                              {drinkItems.strMeasure1} - {drinkItems.strIngredient1}
                            </li>
                            <li>
                              {drinkItems.strMeasure2} - {drinkItems.strIngredient2}
                            </li>
                            <li>
                              {drinkItems.strMeasure3} - {drinkItems.strIngredient3}
                            </li>
                            <li>
                              {drinkItems.strMeasure4} - {drinkItems.strIngredient4}
                            </li>
                            <li>
                              {drinkItems.strMeasure5} - {drinkItems.strIngredient5}
                            </li>
                          </ul>
                        </div>
                      </div>

                      <p className="drink-instructions"> Cooking Instructions </p>
                      <p className="drink-teks-instruction"> {drinkItems.strInstructions} </p>

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



    } else {
      return (

        <div>
          <p className="Title-drink">Many Drink Recipes</p>
          <div>
            <form onSubmit={this.submit} className="input-drink">
              <Input className="search-drink"
                placeholder="Search Drink..."
                type="text"
                value={this.state.inputValue}
                onChange={this.fncInput} />
              <Button className="btn-submit-drink" type="submit">
                Submit
              </Button>
            </form>
          </div>
          <p className="teks-data-not-found">Oopss... <br /> Drink Not Found!</p>
        </div>

      )
    }
  }
}





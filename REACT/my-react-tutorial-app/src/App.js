import React, { Component } from "react";

import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";
import Navi from "./Navi"
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
  state = { currentCategory: "",prodcts:[] };

  componentDidMount(){
    this.getProducts();
  }

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
  };

  getProducts = ()=>{
    fetch("http://localhost:3000/products").then(response=>response.json()).then(data=>this.setState({prodcts:data}));
  }

  render() {
    let productInfo = { title: "ProductList" };
    let categoryInfo = { title: "CategoryList" };
    return (
      <div>
        <Container>
          <Row>
            <Navi />
          </Row>

          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              ></CategoryList>
            </Col>

            <Col xs="9">
              <ProductList
                prodcts={this.state.prodcts}
                currentCategory={this.state.currentCategory}
                info={productInfo}
              ></ProductList>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

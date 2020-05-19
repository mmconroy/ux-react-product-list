import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProductDetail extends Component {
  state = {
    product: {},
  };
  render() {
    return (
      <div>
        <h3>{this.state.product.name}</h3>
        <div>Price: ${this.state.product.price}</div>
        <p>{this.state.product.description}</p>
        <Link className="productGoBackLink" to="/products">
          Go Back
        </Link>
      </div>
    );
  }
}

export default ProductDetail;

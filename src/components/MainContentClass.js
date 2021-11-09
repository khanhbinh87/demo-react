import React, { Component } from "react";
import ProductContent from "./ProductContent";
import ProductDescription from "./ProductDescription";
import ProductImage from "./ProductImage";
import initData from "./state";
export default class MainComponentClass extends Component {
  constructor(props) {
    super(props);
    this.state = initData;
  }
  updateSelectedVariant = (variant) => {
    this.setState({ selectedVariant: variant, cart: 0 });
  };
  handleAddToCart = () => {
    const { cart, selectedVariant } = this.state;
    if (cart === selectedVariant.quantity) {
      alert("Gio hang da day");
      return;
    }
    this.setState({
      cart: cart + 1,
    });
  };
  render() {
    const { updateSelectedVariant, state, handleAddToCart } = this;
    const {
      title,
      brand,
      cart,
      variations,
      attrProducts,
      description,
      selectedVariant,
    } = state;
    const injectedProps = {
      title,
      brand,
      variations,
      handleAddToCart,
      selectedVariant,
      updateSelectedVariant,
    };
    const injectedPropsDescription = {
      attrProducts,
      description,
    };
    return (
      <div className="container">
        <div className="list-blog">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi sunt
            eveniet maxime magni in, nostrum facilis, temporibus, quam facere
            sint est blanditiis harum dicta. Tempore suscipit ut hic. Deleniti,
            qui.
          </p>
        </div>
        <div id="app">
          <div className="cart">Giỏ hàng ({cart})</div>
          <div className="product">
            <ProductImage selectedVariant={selectedVariant} />
            <ProductContent {...injectedProps} />
          </div>
          <ProductDescription {...injectedPropsDescription} />
        </div>
      </div>
    );
  }
}

import React, { useState } from "react";
import ProductContent from "./ProductContent";
import ProductDescription from "./ProductDescription";
import ProductImage from "./ProductImage";
import { _selectedVariant, stateHook } from "./state";

export default function MainComponentFunc() {
  const [cart, setCart] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(_selectedVariant);
  const [productData, setProductData] = useState(stateHook);

  let updateSelectedVariant = (variant) => {
    // this.setState({ selectedVariant: variant, cart: 0 });
    setSelectedVariant(variant);
    setCart(0);
  };

  let handleAddToCart = () => {
    if (cart === selectedVariant.quantity) {
      alert("Gio hang da day");
      return;
    }
    // this.setState({
    //   cart: cart + 1,
    // });
    setCart(cart + 1);
  };
  const injectedProps = {
    cart,
    ...productData,
    selectedVariant,
    handleAddToCart,
    updateSelectedVariant,
  };

  return (
    <div className="container">
      <div className="list-blog">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi sunt
          eveniet maxime magni in, nostrum facilis, temporibus, quam facere sint
          est blanditiis harum dicta. Tempore suscipit ut hic. Deleniti, qui.
        </p>
      </div>
      <div id="app">
        <div className="cart">Giỏ hàng ({cart})</div>
        <div className="product">
          <ProductImage selectedVariant={selectedVariant} />
          <ProductContent {...injectedProps} />
        </div>
        <ProductDescription {...productData} />
      </div>
    </div>
  );
}

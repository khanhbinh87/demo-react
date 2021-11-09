import React from "react";
export default function ProductContent({
  title,
  brand,
  variations,
  selectedVariant,
  handleAddToCart,
  updateSelectedVariant,
}) {
  // let selectedVariant = variations.find(
  //   (variant) => variant.id === selectedVariantId,
  // );
  // const handleClickVariant = (variant) => {
  //   updateSelectedVariant(variant);
  // };
  function formatPrice(price) {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  }
  function renderPrice() {
    if (!selectedVariant) return null;
    let { price, percent } = selectedVariant;

    if (percent === 0) {
      return <div className="final-price">{formatPrice(price)}&nbsp;</div>;
    }
    return (
      <>
        <div className="final-price">
          {formatPrice(price * (1 - percent))}&nbsp;
        </div>
        <div className="origin-price">{formatPrice(price)}&nbsp;</div>
        <div className="sale-price">-{percent * 100}%</div>
      </>
    );
  }
  return (
    <div className="product-content">
      <h3 className="title">
        <a
          href="https://www.lazada.vn/products/ao-thun-nam-the-thao-hang-vnxk-vai-day-min-vai-dom-i265780948-s382816279.html"
          target="_blank"
        >
          {title}
        </a>
      </h3>
      <p className="brand">Thương hiệu: {brand ? brand : "No Brand"}</p>
      <p className="quantity">
        Còn lại: {selectedVariant && selectedVariant.quantity} Sản phẩm
      </p>
      {/**/}
      <div className="wrapper-price">{renderPrice()}</div>
      <div className="wrapper-color">
        <div className="text">Màu sắc</div>
        <div className="list-color">
          <p className="color-text">
            {selectedVariant && selectedVariant.name}
          </p>
          <ul>
            {variations &&
              variations.map((variation) => (
                <li
                  onClick={(e) => updateSelectedVariant(variation)}
                  key={variation.id}
                  className={
                    variation.id === selectedVariant && selectedVariant.id
                      ? "active"
                      : ""
                  }
                >
                  <img src={variation.imageURL} alt={variation.name} />
                </li>
              ))}
          </ul>
        </div>
      </div>{" "}
      <button className="add-to-cart" onClick={() => handleAddToCart()}>
        Add to cart
      </button>
    </div>
  );
}

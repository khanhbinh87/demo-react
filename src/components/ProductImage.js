import React from "react";

export default function ProductImage({ selectedVariant }) {
  if (!selectedVariant) return null;
  return (
    <div className="product-image">
      <div className="image">
        <img src={selectedVariant.imageURL} alt={selectedVariant.imageURL} />
      </div>
    </div>
  );
}

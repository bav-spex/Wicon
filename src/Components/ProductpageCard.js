import React from "react";
import product__01 from "./../assets/Productpage2/product__05@2x.jpg";
import "./ProductpageCard.css";
function ProductpageCard(props) {
  const { product } = props;
  return (
    <>
      <div key={product.id} className="row single__product">
        <div className="col-md-4 col-sm-12 col-12  product__card__image__block">
          <img className=" product__car__image" src={product.product_image} alt="" />
        </div>
        <div className="col-md-8 col-sm-12 col-12 product__car__details">
          <p className="product__card__title">{product.product_name}</p>
          <p className="product__card__description">
           {product.product_description}
          </p>
        </div>
      </div>
    </>
  );
}

export default ProductpageCard;

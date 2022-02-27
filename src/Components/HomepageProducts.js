import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { Link } from "react-router-dom";

import "./HomepageProducts.css";
import product__01 from "./../assets/Productpage2/product__05@2x.jpg";

function HomepageProducts(props) {
  const { options, products } = props;
  const tilt = useRef(null);
  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return (
    <>
      <Link to="/products" className="homepage__product__card">
        <div ref={tilt} className="homepage__product__card__image__block">
          <img className="homepage__product__card__image" src={products.product_image} alt="" />
          <div className="homepage__product__card__title__block">
            <div className="inner__homepage__product__card__title__block">
              <p className="homepage__product__card__title">{products.product_name}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default HomepageProducts;

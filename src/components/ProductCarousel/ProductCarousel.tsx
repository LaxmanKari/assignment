import React from "react";
import Slider from "react-slick";

const ProductCarousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slides: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="product-carousel">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img className="product-img" src={`/images/${image}`} alt={`Product ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;

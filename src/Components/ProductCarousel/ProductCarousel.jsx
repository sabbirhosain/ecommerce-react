import Slider from "react-slick"
import VerticalProductCard from "../ProductCard/Vertical/VerticalProductCard";
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";
import "./ProductCarousel.css"
import { useRef } from "react";

// coustome next arrow
const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div onClick={onClick}></div>
  );
}

// coustome prev arrow
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div onClick={onClick}></div>
  );
}


const ProductCarousel = () => {
  const slider = useRef(null);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4, //column
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4, //large screen column
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4, //desktop column
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3, //laptop column 
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, //large tablet column 
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2, //tablet column 
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1, //mobile column 
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div className="d-flex align-items-center justify-content-end mb-3">
        <button onClick={() => slider?.current?.slickPrev()}
          className="product_slider_btn me-1" title="prev"><FaRegArrowAltCircleLeft /></button>
        <button onClick={() => slider?.current?.slickNext()}
          className="product_slider_btn ms-1" title="next"><FaRegArrowAltCircleRight /></button>
      </div>
      <Slider ref={slider} {...settings}>
        <div>
          <VerticalProductCard />
        </div>
        <div>
          <VerticalProductCard />
        </div>
        <div>
          <VerticalProductCard />
        </div>
        <div>
          <VerticalProductCard />
        </div>
        <div>
          <VerticalProductCard />
        </div>
        <div>
          <VerticalProductCard />
        </div>
        <div>
          <VerticalProductCard />
        </div>
        <div>
          <VerticalProductCard />
        </div>
      </Slider>
    </>
  )
}

export default ProductCarousel
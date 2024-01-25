import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VerticalProductCard from "../ProductCard/Vertical/VerticalProductCard";
import "./ProductCarousel.css"

const ProductCarousel = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4, //column
    slidesToScroll: 1,
    initialSlide: 0,
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
      <h2> Responsive </h2>
      <Slider {...settings}>
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
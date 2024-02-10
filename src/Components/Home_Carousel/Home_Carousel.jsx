import carousel1 from "../../assets/home-carousel/home1.webp"
import carousel2 from "../../assets/home-carousel/home2.webp"
import Slider from "react-slick";
import "./Home_Carousel.css"

const Home_Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrow: false,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={carousel1} className="img-fluid" alt="" />
        </div>
        <div>
          <img src={carousel2} className="img-fluid" alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default Home_Carousel
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from "../../../assets/carousel/galleryimg1.jpg"
import img2 from "../../../assets/carousel/galleryimg2.jpg"
import img3 from "../../../assets/carousel/galleryimg3.jpg"

const CourtCarousel = () => {

  // Carousel setting
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 2500,
  };

  return (
    <div className='w-full max-h-100 object-cover'>
      <Slider {...settings}>
        <div className="slick-slide">
            <img src={img1}/>
        </div>
        <div className="slick-slide">
            <img src={img2}/>
        </div>
        <div className="slick-slide">
            <img src={img3}/>
        </div>
      </Slider>
    </div>
  )
}

export default CourtCarousel

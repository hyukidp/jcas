import { motion } from 'framer-motion';
import { fadeIn } from "../../variants";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from "../../assets/carousel/galleryimg1.jpg"
import img2 from "../../assets/carousel/galleryimg2.jpg"
import img3 from "../../assets/carousel/galleryimg3.jpg"
import img4 from "../../assets/carousel/galleryimg4.jpg"
import img5 from "../../assets/carousel/galleryimg5.jpg"
import img6 from "../../assets/carousel/galleryimg6.jpg"
import img7 from "../../assets/carousel/galleryimg7.jpg"
import img8 from "../../assets/carousel/galleryimg8.jpg"
import img9 from "../../assets/carousel/galleryimg9.jpg"
import img10 from "../../assets/carousel/galleryimg11.jpg"
import img11 from "../../assets/carousel/galleryimg12.jpg"
import img12 from "../../assets/carousel/galleryimg13.jpg"
import img13 from "../../assets/carousel/galleryimg14.jpg"
import img14 from "../../assets/carousel/galleryimg17.jpg"
import img15 from "../../assets/carousel/galleryimg19.jpg"
import img16 from "../../assets/carousel/galleryimg20.jpg"
import img17 from "../../assets/carousel/galleryimg21.jpg"

const Gallery = () => {
    // Carousel setting
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '10px',
        autoplay: true, 
        autoplaySpeed: 2500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '0px',
                    dots: false,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '0px',
                    dots: false,
                },
            },
        ],
    };

  return (
    <div className="w-full h-full px-6 md:px-8 lg:px-10 xl:px-20" id="gallery">
      <motion.div 
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount:0.5}}>
          <h2 className=" text-brandBlue text-[65px] roboto-black-italic opacity-80 md:text-[100px] lg:text-[140px]">GALLERY</h2>
        </motion.div>

        <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false, amount:0.5}}>
            <h1 className="-mt-4 md:mt-0 text-start text-brandBlack text-xl roboto-bold md:text-center md:text-[30px] lg:text-[40px]">Photos of some clients and events in JCAS Sports Alley
            </h1>
        </motion.div>

        {/* Carousel */}
        <div className='mt-5 md:mt-10'>
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
            <div className="slick-slide">
                <img src={img4}/>
            </div>
            <div className="slick-slide">
                <img src={img5}/>
            </div>
            <div className="slick-slide">
                <img src={img6}/>
            </div>
            <div className="slick-slide">
                <img src={img7}/>
            </div>
            <div className="slick-slide">
                <img src={img8}/>
            </div>
            <div className="slick-slide">
                <img src={img9}/>
            </div>
            <div className="slick-slide">
                <img src={img10}/>
            </div>
            <div className="slick-slide">
                <img src={img11}/>
            </div>
            <div className="slick-slide">
                <img src={img12}/>
            </div>
            <div className="slick-slide">
                <img src={img13}/>
            </div>
            <div className="slick-slide">
                <img src={img14}/>
            </div>
            <div className="slick-slide">
                <img src={img15}/>
            </div>
            <div className="slick-slide">
                <img src={img16}/>
            </div>
            <div className="slick-slide">
                <img src={img17}/>
            </div>
        </Slider>
        </div>
    </div>
  )
}

export default Gallery

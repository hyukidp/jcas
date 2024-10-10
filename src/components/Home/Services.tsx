import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import badminton from "../../assets/badminton.jpg"
import basketball from "../../assets/basketball.jpg"
import mma from "../../assets/mma.jpg"
import dance from "../../assets/dancing.jpg"


const Services = () => {
  return (
    <div className="w-full h-full px-6 md:px-8 lg:px-10 xl:px-20 bg-brandBlack" id="services">
        <motion.div 
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount:0.5}}
        className='mt-20'>
          <h2 className=" text-brandYellow text-right text-[65px] roboto-black-italic opacity-80 md:text-[100px] lg:text-[140px]">SERVICES</h2>
        </motion.div>

        <motion.div 
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount:0.5}}
        className='lg:-mt-5'>
            <p className='text-brandWhite roboto-regular text-lg text-right'>JCAS Sports Alley provides Court Rental and Non-Event Studio Rental. We have the space you need for your friendly game matches or your workout routine. Currently, we provide services for Badminton, half-court Basketball, Mixed Martial Arts (Taekwondo, Judo, etc.), and Dancing. Come enjoy the best sports experience in Malolos with us today!</p>
        </motion.div>

        <div className='flex flex-col flex-wrap justify-center md:flex-row md:justify-between pb-14 md:mt-10 lg:mt-14 xl:mt-16'>
            <div className='w-[100%] md:w-[48%] relative hover:-translate-y-4 duration-200 mt-10 md:mt-16'>
                <img src={badminton} className='rounded-3xl'/>
                <h1 className='absolute bottom-5 left-5 text-brandWhite text-6xl roboto-black-italic'>Badminton</h1>
            </div>

            <div className='w-[100%] md:w-[48%] relative hover:-translate-y-4 duration-200 mt-10 md:mt-0'>
                <img src={basketball} className='rounded-3xl'/>
                <h1 className='absolute bottom-5 left-5 md:bottom-24 md:left-5 text-brandWhite text-6xl roboto-black-italic'>Basketball</h1>
            </div>

            <div className='w-[100%] md:w-[48%] relative hover:-translate-y-4 duration-200 mt-10 md:mt-16'>
                <img src={mma} className='rounded-3xl'/>
                <h1 className='absolute bottom-5 left-5 md:bottom-5 md:left-5 text-brandWhite text-6xl roboto-black-italic'>Mixed Martial Arts</h1>
            </div>

            <div className='w-[100%] md:w-[48%] relative hover:-translate-y-4 duration-200 mt-10 md:-mt-2'>
                <img src={dance} className='rounded-3xl'/>
                <h1 className='absolute bottom-5 left-5 md:bottom-24 md:left-5 text-brandWhite text-6xl roboto-black-italic'>Dancing</h1>
            </div>
        </div>
    </div>
  )
}

export default Services

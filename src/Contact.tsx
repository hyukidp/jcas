import { motion } from 'framer-motion';
import { fadeIn } from "./variants";
import { FaFacebook } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";


const Contact = () => {
  return (
    <div className="w-full h-full px-6 pb-14 md:px-8 lg:px-10 xl:px-20 bg-brandGreen" id="contact">
      <motion.div 
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount:0.5}}
        className='mt-20'>
          <h2 className=" text-brandWhite text-right text-[65px] roboto-black-italic opacity-80 md:text-[100px] lg:text-[140px]">CONTACT</h2>
        </motion.div>

        <motion.div 
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount:0.5}}
        className='md:-mt-5'>
            <p className='text-brandWhite roboto-regular text-lg text-right'>If you have more questions or concerns with JCAS Sports Alley, feel free to contact or visit us here in Malolos!</p>
        </motion.div>

        <motion.div 
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount:0.5}}
        className='w-full flex justify-end mt-5 mb-5'>
            <a href='https://www.facebook.com/jcassportsalley' className='text-base md:text-lg text-brandWhite roboto-regular'><span><FaFacebook className='inline-block mr-2 size-6'/></span>www.facebook.com/jcassportsalley</a>
        </motion.div>

        <motion.div 
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount:0.5}}
        className='w-full flex justify-end mt-5 mb-5'>
            <a href='https://www.google.com/maps/search/?api=1&query=112%20Lucero%20Street,,%20Barangay%20Mabolo,%20Malolos,%20PH,%203000' className='text-base md:text-lg text-brandWhite roboto-regular'><span><FaLocationDot  className='inline-block mr-2 size-6'/></span>112 Lucero St., Brgy. Mabolo, Malolos, Bulacan </a>
        </motion.div>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3856.6347037291503!2d120.81829627429184!3d14.845746085670172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339653cc6c26083d%3A0x659394bbfd9efa24!2sJCAS%20Sports%20Alley!5e0!3m2!1sen!2sph!4v1728295945879!5m2!1sen!2sph" width="100%" height="400" loading="lazy">
        </iframe>
    </div>
  )
}

export default Contact

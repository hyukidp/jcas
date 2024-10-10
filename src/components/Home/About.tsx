import mv from "../../assets/aboutmv.jpg"
import aboutimg1 from "../../assets/aboutimg2.jpg"
import { motion } from 'framer-motion';
import { fadeIn } from "../../variants";
import { MdBookmarkAdded, MdOutlinePayments } from "react-icons/md";
import { PiUsersFourBold } from "react-icons/pi";

const About = () => {
  return (
    <div className="w-full h-full" id="about">
      <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 2 }}  
      exit={{ opacity: 0 }} 
      transition={{ duration: 1.0 }} 
      className="mt-5 w-full relative">
        <img src={mv} alt="About MV" className="w-full" />
        <div className="absolute inset-0 bg-brandBlue opacity-30"></div>
      </motion.div>

      <div className="px-6 md:px-8 lg:px-10 xl:px-20">
        <motion.div 
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount:0.5}}>
          <h2 className=" text-brandRed text-[65px] roboto-black-italic opacity-80 md:text-[100px] lg:text-[140px]">ABOUT US</h2>
        </motion.div>
        
        <section className="flex flex-col-reverse lg:flex-row -mt-5">
            <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false, amount:0.2}}
            className="w-full mt-5 lg:w-1/2">
                <img src={aboutimg1}/>
            </motion.div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center lg:pl-8">
                <motion.div
                variants={fadeIn("left", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount:0.7}}>
                    <h3 className="w-fit font-bold text-2xl roboto-regular bg-brandGreen text-brandWhite mt-5 px-4 py-2 lg:text-2xl xl:text-3xl">Welcome to JCAS Sports Alley!</h3>
                </motion.div>

                <motion.div
                variants={fadeIn("left", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount:0.2}}>
                    <p className="text-brandBlack font-semibold text-xl roboto-regular mt-4">We are the ultimate destination for sports lovers. As a premier mixed-use commercial and recreational space, we bring nearly two decades of success in creating vibrant, engaging, and memorable experiences. Whether you're a sports enthusiast or looking for family-friendly activities, JCAS Sports Alley is the perfect place to go to. <br/><br/>
                    
                    Join us for exciting events, tournaments, or simply relax and enjoy the atmosphere with your friends and family. Your adventure in sports and recreation starts with us!
                    </p>
                </motion.div>
            </div>
        </section>

        <section className="flex flex-col items-center mt-14">
            <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false, amount:0.5}}>
                <h1 className="text-start text-brandBlack text-2xl roboto-bold md:text-center md:text-[30px] lg:text-[40px]">Why choose
                <span className="text-brandRed ml-3">J</span>
                <span className="text-brandYellow">C</span>
                <span className="text-brandBlue">A</span>
                <span className="text-brandGreen mr-3">S</span>
                Sports Alley?
                </h1>
                <p className="mt-5 text-brandBlack md:text-center text-xl px-0 xl:px-20">Here at JCAS, we pride ourselves on promoting healthy living and wellness and contribute to sports by providing a family-friendly environment for physical, mental, and social development of our customers.</p>
            </motion.div>

            <motion.div 
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false, amount:0.1}}
            className="w-full flex flex-col justify-center items-center lg:mt-5 lg:justify-between lg:flex-row">
                <div className="w-[100%] px-5 pt-4 pb-10 mt-5 border-2 border-brandBlack border-opacity-10 shadow-2xl rounded-lg md:w-[50%] lg:w-[32%]">
                    <h1 className="text-brandYellow text-8xl roboto-bold opacity-80">01</h1>
                    <MdBookmarkAdded className="size-20 mx-auto -mt-4  text-brandBlack"/>
                    <h1 className="text-center roboto-bold text-brandBlack text-2xl mt-6">Book</h1>
                    <p className="text-center roboto-regular text-brandBlack text-lg mt-6">Experience our new and easy booking system.</p>
                </div>

                <div className="w-[100%] px-5 pt-4 pb-10 mt-5 border-2 border-brandBlack border-opacity-10 shadow-2xl rounded-lg md:w-[50%] lg:w-[32%]">
                    <h1 className="text-brandYellow text-8xl roboto-bold opacity-80">02</h1>
                    <MdOutlinePayments className="size-20 mx-auto -mt-4 text-brandBlack"/>
                    <h1 className="text-center roboto-bold text-brandBlack text-2xl mt-6">Pay</h1>
                    <p className="text-center roboto-regular text-brandBlack text-lg mt-6">Pay anytime and anywhere using your e-wallet.</p>
                </div>

                <div className="w-[100%] px-5 pt-4 pb-10 mt-5 border-2 border-brandBlack border-opacity-10 shadow-2xl rounded-lg md:w-[50%] lg:w-[32%]">
                    <h1 className="text-brandYellow text-8xl roboto-bold opacity-80">03</h1>
                    <PiUsersFourBold className="size-20 mx-auto -mt-4 text-brandBlack"/>
                    <h1 className="text-center roboto-bold text-brandBlack text-2xl mt-6">Play</h1>
                    <p className="text-center roboto-regular text-brandBlack text-lg mt-6">Come play in our clean and well-maintained courts.</p>
                </div>
            </motion.div>
        </section>

      </div>   
    </div>
  )
}

export default About

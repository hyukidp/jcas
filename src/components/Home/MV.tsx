import bg from "../../assets/mv.png";
import { ReactTyped } from "react-typed";
import { motion } from 'framer-motion';
import { fadeIn } from "../../variants";

const MV = () => {
  return (
    <div className='w-full h-full bg-[#ffffff] flex flex-col justify-center items-center md:h-screen md:flex-row  md:justify-between'>
        <div className="mt-20 flex flex-col justify-center items-center w-full px-6 md:h-screen md:w-[60%] md:items-start md:px-8 lg:w-1/2 lg:pl-10 xl:px-20">
          <motion.div 
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false, amount:0.3}}
          className="flex flex-col justify-center items-center md:items-start">
            <ReactTyped className="bg-transparent text-brandBlack text-[60px] roboto-black-italic -mb-7 md:text-[80px] md:-mb-7 lg:text-[110px] lg:-mb-10 xl:text-[120px]"
              strings={[
                "Stay fit",
                "Socialize",
                "Learn",  
                "Enjoy",
              ]}
              typeSpeed={120}
              backSpeed={100}
              loop/>

            <div>
              <h1 className=" text-brandBlack text-[60px] roboto-black-italic -mb-14 md:text-[80px] lg:text-[110px] xl:text-[120px]">with
                <span className="text-brandRed ml-5">J</span>
                <span className="text-brandYellow">C</span>
                <span className="text-brandBlue">A</span>
                <span className="text-brandGreen">S</span>
              </h1>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false, amount:0.3}}>
            <button className="bg-brandBlue mt-16 px-4 py-2 rounded-lg text-brandWhite font-bold text-base hover:-translate-y-2 duration-200 lg:text-lg xl:text-xl">MAKE A RESERVATION</button>
          </motion.div>
        </div>

        <motion.div 
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount:0.2}}
        className="flex items-center px-6 md:px-0 md:w-[40%] lg:w-1/2 lg:pl-14 xl:p-16 xl:w-1/2">
            <img className="mt-5 lg:pt-10 lg:mt-8" src={bg}/>
        </motion.div>
      </div>
  )
}

export default MV

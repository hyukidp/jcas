import  React, { useEffect } from "react";
import { fadeIn } from "../../variants";
import { motion } from 'framer-motion';
import { useLocation } from "../../contexts/LocationContext";
import { LocationInterface } from "../../interfaces/Location";
import Cookies from 'js-cookie';

//declare LocationProps Typescript to set setCurrentstep 
interface LocationProps {
  storelocations: LocationInterface[];
  setCurrentStep: (step: number) => void; // Specify the function type
}

const Location: React.FC<LocationProps>= ({setCurrentStep, storelocations}) => {
  const { setSelectedLocation } = useLocation();

  const handleSelect = (location: LocationInterface) => {
    setSelectedLocation(location); //update the useLocation Context
    setCurrentStep(1);
  };

  useEffect(() => {
    const savedServices = Cookies.get("services");
    const savedTotalPrice = Cookies.get("totalPrice");
    console.log('x', savedServices, savedTotalPrice);
  }, []);


  return (
    <div className="w-full flex flex-col">
      <motion.div
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:false, amount:0.5}}>
        <h1 className="roboto-bold text-3xl text-center">Choose Location</h1>
      </motion.div>

      <motion.div 
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount:0.3}}
        className="flex flex-col items-center">
          {storelocations.map((location:LocationInterface) => (
            <div key={location.id} className="w-[80%] md:w-1/2 lg:w-1/3 mx-auto mt-10 rounded-lg hover:-translate-y-4">
              <img src={location.image} className="w-full rounded-xl" alt={location.name} />
              <h1 className="roboto-bold text-2xl mt-2">{location.name}</h1>
              <h2 className="text-lg font-semibold">{location.address}</h2>
              <h2 className="text-lg font-semibold">{location.country}</h2>
              <p className="text-lg font-semibold">
                <span className="text-brandGreen">Opens</span> at 8:00 AM
              </p>
              <div className="flex flex-col mt-3">
                <button onClick={() => handleSelect(location)} className="w-full bg-brandBlue text-brandWhite py-2 mt-2 font-semibold rounded-lg">Select</button>
              </div>
            </div>
          ))}
      </motion.div>
    </div>
  );
}

export default Location;

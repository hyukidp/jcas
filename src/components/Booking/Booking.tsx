import { useState } from 'react';
import Location from './Location';
import Services from './Services/Services';
import Date from './Date';
import Payment from './Payment';
import { Locations } from '../../types/types';
import bulacan from "../../assets/aboutmv.jpg";
import { LocationContext } from './Contexts/LocationContext';

const storelocations: Locations[] = [
  {
    id: 1,
    image: bulacan,
    name: "JCAS Bulacan",
    address: "Malolos, Bulacan",
  },
  {
    id: 2,
    image: bulacan,
    name: "JCAS Cavite",
    address: "Dasmarinas, Cavite",
  },
];

const steps = [
    { label: 'Step 1', className: 'step-primary' },
    { label: 'Step 2', className: 'step-secondary' },
    { label: 'Step 3', className: 'step-accent' },
    { label: 'Step 4', className: 'step-info' },
];

const Booking = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const renderSteps = () => {
    switch (currentStep) {
      case 0:
        //location 
        return <LocationContext.Provider value={storelocations}>
                  <Location setCurrentStep={setCurrentStep} />
               </LocationContext.Provider>
      case 1:
        //service
        return <Services setCurrentStep={setCurrentStep} />
        break;
      case 2:
        //date pick component
        return <Date setCurrentStep={setCurrentStep}/> 
        break;
      case 3:
        //payment / checkout
        return <Payment setCurrentStep={setCurrentStep}/> 
        break;
    }
  }

  return (
    <div className="h-full w-full mt-32">
      <div className="w-full flex flex-col items-center">
        <ul className="steps w-[90%] md:w-1/2">
          {steps.map((step, index) => (
            <li
              key={index}
              className={`step roboto-regular ${index === currentStep ? step.className : ''}`}
              onClick={() => setCurrentStep(index)}>
              {step.label}
            </li>
          ))}
        </ul>
        <div className="w-full mt-8">
          {renderSteps()}
        </div>
      </div>
    </div>
  )
}

export default Booking

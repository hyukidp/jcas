import { useState } from 'react';
import Location from './Location';
import Services from './Services/Services';
import Date from './Date';
import Payment from './Payment';

const steps = [
    { label: 'Step 1', className: 'step-primary', component: <Location/> },
    { label: 'Step 2', className: 'step-secondary', component: <Services/>},
    { label: 'Step 3', className: 'step-accent', component: <Date/> },
    { label: 'Step 4', className: 'step-info', component: <Payment/> },
];

const Booking = () => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="h-full w-full mt-32">
      <div className="w-full flex flex-col items-center">
        <ul className="steps w-1/2">
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
            {steps[currentStep].component}
        </div>
      </div>
    </div>
  )
}

export default Booking

import React from "react"

interface DateProps {
  setCurrentStep: (step: number) => void; // Specify the function type
}
 
const Date:React.FC<DateProps> = ({setCurrentStep}) => {
  return (
    <div className="w-full flex flex-col">
      <h1 className="roboto-bold text-3xl text-center">Pick a Date and Time</h1>
    </div>
  )
}

export default Date

import { Locations } from "../../types/types"

interface selected {
  selectedLocation:Locations;
}
 
const Payment:React.FC<selected> = ( {selectedLocation} ) => {
  
  return (
    <div className="w-full h-screen">
      <h1 className="roboto-bold text-3xl text-center">Confirmation and Payment</h1>

      <div className="w-[70%] mx-auto flex flex-col mt-5 lg:flex-row lg:justify-between">
        <div className="lg:w-[58%] p-5 border-2 border-brandBlack rounded-2xl">
          <h1 className="roboto-bold text-2xl">Summary</h1>
        </div>

        <div className="lg:w-[38%] p-5 border-2 border-brandBlack rounded-2xl">
          <h1 className="roboto-bold text-2xl">Player Details</h1>
          <p className="text-base mt-2">Enter your information below so we can contact you in case of sudden changes.</p>

          <form>
            <div className="mt-3">
              <label>Full Name:</label>
              <input type="text" className="focus:outline-none border-b-2 border-brandBlack block w-full py-1"></input>
            </div>

            <div className="mt-3">
              <label>Mobile Number:</label>
              <input type="text" className="focus:outline-none border-b-2 border-brandBlack block w-full py-1"></input>
            </div>

            <div className="mt-3">
              <label>Email Address:</label>
              <input type="text" className="focus:outline-none border-b-2 border-brandBlack block w-full py-1"></input>
            </div>

            <div className="mt-3">
              <label>Number of Pax:</label>
              <input type="number" className="focus:outline-none border-b-2 border-brandBlack block w-full py-1"></input>
            </div>
          </form>

          <div className="mt-4">
            <p className="text-sm">Kindly attach the screenshot of your payment.</p>
            <button className="roboto-regular text-sm text-brandWhite bg-brandBlue py-1 px-3 mt-3">Attach</button>
          </div>

          <div>
            <button className="roboto-regular text-brandWhite bg-brandGreen py-2 w-full mt-3">Proceed</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Payment

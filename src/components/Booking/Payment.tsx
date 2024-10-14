import React, { useState } from "react";
import { useLocation } from "../../contexts/LocationContext";
import { useService } from "../../contexts/ServiceContext";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

interface PaymentProps {
  setCurrentStep: (step: number) => void;
}

const Payment: React.FC<PaymentProps> = ({ setCurrentStep }) => {
  const { selectedLocation } = useLocation();
  const { selectedServices } = useService();
  const [services, setServices] = useState(selectedServices);
  const [totalPrice, setTotalPrice] = useState(
    services.reduce((acc, service) => acc + service.price, 0)
  );

  const handleAddService = () => {
    setCurrentStep(1);
  };

  const handleAddHour = (serviceId: number) => {
    const updatedServices = services.map((service) => {
      if (service.id === serviceId) {
        const priceToAdd = serviceId === 1 ? 300 : 1000; 
        return {
          ...service,
          hour: service.hour + 1,
          price: service.price + priceToAdd,
        };
      }
      return service;
    });

    setServices(updatedServices);
    setTotalPrice((prevPrice) => {
      const priceToAdd = serviceId === 1 ? 300 : 1000;
      return prevPrice + priceToAdd;
    });
  };

  const handleDecreaseHour = (serviceId: number) => {
    const updatedServices = services.map((service) => {
      if (service.id === serviceId && service.hour > 1) {
        const priceToSubtract = serviceId === 1 ? 300 : 1000;
        return {
          ...service,
          hour: service.hour - 1,
          price: service.price - priceToSubtract,
        };
      }
      return service;
    });

    setServices(updatedServices);
    setTotalPrice((prevPrice) => {
      const priceToSubtract = serviceId === 1 ? 300 : 1000;
      return prevPrice - priceToSubtract;
    });
  };

  return (
    <div className="w-full h-full">
      <h1 className="roboto-bold text-3xl text-center">Confirm and Pay</h1>

      <div className="w-[80%] md:w-[50%] lg:w-[50%] xl:w-[60%] mx-auto flex flex-col lg:flex-row lg:justify-between mt-3">
        <div className="lg:w-[48%] p-5 border-2 border-brandBlack rounded-2xl mt-5 flex flex-col">
          <h1 className="roboto-bold text-2xl">Summary</h1>
          {selectedLocation ? (
            <div>
              <section className="flex">
                <div className="w-[250px] h-[100px] max-w-[150px] object-cover overflow-hidden mr-5">
                  {selectedLocation.image}
                </div>

                <div>
                  <h1>{selectedLocation.name}</h1>
                  <p>{selectedLocation.address}</p>
                </div>
              </section>
            </div>
          ) : (
            <p>No location selected.</p>
          )}

          {services.length > 0 ? (
            <div className="h-full">
              {services.map((service) => (
                <div key={service.id} className="mt-2">
                  <h1 className="roboto-bold text-base">{service.title}</h1>
                  <div className="flex justify-between pl-3">
                    <p className="roboto-regular text-base mt-1">{service.hour} hour(s)</p>
                    <p className="roboto-regular text-base">₱{service.price}</p>
                  </div>
                  <div className="flex flex-col items-start">
                    <button
                      onClick={() => handleAddHour(service.id)}
                      className="text-slate-600 py-1 roboto-regular text-sm pl-3">
                      <IoAddCircleOutline className="inline mr-1 size-4"/>
                      Add Hour (₱{service.id === 1 ? "300" : "1000"})
                    </button>
                    {service.hour > 1 && (
                      <button
                        onClick={() => handleDecreaseHour(service.id)}
                        className="text-slate-600 py-1 roboto-regular text-sm pl-3">
                        <IoRemoveCircleOutline className="inline mr-1 size-4"/>
                        Reduce Hour
                      </button>
                    )}
                  </div>
                </div>
              ))}
              <div className="flex justify-between mt-5 border-t-2 border-brandBlack pt-2">
                <p className="roboto-bold text-xl">Total Price:</p>
                <p className="roboto-bold text-xl">₱{totalPrice}</p>
              </div>
            </div>
          ) : (
            <p>No services selected.</p>
          )}

          <button onClick={handleAddService} className="w-full bg-brandYellow text-brandBlack py-2 roboto-regular mt-auto">Add service</button>
        </div>

        <div className="lg:w-[48%] p-5 border-2 border-brandBlack rounded-2xl mt-5">
          <h1 className="roboto-bold text-2xl">Player Details</h1>
          <p className="text-base mt-2">Enter your information below so we can contact you in case of sudden changes.</p>

          <form>
            <div className="mt-3">
              <label>Full Name:</label>
              <input type="text" className="focus:outline-none border-b-2 border-brandBlack block w-full py-1" />
            </div>

            <div className="mt-3">
              <label>Mobile Number:</label>
              <input type="text" className="focus:outline-none border-b-2 border-brandBlack block w-full py-1" />
            </div>

            <div className="mt-3">
              <label>Email Address:</label>
              <input type="text" className="focus:outline-none border-b-2 border-brandBlack block w-full py-1" />
            </div>

            <div className="mt-3">
              <label>Number of Pax:</label>
              <input type="number" className="focus:outline-none border-b-2 border-brandBlack block w-full py-1" />
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
  );
};

export default Payment;

import { useEffect, useRef, useState } from "react";
import court from "../../../assets/booking/court.png";
import studio from "../../../assets/booking/studio.jpeg";
import Modal from "../Widgets/Modal";
import { fadeIn } from "../../../variants";
import { motion } from 'framer-motion';

const Services = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<{ id: number; title: string; price:number; description: string; note: string; } | null>(null);
  const courtRef = useRef<HTMLParagraphElement | null>(null);
  const studioRef = useRef<HTMLParagraphElement | null>(null);
  const charLimit = 119;

  // Service Data
  const services = [
    {
      id: 1,
      title: "Court Rental",
      description: "Court Rental service for Badminton Court. Our courts are equipped with Taraflex flooring. Enjoy badminton with your friends or family, and book with us now!",
      note: "Our rate includes a PHP 15.00 online processing fee.",
      price: 320.00,
      img: court,
    },
    {
      id: 2,
      title: "Studio Rental",
      description: "Our studio is perfect for dance, classes, and workshops. The rent comes with lights, speakers, and fans. Our team ensures that you have a convenient and comfortable space, allowing you to focus on your activity without any interruptions.",
      note: "Our rate includes a PHP 15.00 online processing fee and excludes air conditioning and miscellaneous equipment usage.",
      price: 1015.00,
      img: studio,
    },
  ];

  // Modal Content
  const readMore = (id: number) => {
    const service = services.find(s => s.id === id);
    if (service) {
      const content = {
        id: service.id,
        title: service.title,
        price: service.price,
        description: service.description,
        note: service.note,
      };
      setModalContent(content);
      setOpenModal(true);
    }
  };

  // For closing modal
  const closeModal = () => {
    setOpenModal(false);
    setModalContent(null);
  };

  // For court rental's character limit
  useEffect(() => {
    if (courtRef.current) {
      const textContent = courtRef.current.innerText;
      if (textContent.length > charLimit) {
        courtRef.current.innerText = textContent.slice(0, charLimit) + "...";
      }
    }
  }, []);

  // For studio rental's character limit
  useEffect(() => {
    if (studioRef.current) {
      const textContent = studioRef.current.innerText;
      if (textContent.length > charLimit) {
        studioRef.current.innerText = textContent.slice(0, charLimit) + "...";
      }
    }
  }, []);

  return (
    <div className="w-full flex flex-col xl:px-20">
      <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:false, amount:0.5}}>
        <h1 className="roboto-bold text-3xl text-center">Select a Service</h1>
      </motion.div>
      
      <motion.div
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:false, amount:0.2}}
      className="w-[80%] mx-auto flex flex-col justify-center items-center md:w-full lg:flex-row lg:w-[80%] lg:justify-between xl:w-[70%]">
        {services.map(service => (
          <div key={service.id} className="rounded-lg mt-10 hover:-translate-y-4 md:w-[48%]">
            <img src={service.img} className="w-[100%] rounded-xl max-h-48 object-cover" />
            <h1 className="roboto-bold text-2xl mt-4">{service.title}</h1>
            <p ref={service.id === 1 ? courtRef : studioRef} className="text-base font-semibold mt-4 inline">
              {service.description}
            </p>
            <button onClick={() => readMore(service.id)} className="text-brandGreen roboto-bold ml-2">Read more</button>
            <div className="flex justify-between mt-4">
              <h1 className="roboto-bold">1 hour</h1>
              <h1 className="roboto-bold text-brandBlack">PHP {service.price}</h1>
            </div>
            <div className="flex flex-col mt-3">
              <button className="w-full bg-brandBlue text-brandWhite py-2 mt-2 font-semibold rounded-lg">Select</button>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Modal */}
      {modalContent && (
        <Modal
          isOpen={openModal}
          onClose={closeModal}
          id={modalContent.id}
          title={modalContent.title}
          price={modalContent.price}
          description={modalContent.description}
          note={modalContent.note}
        />
      )}
    </div>
  );
};

export default Services;

import ReactDOM from "react-dom";
import { MdErrorOutline } from "react-icons/md";
import Schedule from "../Services/Schedule";
import CourtCarousel from "../Services/CourtCarousel";
import StudioCarousel from "../Services/StudioCarousel";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void; 
  id: number;
  title: string;
  price: number;
  description: string;
  note: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, id, title, price, description, note }) => {
  if (!isOpen) return null;

  let Carousel;
  switch (id) {
    case 1:
      Carousel = <CourtCarousel />;
      break;
    case 2:
      Carousel = <StudioCarousel />;
      break;
    default:
      Carousel = null;
  }

  return ReactDOM.createPortal(
      <div className="backdrop fixed inset-0 z-[1055] flex justify-center items-center h-full w-full overflow-y-auto overflow-x-hidden outline-none bg-brandBlack bg-opacity-60"
           id="exampleModal"
           tabIndex={-1}
           aria-labelledby="exampleModalLabel"
           aria-hidden="false">
        <div className="pointer-events-none relative w-auto translate-y-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[600px] transform-none opacity-100">
          <div className="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-brandWhite bg-clip-padding text-current shadow-4 outline-none dark:bg-surface-dark max-h-[80vh] overflow-y-auto py-7">
            <div className="relative flex-auto px-4">
              {Carousel}
            </div>

            <div className="px-7">
              <h5 className="text-xl font-medium leading-normal text-surface dark:text-white mt-4"
                  id="exampleModalLabel">
                {title}
              </h5>

              <div className="relative flex-auto mt-1">
                Rate: PHP {price}/hr
              </div>

              <div className="relative flex-auto mt-3">
                {description}
              </div>

              <div className="relative flex-auto mt-3">
                <Schedule />
              </div>

              <div className="relative flex-auto text-brandRed font-semibold mt-5">
                <MdErrorOutline className="inline-block size-5"/> Note: {note}
              </div>

              <div className="flex items-center justify-between rounded-t-md border-b-2 border-neutral-100 pt-4 dark:border-white/10 mt-3">
                <button
                  type="button"
                  className="bg-brandYellow text-brandBlack w-full py-2 roboto-bold"
                  onClick={onClose}
                  aria-label="Close"> Close
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>,
    document.body
  );
}

export default Modal;

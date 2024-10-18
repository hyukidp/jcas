import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { useSchedule } from "../../contexts/ScheduleContext";
import { Schedule } from "../../interfaces/Schedule";

interface DateProps {
  setCurrentStep: (step: number) => void;
}

const Date: React.FC<DateProps> = ({ setCurrentStep }) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | undefined>(undefined);
  const [selectedCourt, setSelectedCourt] = useState<number | undefined>(undefined);
  const { setSelectedSchedule } = useSchedule();

  const handleSelect = () => {
    setCurrentStep(4)
  }

  const generateTimeSlots = (date: Date) => {
    const day = date.getDay();
    const slots = [];
    const startTime = 8; // Start at 8 AM

    let endTime;
    if (day >= 1 && day <= 4) { // Monday to Thursday
      endTime = 23; // 11 PM
    } else if (day === 5 || day === 6) { // Friday and Saturday
      endTime = 24; // 12 AM (next day)
    } else { // Sunday
      endTime = 21; // 9 PM
    }

    for (let hour = startTime; hour < endTime; hour++) {
      const hourDisplay = String(hour % 12 === 0 ? 12 : hour % 12).padStart(2, '0'); // Format to 12-hour
      const ampm = hour >= 12 ? 'PM' : 'AM';
      const nextHour = hour + 1;
      const nextHourDisplay = String(nextHour % 12 === 0 ? 12 : nextHour % 12).padStart(2, '0'); // Next hour

      // Handle the case for the last slot on Friday and Saturday
      if (day === 5 || day === 6) {
        if (hour === 23) { // Special case for 11 PM
          slots.push(`${hourDisplay}:00 ${ampm} - 12:00 AM`);
        } else {
          slots.push(`${hourDisplay}:00 ${ampm} - ${nextHourDisplay}:00 ${nextHour >= 12 ? 'PM' : 'AM'}`);
        }
      } else {
        slots.push(`${hourDisplay}:00 ${ampm} - ${nextHourDisplay}:00 ${nextHour >= 12 ? 'PM' : 'AM'}`);
      }
    }

    return slots;
  };

  const timeSlots = selectedDate ? generateTimeSlots(selectedDate) : [];

  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="roboto-bold text-3xl text-center">Pick a Date and Time</h1>

      <div className="mt-5 flex flex-row">
        <DayPicker
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          className="mx-5"
        />

        {selectedDate && (
          <div className="mt-2">
            <h2 className="roboto-bold text-xl">Available Time Slots:</h2>

            <div className="grid grid-cols-2 mt-3">
              {timeSlots.map((slot, index) => (
                <ul key={index} className="py-1 cursor-pointer">
                  <li
                    className={`py-1 cursor-pointer ${selectedTimeSlot === slot ? 'bg-brandGreen text-brandWhite px-2 mx-1' : 'bg-gray-200 text-brandBlack px-2 mx-1'}`}
                    onClick={() => setSelectedTimeSlot(slot)}>
                    {slot}
                  </li>
                </ul>
              ))}
            </div>
          </div>
        )}

        <div>
        {selectedTimeSlot && (
          <div className="mt-2 mx-5">
            <h2 className="roboto-bold text-xl">Select a Court:</h2>
            <div className="grid grid-cols-5 gap-3 mt-4">
              {Array.from({ length: 15 }, (_, index) => (
                <button
                  key={index + 1}
                  className={`py-1 px-2 border rounded ${selectedCourt === index + 1 ? 'bg-brandRed text-brandWhite' : 'bg-gray-200'}`}
                  onClick={() => setSelectedCourt(index + 1)}>
                  Court {index + 1}
                </button>
              ))}
            </div>
          </div>
        )}

        {selectedDate && selectedTimeSlot && selectedCourt && (
          <section className="px-5">
            <div className="mt-5 p-4 border-2 shadow-xl rounded h-fit">
              <h2 className="roboto-bold text-2xl">Booking Details:</h2>
              <p className="mt-2 text-lg">
                <strong>Date:</strong> {selectedDate.toLocaleDateString()}
              </p>
              <p className="text-lg">
                <strong>Time Slot:</strong> {selectedTimeSlot}
              </p>
              <p className="text-lg">
                <strong>Court:</strong> Court {selectedCourt}
              </p>

              <button onClick={handleSelect} className="bg-brandYellow w-full py-2 mt-5 font-bold text-lg">Proceed</button>
            </div>
          </section>
        )}
        </div>
      </div>
    </div>
  );
};

export default Date;

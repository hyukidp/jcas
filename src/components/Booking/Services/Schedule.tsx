const Schedule = () => {
  return (
    <div className="w-full flex flex-col items-center">
    <h1>Daily Schedule</h1>
    <div className="w-2/3 flex flex-row justify-between mt-3">
      <div className="flex flex-col">
        <h1>Monday</h1>
        <h1>Tuesday</h1>
        <h1>Wednesday</h1>
        <h1>Thursday</h1>
        <h1>Friday</h1>
        <h1>Saturday</h1>
        <h1>Sunday</h1>
      </div>

      <div className="flex flex-col">
        <h1>08:00 AM - 11:00 PM</h1>
        <h1>08:00 AM - 11:00 PM</h1>
        <h1>08:00 AM - 11:00 PM</h1>
        <h1>08:00 AM - 11:00 PM</h1>
        <h1>08:00 AM - 12:00 AM</h1>
        <h1>08:00 AM - 12:00 AM</h1>
        <h1>08:00 AM - 09:00 PM</h1>
      </div>
    </div>
    </div>
  )
}

export default Schedule

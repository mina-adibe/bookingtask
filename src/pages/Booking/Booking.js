/* eslint-disable prettier/prettier */
import React, { useMemo, useState } from "react";
import { timeConverter } from "../../heplers/timeConverter";
import DateSlots from "../../component/dateSlots/DateSlots";
import TimeSlots from "../../component/timeSlots/TimeSlots";
import useDoctorInfo from "../../hooks/useDoctorInfo";
//import Button from "../../component/Button/Button";

const Booking = () => {
  const [doctorInfo, loading, error] = useDoctorInfo();

  const [availableTimes, setAvailableTimes] = useState([]);
  const [unavailableTimes, setUnavailableTimes] = useState([]);

  const availableTime = ({ available, unavailable }) => {
    setAvailableTimes(available);
    setUnavailableTimes(unavailable);
  };

  const availableSlots = useMemo(
    () => timeConverter(availableTimes),
    [availableTimes],
  );

  const unavailableSlots = useMemo(
    () => timeConverter(unavailableTimes),
    [unavailableTimes],
  );

  if (error) {
    return <h3>Somthing went wrong: {error}</h3>;
  }
  if (loading) {
    return <h3>Loading...</h3>;
  }
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="flex flex-col">
        <div
          className="flex flex-col border-solid	border-1 border-c300 rounded-base w-[22.313rem] h-[20.438rem]
       px-[1.188rem] py-[1.625rem] bg-c000 mb-[19px]">
          <div className="mb-[1.156rem] flex justify-between ">
            <span className="font-bold	">Fees</span>
            <span>85$</span>
          </div>
          <div className="border-b-1 border-c300"></div>
          <DateSlots doctorInfo={doctorInfo} availableTime={availableTime} />
          <div>
            <TimeSlots
              availableSlots={availableSlots}
              unavailableSlots={unavailableSlots}
            />
          </div>
        </div>
        <button className="bg-c200 text-c300 items-center justify-center border-1 h-[52px] rounded-base hover:shadow-btn transform hover:-translate-y-.5 transition-all duration-200">
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default Booking;

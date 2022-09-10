/* eslint-disable prettier/prettier */
import React, { useMemo, useState } from "react";
import { timeConverter } from "../../heplers/timeConverter";
import DateSlots from "../../component/dateSlots/DateSlots";
import TimeSlots from "../../component/timeSlots/TimeSlots";
import useDoctorInfo from "../../hooks/useDoctorInfo";
import Slots from "../../component/slots/Slots";

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
      <Slots>slot1</Slots>
      <div
        className="flex flex-col border-solid	border-1 border-c300 rounded-base w-[22.313rem] h-[20.438rem]
       px-[1.188rem] py-[1.625rem] bg-c000">
        <div className="mb-[1.156rem]">
          <span>Fees</span>
          <span>85$</span>
        </div>
        <div className="border-b-1 border-c300"></div>
        <DateSlots doctorInfo={doctorInfo} availableTime={availableTime} />
        <div>
          <p>Choose time</p>
          <TimeSlots
            availableSlots={availableSlots}
            unavailableSlots={unavailableSlots}
          />
        </div>
      </div>
    </div>
  );
};

export default Booking;

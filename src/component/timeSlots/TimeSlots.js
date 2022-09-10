import React from "react";
import PropTypes from "prop-types";

import Slots from "../slots/Slots";

const TimeSlots = ({ availableSlots, unavailableSlots }) => {
  return (
    <div>
      <p className="font-bold	">Choose time</p>
      <div className="w-full flex flex-row gap-2 flex-wrap max-w-max ">
        {availableSlots.map((elm, index) => {
          return <Slots key={index}>{elm}</Slots>;
        })}
      </div>
      <div className=" flex flex-row gap-2  flex-wrap	mt-[90px]">
        {unavailableSlots.map((elm, index) => {
          return (
            <Slots className="opacity-10" key={index}>
              {elm}
            </Slots>
          );
        })}
      </div>
    </div>
  );
};

export default TimeSlots;

TimeSlots.propTypes = {
  availableSlots: PropTypes.array,
  unavailableSlots: PropTypes.array,
};

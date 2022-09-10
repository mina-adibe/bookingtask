import React from "react";
import PropTypes from "prop-types";

import Slots from "../slots/Slots";

const TimeSlots = ({ availableSlots, unavailableSlots }) => {
  console.log("@availableSlots", availableSlots);
  console.log("@unavailableSlots", unavailableSlots);

  return (
    <div>
      <div className="w-full flex flex-row gap-2 flex-wrap max-w-max">
        {availableSlots.map((elm, index) => {
          return <Slots key={index}>{elm}</Slots>;
        })}
      </div>
      <div className=" flex flex-row gap-2  flex-wrap	">
        {unavailableSlots.map((elm, index) => {
          return <Slots key={index}>{elm}</Slots>;
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

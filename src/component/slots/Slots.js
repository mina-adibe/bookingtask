/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line no-unused-vars
const Slots = ({ children }) => {
  return (
    <div
      style={{
        background: "#FFFFFF",
        boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.161)",
        borderRadius: "10px",
        padding: "4px",
        margin: "5px",
        cursor: "pointer",
      }}>
      {children}
    </div>
  );
};

export default Slots;

Slots.propTypes = {
  children: PropTypes.element.isRequired,
};

/* eslint-disable prettier/prettier */

import React from "react";
import PropTypes from "prop-types";

const Slots = ({ children, ...rest }) => {
  return (
    <div
      style={{
        background: "#FFFFFF",
        boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.161)",
        borderRadius: "10px",
        padding: "4px",
        margin: "5px",
        cursor: "pointer",
      }}
      {...rest}>
      {children}
    </div>
  );
};

export default Slots;

Slots.propTypes = {
  children: PropTypes.node,
  rest: PropTypes.array,
};

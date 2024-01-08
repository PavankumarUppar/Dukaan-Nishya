/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconsOutlinedInfo2 } from "../../icons/IconsOutlinedInfo2";
import "./style.css";

export const HowToUse = ({
  className,
  icon = <IconsOutlinedInfo2 className="icons-outlined-info" />,
  divClassName,
  text = "How to use",
}) => {
  return (
    <div className={`how-to-use ${className}`}>
      {icon}
      <div className={`text-wrapper ${divClassName}`}>{text}</div>
    </div>
  );
};

HowToUse.propTypes = {
  text: PropTypes.string,
};

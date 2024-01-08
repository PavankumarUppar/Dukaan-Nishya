/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconsMenu4 } from "../../icons/IconsMenu4";
import { IconsMenu6 } from "../../icons/IconsMenu6";
import { TypeNotificationStateNormal } from "../../icons/TypeNotificationStateNormal";
import { IconsMenu } from "../IconsMenu";
import "./style.css";

export const Icons = ({ type, className }) => {
  return (
    <div className={`icons ${className}`}>
      <IconsMenu6 className="icons-menu-2" />
      {["four", "three"].includes(type) && <TypeNotificationStateNormal className="icons-menu-2" />}

      <IconsMenu
        polygon="/img/polygon-2-4.svg"
        polygonClassName="icons-menu-instance"
        state="normal"
        type="dropdown"
        typeDropdownStateClassName="icons-menu-3"
      />
      {type === "four" && <IconsMenu4 className="icons-menu-2" />}
    </div>
  );
};

Icons.propTypes = {
  type: PropTypes.oneOf(["two", "three", "four"]),
};

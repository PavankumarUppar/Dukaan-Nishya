/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const FilledInfo1 = ({ color = "#146EB4", className }) => {
  return (
    <svg
      className={`filled-info-1 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_2_530)">
        <path
          className="path"
          clipRule="evenodd"
          d="M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0ZM12 6.70767C12.5134 6.70767 12.9296 7.12386 12.9296 7.63726C12.9296 8.15066 12.5134 8.56685 12 8.56685C11.4866 8.56685 11.0704 8.15066 11.0704 7.63726C11.0704 7.12386 11.4866 6.70767 12 6.70767ZM12.7691 11.2145C12.7317 10.8511 12.4016 10.5669 12 10.5669C11.5733 10.5669 11.2274 10.8877 11.2274 11.2835V16.5757L11.231 16.6447C11.2684 17.0081 11.5984 17.2923 12 17.2923C12.4267 17.2923 12.7727 16.9715 12.7727 16.5757V11.2835L12.7691 11.2145Z"
          fill={color}
          fillRule="evenodd"
        />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_2_530">
          <rect className="rect" fill="white" height="24" width="24" />
        </clipPath>
      </defs>
    </svg>
  );
};

FilledInfo1.propTypes = {
  color: PropTypes.string,
};

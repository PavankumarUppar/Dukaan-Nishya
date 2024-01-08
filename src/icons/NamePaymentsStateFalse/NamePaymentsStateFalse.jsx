/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const NamePaymentsStateFalse = ({ color = "#4D4D4D", className }) => {
  return (
    <svg
      className={`name-payments-state-false ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" opacity="0.8">
        <path
          className="path"
          d="M14.2751 11.775C14.2751 13.1557 13.1558 14.275 11.7751 14.275C10.3943 14.275 9.27505 13.1557 9.27505 11.775C9.27505 10.3943 10.3943 9.27499 11.7751 9.27499C13.1558 9.27499 14.2751 10.3943 14.2751 11.775Z"
          fill={color}
        />
        <path
          className="path"
          clipRule="evenodd"
          d="M15.9268 3.16899C16.004 3.31855 16.0502 3.48216 16.0625 3.64998V6.24996H18.425C18.6023 6.24497 18.7788 6.27497 18.9445 6.33824C19.1103 6.40151 19.2619 6.4968 19.3907 6.61869C19.5196 6.74058 19.6231 6.88667 19.6955 7.04861C19.7679 7.21055 19.8077 7.38518 19.8125 7.56249V16C19.8077 16.1773 19.7679 16.3519 19.6955 16.5138C19.6231 16.6758 19.5196 16.8219 19.3907 16.9437C19.2619 17.0656 19.1103 17.1609 18.9445 17.2242C18.7788 17.2875 18.6023 17.3175 18.425 17.3125H5.12505C4.94836 17.3175 4.77238 17.2874 4.60739 17.224C4.4424 17.1606 4.29168 17.065 4.16382 16.943C4.03596 16.8209 3.93355 16.6748 3.86253 16.5129C3.79151 16.351 3.75323 16.1767 3.75 16V13.5625H1.37505C1.20783 13.5796 1.03882 13.5629 0.87822 13.5133C0.717624 13.4636 0.568733 13.3821 0.440369 13.2736C0.312004 13.1651 0.206809 13.0317 0.131149 12.8816C0.0554897 12.7315 0.0108881 12.5677 0 12.4V3.64998C0.0124843 3.48333 0.0582998 3.32088 0.134659 3.17223C0.211018 3.02358 0.316372 2.89172 0.444565 2.7845C0.572758 2.67729 0.721153 2.59686 0.880966 2.54799C1.04078 2.49912 1.20881 2.48279 1.37505 2.49997H14.675C14.8422 2.481 15.0115 2.49601 15.1728 2.54406C15.3341 2.59211 15.484 2.67223 15.6136 2.77962C15.7431 2.88701 15.8497 3.01943 15.9268 3.16899ZM3.91006 6.41003C4.17262 6.14748 4.52875 5.99999 4.90005 5.99999H14.7501V3.81249H1.31256V12.25H3.50006V7.39998C3.50006 7.02868 3.64751 6.67258 3.91006 6.41003ZM5.06256 16H18.5001V7.56249H5.06256V16Z"
          fill={color}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
};

NamePaymentsStateFalse.propTypes = {
  color: PropTypes.string,
};
/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const NameDeliveryStateTrue = ({ color = "#4D4D4D", className }) => {
  return (
    <svg
      className={`name-delivery-state-true ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M1.69799 2.34277C1.22041 2.34277 0.833252 2.72993 0.833252 3.20751V13.0189C0.833252 13.4965 1.22041 13.8836 1.69799 13.8836H2.53873C2.41223 14.1996 2.34265 14.5445 2.34265 14.9057C2.34265 16.4253 3.57456 17.6572 5.09419 17.6572C6.61382 17.6572 7.84573 16.4253 7.84573 14.9057C7.84573 14.5445 7.77614 14.1996 7.64965 13.8836H12.3501C12.2237 14.1996 12.1541 14.5445 12.1541 14.9057C12.1541 16.4253 13.386 17.6572 14.9056 17.6572C16.4252 17.6572 17.6571 16.4253 17.6571 14.9057C17.6571 14.5445 17.5876 14.1996 17.4611 13.8837H18.3019C18.7794 13.8837 19.1666 13.4965 19.1666 13.0189V9.24531C19.1666 9.01597 19.0755 8.79602 18.9133 8.63385L16.6491 6.36968C16.487 6.20751 16.267 6.11641 16.0377 6.11641H13.8835V3.20751C13.8835 2.72993 13.4964 2.34277 13.0188 2.34277H1.69799ZM14.8967 13.8837H14.9145C15.4749 13.8884 15.9277 14.3442 15.9277 14.9057C15.9277 15.4702 15.4701 15.9277 14.9056 15.9277C14.3411 15.9277 13.8835 15.4702 13.8835 14.9057C13.8835 14.3442 14.3363 13.8884 14.8967 13.8837ZM14.9202 12.1542H17.4371V9.60349L15.6795 7.84588H13.8835V12.1542H14.891C14.8959 12.1542 14.9008 12.1541 14.9056 12.1541C14.9105 12.1541 14.9153 12.1542 14.9202 12.1542ZM5.09419 12.1541L5.10022 12.1541H12.1541L12.1541 6.98114L12.1541 6.97761V4.07224H2.56272V12.1541H5.08815L5.09419 12.1541ZM4.07212 14.9057C4.07212 14.3425 4.52764 13.8857 5.09035 13.8836H5.09803C5.66074 13.8857 6.11626 14.3425 6.11626 14.9057C6.11626 15.4702 5.65866 15.9277 5.09419 15.9277C4.52972 15.9277 4.07212 15.4702 4.07212 14.9057Z"
        fill={color}
        fillRule="evenodd"
      />
      <path
        className="path"
        d="M1.69799 2.34277C1.22041 2.34277 0.833252 2.72993 0.833252 3.20751V13.0189C0.833252 13.4965 1.22041 13.8836 1.69799 13.8836H13.0188C13.4964 13.8836 13.8835 13.4965 13.8835 13.0189V3.20751C13.8835 2.72993 13.4964 2.34277 13.0188 2.34277H1.69799Z"
        fill={color}
      />
    </svg>
  );
};

NameDeliveryStateTrue.propTypes = {
  color: PropTypes.string,
};

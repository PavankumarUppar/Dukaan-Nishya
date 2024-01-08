/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { BoldChevronDown3 } from "../../icons/BoldChevronDown3";
import { NameMarketingStateFalse } from "../../icons/NameMarketingStateFalse";
import { NamePaymentsStateFalse } from "../../icons/NamePaymentsStateFalse";
import { NavbarIcon111 } from "../../icons/NavbarIcon111";
import { NavbarIcon12 } from "../../icons/NavbarIcon12";
import { NavbarIcon152 } from "../../icons/NavbarIcon152";
import { NavbarIcon156 } from "../../icons/NavbarIcon156";
import { NavbarIcon21 } from "../../icons/NavbarIcon21";
import { NavbarIcon23 } from "../../icons/NavbarIcon23";
import { NavbarIcon24 } from "../../icons/NavbarIcon24";
import { NavbarIcon3 } from "../../icons/NavbarIcon3";
import { NavbarIcon31 } from "../../icons/NavbarIcon31";
import { NavbarIcon32 } from "../../icons/NavbarIcon32";
import { NavbarIcon36 } from "../../icons/NavbarIcon36";
import { NavbarIcon38 } from "../../icons/NavbarIcon38";
import { BaseNavBottom } from "../BaseNavBottom";
import { BaseNavButton } from "../BaseNavButton";
import "./style.css";

export const BaseNavigationBar = ({
  className,
  baseNavButtonIcon = <NavbarIcon12 className="icon-instance-node" />,
  override = <NavbarIcon156 className="icon-instance-node" />,
  baseNavButtonIcon1 = <NavbarIcon32 className="icon-instance-node" />,
  baseNavButtonIcon2 = <NavbarIcon31 className="icon-instance-node" color="white" />,
  baseNavButtonIcon3 = <NameMarketingStateFalse className="icon-instance-node" color="white" />,
  baseNavButtonIcon4 = <NavbarIcon152 className="icon-instance-node" color="white" />,
  baseNavButtonState = "inactive",
  baseNavButtonIcon5 = <NamePaymentsStateFalse className="icon-instance-node" color="white" />,
  baseNavButtonText = "Payouts",
  baseNavButtonIcon6 = <NavbarIcon38 className="icon-instance-node" color="white" />,
  baseNavButtonIcon7 = <NavbarIcon3 className="icon-instance-node" />,
  baseNavButtonIcon8 = <NavbarIcon36 className="icon-instance-node" color="white" />,
  visible = true,
  visible1 = true,
  baseNavButtonIcon9 = <NavbarIcon111 className="icon-instance-node" />,
  baseNavButtonIcon10 = <NavbarIcon21 className="icon-instance-node" />,
  baseNavBottomOutlineWalletWallet = "/img/wallet-2.svg",
  baseNavButtonState1 = "inactive",
  baseNavButtonState2 = "inactive",
  baseNavButtonState3 = "inactive",
  baseNavButtonState4 = "inactive",
  baseNavButtonState5 = "inactive",
  baseNavButtonState6 = "inactive",
  baseNavButtonState7 = "inactive",
  baseNavButtonState8 = "inactive",
  baseNavButtonIcon11 = <NavbarIcon24 className="icon-instance-node" />,
  baseNavButtonIcon12 = <NavbarIcon23 className="icon-instance-node" />,
  baseNavButtonState9 = "inactive",
}) => {
  return (
    <div className={`base-navigation-bar ${className}`}>
      <div className="nav-top">
        <div className="company-icon-image">
          <div className="rectangle" />
          <div className="frame-12">
            <div className="text-wrapper-12">Nishyan</div>
            <div className="text-wrapper-13">Visit store</div>
          </div>
          <img className="image" alt="Image" src="/img/image-34.png" />
          <BoldChevronDown3 className="icon-instance-node" color="white" />
        </div>
        <div className="pages">
          <BaseNavButton
            badge={false}
            beta={false}
            className="design-component-instance-node"
            icon={baseNavButtonIcon}
            state={baseNavButtonState1}
            text="Home"
            type="parent"
          />
          <BaseNavButton
            badge={false}
            beta={false}
            className="design-component-instance-node"
            icon={override}
            state="inactive"
            text="Orders"
            type="parent"
          />
          <BaseNavButton
            badge={false}
            beta={false}
            className="design-component-instance-node"
            icon={baseNavButtonIcon1}
            state="inactive"
            text="Products"
            type="parent"
          />
          <BaseNavButton
            badge={false}
            beta={false}
            className="design-component-instance-node"
            icon={baseNavButtonIcon2}
            state={baseNavButtonState2}
            text="Delivery"
            type="parent"
          />
          <BaseNavButton
            badge={false}
            beta={false}
            className="design-component-instance-node"
            icon={baseNavButtonIcon3}
            state={baseNavButtonState3}
            text="Marketing"
            type="parent"
          />
          <BaseNavButton
            badge={false}
            beta={false}
            className="design-component-instance-node"
            icon={baseNavButtonIcon4}
            state={baseNavButtonState4}
            text="Analytics"
            type="parent"
          />
          <BaseNavButton
            badge={false}
            beta={false}
            className="design-component-instance-node"
            icon={baseNavButtonIcon5}
            state={baseNavButtonState}
            text={baseNavButtonText}
            type="parent"
          />
          <BaseNavButton
            badge={false}
            beta={false}
            className="design-component-instance-node"
            icon={baseNavButtonIcon6}
            state={baseNavButtonState5}
            text="Tools"
            type="parent"
          />
          <BaseNavButton
            badge={false}
            beta={false}
            className="design-component-instance-node"
            icon={baseNavButtonIcon7}
            state={baseNavButtonState6}
            text="Discounts"
            type="parent"
          />
          <BaseNavButton
            badge={false}
            beta={false}
            className="design-component-instance-node"
            icon={baseNavButtonIcon8}
            state={baseNavButtonState7}
            text="Audience"
            type="parent"
          />
          {visible && (
            <BaseNavButton
              badge={false}
              beta={false}
              className="design-component-instance-node"
              icon={baseNavButtonIcon11}
              state={baseNavButtonState8}
              text="Affiliates"
              type="parent"
            />
          )}

          {visible1 && (
            <BaseNavButton
              badge={false}
              beta={false}
              className="design-component-instance-node"
              icon={baseNavButtonIcon12}
              state={baseNavButtonState9}
              text="Vendors"
              type="parent"
            />
          )}

          <BaseNavButton
            badge={false}
            beta={false}
            className="design-component-instance-node"
            icon={baseNavButtonIcon9}
            state="inactive"
            text="Appearance"
            type="parent"
          />
          <BaseNavButton
            badge={false}
            beta={false}
            className="design-component-instance-node"
            icon={baseNavButtonIcon10}
            state="inactive"
            text="Plugins"
            type="parent"
          />
        </div>
      </div>
      <BaseNavBottom
        className="design-component-instance-node"
        outlineWalletWallet={baseNavBottomOutlineWalletWallet}
        property1="wallet-credits"
      />
    </div>
  );
};

BaseNavigationBar.propTypes = {
  baseNavButtonState: PropTypes.string,
  baseNavButtonText: PropTypes.string,
  visible: PropTypes.bool,
  visible1: PropTypes.bool,
  baseNavBottomOutlineWalletWallet: PropTypes.string,
  baseNavButtonState1: PropTypes.string,
  baseNavButtonState2: PropTypes.string,
  baseNavButtonState3: PropTypes.string,
  baseNavButtonState4: PropTypes.string,
  baseNavButtonState5: PropTypes.string,
  baseNavButtonState6: PropTypes.string,
  baseNavButtonState7: PropTypes.string,
  baseNavButtonState8: PropTypes.string,
  baseNavButtonState9: PropTypes.string,
};

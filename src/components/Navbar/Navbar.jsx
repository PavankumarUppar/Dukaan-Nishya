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
import { NavbarIcon127 } from "../../icons/NavbarIcon127";
import { NavbarIcon152 } from "../../icons/NavbarIcon152";
import { NavbarIcon156 } from "../../icons/NavbarIcon156";
import { NavbarIcon179 } from "../../icons/NavbarIcon179";
import { NavbarIcon192 } from "../../icons/NavbarIcon192";
import { NavbarIcon21 } from "../../icons/NavbarIcon21";
import { NavbarIcon23 } from "../../icons/NavbarIcon23";
import { NavbarIcon24 } from "../../icons/NavbarIcon24";
import { NavbarIcon3 } from "../../icons/NavbarIcon3";
import { NavbarIcon31 } from "../../icons/NavbarIcon31";
import { NavbarIcon32 } from "../../icons/NavbarIcon32";
import { NavbarIcon36 } from "../../icons/NavbarIcon36";
import { NavbarIcon38 } from "../../icons/NavbarIcon38";
import { NavbarIcon45 } from "../../icons/NavbarIcon45";
import { NavbarIcon47 } from "../../icons/NavbarIcon47";
import { NavbarIcon60 } from "../../icons/NavbarIcon60";
import { NavbarIcon75 } from "../../icons/NavbarIcon75";
import { BaseNavBottom } from "../BaseNavBottom";
import { BaseNavButton } from "../BaseNavButton";
import { BaseNavigationBar } from "../BaseNavigationBar";
import { NavbarIcon } from "../NavbarIcon";
import "./style.css";

export const Navbar = ({
  navbar,
  className,
  baseNavigationBarBaseNavButtonIcon = <NavbarIcon36 className="navbar-icon-2" color="white" />,
  override = <NavbarIcon31 className="navbar-icon-2" color="white" />,
  baseNavigationBarBaseNavButtonIcon1 = <NavbarIcon156 className="navbar-icon-2" />,
  baseNavigationBarBaseNavButtonIcon2 = <NavbarIcon32 className="navbar-icon-2" />,
  baseNavigationBarBaseNavButtonIcon3 = <NavbarIcon38 className="navbar-icon-2" color="white" />,
  baseNavigationBarBaseNavButtonIcon4 = <NavbarIcon21 className="navbar-icon-2" />,
  baseNavigationBarBaseNavButtonIcon5 = <NavbarIcon127 className="navbar-icon-2" color="white" />,
  baseNavigationBarBaseNavButtonIcon6 = <NavbarIcon111 className="navbar-icon-2" />,
  baseNavigationBarBaseNavButtonIcon7 = <NavbarIcon3 className="navbar-icon-2" />,
  baseNavigationBarBaseNavButtonIcon8 = <NavbarIcon152 className="navbar-icon-2" color="white" />,
  baseNavigationBarBaseNavButtonIcon9 = <NameMarketingStateFalse className="navbar-icon-2" color="white" />,
  baseNavigationBarBaseNavButtonText = "Payouts",
  baseNavigationBarBaseNavButtonIcon10 = <NavbarIcon45 className="navbar-icon-2" />,
}) => {
  return (
    <div className={`navbar ${className}`}>
      {(navbar === "account" ||
        navbar === "affiliates" ||
        navbar === "analytics" ||
        navbar === "audience" ||
        navbar === "delivery" ||
        navbar === "discounts" ||
        navbar === "home" ||
        navbar === "marketing" ||
        navbar === "payouts" ||
        navbar === "tools" ||
        navbar === "vendors") && (
        <BaseNavigationBar
          baseNavBottomOutlineWalletWallet={navbar === "vendors" ? "/img/wallet-4.svg" : "/img/wallet-7.svg"}
          baseNavButtonIcon={baseNavigationBarBaseNavButtonIcon10}
          baseNavButtonIcon1={baseNavigationBarBaseNavButtonIcon2}
          baseNavButtonIcon10={baseNavigationBarBaseNavButtonIcon4}
          baseNavButtonIcon11={
            navbar === "affiliates" ? (
              <NavbarIcon75 className="navbar-icon-2" />
            ) : navbar === "vendors" ? (
              <NavbarIcon24 className="navbar-icon-2" />
            ) : undefined
          }
          baseNavButtonIcon12={
            navbar === "affiliates" ? (
              <NavbarIcon23 className="navbar-icon-2" />
            ) : navbar === "vendors" ? (
              <NavbarIcon60 className="navbar-icon-2" />
            ) : undefined
          }
          baseNavButtonIcon2={override}
          baseNavButtonIcon3={baseNavigationBarBaseNavButtonIcon9}
          baseNavButtonIcon4={baseNavigationBarBaseNavButtonIcon8}
          baseNavButtonIcon5={baseNavigationBarBaseNavButtonIcon5}
          baseNavButtonIcon6={baseNavigationBarBaseNavButtonIcon3}
          baseNavButtonIcon7={baseNavigationBarBaseNavButtonIcon7}
          baseNavButtonIcon8={baseNavigationBarBaseNavButtonIcon}
          baseNavButtonIcon9={baseNavigationBarBaseNavButtonIcon6}
          baseNavButtonState={navbar === "payouts" ? "active" : "inactive"}
          baseNavButtonState1={
            navbar === "home"
              ? "active"
              : navbar === "affiliates" ||
                navbar === "analytics" ||
                navbar === "audience" ||
                navbar === "delivery" ||
                navbar === "discounts" ||
                navbar === "marketing" ||
                navbar === "payouts" ||
                navbar === "tools" ||
                navbar === "vendors"
              ? "inactive"
              : undefined
          }
          baseNavButtonState2={
            navbar === "delivery"
              ? "active"
              : navbar === "affiliates" ||
                navbar === "analytics" ||
                navbar === "audience" ||
                navbar === "discounts" ||
                navbar === "marketing" ||
                navbar === "payouts" ||
                navbar === "tools" ||
                navbar === "vendors"
              ? "inactive"
              : undefined
          }
          baseNavButtonState3={
            navbar === "marketing"
              ? "active"
              : navbar === "affiliates" ||
                navbar === "analytics" ||
                navbar === "audience" ||
                navbar === "discounts" ||
                navbar === "payouts" ||
                navbar === "tools" ||
                navbar === "vendors"
              ? "inactive"
              : undefined
          }
          baseNavButtonState4={
            navbar === "analytics"
              ? "active"
              : ["affiliates", "audience", "discounts", "payouts", "tools", "vendors"].includes(navbar)
              ? "inactive"
              : undefined
          }
          baseNavButtonState5={
            navbar === "tools"
              ? "active"
              : ["affiliates", "audience", "discounts", "vendors"].includes(navbar)
              ? "inactive"
              : undefined
          }
          baseNavButtonState6={
            navbar === "discounts"
              ? "active"
              : ["affiliates", "audience", "vendors"].includes(navbar)
              ? "inactive"
              : undefined
          }
          baseNavButtonState7={
            navbar === "audience" ? "active" : ["affiliates", "vendors"].includes(navbar) ? "inactive" : undefined
          }
          baseNavButtonState8={navbar === "affiliates" ? "active" : navbar === "vendors" ? "inactive" : undefined}
          baseNavButtonState9={navbar === "vendors" ? "active" : undefined}
          baseNavButtonText={baseNavigationBarBaseNavButtonText}
          className="navbar-account"
          override={baseNavigationBarBaseNavButtonIcon1}
          visible={
            navbar === "account" ||
            navbar === "analytics" ||
            navbar === "audience" ||
            navbar === "delivery" ||
            navbar === "discounts" ||
            navbar === "home" ||
            navbar === "marketing" ||
            navbar === "payouts" ||
            navbar === "tools"
              ? false
              : undefined
          }
          visible1={
            navbar === "account" ||
            navbar === "analytics" ||
            navbar === "audience" ||
            navbar === "delivery" ||
            navbar === "discounts" ||
            navbar === "home" ||
            navbar === "marketing" ||
            navbar === "payouts" ||
            navbar === "tools"
              ? false
              : undefined
          }
        />
      )}

      {["apperance", "orders", "plugins", "products"].includes(navbar) && (
        <div className="navbar-orders">
          <div className="nav-top-2">
            <div className="company-icon-image-2">
              <div className="rectangle-2" />
              <div className="frame-13">
                <div className="text-wrapper-14">Nishyan</div>
                <div className="text-wrapper-15">Visit store</div>
              </div>
              <img className="img" alt="Image" src="/img/image-34.png" />
              <BoldChevronDown3 className="navbar-icon-2" color="white" />
            </div>
            <div className="pages-2">
              <BaseNavButton
                badge={false}
                beta={false}
                className="instance-node-7"
                icon={<NavbarIcon45 className="navbar-icon-2" />}
                state="inactive"
                text="Home"
                type="parent"
              />
              {navbar === "products" && (
                <div className="base-child">
                  <BaseNavButton
                    badge
                    beta={false}
                    override={<NavbarIcon156 className="navbar-icon-2" />}
                    state="inactive"
                    text="Orders"
                    type="parent"
                  />
                </div>
              )}

              {["orders", "products"].includes(navbar) && (
                <div className="base-child-2">
                  <BaseNavButton
                    badge={navbar === "products" ? false : true}
                    beta={false}
                    className="instance-node-7"
                    icon={navbar === "products" ? <NavbarIcon179 className="navbar-icon-2" /> : undefined}
                    override={navbar === "orders" ? <NavbarIcon192 className="navbar-icon-2" /> : undefined}
                    state="active"
                    text={navbar === "products" ? "Products" : "Orders"}
                    type="parent"
                  />
                  <div className="frame-14">
                    <BaseNavButton
                      badge={false}
                      beta={false}
                      className="instance-node-7"
                      state="active"
                      text1={navbar === "products" ? "All products (133)" : "All orders (303)"}
                      type="child"
                    />
                    <BaseNavButton
                      badge={false}
                      beta={false}
                      className="instance-node-7"
                      state="inactive"
                      text1={navbar === "products" ? "Categories (13)" : "Returns (2)"}
                      type="child"
                    />
                    <BaseNavButton
                      badge={false}
                      beta={false}
                      className="instance-node-7"
                      state="inactive"
                      text1={navbar === "products" ? "Inventory" : "Abandoned (103)"}
                      type="child"
                    />
                  </div>
                </div>
              )}

              <BaseNavButton
                badge={false}
                beta={false}
                className="instance-node-7"
                icon={
                  navbar === "orders" ? (
                    <NavbarIcon32 className="navbar-icon-2" />
                  ) : navbar === "products" ? (
                    <NavbarIcon31 className="navbar-icon-2" color="white" />
                  ) : (
                    <NavbarIcon156 className="navbar-icon-2" />
                  )
                }
                state="inactive"
                text={navbar === "orders" ? "Products" : navbar === "products" ? "Delivery" : "Orders"}
                type="parent"
              />
              <BaseNavButton
                badge={false}
                beta={false}
                className="instance-node-7"
                icon={
                  navbar === "orders" ? (
                    <NavbarIcon31 className="navbar-icon-2" color="white" />
                  ) : navbar === "products" ? (
                    <NameMarketingStateFalse className="navbar-icon-2" color="white" />
                  ) : (
                    <NavbarIcon32 className="navbar-icon-2" />
                  )
                }
                state="inactive"
                text={navbar === "orders" ? "Delivery" : navbar === "products" ? "Marketing" : "Products"}
                type="parent"
              />
              <BaseNavButton
                badge={false}
                beta={false}
                className="instance-node-7"
                icon={
                  navbar === "orders" ? (
                    <NameMarketingStateFalse className="navbar-icon-2" color="white" />
                  ) : navbar === "products" ? (
                    <NavbarIcon152 className="navbar-icon-2" color="white" />
                  ) : (
                    <NavbarIcon31 className="navbar-icon-2" color="white" />
                  )
                }
                state="inactive"
                text={navbar === "orders" ? "Marketing" : navbar === "products" ? "Analytics" : "Delivery"}
                type="parent"
              />
              <BaseNavButton
                badge={false}
                beta={false}
                className="instance-node-7"
                icon={
                  navbar === "products" ? (
                    <NamePaymentsStateFalse className="navbar-icon-2" color="white" />
                  ) : navbar === "orders" ? (
                    <NavbarIcon152 className="navbar-icon-2" color="white" />
                  ) : (
                    <NameMarketingStateFalse className="navbar-icon-2" color="white" />
                  )
                }
                state="inactive"
                text={navbar === "products" ? "Payouts" : navbar === "orders" ? "Analytics" : "Marketing"}
                type="parent"
              />
              <BaseNavButton
                badge={false}
                beta={false}
                className="instance-node-7"
                icon={
                  navbar === "products" ? (
                    <NavbarIcon38 className="navbar-icon-2" color="white" />
                  ) : navbar === "orders" ? (
                    <NamePaymentsStateFalse className="navbar-icon-2" color="white" />
                  ) : (
                    <NavbarIcon152 className="navbar-icon-2" color="white" />
                  )
                }
                state="inactive"
                text={navbar === "products" ? "Tools" : navbar === "orders" ? "Payouts" : "Analytics"}
                type="parent"
              />
              <BaseNavButton
                badge={false}
                beta={false}
                className="instance-node-7"
                icon={
                  navbar === "orders" ? (
                    <NavbarIcon38 className="navbar-icon-2" color="white" />
                  ) : navbar === "products" ? (
                    <NavbarIcon3 className="navbar-icon-2" />
                  ) : (
                    <NamePaymentsStateFalse className="navbar-icon-2" color="white" />
                  )
                }
                state="inactive"
                text={navbar === "orders" ? "Tools" : navbar === "products" ? "Discounts" : "Payouts"}
                type="parent"
              />
              <BaseNavButton
                badge={false}
                beta={false}
                className="instance-node-7"
                icon={
                  navbar === "orders" ? (
                    <NavbarIcon3 className="navbar-icon-2" />
                  ) : navbar === "products" ? (
                    <NavbarIcon36 className="navbar-icon-2" color="white" />
                  ) : (
                    <NavbarIcon38 className="navbar-icon-2" color="white" />
                  )
                }
                state="inactive"
                text={navbar === "orders" ? "Discounts" : navbar === "products" ? "Audience" : "Tools"}
                type="parent"
              />
              <BaseNavButton
                badge={false}
                beta={false}
                className="instance-node-7"
                icon={
                  navbar === "orders" ? (
                    <NavbarIcon36 className="navbar-icon-2" color="white" />
                  ) : navbar === "products" ? (
                    <NavbarIcon111 className="navbar-icon-2" />
                  ) : (
                    <NavbarIcon3 className="navbar-icon-2" />
                  )
                }
                state="inactive"
                text={navbar === "orders" ? "Audience" : navbar === "products" ? "Appearance" : "Discounts"}
                type="parent"
              />
              <BaseNavButton
                badge={false}
                beta={false}
                className="instance-node-7"
                icon={
                  navbar === "products" ? (
                    <NavbarIcon21 className="navbar-icon-2" />
                  ) : navbar === "orders" ? (
                    <NavbarIcon111 className="navbar-icon-2" />
                  ) : (
                    <NavbarIcon36 className="navbar-icon-2" color="white" />
                  )
                }
                state="inactive"
                text={navbar === "products" ? "Plugins" : navbar === "orders" ? "Appearance" : "Audience"}
                type="parent"
              />
              {navbar === "apperance" && (
                <div className="base-child-2">
                  <BaseNavButton
                    badge={false}
                    beta={false}
                    className="instance-node-7"
                    icon={<NavbarIcon47 className="navbar-icon-2" />}
                    state="active"
                    text="Appearance"
                    type="parent"
                  />
                  <div className="frame-14">
                    <BaseNavButton
                      badge={false}
                      beta={false}
                      className="instance-node-7"
                      state="active"
                      text1="Themes"
                      type="child"
                    />
                    <BaseNavButton
                      badge={false}
                      beta={false}
                      className="instance-node-7"
                      state="inactive"
                      text1="Pages"
                      type="child"
                    />
                    <BaseNavButton
                      badge={false}
                      beta={false}
                      className="instance-node-7"
                      state="inactive"
                      text1="Menus"
                      type="child"
                    />
                    <BaseNavButton
                      badge={false}
                      beta={false}
                      className="instance-node-7"
                      state="inactive"
                      text1="Blog"
                      type="child"
                    />
                    <BaseNavButton
                      badge={false}
                      beta={false}
                      className="instance-node-7"
                      state="inactive"
                      text1="Media"
                      type="child"
                    />
                  </div>
                </div>
              )}

              {["apperance", "orders", "plugins"].includes(navbar) && (
                <BaseNavButton
                  badge={false}
                  beta={false}
                  className="instance-node-7"
                  icon={
                    navbar === "plugins" ? (
                      <NavbarIcon111 className="navbar-icon-2" />
                    ) : (
                      <NavbarIcon21 className="navbar-icon-2" />
                    )
                  }
                  state="inactive"
                  text={navbar === "plugins" ? "Appearance" : "Plugins"}
                  type="parent"
                />
              )}

              {navbar === "plugins" && (
                <div className="base-child-2">
                  <div className="base-nav-button-2">
                    <NavbarIcon
                      name="plugin"
                      nameAccountStateClassName="navbar-icon-instance"
                      state
                      vector="/img/vector-4.svg"
                      vectorClassName="navbar-icon-3"
                    />
                    <div className="home-3">Plugins</div>
                  </div>
                  <div className="frame-14">
                    <BaseNavButton
                      badge={false}
                      beta={false}
                      className="instance-node-7"
                      state="active"
                      text1="Installed (11)"
                      type="child"
                    />
                    <BaseNavButton
                      badge={false}
                      beta={false}
                      className="instance-node-7"
                      state="inactive"
                      text1="All plugins (99)"
                      type="child"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          <BaseNavBottom
            className="instance-node-7"
            outlineWalletWallet={["apperance", "plugins"].includes(navbar) ? "/img/wallet-4.svg" : "/img/wallet-7.svg"}
            property1="wallet-credits"
          />
        </div>
      )}
    </div>
  );
};

Navbar.propTypes = {
  navbar: PropTypes.oneOf([
    "tools",
    "discounts",
    "affiliates",
    "vendors",
    "apperance",
    "payouts",
    "plugins",
    "marketing",
    "products",
    "home",
    "audience",
    "orders",
    "account",
    "delivery",
    "analytics",
  ]),
  baseNavigationBarBaseNavButtonText: PropTypes.string,
};

import React from "react";
import { DashboardHeader } from "../../components/DashboardHeader";
import { Divider } from "../../components/Divider";
import { InputSearchBox } from "../../components/InputSearchBox";
import { Navbar } from "../../components/Navbar";
import { PaginationWrapper } from "../../components/PaginationWrapper";
import { TableType } from "../../components/TableType";
import { BoldChevronDown3 } from "../../icons/BoldChevronDown3";
import { NameMarketingStateFalse } from "../../icons/NameMarketingStateFalse";
import { NavbarIcon111 } from "../../icons/NavbarIcon111";
import { NavbarIcon127 } from "../../icons/NavbarIcon127";
import { NavbarIcon152 } from "../../icons/NavbarIcon152";
import { NavbarIcon156 } from "../../icons/NavbarIcon156";
import { NavbarIcon21 } from "../../icons/NavbarIcon21";
import { NavbarIcon3 } from "../../icons/NavbarIcon3";
import { NavbarIcon31 } from "../../icons/NavbarIcon31";
import { NavbarIcon32 } from "../../icons/NavbarIcon32";
import { NavbarIcon36 } from "../../icons/NavbarIcon36";
import { NavbarIcon38 } from "../../icons/NavbarIcon38";
import { NavbarIcon45 } from "../../icons/NavbarIcon45";
import { OutlinedHelp } from "../../icons/OutlinedHelp";
import { OutlinedInfo } from "../../icons/OutlinedInfo";
import { OutlinedSort1 } from "../../icons/OutlinedSort1";
import { TriangleIcon } from "../../icons/TriangleIcon";
import "./style.css";

export const PaymentsCashfree = () => {
  return (
    <div className="payments-cashfree">
      <div className="div-2">
        <DashboardHeader
          backArrow={false}
          beta={false}
          button={false}
          className="dashboard-header-instance"
          descriptionText={false}
          divClassName="dashboard-header-2"
          help
          howToUseDivClassName="dashboard-header-3"
          howToUseIcon={<OutlinedHelp className="icon-instance-node-2" />}
          howToUseText="How it works"
          iconsSearch="/img/icons-search.svg"
          placeholderTextClassName="dashboard-header-4"
          screenWidth="full"
          searchBox
          text="Payments"
        />
        <div className="frame-15">
          <div className="frame-16">
            <div className="frame-17">
              <div className="frame-18">
                <div className="text-wrapper-16">Overview</div>
                <div className="group-wrapper">
                  <div className="overlap-group-wrapper">
                    <div className="overlap-group">
                      <div className="text-wrapper-17">Last Month</div>
                      <BoldChevronDown3 className="icons-arrow" color="#4D4D4D" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-19">
              <div className="frame-wrapper">
                <div className="frame-20">
                  <div className="frame-21">
                    <div className="frame-22">
                      <div className="text-wrapper-18">Online orders</div>
                    </div>
                    <div className="text-wrapper-19">231</div>
                  </div>
                </div>
              </div>
              <div className="frame-20">
                <div className="frame-21">
                  <div className="frame-22">
                    <div className="text-wrapper-18">Amount received</div>
                  </div>
                  <div className="frame-23">
                    <div className="frame-24">
                      <div className="text-wrapper-20">₹23,92,312.19</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-25">
            <div className="text-wrapper-21">Transactions | This Month</div>
            <div className="template">
              <div className="frame-26" />
              <div className="frame-27">
                <div className="frame-18">
                  <InputSearchBox
                    baseSearchFieldDivClassName="input-search-box-2"
                    baseSearchFieldText="Search by order ID..."
                    className="input-search-box-instance"
                    size="default"
                    type="default"
                  />
                  <div className="frame-28">
                    <div className="frame-28">
                      <div className="frame-29">
                        <div className="frame-28">
                          <button className="button-sort">
                            <div className="text-wrapper-18">Sort</div>
                            <OutlinedSort1 className="outlined-sort" />
                          </button>
                        </div>
                        <img className="group-2" alt="Group" src="/img/group-898.png" />
                      </div>
                    </div>
                  </div>
                </div>
                <header className="header">
                  <div className="cell-header-row">
                    <div className="text-icon">
                      <TableType
                        className="design-component-instance-node-2"
                        divClassName="table-type-instance"
                        text="Order ID"
                        type="text-medium"
                      />
                    </div>
                    <div className="resizable-spacer">
                      <div className="end-point" />
                      <div className="end-point-2" />
                    </div>
                  </div>
                  <div className="cell-header-row">
                    <div className="text-icon">
                      <TableType
                        className="design-component-instance-node-2"
                        divClassName="table-type-instance"
                        text="Order date"
                        type="text-medium"
                      />
                      <TriangleIcon className="triangle-icon" />
                    </div>
                    <div className="resizable-spacer">
                      <div className="end-point" />
                      <div className="end-point-2" />
                    </div>
                  </div>
                  <div className="cell-header-row-2">
                    <div className="text-icon">
                      <TableType
                        className="design-component-instance-node-2"
                        divClassName="table-type-2"
                        text="Order amount"
                        type="text-medium"
                      />
                    </div>
                    <div className="resizable-spacer">
                      <div className="end-point" />
                      <div className="end-point-2" />
                    </div>
                  </div>
                  <div className="cell-header-row-3">
                    <div className="resizable-spacer-2">
                      <div className="end-point" />
                      <div className="end-point-2" />
                    </div>
                    <div className="frame-30">
                      <div className="text-icon">
                        <TableType
                          className="design-component-instance-node-2"
                          divClassName="table-type-2"
                          text="Transaction fees"
                          type="text-medium"
                        />
                      </div>
                      <OutlinedInfo className="icon-instance-node-2" />
                    </div>
                  </div>
                </header>
              </div>
              <div className="data-table">
                <div className="column">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassNameOverride="table-type-instance"
                    text="#281209"
                    type="link"
                  />
                  <div className="resizable-spacer-3">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassName="table-type-3"
                    text="7 July, 2023"
                    type="text-regular"
                  />
                  <div className="resizable-spacer-4">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassName="table-type-4"
                    text="₹1,278.23"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassName="table-type-4"
                    text="₹22"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <Divider className="divider-instance" stroke="black-90" />
              </div>
              <div className="data-table">
                <div className="column">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassNameOverride="table-type-instance"
                    text="#281209"
                    type="link"
                  />
                  <div className="resizable-spacer-3">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassName="table-type-3"
                    text="7 July, 2023"
                    type="text-regular"
                  />
                  <div className="resizable-spacer-4">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassName="table-type-4"
                    text="₹1,278.23"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassName="table-type-4"
                    text="₹22"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <Divider className="divider-instance" stroke="black-90" />
              </div>
              <div className="data-table">
                <div className="column">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassNameOverride="table-type-instance"
                    text="#281209"
                    type="link"
                  />
                  <div className="resizable-spacer-3">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassName="table-type-3"
                    text="7 July, 2023"
                    type="text-regular"
                  />
                  <div className="resizable-spacer-4">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassName="table-type-4"
                    text="₹1,278.23"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassName="table-type-4"
                    text="₹22"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <Divider className="divider-instance" stroke="black-90" />
              </div>
              <div className="data-table">
                <div className="column">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassNameOverride="table-type-instance"
                    text="#281209"
                    type="link"
                  />
                  <div className="resizable-spacer-3">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassName="table-type-3"
                    text="7 July, 2023"
                    type="text-regular"
                  />
                  <div className="resizable-spacer-4">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassName="table-type-4"
                    text="₹1,278.23"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassName="table-type-4"
                    text="₹22"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <Divider className="divider-instance" stroke="black-90" />
              </div>
              <div className="data-table">
                <div className="column">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassNameOverride="table-type-instance"
                    text="#281209"
                    type="link"
                  />
                  <div className="resizable-spacer-3">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassName="table-type-3"
                    text="7 July, 2023"
                    type="text-regular"
                  />
                  <div className="resizable-spacer-4">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassName="table-type-4"
                    text="₹1,278.23"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassName="table-type-4"
                    text="₹22"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <Divider className="divider-instance" stroke="black-90" />
              </div>
              <div className="data-table">
                <div className="column">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassNameOverride="table-type-instance"
                    text="#281209"
                    type="link"
                  />
                  <div className="resizable-spacer-3">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassName="table-type-3"
                    text="7 July, 2023"
                    type="text-regular"
                  />
                  <div className="resizable-spacer-4">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassName="table-type-4"
                    text="₹1,278.23"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassName="table-type-4"
                    text="₹22"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <Divider className="divider-instance" stroke="black-90" />
              </div>
              <div className="data-table">
                <div className="column">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassNameOverride="table-type-instance"
                    text="#281209"
                    type="link"
                  />
                  <div className="resizable-spacer-3">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassName="table-type-3"
                    text="7 July, 2023"
                    type="text-regular"
                  />
                  <div className="resizable-spacer-4">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassName="table-type-4"
                    text="₹1,278.23"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassName="table-type-4"
                    text="₹22"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <Divider className="divider-instance" stroke="black-90" />
              </div>
              <div className="data-table">
                <div className="column">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassNameOverride="table-type-instance"
                    text="#281209"
                    type="link"
                  />
                  <div className="resizable-spacer-3">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassName="table-type-3"
                    text="7 July, 2023"
                    type="text-regular"
                  />
                  <div className="resizable-spacer-4">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassName="table-type-4"
                    text="₹1,278.23"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassName="table-type-4"
                    text="₹22"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <Divider className="divider-instance" stroke="black-90" />
              </div>
              <div className="data-table">
                <div className="column">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassNameOverride="table-type-instance"
                    text="#281209"
                    type="link"
                  />
                  <div className="resizable-spacer-3">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassName="table-type-3"
                    text="7 July, 2023"
                    type="text-regular"
                  />
                  <div className="resizable-spacer-4">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassName="table-type-4"
                    text="₹1,278.23"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassName="table-type-4"
                    text="₹22"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <Divider className="divider-instance" stroke="black-90" />
              </div>
              <div className="data-table">
                <div className="column">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassNameOverride="table-type-instance"
                    text="#281209"
                    type="link"
                  />
                  <div className="resizable-spacer-3">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassName="table-type-3"
                    text="7 July, 2023"
                    type="text-regular"
                  />
                  <div className="resizable-spacer-4">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassName="table-type-4"
                    text="₹1,278.23"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassName="table-type-4"
                    text="₹22"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <Divider className="divider-instance" stroke="black-90" />
              </div>
              <div className="data-table">
                <div className="column">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassNameOverride="table-type-instance"
                    text="#281209"
                    type="link"
                  />
                  <div className="resizable-spacer-3">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassName="table-type-3"
                    text="7 July, 2023"
                    type="text-regular"
                  />
                  <div className="resizable-spacer-4">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassName="table-type-4"
                    text="₹1,278.23"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassName="table-type-4"
                    text="₹22"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <Divider className="divider-instance" stroke="black-90" />
              </div>
              <div className="data-table">
                <div className="column">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassNameOverride="table-type-instance"
                    text="#281209"
                    type="link"
                  />
                  <div className="resizable-spacer-3">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassName="table-type-3"
                    text="7 July, 2023"
                    type="text-regular"
                  />
                  <div className="resizable-spacer-4">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassName="table-type-4"
                    text="₹1,278.23"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassName="table-type-4"
                    text="₹22"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <Divider className="divider-instance" stroke="black-90" />
              </div>
              <div className="data-table">
                <div className="column">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassNameOverride="table-type-instance"
                    text="#281209"
                    type="link"
                  />
                  <div className="resizable-spacer-3">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassName="table-type-3"
                    text="7 July, 2023"
                    type="text-regular"
                  />
                  <div className="resizable-spacer-4">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassName="table-type-4"
                    text="₹1,278.23"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassName="table-type-4"
                    text="₹22"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <Divider className="divider-instance" stroke="black-90" />
              </div>
              <div className="data-table">
                <div className="column">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassNameOverride="table-type-instance"
                    text="#281209"
                    type="link"
                  />
                  <div className="resizable-spacer-3">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassName="table-type-3"
                    text="7 July, 2023"
                    type="text-regular"
                  />
                  <div className="resizable-spacer-4">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassName="table-type-4"
                    text="₹1,278.23"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassName="table-type-4"
                    text="₹22"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <Divider className="divider-instance" stroke="black-90" />
              </div>
              <div className="data-table">
                <div className="column">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassNameOverride="table-type-instance"
                    text="#281209"
                    type="link"
                  />
                  <div className="resizable-spacer-3">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassName="table-type-3"
                    text="7 July, 2023"
                    type="text-regular"
                  />
                  <div className="resizable-spacer-4">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassName="table-type-4"
                    text="₹1,278.23"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassName="table-type-4"
                    text="₹22"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <Divider className="divider-instance" stroke="black-90" />
              </div>
              <div className="data-table">
                <div className="column">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassNameOverride="table-type-instance"
                    text="#281209"
                    type="link"
                  />
                  <div className="resizable-spacer-3">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassName="table-type-3"
                    text="7 July, 2023"
                    type="text-regular"
                  />
                  <div className="resizable-spacer-4">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassName="table-type-4"
                    text="₹1,278.23"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassName="table-type-4"
                    text="₹22"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <Divider className="divider-instance" stroke="black-90" />
              </div>
              <div className="data-table">
                <div className="column">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassNameOverride="table-type-instance"
                    text="#281209"
                    type="link"
                  />
                  <div className="resizable-spacer-3">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassName="table-type-3"
                    text="7 July, 2023"
                    type="text-regular"
                  />
                  <div className="resizable-spacer-4">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassName="table-type-4"
                    text="₹1,278.23"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassName="table-type-4"
                    text="₹22"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <Divider className="divider-instance" stroke="black-90" />
              </div>
              <div className="data-table">
                <div className="column">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassNameOverride="table-type-instance"
                    text="#281209"
                    type="link"
                  />
                  <div className="resizable-spacer-3">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassName="table-type-3"
                    text="7 July, 2023"
                    type="text-regular"
                  />
                  <div className="resizable-spacer-4">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassName="table-type-4"
                    text="₹1,278.23"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-2"
                    divClassName="table-type-4"
                    text="₹22"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <Divider className="divider-instance" stroke="black-90" />
              </div>
              <div className="frame-31">
                <div className="data-table">
                  <div className="column">
                    <TableType
                      className="design-component-instance-node-2"
                      divClassNameOverride="table-type-instance"
                      text="#281209"
                      type="link"
                    />
                    <div className="resizable-spacer-3">
                      <div className="end-point" />
                      <div className="end-point-2" />
                    </div>
                  </div>
                  <div className="column">
                    <TableType
                      className="design-component-instance-node-2"
                      divClassName="table-type-3"
                      text="7 July, 2023"
                      type="text-regular"
                    />
                    <div className="resizable-spacer-4">
                      <div className="end-point" />
                      <div className="end-point-2" />
                    </div>
                  </div>
                  <div className="column-2">
                    <TableType
                      className="design-component-instance-node-2"
                      divClassName="table-type-4"
                      text="₹1,278.23"
                      type="text-regular"
                    />
                    <div className="resizable-spacer">
                      <div className="end-point" />
                      <div className="end-point-2" />
                    </div>
                  </div>
                  <div className="column-2">
                    <TableType
                      className="design-component-instance-node-2"
                      divClassName="table-type-4"
                      text="₹22"
                      type="text-regular"
                    />
                    <div className="resizable-spacer">
                      <div className="end-point" />
                      <div className="end-point-2" />
                    </div>
                  </div>
                  <Divider className="divider-instance" stroke="black-90" />
                </div>
                <div className="frame-32">
                  <div className="frame-32">
                    <div className="frame-32">
                      <div className="frame-31">
                        <PaginationWrapper className="design-component-instance-node-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Navbar
          baseNavigationBarBaseNavButtonIcon={<NavbarIcon36 className="navbar-icon-4" color="white" />}
          baseNavigationBarBaseNavButtonIcon1={<NavbarIcon156 className="navbar-icon-4" />}
          baseNavigationBarBaseNavButtonIcon10={<NavbarIcon45 className="navbar-icon-4" />}
          baseNavigationBarBaseNavButtonIcon2={<NavbarIcon32 className="navbar-icon-4" />}
          baseNavigationBarBaseNavButtonIcon3={<NavbarIcon38 className="navbar-icon-4" color="white" />}
          baseNavigationBarBaseNavButtonIcon4={<NavbarIcon21 className="navbar-icon-4" />}
          baseNavigationBarBaseNavButtonIcon5={<NavbarIcon127 className="navbar-icon-4" color="white" />}
          baseNavigationBarBaseNavButtonIcon6={<NavbarIcon111 className="navbar-icon-4" />}
          baseNavigationBarBaseNavButtonIcon7={<NavbarIcon3 className="navbar-icon-4" />}
          baseNavigationBarBaseNavButtonIcon8={<NavbarIcon152 className="navbar-icon-4" color="white" />}
          baseNavigationBarBaseNavButtonIcon9={<NameMarketingStateFalse className="navbar-icon-4" color="white" />}
          baseNavigationBarBaseNavButtonText="Payments"
          className="navbar-instance"
          navbar="payouts"
          override={<NavbarIcon31 className="navbar-icon-4" color="white" />}
        />
      </div>
    </div>
  );
};

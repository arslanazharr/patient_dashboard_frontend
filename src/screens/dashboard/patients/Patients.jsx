/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import search from "../../../assets/icons/other/search.svg";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "./style.css";
import dropDownArrow from "../../../assets/icons/other/chev-down.svg";
import DataTable from "./table";
import { useDispatch } from "react-redux";
import { getPatients } from "../../../redux/patient/getSlice";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const Patients = () => {
  const [activeTab, setActiveTab] = useState("General Info");
  const [showOnly, setShowOnly] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const [bulkAction, setBulkAction] = useState(null);
  const [searchState, setSearchState] = useState("");
  const openShowOnly = Boolean(showOnly);
  const openSortBy = Boolean(sortBy);
  const openBulkAction = Boolean(bulkAction);
  const dispatch = useDispatch();

  const handleShowOnlyClick = (event) => {
    setShowOnly(event.currentTarget);
  };

  const handleShowOnlyClose = () => {
    setShowOnly(null);
  };

  const handleSortByClick = (event) => {
    setSortBy(event.currentTarget);
  };

  const handleSortByClose = () => {
    setSortBy(null);
  };

  const handleBulkActionClick = (event) => {
    setBulkAction(event.currentTarget);
  };

  const handleBulkActionClose = () => {
    setBulkAction(null);
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleSearch = (e) => {
    setSearchState(e.target.value);
  };

  useEffect(() => {
    const timerId = setTimeout(async () => {
      dispatch(getPatients({ name: searchState }));
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchState]);

  const handleStatusClick = (e) => {
    const value = event.target.getAttribute("value");
    dispatch(getPatients({ status: value }));
    handleShowOnlyClose();
  };

  const sortByNameAscending = () => {
    dispatch(getPatients({ order: "ascending" }));
    handleSortByClose();
  };
  const sortByNameDescending = () => {
    dispatch(getPatients({ order: "descending" }));
    handleSortByClose();
  };

  return (
    <div className="shadow-sm rounded-[12px] border !font-inter overflow-hidden">
      <div className="sm:p-[24px] p-[18px] flex sm:justify-between items-center md:flex-row flex-col md:gap-0 gap-[18px] border-b">
        <div className="flex flex-col whitespace-nowrap md:items-start items-center">
          <p className="text-[18px] font-semibold">Patients</p>
          <p className="text-[14px]">Patient Details & Activity Log</p>
        </div>

        {activeTab === "General Info" && (
          <div className="w-full flex sm:justify-end">
            <div className="relative md:w-[380px] w-full">
              <img
                src={search}
                alt="search"
                className="absolute top-[12px] left-[15px]"
              />

              <input
                type="search"
                placeholder="Search"
                className="bg-[#F5F5F5] w-full h-[44px] pl-[42px] focus:outline-none rounded-[8px] pr-4"
                onChange={(e) => handleSearch(e)}
              />
            </div>
          </div>
        )}
      </div>

      <div className="py-[12px] sm:p-[24px] lg:gap-0 gap-[18px] flex justify-between lg:flex-row flex-col items-center whitespace-nowrap">
        <ul className="nav nav-pills nav-justified">
          <li className="nav-item cursor-pointer">
            <a
              className={`nav-link ${
                activeTab === "General Info" ? "active" : ""
              }`}
              onClick={() => handleTabClick("General Info")}
            >
              General Info
            </a>
          </li>
          <li className="nav-item cursor-pointer">
            <a
              className={`nav-link ${
                activeTab === "Monitoring Status" ? "active" : ""
              }`}
              onClick={() => handleTabClick("Monitoring Status")}
            >
              Monitoring Status
            </a>
          </li>
        </ul>
        {activeTab === "General Info" && (
          <div className="flex flex-row items-center gap-[12px] flex-wrap sm:justify-end justify-center">
            <div
              className="flex items-center border rounded-[12px] py-[8px] px-[12px] gap-[4px] cursor-pointer"
              onClick={handleShowOnlyClick}
            >
              <p className="text-[14px] font-semibold">Show Only</p>
              <img src={dropDownArrow} alt="arrow down" />
            </div>
            <Menu
              id="basic-menu"
              anchorEl={showOnly}
              open={openShowOnly}
              onClose={handleShowOnlyClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              sx={{
                "& .MuiPopover-paper": {
                  borderRadius: "12px !important",
                },
              }}
            >
              <MenuItem value="attend" onClick={handleStatusClick}>
                Attend
              </MenuItem>
              <MenuItem value="missed" onClick={handleStatusClick}>
                Missed
              </MenuItem>
              <MenuItem value="cancelled" onClick={handleStatusClick}>
                Cancelled
              </MenuItem>
              <MenuItem
                value="no_appointment"
                onClick={(e) => handleStatusClick(e)}
              >
                No Appointment
              </MenuItem>
            </Menu>
            <div
              className="flex items-center border rounded-[12px] py-[8px] px-[12px] gap-[4px] cursor-pointer"
              onClick={handleSortByClick}
            >
              <p className="text-[14px] font-semibold">Sort By</p>
              <img src={dropDownArrow} alt="arrow down" />
            </div>

            <Menu
              id="basic-menu"
              anchorEl={sortBy}
              open={openSortBy}
              onClose={handleSortByClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              sx={{
                "& .MuiPopover-paper": {
                  borderRadius: "12px !important",
                },
              }}
            >
              <MenuItem onClick={sortByNameAscending}>
                Name (Ascending)
              </MenuItem>
              <MenuItem onClick={sortByNameDescending}>
                Name (Descending)
              </MenuItem>
            </Menu>
            <div
              className="flex items-center border rounded-[12px] py-[8px] px-[12px] gap-[4px] cursor-pointer"
              onClick={handleBulkActionClick}
            >
              <p className="text-[14px] font-semibold">Bulk Action</p>
              <img src={dropDownArrow} alt="arrow down" />
            </div>

            <Menu
              id="basic-menu"
              anchorEl={bulkAction}
              open={openBulkAction}
              onClose={handleBulkActionClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              sx={{
                "& .MuiPopover-paper": {
                  borderRadius: "12px !important",
                },
              }}
            >
              <MenuItem onClick={handleBulkActionClose}>Make Attend</MenuItem>
              <MenuItem onClick={handleBulkActionClose}>Make Missed</MenuItem>
              <MenuItem onClick={handleBulkActionClose}>
                Make Cancelled
              </MenuItem>
              <MenuItem onClick={handleBulkActionClose}>
                Delete Selected
              </MenuItem>
            </Menu>
          </div>
        )}
      </div>
      {activeTab === "Monitoring Status" && (
        <div className="w-full flex justify-center">
          <div className="flex flex-col items-center gap-2 text-main my-[120px]">
            <p className="text-2xl sm:text-4xl">No record found</p>
            <ErrorOutlineIcon className="!text-[60px] sm:!text-[90px]" />
          </div>
        </div>
      )}

      {activeTab === "General Info" && <DataTable />}
    </div>
  );
};

export default Patients;

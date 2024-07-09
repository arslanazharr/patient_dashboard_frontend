/* eslint-disable no-unused-vars */
import React, { Fragment, useState } from "react";
import home from "../assets/icons/header/home.svg";
import analytics from "../assets/icons/header/analytics.svg";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import bell from "../assets/icons/header/bell.svg";
import avatar from "../assets/icons/header/avatar.svg";
import Badge from "@mui/material/Badge";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { Dialog, Transition } from "@headlessui/react";

const navStyle = ({ isActive }) => {
  return {
    background: isActive ? "#165f87" : "#1B73A3",
    borderRadius: isActive ? "8px" : "none",
  };
};

const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleNavOpen = () => {
    setOpenNav(true);
  };

  const handleCloseNav = () => {
    setOpenNav(false);
  };

  return (
    <>
      <header
        className={`text-4xl !w-full flex flex-row items-center justify-between h-[7vh] font-poppins bg-main z-[9999] `}
      >
        <div className="border-r border-[#498fb5] h-full sm:flex items-center !pl-[32px] !pr-[20px] hidden">
          <img src={logo} alt="logo" className="w-[40px]" />
        </div>

        <div className="sm:hidden !p-[20px] h-full flex items-center text-white">
          <MenuIcon onClick={handleNavOpen} />
        </div>

        <ul className="sm:flex flex-row items-center gap-[12px] hidden">
          <NavLink style={navStyle} to="/dashboard">
            <li className="flex flex-row gap-[12px] items-center text-white py-[3px] px-[16px]">
              <img src={home} alt="dashboard" className="w-[20px] h-[20px]" />
              <p className="text-[14px]">Dashboard</p>
            </li>
          </NavLink>
          <NavLink style={navStyle} to="/analytics">
            <li className="flex flex-row gap-[12px] items-center text-white py-[3px] px-[16px]">
              <img
                src={analytics}
                alt="analytics"
                className="w-[20px] h-[20px]"
              />
              <p className="text-[14px]">Analytics</p>
            </li>
          </NavLink>
        </ul>

        <div className="sm:border-l border-[#498fb5] h-full flex items-center !pl-[20px] !pr-[32px] gap-[16px]">
          <Badge badgeContent={3} color="error">
            <div className="bg-[#EDF7FC] w-[30px] h-[30px] rounded-full flex justify-center items-center">
              <img src={bell} alt="notifiaction" className="w-[16px]" />
            </div>
          </Badge>
          <img src={avatar} alt="Mike Jani" />
        </div>
      </header>

      <Transition.Root show={openNav} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-[9999999999999] lg:hidden"
          onClose={handleCloseNav}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 z-[99999] flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <div
                  className="absolute left-full top-0 flex w-16 justify-center pt-5"
                  onClick={handleCloseNav}
                >
                  <CloseIcon className="!text-white" />
                </div>
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-main p-[4vh] ring-1 ring-white/10">
                  <nav className="flex flex-1 flex-col">
                    <NavLink
                      className="flex items-center py-3 justify-center font-poppins"
                      to="/dashboard"
                      style={navStyle}
                      onClick={handleCloseNav}
                    >
                      <div className="flex flex-row gap-[12px] items-center text-white py-[3px] px-[16px] w-[150px]">
                        <img
                          src={home}
                          alt="dashboard"
                          className="w-[20px] h-[20px]"
                        />
                        <p className="text-[14px]">Dashboard</p>
                      </div>
                    </NavLink>
                    <NavLink
                      className="flex items-center py-3 justify-center font-poppins"
                      to="/analytics"
                      style={navStyle}
                      onClick={handleCloseNav}
                    >
                      <div className="flex flex-row gap-[12px] items-center text-white py-[3px] px-[16px] w-[150px]">
                        <img
                          src={analytics}
                          alt="analytics"
                          className="w-[20px] h-[20px]"
                        />
                        <p className="text-[14px]">Analytics</p>
                      </div>
                    </NavLink>
                  </nav>
                  <div className="flex items-center justify-center opacity-15 w-full">
                    <NavLink to="/home" onClick={handleCloseNav}>
                      <img className="w-[60px]" src={logo} alt="Logo" />
                    </NavLink>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default Header;

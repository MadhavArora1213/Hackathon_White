import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Importing icons from react-icons
import { AiFillHome, AiOutlineUserAdd, AiOutlineLogin, AiOutlineFileProtect, AiFillPhone, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { MdDashboard, MdFeedback } from 'react-icons/md';
import { BsFillFileEarmarkTextFill } from 'react-icons/bs';
import { RiCustomerService2Fill } from 'react-icons/ri';

// Importing components from Keep React UI library
import {
  Sidebar,
  SidebarBody,
  SidebarFooter,
  SidebarItem,
  SidebarList,
  Tooltip,
  TooltipAction,
  TooltipContent,
} from 'keep-react';

export const SidebarComponent = () => {
  // State to control the toggle
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Toggle Button */}
      <button 
        onClick={toggleSidebar} 
        className={`absolute top-4 left-4 z-50 p-2 focus:outline-none `}
      >
        {isOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </button>

      {/* Sidebar */}
      <Sidebar 
  
        className={`side transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} max-w-max bg-black h-[130vh] rounded-none border-none bg-gradient-to-b from-[#fff] to-white p-[1px] `}
      >
        <SidebarBody className="space-y-7">
          <SidebarList className="space-y-6">
            <SidebarItem>
                <Tooltip placement="right" contentOffset={30}>
                  <TooltipAction asChild>
                    <Link to="/">
                      <div>
                       
                      </div>
                    </Link>
                  </TooltipAction>
                </Tooltip>
              </SidebarItem>
              <SidebarItem>
                <Tooltip placement="right" contentOffset={30}>
                  <TooltipAction asChild>
                    <Link to="/">
                      <div>
                       
                      </div>
                    </Link>
                  </TooltipAction>
                </Tooltip>
              </SidebarItem>
            <SidebarItem>
              <Tooltip placement="right" contentOffset={30}>
                <TooltipAction asChild>
                  <Link to="/">
                    <div>
                      <AiFillHome size={20} className="text-gray-800"/>
                    </div>
                  </Link>
                </TooltipAction>
                <TooltipContent className={`rounded-sm text-body-8 px-5 font-semibold bg-gradient-to-r from-[#614385] to-[#516395] border-none text-white`}>
                  Home
                </TooltipContent>
              </Tooltip>
            </SidebarItem>
            <SidebarItem>
              <Tooltip placement="right" contentOffset={30}>
                <TooltipAction asChild>
                  <Link to="/register">
                    <div>
                      <AiOutlineUserAdd size={20} className="text-gray-800"/>
                    </div>
                  </Link>
                </TooltipAction>
                <TooltipContent className={`rounded-sm text-body-8 px-5 font-semibold bg-gradient-to-r from-[#614385] to-[#516395] border-none text-white`}>
                  Register
                </TooltipContent>
              </Tooltip>
            </SidebarItem>
            <SidebarItem>
              <Tooltip placement="right" contentOffset={30}>
                <TooltipAction asChild>
                  <Link to="/login">
                    <div>
                      <AiOutlineLogin size={20} className="text-gray-800"/>
                    </div>
                  </Link>
                </TooltipAction>
                <TooltipContent className={`rounded-sm text-body-8 px-5 font-semibold bg-gradient-to-r from-[#614385] to-[#516395] border-none text-white`}>
                  Login
                </TooltipContent>
              </Tooltip>
            </SidebarItem>
            <SidebarItem>
              <Tooltip placement="right" contentOffset={30}>
                <TooltipAction asChild>
                  <Link to="/Studentdashboard">
                    <div>
                      <MdDashboard size={20} className="text-gray-800"/>
                    </div>
                  </Link>
                </TooltipAction>
                <TooltipContent className={`rounded-sm text-body-8 px-5 font-semibold bg-gradient-to-r from-[#614385] to-[#516395] border-none text-white`}>
                  Student Dashboard
                </TooltipContent>
              </Tooltip>
            </SidebarItem>
            <SidebarItem>
              <Tooltip placement="right" contentOffset={30}>
                <TooltipAction asChild>
                  <Link to="/Application">
                    <div>
                      <BsFillFileEarmarkTextFill size={20} className="text-gray-800"/>
                    </div>
                  </Link>
                </TooltipAction>
                <TooltipContent className={`rounded-sm text-body-8 px-5 font-semibold bg-gradient-to-r from-[#614385] to-[#516395] border-none text-white`}>
                  Application Apply
                </TooltipContent>
              </Tooltip>
            </SidebarItem>
            <SidebarItem>
              <Tooltip placement="right" contentOffset={30}>
                <TooltipAction asChild>
                  <Link to="/help-support">
                    <div>
                      <RiCustomerService2Fill size={20} className="text-gray-800"/>
                    </div>
                  </Link>
                </TooltipAction>
                <TooltipContent className={`rounded-sm text-body-8 px-5 font-semibold bg-gradient-to-r from-[#614385] to-[#516395] border-none text-white`}>
                  Help & Support
                </TooltipContent>
              </Tooltip>
            </SidebarItem>
            <SidebarItem>
              <Tooltip placement="right" contentOffset={30}>
                <TooltipAction asChild>
                  <Link to="/terms-conditions">
                    <div>
                      <AiOutlineFileProtect size={20} className="text-gray-800"/>
                    </div>
                  </Link>
                </TooltipAction>
                <TooltipContent className={`rounded-sm text-body-8 px-5 font-semibold bg-gradient-to-r from-[#614385] to-[#516395] border-none text-white`}>
                  Terms & Conditions
                </TooltipContent>
              </Tooltip>
            </SidebarItem>
            <SidebarItem>
              <Tooltip placement="right" contentOffset={30}>
                <TooltipAction asChild>
                  <Link to="/contact-us">
                    <div>
                      <AiFillPhone size={20} className="text-gray-800"/>
                    </div>
                  </Link>
                </TooltipAction>
                <TooltipContent className={`rounded-sm text-body-8 px-5 font-semibold bg-gradient-to-r from-[#614385] to-[#516395] border-none text-white`}>
                  Contact Us
                </TooltipContent>
              </Tooltip>
            </SidebarItem>
            <SidebarItem>
              <Tooltip placement="right" contentOffset={30}>
                <TooltipAction asChild>
                  <Link to="/feedback">
                    <div>
                      <MdFeedback size={20}  className="text-gray-800"/>
                    </div>
                  </Link>
                </TooltipAction>
                <TooltipContent className={`rounded-sm text-body-8 px-5 font-semibold bg-gradient-to-r from-[#614385] to-[#516395] border-none text-white`}>
                  Feedback
                </TooltipContent>
              </Tooltip>
            </SidebarItem>
          </SidebarList>
        </SidebarBody>

        {/* Sidebar Footer */}
        <SidebarFooter>
          <SidebarItem>
            <Tooltip placement="right" contentOffset={30}>
              <TooltipAction asChild>
                <Link to="/logout">
                  <div>
                    <AiOutlineLogin size={20} className="text-gray-800" />
                  </div>
                </Link>
              </TooltipAction>
              <TooltipContent className={`rounded-sm text-body-8 px-5 font-semibold bg-gradient-to-r from-[#614385] to-[#516395] border-none text-white`}>
                Log Out
              </TooltipContent>
            </Tooltip>
          </SidebarItem>
        </SidebarFooter>
      </Sidebar>
    </div>
  );
};

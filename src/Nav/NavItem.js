import { FiSettings } from "react-icons/fi";
import { BiWalletAlt } from "react-icons/bi";
import {
  BsCalendar3,
  BsBox,
  BsCalendar2Check,
  BsCalendar2Day,
  BsCalendarCheck,
  BsVinylFill,
  BsCalendarDay,
} from "react-icons/bs";
import { GiAstronautHelmet } from "react-icons/gi";
import {
  MdAppRegistration,
  MdOutlinePolicy,
  MdOutlineStopScreenShare,
} from "react-icons/md";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { TbGitBranch } from "react-icons/tb";
import { FaSith, FaCodepen, FaUserInjured, FaRegUser } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { AiOutlineCodeSandbox } from "react-icons/ai";
import { MdWorkOutline } from "react-icons/md";
import { FcLeave } from "react-icons/fc";
import { RiFileList3Line } from "react-icons/ri";

export const navItem = [
  //UID Mustbe Uges String

  // {
  //   title: "About",
  //   link: "about",
  //   role: "admin",
  //   icon: "fas fa-dice-d6",
  // },
  {
    UID: "settings",
    title: "Master Settings",
    role: "admin",
    icon: <FiSettings />,
    children: [
      {
        title: "Company Info",
        link: "admin/company-list",
        role: "admin",
        icon: <HiOutlineOfficeBuilding size={18} />,
      },

      {
        title: "Fiscal Year",
        link: "admin/fiscal-year-list",
        role: "admin",
        icon: <BsCalendar2Check size={16} />,
      },

      {
        title: "Employee",
        link: "admin/employee-list",
        role: "admin",
        icon: <FaUserInjured size={17} />,
      },
      {
        title: "Branch",
        link: "admin/branch-list",
        role: "admin",
        icon: <TbGitBranch size={19} />,
      },
      {
        title: "Department",
        link: "admin/department-list",
        role: "admin",
        icon: <FaCodepen size={18} />,
      },
      {
        title: "Designation",
        link: "admin/designation-list",
        role: "admin",
        icon: <FaSith size={18} />,
      },

      {
        title: "Employment",
        link: "admin/employment-list",
        role: "admin",
        icon: <BsBox size={16} />,
      },
      {
        title: "Leave Policy",
        link: "admin/leave-type",
        role: "admin",
        icon: <MdOutlinePolicy size={18} />,
      },

      {
        title: "Balance Settings",
        link: "admin/leave-balance",
        role: "admin",
        icon: <GoGraph size={17} />,
      },
    ],
  },

  {
    UID: "blance",
    title: "Balance Setup",
    role: "admin",
    icon: <BiWalletAlt size={18} />,

    children: [
      {
        title: "Balance Setup",
        link: "admin/balance-setup",
        role: "admin",
        icon: <AiOutlineCodeSandbox size={18} />,
      },
      {
        title: "Approval Flow",
        link: "admin/approval-flow",
        role: "admin",
        icon: <MdAppRegistration size={20} />,
      },
    ],
  },
  {
    UID: "calendar",
    title: "Calendar Settings",
    role: "admin",
    icon: <BsCalendar3 size={15} />,

    children: [
      {
        title: "Day Type Setup",
        link: "admin/day-type-setup",
        role: "admin",
        icon: <BsCalendar2Day size={15} />,
      },
      {
        title: "Working Day Setup",
        link: "admin/working-day-setup",
        role: "admin",
        icon: <MdWorkOutline size={18} />,
      },
      {
        title: "Calendar Setup",
        link: "admin/calendar-setup",
        role: "admin",
        icon: <BsCalendarCheck size={15} />,
      },
      {
        title: "Academic Calender",
        link: "admin/calendar-setup",
        role: "employee",
        icon: <BsCalendarDay size={15} />,
      },
    ],
  },
  {
    UID: "leave",
    title: "Leave Application",
    role: "admin",
    icon: <FcLeave size={18} />,
    children: [
      {
        title: "Apply For Leave",
        link: "admin/apply-for-leave",
        role: "admin",
        icon: <MdOutlineStopScreenShare size={18} />,
      },
      {
        title: "Applied List",
        link: "admin/applied-list",
        role: "admin",
        icon: <RiFileList3Line size={18} />,
      },
    ],
  },

  // Admin Nav End

  // Employee Nav Start
  {
    UID: "calendar",
    title: "Calendar Settings",
    role: "employee",
    icon: <BsCalendar3 size={15} />,

    children: [
      {
        title: "Academic Calender",
        link: "employee/calendar-setup",
        role: "employee",
        icon: <BsCalendarDay size={15} />,
      },
    ],
  },

  {
    UID: "blance",
    title: "Balance Setup",
    role: "employee",
    icon: <BiWalletAlt size={18} />,

    children: [
      {
        title: "My Balance",
        link: "admin/balance-setup",
        role: "employee",
        icon: <AiOutlineCodeSandbox size={18} />,
      },
    ],
  },

    {
    UID: "leave",
    title: "Leave Application",
    role: "employee",
    icon: <FcLeave size={18} />,
    children: [
      {
        title: "My leave Application",
        link: "employee/apply-for-leave",
        role: "employee",
        icon: <MdOutlineStopScreenShare size={18} />,
      },]
  },
  // Employee Nav End

  // Approval Authority Nav Start
  
  {
    UID: "settings",
    title: "Master Settings",
    role: "approvalauthority",
    icon: <FiSettings />,
    children: [
      {
        title: "Company Info",
        link: "approval-authority/company-list",
        role: "approvalauthority",
        icon: <HiOutlineOfficeBuilding size={18} />,
      },

      {
        title: "Fiscal Year",
        link: "approval-authority/fiscal-year-list",
        role: "approvalauthority",
        icon: <BsCalendar2Check size={16} />,
      },

      {
        title: "Employee",
        link: "approval-authority/employee-list",
        role: "approvalauthority",
        icon: <FaUserInjured size={17} />,
      },
      {
        title: "Branch",
        link: "approval-authority/branch-list",
        role: "approvalauthority",
        icon: <TbGitBranch size={19} />,
      },
      {
        title: "Department",
        link: "approval-authority/department-list",
        role: "approvalauthority",
        icon: <FaCodepen size={18} />,
      },
      {
        title: "Designation",
        link: "approval-authority/designation-list",
        role: "approvalauthority",
        icon: <FaSith size={18} />,
      },

      {
        title: "Employment",
        link: "approval-authority/employment-list",
        role: "approvalauthority",
        icon: <BsBox size={16} />,
      },
      {
        title: "Leave Policy",
        link: "approval-authority/leave-type",
        role: "approvalauthority",
        icon: <MdOutlinePolicy size={18} />,
      },

      {
        title: "Balance Settings",
        link: "approval-authority/leave-balance",
        role: "approvalauthority",
        icon: <GoGraph size={17} />,
      },

    
    ],
  },

  {
    UID: "blance",
    title: "Balance Setup",
    role: "approvalauthority",
    icon: <BiWalletAlt size={18} />,

    children: [
      {
        title: "Balance Setup",
        link: "approval-authority/balance-setup",
        role: "approvalauthority",
        icon: <AiOutlineCodeSandbox size={18} />,
      },
      {
        title: "Approval Flow",
        link: "approval-authority/approval-flow",
        role: "approvalauthority",
        icon: <MdAppRegistration size={20} />,
      },
    ],
  },

  {
    UID: "calendar",
    title: "Calendar Settings",
    role: "approvalauthority",
    icon: <BsCalendar3 size={15} />,

    children: [
      {
        title: "Day Type Setup",
        link: "approval-authority/day-type-setup",
        role: "approvalauthority",
        icon: <BsCalendar2Day size={15} />,
      },
      {
        title: "Working Day Setup",
        link: "approval-authority/working-day-setup",
        role: "approvalauthority",
        icon: <MdWorkOutline size={18} />,
      },
      {
        title: "Calendar Setup",
        link: "approval-authority/calendar-setup",
        role: "approvalauthority",
        icon: <BsCalendarCheck size={15} />,
      },
      {
        title: "Academic Calender",
        link: "approval-authority/calendar-setup",
        role: "approvalauthority",
        icon: <BsCalendarDay size={15} />,
      },
    ],
  },
  {
    UID: "leave",
    title: "Leave Application",
    role: "approvalauthority",
    icon: <FcLeave size={18} />,
    children: [
      {
        title: "Apply For Leave",
        link: "approval-authority/apply-for-leave",
        role: "approvalauthority",
        icon: <MdOutlineStopScreenShare size={18} />,
      },
      {
        title: "Applied List",
        link: "approval-authority/applied-list",
        role: "approvalauthority",
        icon: <RiFileList3Line size={18} />,
      },
    ],
  },


  // Approval Authority Nav End

  // Others Nav Start
  {
    title: "Others",
    link: "others",
    role: "others",
    icon: <BsVinylFill size={16} />,
  },

  //
];

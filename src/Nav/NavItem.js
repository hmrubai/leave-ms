import { FiSettings } from "react-icons/fi";
import { BiWalletAlt } from "react-icons/bi";
import {
  BsCalendar3,
  BsBox,
  BsCalendar2Check,
  BsCalendar2Day,
  BsCalendarCheck,
  BsVinylFill,
} from "react-icons/bs";
import { GiAstronautHelmet } from "react-icons/gi";
import { MdAppRegistration, MdOutlinePolicy,MdOutlineStopScreenShare } from "react-icons/md";
import { HiOutlineOfficeBuilding, } from "react-icons/hi";
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
        icon:<MdOutlineStopScreenShare size={18} />, 
      },
      {
        title: "Applied List",
        link: "admin/applied-list",
        role: "admin",
        icon: <RiFileList3Line size={18} />,
      },
    ]
  },
  

  // Admin Nav End



  {
    title: "Employee",
    link: "employee",
    role: "employee",
    icon: <FaRegUser size={16} />,
  },
  {
    title: "Authority",
    link: "approval-authority",
    role: "approvalauthority",
    icon: <GiAstronautHelmet size={16} />,
  },
  {
    title: "Others",
    link: "others",
    role: "others",
    icon: <BsVinylFill size={16} />,
  },
];

import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as BiIcons from "react-icons/bi";
import * as GiIcons from "react-icons/gi";
import * as BsIcons from "react-icons/bs";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Drinks",
    path: "/drinks",
    icon: <GiIcons.GiDrinking />,
    cName: "nav-text",
  },
  {
    title: "Food",
    path: "/food",
    icon: <BiIcons.BiFoodMenu />,
    cName: "nav-text",
  },
  {
    title: "Resources",
    path: "/resources",
    icon: <BsIcons.BsFileSpreadsheet />,
    cName: "nav-text",
  },
  {
    title: "Nutrition",
    path: "/nutrition",
    icon: <IoIcons.IoIosBody />,
    cName: "nav-text",
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <AiIcons.AiOutlinePhone />,
    cName: "nav-text",
  },
];

import { PiChartPieSlice } from "react-icons/pi";
import {
  Squares2X2Icon,
  ClipboardDocumentCheckIcon,
  LanguageIcon,
  BugAntIcon,
  UserGroupIcon,
  CogIcon,
  TruckIcon,
} from "@heroicons/react/24/solid";
import { TfiWidget } from "react-icons/tfi";
import { SiChatbot } from "react-icons/si";
import {FaDochub} from "react-icons/fa"
import { FaUsers } from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa6";
import { SiCreatereactapp } from "react-icons/si";
const sidebar = [
  {
    path: "/dashboard",
    icon: Squares2X2Icon,
    name: "dashboard",
  },
  {
    path: "/dashboard/Analysis",
    icon: PiChartPieSlice,
    name: "Report & Analysis",
  },
 
  {
    icon: UserGroupIcon,
    name: "Users",
    children: [
      {
        icon: FaUsers,
        path: "/dashboard/adminMambar",
        name: "Admin Member",
      },
      {
        icon: FaUserGraduate,
        path: "/dashboard/user",
        name: "User",
      },
    ],
  },



];

export default sidebar;

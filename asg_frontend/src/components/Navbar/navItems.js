import * as Icons from "react-icons/fa";

export const navItems = [
  {
    id: 1,
    title: "Workouts",
    path: "/",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaDumbbell />,
  },
  {
    id: 2,
    title: "Fitness Log",
    path: "/create",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaHeart />,
  },
  {
    id: 3,
    title: "User",
    path: "/user",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaUser />,
  }
];
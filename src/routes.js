
import Dashboard from "views/Dashboard.js";
import Teachers from "views/Teachers.js";
import Students from "views/Students.js";
import Courses from "views/Courses.js";
import Attendance from "views/Attendance.js";
import Classroom from "views/Classroom.js";
import Administration from "views/Administration.js";
import Upgrade from "views/Upgrade.js";
import UserPage from "views/UserPage.js";
import Exam from "views/Exam.js";
import LoginAdmin from "views/LoginAdmin.js";
import LoginUser from "views/LoginUser.js";
import Finance from "views/Finance";
import LasterActivity from "views/LasterActivity";
import Schoolinformation from "views/Schoolinformation.js";

var dashRoutes = [


  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "design_app",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/schoolinformation",
    name: "School Information",
    icon: "business_badge",
    component: Schoolinformation,
    layout: "/admin",
  },
  {
    path: "/students",
    name: "Students",
    icon: "business_briefcase-24",
    component: Students,
    layout: "/admin",
  },

  {
    path: "/teachers",
    name: "Teachers",
    icon: "business_badge",
    component: Teachers,
    layout: "/admin",
  },

  {
    path: "/classroom",
    name: "Classroom",
    icon: "files_paper",
    component: Classroom,
    layout: "/admin",
  },

  {
    path: "/courses",
    name: "Courses",
    icon: "design-2_ruler-pencil",
    component: Courses,
    layout: "/admin",
  },

  {
    path: "/finance",
    name: "Finance",
    icon: "design-2_ruler-pencil",
    component: Finance,
    layout: "/admin",
  },

  {
    path: "/attendance",
    name: "Attendance",
    icon: "design-2_ruler-pencil",
    component: Attendance,
    layout: "/admin",
  },
  

  {
    path: "/user-page",
    name: "User Profile",
    icon: "users_single-02",
    component: UserPage,
    layout: "/admin",
  },

  {
    path: "/lasterActivity",
    name: "Laster Activity",
    icon: "design-2_ruler-pencil",
    component: LasterActivity,
    layout: "/admin",
  },

  {
    path: "/administration",
    name: "Administration",
    icon: "location_map-big",
    component: Administration,
    layout: "/admin",
  },

  {
    path: "/exam",
    name: "Exam",
    icon: "location_map-big",
    component: Exam,
    layout: "/admin",
  },


  {
    path: "/loginUser",
    component: LoginUser,
    
  },
  
  /*{
    pro: true,
    path: "/loginUser",
    name: "Deconnexion",
    icon: "objects_spaceship",
    component: LoginUser,
    layout: "/admin",
  },*/
];
export default dashRoutes;

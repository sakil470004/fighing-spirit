import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Dashboard from "../Layout/Dashboard";
import Home from "../Home/Home";
import Classes from "../Classes/Classes";
import Instructors from "../Instructors/Instructors";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import MangeUsers from "../Dashboard/MangeUsers";
import AddedCourses from "../Dashboard/AddedCourses";
import ManageCourses from "../Dashboard/ManageCourses";
import SelectedCourses from "../Dashboard/SelectedCourses";
import ManageAddedCourses from "../Dashboard/ManageAddedCourses";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/classes',
                element: <PrivateRoute><Classes></Classes></PrivateRoute>
            },
            {
                path: '/instructors',
                element: <Instructors></Instructors>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
        
            {
                path: 'manageUsers',
                element: <MangeUsers></MangeUsers>
            }, 
            {
                path:'manageAddedCourses',
                element:<ManageAddedCourses></ManageAddedCourses>
            },{
                path:'manageCourses',
                element:<ManageCourses></ManageCourses>
            },{
                path:'selectedCourses',
                element:<SelectedCourses></SelectedCourses>
            },{
                path:'addedCourses',
                element:<AddedCourses></AddedCourses>
            },
        ]
    }

]);
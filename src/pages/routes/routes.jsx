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
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import DashboardHome from "../Dashboard/DashboardHome";
import Dashbaord from "../Layout/Dashboard";
import MyEnrollClasses from "../Dashboard/MyEnrollClasses";
import Payment from "../Dashboard/Payment/Payment";
import PaymentHistory from "../Dashboard/Payment/PaymentHistory";

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
        element: <Dashbaord></Dashbaord>,
        children: [
            {
                path:'home',
                element:<PrivateRoute><DashboardHome></DashboardHome></PrivateRoute>
            },
            {
                path: 'manageUsers',
                element:  <AdminRoute><MangeUsers></MangeUsers></AdminRoute>
            },
            {
                path: 'manageAddedCourses',
                element: <AdminRoute><ManageAddedCourses></ManageAddedCourses></AdminRoute>
            }, {
                path: 'manageCourses',
                element: <InstructorRoute><ManageCourses></ManageCourses></InstructorRoute>
            },
            {
                path: 'addedCourses',
                element: <InstructorRoute> <AddedCourses></AddedCourses></InstructorRoute>
            },
            {
                path: 'selectedCourses',
                element: <PrivateRoute><SelectedCourses></SelectedCourses></PrivateRoute>
            },
            {
                path: 'myEnrollClass',
                element: <PrivateRoute><MyEnrollClasses></MyEnrollClasses></PrivateRoute>
            }, 
            {
                path: 'payment/:paymentId',
                element: <PrivateRoute><Payment></Payment></PrivateRoute>
            },
            {
                path: 'paymentHistory',
                element: <PrivateRoute><PaymentHistory></PaymentHistory></PrivateRoute>
            },
        ]
    }

]);
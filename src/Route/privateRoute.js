import {Navigate} from 'react-router-dom'
import {getPath} from './utils'
import AdminPage from '../components/dashboard/views/AdminPage'
import Maneger from '../components/dashboard/views/Maneger'
import Worker from '../components/dashboard/views/Worker'
import Seller from '../components/dashboard/views/Seller'
import Payment from '../components/dashboard/views/Payment'
import About from '../components/dashboard/views/About';
import EmployeeList from './../components/dashboard/admin/employee/EmployeeList';
import EmployeeDetails from '../components/dashboard/admin/employee/EmployeeDetails'
import CreateEmployee from './../components/dashboard/admin/employee/CreateEmployee';
import DepartmentList from '../components/dashboard/admin/department/DepartmentList'
import CreateDepartment from './../components/dashboard/admin/department/CreateDepartment';
import EditEmployee from './../components/dashboard/admin/employee/EditEmployee';





export const privateRoute = [
    {
        path: '/dashboard/',
        element: <Navigate replace to ={getPath()}/>,
        role: 'all'
    },
  
    {
        path: 'admin/employee-list',
        element: <EmployeeList />,
        role: 'admin',

    },
    {
        path: 'admin/create-employee',
        element: <CreateEmployee/>,
        role: 'admin',

    },
    {
        path: 'admin/edit-employee/:id',
        element: <EditEmployee/>,
        role: 'admin',

    },
    {
        path: 'admin/employee-details/:id',
        element: <EmployeeDetails/>,
        role: 'admin',

    },
    {
        path: 'admin/department-list',
        element: <DepartmentList/>,
        role: 'admin',

    },
    {
        path: 'admin/create-department',
        element: <CreateDepartment/>,
        role: 'admin',

    },
    {
        path: 'admin',
        element: <AdminPage />,
        role: 'admin',

    },
    {
        path: 'about',
        element: <About />,
        role: 'admin',

    },
    {
        path: 'payment',
        element: <Payment />,
        role: 'admin'
    },
    //<====================== Admin Route End ====================>
    {
        path: 'worker',
        element: <Worker />,
        role: 'worker'
    },
    {
        path: 'seller',
        element: <Seller />,
        role: 'seller'
    },
    {
        path: 'maneger',
        element: <Maneger />,
        role: 'maneger'
    },
]
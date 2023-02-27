import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navigate } from 'react-router-dom'
import {getPath} from './utils'
import AdminPage from '../components/dashboard/admin/adminDashboardPage/AdminPage'
import Others from '../components/dashboard/views/Others'
import ApprovalAuthority from '../components/dashboard/views/ApprovalAuthority'
import EmployeeList from './../components/dashboard/admin/employee/EmployeeList';
import EmployeeDetails from '../components/dashboard/admin/employee/EmployeeDetails'
import CreateEmployee from './../components/dashboard/admin/employee/CreateEmployee';
import CompanyList from './../components/dashboard/admin/company/CompanyList';
import BranchList from '../components/dashboard/admin/branch/BranchList'
import DesignationList from '../components/dashboard/admin/designation/DesignationList'
import DepartmentList from '../components/dashboard/admin/department/DepartmentList'
import LeaveTypeList from './../components/dashboard/admin/leaveType/LeaveTypeList';
import Employee from './../components/dashboard/views/Employee';
import FiscalYearList from '../components/dashboard/admin/fiscalYear/FiscalYearList'
import EmploymentList from '../components/dashboard/admin/employment/EmploymentList'
import EditEmployee from '../components/dashboard/admin/employee/EditEmployee'
import BalanceSetupList from '../components/dashboard/admin/balanceSetup/BalanceSetupList'
import LeaveApprovalFlowList from '../components/dashboard/admin/leaveApprovalFlow/LeaveApprovalFlowList'
import DayTypeSetupList from './../components/dashboard/admin/calender/dayTypeSetup/DayTypeSetupList';
import WorkingDayList from '../components/dashboard/admin/calender/workingDaySetup/WorkingDayList'
import CalenderSetupList from '../components/dashboard/admin/calender/calenderSetup/CalenderSetupList'
import BalanceSettingsList from '../components/dashboard/admin/balanceSettings/BalanceSettingsList'



// We can use this route for private route


export const privateRoute = [
    //<====================== Admin Route start ====================>
    {
        path: '/dashboard/',
        element: <Navigate replace to ={getPath()}/>,
        role: 'all'
    },
    {
        path: 'admin',
        element: <AdminPage />,
        role: 'admin',

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
        path: 'admin/company-list',
        element: <CompanyList/>,
        role: 'admin',

    },
    {
        path: 'admin/branch-list',
        element: <BranchList/>,
        role: 'admin',

    },
    {
        path: 'admin/designation-list',
        element: <DesignationList/>,
        role: 'admin',

    },
    {
        path: 'admin/department-list',
        element: <DepartmentList/> ,
        role: 'admin',

    },
    {
        path: 'admin/leave-type',
        element: <LeaveTypeList/> ,
        role: 'admin',

    },
    {
        path: 'admin/fiscal-year-list',
        element: <FiscalYearList/> ,
        role: 'admin',

    },
    {
        path: 'admin/employment-list',
        element: <EmploymentList/> ,
        role: 'admin',

    },
    {
        path: 'admin/leave-balance',
        element: <BalanceSettingsList/> ,
        role: 'admin',

    },
    {
        path: 'admin/balance-setup',
        element: <BalanceSetupList/> ,
        role: 'admin',

    },
    {
        path: 'admin/day-type-setup',
        element: <DayTypeSetupList/> ,
        role: 'admin',

    },
    {
        path: 'admin/working-day-setup',
        element: <WorkingDayList/> ,
        role: 'admin',

    },
    {
        path: 'admin/calendar-setup',
        element: <CalenderSetupList/> ,
        role: 'admin',

    },


    {
        path: 'admin/approval-flow',
        element: <LeaveApprovalFlowList/> ,
        role: 'admin',

    },
 
    // {
    //     path: 'about',
    //     element: <About />,
    //     role: 'admin',

    // },

    //<====================== Admin Route End ====================>

    
    //  <====================== Approval Authority Route Start ====================>

    {
        path: 'approval-authority',
        element: <ApprovalAuthority />,
        role: 'approvalauthority'
    },

    //  <====================== Approval Authority Route End ====================>

    // <====================== Employee Route Start ====================>
    
    {
        path: 'employee',
        element: <Employee />,
        role: 'employee'
    },

    // <====================== Employee Route End ====================>

    // <====================== Others Route Start ====================>

    {
        path: 'others',
        element: <Others />,
        role: 'others'
    },

    // <====================== Others Route End ====================>


   
]
export const navItem = [
  //UID Mustbe Uges String


 


  {
    title: "About",
    link: "about",
    role: "admin",
    icon: "fas fa-dice-d6",
  },
  {
    UID: "settings",
    title: "Master Settings",
    role: "admin",
    icon: "fas fa-cog",
    children: [
      {
        title: "Company",
        link: "admin/company-list",
        role: "admin",
        icon: "fas fa-building",
      },
    
      {
        title: "Employee",
        link: "admin/employee-list",
        role: "admin",
        icon: "fas fa-user",
      },
      {
        title: "Branch",
        link: "admin/branch-list",
        role: "admin",
        icon: "fas fa-industry",
      },
      {
        title: "Designation",
        link: "admin/designation-list",
        role: "admin",
        icon: "fas fa-dice-d6",
      },
      {
        title: "Department",
        link: "admin/department-list",
        role: "admin",
        icon: "fas fa-box",
      },
      {
        title: "Employment",
        link: "admin/employment-list",
        role: "admin",
        icon: "fas  fa-user-tie",
      },
      {
        title: "Leave Type",
        link: "admin/leave-type",
        role: "admin",
        icon: "fas fa-sign-out-alt",
    
      },
      {
        title: "Fiscal Year",
        link: "admin/fiscal-year-list",
        role: "admin",
        icon: "fas fa-vote-yea",
     
      },
      {
        title: "Leave Balance",
        link: "admin/leave-balance",
        role: "admin",
        icon: "fas fa-money-check",
      },


    ],

    
  },

  {
    UID: "blance",
    title: "Balance",
    role: "admin",
    icon: "fas fa-layer-group",

    children: [
      {
        title: "Balance Setup",
        link: "admin/balance-setup",
        role: "admin",
        icon: "fas fa-th-large",
      },
    ]

  },

  {
    title: "Approval Flow",
    link: "admin/ApprovalFlow",
    role: "admin",
    icon: "fas fa-stop ",
  },
  {
    title: "Calendar",
    link: "admin/ApprovalFlow",
    role: "admin",
    icon: "fas fa-calendar-alt",
  },

  // Admin Nav End

  {
    title: "Worker",
    link: "worker",
    role: "worker",
    icon: "fas fa-yin-yang",
  },
  
  {
    title: "Employee",
    link: "employee",
    role: "employee",
    icon: "fas fa-yin-yang",
  },
  {
    title: "Authority",
    link: "approval-authority",
    role: "approvalauthority",
    icon: "fas fa-yin-yang",
  },
  {
    title: "Others",
    link: "others",
    role: "others",
    icon: "fas fa-yin-yang",
  },
];

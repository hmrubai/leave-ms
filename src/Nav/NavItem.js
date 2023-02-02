export const navItem = [
  //UID Mustbe Uges String


 
  {
    UID: "super-admin",
    title: "Super Admin",
    role: "admin",
    icon: "fas fa-user-shield",
    children: [
      {
        title: "About",
        link: "about",
        role: "admin",
        icon: "fas fa-arrow-right",
      },

      {
        title: "Payment",
        link: "payment",
        role: "admin",
        icon: "fas fa-arrow-right",
      },
    ],
  },

  {
    title: "Admin",
    link: "admin",
    role: "admin",
    icon: "fas fa-yin-yang",
  },
  {
    UID: "settings",
    title: "Settings",
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
    ],
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

export const navItem = [
 //UID Mustbe Uges String
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
    title: "Settings",
    link: "settings",
    role: "admin",
    icon: "fas fa-cog",
  },


  // Admin Nav End

  {
    title: "Worker",
    link: "worker",
    role: "worker",
    icon: "fas fa-yin-yang",
  },
  {
    title: "worker",
    link: "worker",
    role: "worker",
    icon: "fas fa-yin-yang",
  },
  {
    title: "maneger",
    link: "maneger",
    role: "maneger",
    icon: "fas fa-yin-yang",
  },
  {
    title: "seller",
    link: "seller",
    role: "seller",
    icon: "fas fa-yin-yang",
  },
];

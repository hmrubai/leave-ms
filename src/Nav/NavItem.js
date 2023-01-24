export const navItem = [
  {
    title: "Employee List",
    link: "admin/employee-list",
    role: "admin",
    icon: "fas fa-th-list",
  },

  {
    //UID Mustbe Uges String

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

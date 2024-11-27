const usersData = [
    {
      id: 1,
      name: "Aryaman",
      role: "Admin",
      permissions: { viewReports: true, editData: true, manageUsers: true },
      status: "Active",
    },
    {
      id: 2,
      name: "Kumar",
      role: "Manager",
      permissions: { viewReports: true, editData: true, manageUsers: false },
      status: "Inactive",
    },
    {
      id: 3,
      name: "Aditya",
      role: "Employee",
      permissions: { viewReports: true, editData: false, manageUsers: false },
      status: "Inactive",
    },
  ];
  
  export default usersData;
  
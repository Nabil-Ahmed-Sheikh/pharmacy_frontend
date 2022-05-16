let crud = {
  active: true,
  create: true,
  read: true,
  update: true,
  delete: true,
};

let permissions = {
  hrAdmin: {
    active: true,
    users: {
      ...crud,
    },
    userTypes: {
      ...crud,
    },
  },
  contact: {
    active: true,
    customers: {
      ...crud,
    },
    suppliers: {
      ...crud,
    },
  },
  medicine: {
    active: true,
    medicineList: {
      ...crud,
    },
  },
  purchases: {
    active: true,
    purchasesList: {
      ...crud,
    },
  },
  sales: {
    active: true,
    salesList: {
      ...crud,
    },
  },
  collection: {
    ...crud,
  },
  payment: {
    ...crud,
  },
  hrManagement: {
    active: true,
    employeeType: {
      ...crud,
    },
    designation: {
      ...crud,
    },
    employeeList: {
      ...crud,
    },
    monthlySalary: {
      ...crud,
    },
  },
  account: {
    active: true,
    journal: {
      ...crud,
    },
    accountHead: {
      ...crud,
    },
    subHead: {
      ...crud,
    },
    bankSetup: {
      ...crud,
    },
    expense: {
      ...crud,
    },
    otherIncome: {
      ...crud,
    },
    bankDeposit: {
      ...crud,
    },
    bankWithdraw: {
      ...crud,
    },
    bankTransfer: {
      ...crud,
    },
  },
  companySetup: {
    ...crud,
  },
  report: {
    active: true,
    salesReport: true,
    salesDetails: true,
    customerReport: true,
    customerDueReport: true,
    cashStatement: true,
    bankStatement: true,
    monthlySalarySheet: true,
    collectionReport: true,
    employeeReport: true,
    employeeExpense: true,
    customerLedger: true,
    expenseHead: true,
    accountLedger: true,
    expenseReport: true,
    profileAndLossReport: true,
    employeeLedger: true,
  },
  dashboard: {
    active: true,
    cashStatement: true,
    bankStatement: true,
    dailySales: true,
    monthlySales: true,
    dailyPurchase: true,
    monthlyPurchase: true,
    dailyCollection: true,
    monthlyCollection: true,
    dailyPayment: true,
    monthlyPayment: true,
    dailyExpense: true,
    monthlyExpense: true,
  },
};

export default permissions;

let crud = {
  active: false,
  create: false,
  read: false,
  update: false,
  delete: false,
};

let permissions = {
  hrAdmin: {
    active: false,
    users: {
      ...crud,
    },
    userTypes: {
      ...crud,
    },
  },
  contact: {
    active: false,
    customers: {
      ...crud,
    },
    suppliers: {
      ...crud,
    },
  },
  medicine: {
    active: false,
    medicineList: {
      ...crud,
    },
  },
  purchases: {
    active: false,
    purchasesList: {
      ...crud,
    },
  },
  sales: {
    active: false,
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
    active: false,
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
    active: false,
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
    active: false,
    salesReport: false,
    salesDetails: false,
    customerReport: false,
    customerDueReport: false,
    cashStatement: false,
    bankStatement: false,
    MonthlySalarySheet: false,
    collectionReport: false,
    employeeReport: false,
    employeeExpense: false,
    customerLedger: false,
    expenseHead: false,
    accountLedger: false,
    expenseReport: false,
    profileAndLossReport: false,
    employeeLedger: false,
  },
  dashboard: {
    active: false,
    cashStatement: false,
    bankStatement: false,
    dailySales: false,
    monthlySales: false,
    dailyPurchase: false,
    monthlyPurchase: false,
    dailyCollection: false,
    monthlyCollection: false,
    dailyPayment: false,
    monthlyPayment: false,
    dailyExpense: false,
    monthlyExpense: false,
  },
};

module.exports = permissions;

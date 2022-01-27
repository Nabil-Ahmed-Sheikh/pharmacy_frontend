import React, { useState } from "react";
import { Modal, Button } from "antd";
import "./AddUserTypeModal.css";
import AddUserTypeForm from "../../Form/AddUserTypeForm/AddUserTypeForm";

const AddUserTypeModal = ({ isVisible, setIsVisible }) => {
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

  const [formData, setFormData] = useState({
    userType: "",
    status: false,
    permissions: {
      ...permissions,
    },
  });

  const handleChangeUserType = (e) => {
    setFormData((prev) => ({ ...prev, userType: e.target.value }));
  };

  const handleChangeStatus = (value) => {
    setFormData((prev) => ({ ...prev, status: value }));
  };

  const handleCancel = () => {
    setIsVisible(false);
  };

  const handleCheck = (e) => {
    console.log(e.target.name);
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <Modal
      className="add_userType_modal"
      title={"Add User Type"}
      onCancel={handleCancel}
      visible={isVisible}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Return
        </Button>,
        <Button key="submit" type="primary" onClick={handleSubmit}>
          Submit
        </Button>,
      ]}
    >
      <AddUserTypeForm
        handleChangeUserType={handleChangeUserType}
        handleChangeStatus={handleChangeStatus}
        formData={formData}
      />
    </Modal>
  );
};

export default AddUserTypeModal;

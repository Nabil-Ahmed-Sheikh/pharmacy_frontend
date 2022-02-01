import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Modal, Button, Spin } from "antd";
import AddUserForm from "../../Form/AddUserForm/AddUserForm";
import { addUserType } from "../../../redux/actions/hrAdminActions";

const AddUserModal = ({ isVisible, setIsVisible, loading, message }) => {
  const dispatch = useDispatch();

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

  const [formData, setFormData] = useState({
    name: "",
    status: "INACTIVE",
    permissions: {
      ...permissions,
    },
  });

  const handleChangeUserType = (e) => {
    setFormData((prev) => ({ ...prev, name: e.target.value }));
  };

  const handleChangeStatus = (value) => {
    setFormData((prev) => ({ ...prev, status: value }));
  };

  const handleCancel = () => {
    setIsVisible(false);
  };

  const handleCheck = (e) => {
    let permission = e.target.value.split(".");

    if (permission.length === 1) {
      let key = permission[0];

      let obj = { ...formData.permissions };
      obj[key].active = e.target.checked;

      setFormData((prev) => ({
        ...prev,
        permissions: {
          ...obj,
        },
      }));
    } else if (permission.length === 2) {
      if (
        permission[0] === "report" ||
        permission[0] === "dashboard" ||
        permission[0] === "companySetup" ||
        permission[0] === "collection" ||
        permission[0] === "payment"
      ) {
        let key1 = permission[0];
        let key2 = permission[1];
        let obj = { ...formData.permissions };
        obj[key1][key2] = e.target.checked;

        setFormData((prev) => ({
          ...prev,
          permissions: {
            ...obj,
          },
        }));
      } else {
        let key1 = permission[0];
        let key2 = permission[1];
        let obj = { ...formData.permissions };
        obj[key1][key2].active = e.target.checked;

        setFormData((prev) => ({
          ...prev,
          permissions: {
            ...obj,
          },
        }));
      }
    } else if (permission.length === 3) {
      let key1 = permission[0];
      let key2 = permission[1];
      let key3 = permission[2];
      let obj = { ...formData.permissions };
      obj[key1][key2][key3] = e.target.checked;

      setFormData((prev) => ({
        ...prev,
        permissions: {
          ...obj,
        },
      }));
    }
  };

//   const handleCheckAllPermission = (e) => {
//     if (e.target.checked) {
//       setFormData((prev) => ({
//         ...prev,
//         permissions: { ...adminPermissions },
//       }));
//     }
//   };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUserType(formData));
    setIsVisible(false);
  };

  return (
    <Modal
      className="add_userType_modal"
      style={{ width: "80%" }}
      title={"Add User"}
      onCancel={handleCancel}
      visible={isVisible}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button
          key="submit"
          type="primary"
          onClick={handleSubmit}
          disabled={loading}
          style={{ width: "76px" }}
        >
          {loading ? <Spin /> : "Submit"}
        </Button>,
      ]}
    >
      <AddUserForm
        handleChangeUserType={handleChangeUserType}
        handleChangeStatus={handleChangeStatus}
        formData={formData}
        handleCheck={handleCheck}
        // handleCheckAllPermission={handleCheckAllPermission}
        loading={loading}
      />
    </Modal>
  );
};

export default AddUserModal;

import React from "react";
import { Checkbox, Row, Col, Divider, Input, Select } from "antd";
import "./AddUserTypeForm.css";
import { FiUser } from "react-icons/fi";

const { Option } = Select;

const AddUserTypeForm = ({
  handleChangeUserType,
  handleChangeStatus,
  formData,
}) => {
  return (
    <div className="add-userType-form">
      <div>
        <label>
          <h4>User Type</h4>
        </label>
        <Input
          addonBefore={<FiUser />}
          name="userType"
          onChange={handleChangeUserType}
        />
      </div>
      <div style={{ marginTop: "10px" }}>
        <label>
          <h4>Status</h4>
        </label>
        <Select
          style={{ width: "100%" }}
          onChange={handleChangeStatus}
          value={formData.status}
        >
          <Option value={true}>Active</Option>
          <Option value={false}>Inactive</Option>
        </Select>
      </div>
      <Divider />
      <Checkbox>All Permission</Checkbox>
      <Divider />
      <>
        <Checkbox name="hrAdmin" value={formData.permissions.hrAdmin}>HR Admin</Checkbox>
        <Checkbox.Group className="add-userType-form-crudGroup">
          <Row>
            <Col span={8}>
              <Checkbox name="hrAdmin.users" value={formData.permissions.hrAdmin.users}>Users</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="hrAdmin.users.read" value={formData.permissions.hrAdmin.users.read}>View</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="hrAdmin.users.create" value={formData.permissions.hrAdmin.users.create}>Add</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="hrAdmin.users.update"  value={formData.permissions.hrAdmin.users.update}>Edit</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="hrAdmin.users.delete" value={formData.permissions.hrAdmin.users.delete}>Delete</Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
        <Checkbox.Group className="add-userType-form-crudGroup">
          <Row>
            <Col span={8}>
              <Checkbox name="hrAdmin.userTypes" value={formData.permissions.hrAdmin.userTypes}>User Type</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="hrAdmin.userTypes.read" value={formData.permissions.hrAdmin.userTypes.read}>View</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="hrAdmin.userTypes.create" value={formData.permissions.hrAdmin.userTypes.create}>Add</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="hrAdmin.userTypes.update" value={formData.permissions.hrAdmin.userTypes.update}>Edit</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="hrAdmin.userTypes.delete" value={formData.permissions.hrAdmin.userTypes.delete}>Delete</Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
      </>
      <Divider />
      <>
        <Checkbox name="contact" value={formData.permissions.contact}>Contact</Checkbox>
        <Checkbox.Group className="add-userType-form-crudGroup">
          <Row>
            <Col span={8}>
              <Checkbox name="contact.customers" value={formData.permissions.contact.customers}>Customer</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="contact.customers.read" value={formData.permissions.contact.customers.read}>View</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="contact.customers.create" value={formData.permissions.contact.customers.create}>Add</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="contact.customers.update" value={formData.permissions.contact.customers.update}>Edit</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="contact.customers.delete" value={formData.permissions.contact.customers.delete}>Delete</Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
        <Checkbox.Group className="add-userType-form-crudGroup">
          <Row>
            <Col span={8}>
              <Checkbox name="contact.suppliers" value={formData.permissions.contact.suppliers}>Suppliers</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="contact.suppliers.read" value={formData.permissions.contact.suppliers.read}>View</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="contact.suppliers.create" value={formData.permissions.contact.suppliers.create}>Add</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="contact.suppliers.update" value={formData.permissions.contact.suppliers.update}>Edit</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="contact.suppliers.delete" value={formData.permissions.contact.suppliers.delete}>Delete</Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
      </>
      <Divider />
      <>
        <Checkbox name="medicine" value={formData.permissions.medicine}>Medicine</Checkbox>
        <Checkbox.Group className="add-userType-form-crudGroup">
          <Row>
            <Col span={8}>
              <Checkbox name="medicine.medicineList" value={formData.permissions.medicine.medicineList}>Medicine View</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="medicine.medicineList.read" value={formData.permissions.medicine.medicineList.read}>View</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="medicine.medicineList.create" value={formData.permissions.medicine.medicineList.create}>Add</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="medicine.medicineList.update" value={formData.permissions.medicine.medicineList.update}>Edit</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="medicine.medicineList.delete" value={formData.permissions.medicine.medicineList.delete}>Delete</Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
      </>
      <Divider />
      <>
        <Checkbox name="purchases" value={formData.permissions.purchases}>Purchases</Checkbox>
        <Checkbox.Group className="add-userType-form-crudGroup">
          <Row>
            <Col span={8}>
              <Checkbox name="purchases.purchasesList" value={formData.permissions.purchases.purchasesList}>Purchases List</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="purchases.purchasesList.read" value={formData.permissions.purchases.purchasesList.read}>View</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="purchases.purchasesList.create" value={formData.permissions.purchases.purchasesList.create}>Add</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="purchases.purchasesList.update" value={formData.permissions.purchases.purchasesList.update}>Edit</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="purchases.purchasesList.delete" value={formData.permissions.purchases.purchasesList.delete}>Delete</Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
      </>
      <Divider />
      <>
        <Checkbox name="sales" value={formData.permissions.sales}>Sales</Checkbox>
        <Checkbox.Group className="add-userType-form-crudGroup">
          <Row>
            <Col span={8}>
              <Checkbox name="sales.salesList" value={formData.permissions.sales.salesList}>Sales View</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="sales.salesList.read" value={formData.permissions.sales.salesList.read}>View</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="sales.salesList.create" value={formData.permissions.sales.salesList.create}>Add</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="sales.salesList.update" value={formData.permissions.sales.salesList.update}>Edit</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="sales.salesList.delete" value={formData.permissions.sales.salesList.delete}>Delete</Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
      </>
      <Divider />
      <>
        <Checkbox.Group className="add-userType-form-crudGroup_single">
          <Row>
            <Col span={8}>
              <Checkbox value="A">Collection</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox value="B">View</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox value="C">Add</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox value="D">Edit</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox value="E">Delete</Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
        <Checkbox.Group className="add-userType-form-crudGroup_single">
          <Row>
            <Col span={8}>
              <Checkbox name="payment" value={formData.permissions.payment}>Payment</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="payment.read" value={formData.permissions.payment.read}>View</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="payment.create" value={formData.permissions.payment.create}>Add</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="payment.update" value={formData.permissions.payment.update}>Edit</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="payment.delete" value={formData.permissions.payment.delete}>Delete</Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
      </>
      <Divider />
      <>
        <Checkbox name="hrManagement" value={formData.permissions.hrManagement}>HR Management</Checkbox>
        <Checkbox.Group className="add-userType-form-crudGroup">
          <Row>
            <Col span={8}>
              <Checkbox name="hrManagement.employeeType" value={formData.permissions.hrManagement.employeeType}>Employee Type</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="hrManagement.employeeType.read" value={formData.permissions.hrManagement.employeeType.read}>View</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="hrManagement.employeeType.create" value={formData.permissions.hrManagement.employeeType.create}>Add</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="hrManagement.employeeType.update" value={formData.permissions.hrManagement.employeeType.update}>Edit</Checkbox>
            </Col>
            <Col span={4}> 
              <Checkbox name="hrManagement.employeeType.delete" value={formData.permissions.hrManagement.employeeType.delete}>Delete</Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
        <Checkbox.Group className="add-userType-form-crudGroup">
          <Row>
            <Col span={8}>
              <Checkbox name="hrManagement.designation" value={formData.permissions.hrManagement.designation}>Designation</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="hrManagement.designation.read" value={formData.permissions.hrManagement.designation.read}>View</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="hrManagement.designation.create" value={formData.permissions.hrManagement.designation.create}>Add</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="hrManagement.designation.update" value={formData.permissions.hrManagement.designation.update}>Edit</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="hrManagement.designation.delete" value={formData.permissions.hrManagement.designation.delete}>Delete</Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
        <Checkbox.Group className="add-userType-form-crudGroup">
          <Row>
            <Col span={8}>
              <Checkbox name="hrManagement.employeeList" value={formData.permissions.hrManagement.employeeList}>Employee List</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="hrManagement.employeeList.read" value={formData.permissions.hrManagement.employeeList.read}>View</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="hrManagement.employeeList.create" value={formData.permissions.hrManagement.employeeList.create}>Add</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="hrManagement.employeeList.update" value={formData.permissions.hrManagement.employeeList.update}>Edit</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="hrManagement.employeeList.delete" value={formData.permissions.hrManagement.employeeList.delete}>Delete</Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
        <Checkbox.Group className="add-userType-form-crudGroup">
          <Row>
            <Col span={8}>
              <Checkbox name="hrManagement.monthlySalary" value={formData.permissions.hrManagement.monthlySalary}>Monthly Salary</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="hrManagement.monthlySalary.read" value={formData.permissions.hrManagement.monthlySalary.read}>View</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="hrManagement.monthlySalary.create" value={formData.permissions.hrManagement.monthlySalary.create}>Add</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="hrManagement.monthlySalary.update" value={formData.permissions.hrManagement.monthlySalary.update}>Edit</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="hrManagement.monthlySalary.delete" value={formData.permissions.hrManagement.monthlySalary.delete}>Delete</Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
      </>
      <Divider />
      <>
        <Checkbox name="account" value={formData.permissions.account}>Account</Checkbox>
        <Checkbox.Group className="add-userType-form-crudGroup">
          <Row>
            <Col span={8}>
              <Checkbox name="account.journal" value={formData.permissions.account.journal}>Journal</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="account.journal.read" value={formData.permissions.account.journal.read}>View</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="account.journal.create" value={formData.permissions.account.journal.create}>Add</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="account.journal.update" value={formData.permissions.account.journal.update}>Edit</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="account.journal.delete" value={formData.permissions.account.journal.delete}>Delete</Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
        <Checkbox.Group className="add-userType-form-crudGroup">
          <Row>
            <Col span={8}>
              <Checkbox name="account.accountHead" value={formData.permissions.account.accountHead}>Account Head</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="account.accountHead.read" value={formData.permissions.account.accountHead.read}>View</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="account.accountHead.create" value={formData.permissions.account.accountHead.create}>Add</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="account.accountHead.update" value={formData.permissions.account.accountHead.update}>Edit</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="account.accountHead.delete" value={formData.permissions.account.accountHead.delete}>Delete</Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
        <Checkbox.Group className="add-userType-form-crudGroup">
          <Row>
            <Col span={8}>
              <Checkbox name="account.subHead" value={formData.permissions.account.subHead}>Sub Head</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="account.subHead.read" value={formData.permissions.account.subHead}>View</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="account.subHead.create" value={formData.permissions.account.subHead}>Add</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="account.subHead.update" value={formData.permissions.account.subHead}>Edit</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="account.subHead.delete" value={formData.permissions.account.subHead.delete}>Delete</Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
        <Checkbox.Group className="add-userType-form-crudGroup">
          <Row>
            <Col span={8}>
              <Checkbox name="account.bankSetup" value={formData.permissions.account.bankSetup}>Bank Setup</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="account.bankSetup.read" value={formData.permissions.account.bankSetup.read}>View</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="account.bankSetup.create" value={formData.permissions.account.bankSetup.create}>Add</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="account.bankSetup.update" value={formData.permissions.account.bankSetup.update}>Edit</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="account.bankSetup.delete" value={formData.permissions.account.bankSetup.delete}>Delete</Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
        <Checkbox.Group className="add-userType-form-crudGroup">
          <Row>
            <Col span={8}>
              <Checkbox name="account.expense" value={formData.permissions.account.expense}>Expense</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="account.expense.read" value={formData.permissions.account.expense.read}>View</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="account.expense.create" value={formData.permissions.account.expense.create}>Add</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="account.expense.update" value={formData.permissions.account.expense.update}>Edit</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="account.expense.delete" value={formData.permissions.account.expense.delete}>Delete</Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
        <Checkbox.Group className="add-userType-form-crudGroup">
          <Row>
            <Col span={8}>
              <Checkbox name="account.otherIncome" value={formData.permissions.account.otherIncome}>Others Income</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="account.otherIncome.read" value={formData.permissions.account.otherIncome.read}>View</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="account.otherIncome.create" value={formData.permissions.account.otherIncome.create}>Add</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="account.otherIncome.update" value={formData.permissions.account.otherIncome.update}>Edit</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="account.otherIncome.delete" value={formData.permissions.account.otherIncome.delete}>Delete</Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
        <Checkbox.Group className="add-userType-form-crudGroup">
          <Row>
            <Col span={8}>
              <Checkbox name="account.bankDeposit" value={formData.permissions.account.bankDeposit}>Bank Deposit</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="account.bankDeposit.read" value={formData.permissions.account.bankDeposit.read}>View</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="account.bankDeposit.create" value={formData.permissions.account.bankDeposit.create}>Add</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="account.bankDeposit.update" value={formData.permissions.account.bankDeposit.update}>Edit</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="account.bankDeposit.delete" value={formData.permissions.account.bankDeposit.delete}>Delete</Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
        <Checkbox.Group className="add-userType-form-crudGroup">
          <Row>
            <Col span={8}>
              <Checkbox name="account.bankWithdraw" value={formData.permissions.account.bankWithdraw}>Bank Withdraw</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="account.bankWithdraw.read" value={formData.permissions.account.bankWithdraw.read}>View</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="account.bankWithdraw.create" value={formData.permissions.account.bankWithdraw.create}>Add</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="account.bankWithdraw.update" value={formData.permissions.account.bankWithdraw.update}>Edit</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="account.bankWithdraw.delete" value={formData.permissions.account.bankWithdraw.delete}>Delete</Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
        <Checkbox.Group className="add-userType-form-crudGroup">
          <Row>
            <Col span={8}>
              <Checkbox name="account.bankTransfer" value={formData.permissions.account.bankTransfer}>Bank Transfer</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="account.bankTransfer.read" value={formData.permissions.account.bankTransfer.read}>View</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="account.bankTransfer.create" value={formData.permissions.account.bankTransfer.create}>Add</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="account.bankTransfer.update" value={formData.permissions.account.bankTransfer.update}>Edit</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="account.bankTransfer.delete" value={formData.permissions.account.bankTransfer.delete}>Delete</Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
      </>
      <Divider />
      <>
        <Checkbox.Group className="add-userType-form-crudGroup_single">
          <Row>
            <Col span={8}>
              <Checkbox name="companySetup" value={formData.permissions.companySetup}>Company Setup</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="companySetup.read" value={formData.permissions.companySetup.read}>View</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="companySetup.create" value={formData.permissions.companySetup.create}>Add</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="companySetup.update" value={formData.permissions.companySetup.update}>Edit</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox name="companySetup.delete" value={formData.permissions.companySetup.delete}>Delete</Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
      </>
      <Divider />
      <>
        <Checkbox>Report</Checkbox>
        <Checkbox.Group className="add-userType-form-crudGroup">
          <Row>
            <Col span={8} style={{ marginLeft: "20px" }}>
              <Checkbox style={{ marginLeft: "0" }} value="B">Sales Report</Checkbox>
              <Checkbox style={{ marginLeft: "0" }} value="C">Sales Details</Checkbox>
              <Checkbox style={{ marginLeft: "0" }} value="D">Customer Report</Checkbox>
              <Checkbox style={{ marginLeft: "0" }} value="E">Customer Due Report</Checkbox>
              <Checkbox style={{ marginLeft: "0" }} value="B">Cash Statement</Checkbox>
              <Checkbox style={{ marginLeft: "0" }} value="C">Bank Statement</Checkbox>
              <Checkbox style={{ marginLeft: "0" }} value="D">Monthly Salary Sheet</Checkbox>
              <Checkbox style={{ marginLeft: "0" }} value="E">Collection Report</Checkbox>
              <Checkbox style={{ marginLeft: "0" }} value="E">Employee Report</Checkbox>
            </Col>
            <Col span={8} style={{ marginLeft: "20px" }}>
              <Checkbox style={{ marginLeft: "0" }} value="B">Employee Expense</Checkbox>
              <Checkbox style={{ marginLeft: "0" }} value="C">Customer Ledger</Checkbox>
              <Checkbox style={{ marginLeft: "0" }} value="D">Expense Head</Checkbox>
              <Checkbox style={{ marginLeft: "0" }} value="E">Account Ledger</Checkbox>
              <Checkbox style={{ marginLeft: "0" }} value="C">Expense Report</Checkbox>
              <Checkbox style={{ marginLeft: "0" }} value="D">Profit and Loss Report</Checkbox>
              <Checkbox style={{ marginLeft: "0" }} value="E">Employee Ledger</Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
        <Checkbox.Group className="add-userType-form-crudGroup">
          <Row>
            <Col span={8}>
              <Checkbox value="A">User Type</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox value="B">View</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox value="C">Add</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox value="D">Edit</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox value="E">Delete</Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
      </>
      <Divider />
      <>
        <Checkbox>Dashboard</Checkbox>
        <Checkbox.Group className="add-userType-form-crudGroup">
          <Row>
            <Col span={8} style={{ marginLeft: "20px" }}>
              <Checkbox style={{ marginLeft: "0" }} value="B">Cash Statement</Checkbox>
              <Checkbox style={{ marginLeft: "0" }} value="C">Bank Statement</Checkbox>
              <Checkbox style={{ marginLeft: "0" }} value="D">Daily Sales</Checkbox>
              <Checkbox style={{ marginLeft: "0" }} value="E">Monthly Sales</Checkbox>
              <Checkbox style={{ marginLeft: "0" }} value="B">Daily Purchases</Checkbox>
              <Checkbox style={{ marginLeft: "0" }} value="C">Monthly Purchases</Checkbox>
            </Col>
            <Col span={8} style={{ marginLeft: "20px" }}>
              <Checkbox style={{ marginLeft: "0" }} value="B">Daily Collection</Checkbox>
              <Checkbox style={{ marginLeft: "0" }} value="C">Monthly Collection</Checkbox>
              <Checkbox style={{ marginLeft: "0" }} value="D">Monthly Payment</Checkbox>
              <Checkbox style={{ marginLeft: "0" }} value="E">Daily Expense</Checkbox>
              <Checkbox style={{ marginLeft: "0" }} value="C">Monthly Expense</Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
      </>
    </div>
  );
};

export default AddUserTypeForm;

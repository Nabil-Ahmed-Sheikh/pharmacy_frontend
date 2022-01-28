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
              <Checkbox name="purchases.purchasesList" value={formData.permissions.purchases.purchasesList}>Purchases View</Checkbox>
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
              <Checkbox value="A">Designation</Checkbox>
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
        <Checkbox.Group className="add-userType-form-crudGroup">
          <Row>
            <Col span={8}>
              <Checkbox value="A">Employee View</Checkbox>
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
        <Checkbox.Group className="add-userType-form-crudGroup">
          <Row>
            <Col span={8}>
              <Checkbox value="A">Monthly Salary</Checkbox>
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
              <Checkbox value="A">Sub Head</Checkbox>
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
        <Checkbox.Group className="add-userType-form-crudGroup">
          <Row>
            <Col span={8}>
              <Checkbox value="A">Bank Setup</Checkbox>
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
        <Checkbox.Group className="add-userType-form-crudGroup">
          <Row>
            <Col span={8}>
              <Checkbox value="A">Expense</Checkbox>
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
        <Checkbox.Group className="add-userType-form-crudGroup">
          <Row>
            <Col span={8}>
              <Checkbox value="A">Others Income</Checkbox>
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
        <Checkbox.Group className="add-userType-form-crudGroup">
          <Row>
            <Col span={8}>
              <Checkbox value="A">Bank Deposit</Checkbox>
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
        <Checkbox.Group className="add-userType-form-crudGroup">
          <Row>
            <Col span={8}>
              <Checkbox value="A">Bank Withdraw</Checkbox>
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
        <Checkbox.Group className="add-userType-form-crudGroup">
          <Row>
            <Col span={8}>
              <Checkbox value="A">Bank Transfer</Checkbox>
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
        <Checkbox.Group className="add-userType-form-crudGroup_single">
          <Row>
            <Col span={8}>
              <Checkbox value="A">Company Setup</Checkbox>
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
        <Checkbox>Report</Checkbox>
        <Checkbox.Group className="add-userType-form-crudGroup">
          <Row>
            <Col span={8} style={{ marginLeft: "20px" }}>
              <Checkbox style={{ marginLeft: "0" }} value="B">
                Sales Report
              </Checkbox>
              <Checkbox style={{ marginLeft: "0" }} value="C">
                Sales Details
              </Checkbox>
              <Checkbox style={{ marginLeft: "0" }} value="D">
                Customer Report
              </Checkbox>
              <Checkbox style={{ marginLeft: "0" }} value="E">
                Customer Due Report
              </Checkbox>
              <Checkbox style={{ marginLeft: "0" }} value="B">
                Cash Statement
              </Checkbox>
              <Checkbox style={{ marginLeft: "0" }} value="C">
                Bank Statement
              </Checkbox>
              <Checkbox style={{ marginLeft: "0" }} value="D">
                Monthly Salary Sheet
              </Checkbox>
              <Checkbox style={{ marginLeft: "0" }} value="E">
                Collection Report
              </Checkbox>
              <Checkbox style={{ marginLeft: "0" }} value="E">
                Employee Report
              </Checkbox>
            </Col>
            <Col span={8} style={{ marginLeft: "20px" }}>
              <Checkbox style={{ marginLeft: "0" }} value="B">
                Employee Expense
              </Checkbox>
              <Checkbox style={{ marginLeft: "0" }} value="C">
                Customer Ledger
              </Checkbox>
              <Checkbox style={{ marginLeft: "0" }} value="D">
                Expense Head
              </Checkbox>
              <Checkbox style={{ marginLeft: "0" }} value="E">
                Account Ledger
              </Checkbox>
              <Checkbox style={{ marginLeft: "0" }} value="C">
                Expense Report
              </Checkbox>
              <Checkbox style={{ marginLeft: "0" }} value="D">
                Profit and Loss Report
              </Checkbox>
              <Checkbox style={{ marginLeft: "0" }} value="E">
                Employee Ledger
              </Checkbox>
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
              <Checkbox style={{ marginLeft: "0" }} value="B">
                Cash Statement
              </Checkbox>
              <Checkbox style={{ marginLeft: "0" }} value="C">
                Bank Statement
              </Checkbox>
              <Checkbox style={{ marginLeft: "0" }} value="D">
                Daily Sales
              </Checkbox>
              <Checkbox style={{ marginLeft: "0" }} value="E">
                Monthly Sales
              </Checkbox>
              <Checkbox style={{ marginLeft: "0" }} value="B">
                Daily Purchases
              </Checkbox>
              <Checkbox style={{ marginLeft: "0" }} value="C">
                Monthly Purchases
              </Checkbox>
            </Col>
            <Col span={8} style={{ marginLeft: "20px" }}>
              <Checkbox style={{ marginLeft: "0" }} value="B">
                Daily Collection
              </Checkbox>
              <Checkbox style={{ marginLeft: "0" }} value="C">
                Monthly Collection
              </Checkbox>
              <Checkbox style={{ marginLeft: "0" }} value="D">
                Monthly Payment
              </Checkbox>
              <Checkbox style={{ marginLeft: "0" }} value="E">
                Daily Expense
              </Checkbox>
              <Checkbox style={{ marginLeft: "0" }} value="C">
                Monthly Expense
              </Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
      </>
    </div>
  );
};

export default AddUserTypeForm;

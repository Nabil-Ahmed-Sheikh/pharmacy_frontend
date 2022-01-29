import React from "react";
import { Checkbox, Row, Col, Divider, Input, Select } from "antd";
import "./AddUserTypeForm.css";
import { FiUser } from "react-icons/fi";

const { Option } = Select;

const AddUserTypeForm = ({
  handleChangeUserType,
  handleChangeStatus,
  formData,
  handleCheck,
  handleCheckAllPermission,
}) => {
  const { permissions } = formData;

  return (
    <div className="add-userType-form">
      <div>
        <label>
          <h4>User Type</h4>
        </label>
        <Input
          addonBefore={<FiUser />}
          name="name"
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
          <Option value={"ACTIVE"}>Active</Option>
          <Option value={"INACTIVE"}>Inactive</Option>
        </Select>
      </div>
      <Divider />
      <Checkbox onChange={handleCheckAllPermission}>All Permission</Checkbox>
      <Divider />
      <>
        <Checkbox
          value="hrAdmin"
          key={"hrAdmin"}
          onChange={handleCheck}
          checked={permissions.hrAdmin.active ? true : false}
        >
          HR Admin
        </Checkbox>
        <Checkbox.Group className="add-userType-form-crudGroup">
          <Row>
            <Col span={8}>
              <Checkbox
                value="hrAdmin.users"
                key={"hrAdmin.users"}
                onChange={handleCheck}
                checked={permissions.hrAdmin.users.active ? true : false}
              >
                Users
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="hrAdmin.users.read"
                key={"hrAdmin.users.read"}
                onChange={handleCheck}
                checked={permissions.hrAdmin.users.read ? true : false}
              >
                View
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="hrAdmin.users.create"
                onChange={handleCheck}
                checked={permissions.hrAdmin.users.create ? true : false}
              >
                Add
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="hrAdmin.users.update"
                onChange={handleCheck}
                checked={permissions.hrAdmin.users.update ? true : false}
              >
                Edit
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="hrAdmin.users.delete"
                onChange={handleCheck}
                checked={permissions.hrAdmin.users.delete ? true : false}
              >
                Delete
              </Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
        <Checkbox.Group className="add-userType-form-crudGroup">
          <Row>
            <Col span={8}>
              <Checkbox
                value="hrAdmin.userTypes"
                onChange={handleCheck}
                checked={permissions.hrAdmin.userTypes.active ? true : false}
              >
                User Type
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="hrAdmin.userTypes.read"
                onChange={handleCheck}
                checked={permissions.hrAdmin.userTypes.read ? true : false}
              >
                View
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="hrAdmin.userTypes.create"
                onChange={handleCheck}
                checked={permissions.hrAdmin.userTypes.create ? true : false}
              >
                Add
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="hrAdmin.userTypes.update"
                onChange={handleCheck}
                checked={permissions.hrAdmin.userTypes.update ? true : false}
              >
                Edit
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="hrAdmin.userTypes.delete"
                onChange={handleCheck}
                checked={permissions.hrAdmin.userTypes.delete ? true : false}
              >
                Delete
              </Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
      </>
      <Divider />
      <>
        <Checkbox
          value="contact"
          onChange={handleCheck}
          checked={permissions.contact.active ? true : false}
        >
          Contact
        </Checkbox>
        <Checkbox.Group className="add-userType-form-crudGroup">
          <Row>
            <Col span={8}>
              <Checkbox
                value="contact.customers"
                onChange={handleCheck}
                checked={permissions.contact.customers.active ? true : false}
              >
                Customer
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="contact.customers.read"
                onChange={handleCheck}
                checked={permissions.contact.customers.read ? true : false}
              >
                View
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="contact.customers.create"
                onChange={handleCheck}
                checked={permissions.contact.customers.create ? true : false}
              >
                Add
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="contact.customers.update"
                onChange={handleCheck}
                checked={permissions.contact.customers.update ? true : false}
              >
                Edit
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="contact.customers.delete"
                onChange={handleCheck}
                checked={permissions.contact.customers.delete ? true : false}
              >
                Delete
              </Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
        <Checkbox.Group className="add-userType-form-crudGroup">
          <Row>
            <Col span={8}>
              <Checkbox
                value="contact.suppliers"
                onChange={handleCheck}
                checked={permissions.contact.suppliers.active ? true : false}
              >
                Suppliers
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="contact.suppliers.read"
                onChange={handleCheck}
                checked={permissions.contact.suppliers.read ? true : false}
              >
                View
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="contact.suppliers.create"
                onChange={handleCheck}
                checked={permissions.contact.suppliers.create ? true : false}
              >
                Add
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="contact.suppliers.update"
                onChange={handleCheck}
                checked={permissions.contact.suppliers.update ? true : false}
              >
                Edit
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="contact.suppliers.delete"
                onChange={handleCheck}
                checked={permissions.contact.suppliers.delete ? true : false}
              >
                Delete
              </Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
      </>
      <Divider />
      <>
        <Checkbox
          value="medicine"
          onChange={handleCheck}
          checked={permissions.medicine.active ? true : false}
        >
          Medicine
        </Checkbox>
        <Checkbox.Group className="add-userType-form-crudGroup">
          <Row>
            <Col span={8}>
              <Checkbox
                value="medicine.medicineList"
                onChange={handleCheck}
                checked={
                  permissions.medicine.medicineList.active ? true : false
                }
              >
                Medicine View
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="medicine.medicineList.read"
                onChange={handleCheck}
                checked={permissions.medicine.medicineList.read ? true : false}
              >
                View
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="medicine.medicineList.create"
                onChange={handleCheck}
                checked={
                  permissions.medicine.medicineList.create ? true : false
                }
              >
                Add
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="medicine.medicineList.update"
                onChange={handleCheck}
                checked={
                  permissions.medicine.medicineList.update ? true : false
                }
              >
                Edit
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="medicine.medicineList.delete"
                onChange={handleCheck}
                checked={
                  permissions.medicine.medicineList.delete ? true : false
                }
              >
                Delete
              </Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
      </>
      <Divider />
      <>
        <Checkbox
          value="purchases"
          onChange={handleCheck}
          checked={permissions.purchases.active ? true : false}
        >
          Purchases
        </Checkbox>
        <Checkbox.Group className="add-userType-form-crudGroup">
          <Row>
            <Col span={8}>
              <Checkbox
                value="purchases.purchasesList"
                onChange={handleCheck}
                checked={
                  permissions.purchases.purchasesList.active ? true : false
                }
              >
                Purchases List
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="purchases.purchasesList.read"
                onChange={handleCheck}
                checked={
                  permissions.purchases.purchasesList.read ? true : false
                }
              >
                View
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="purchases.purchasesList.create"
                onChange={handleCheck}
                checked={
                  permissions.purchases.purchasesList.create ? true : false
                }
              >
                Add
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="purchases.purchasesList.update"
                onChange={handleCheck}
                checked={
                  permissions.purchases.purchasesList.update ? true : false
                }
              >
                Edit
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="purchases.purchasesList.delete"
                onChange={handleCheck}
                checked={
                  permissions.purchases.purchasesList.delete ? true : false
                }
              >
                Delete
              </Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
      </>
      <Divider />
      <>
        <Checkbox
          value="sales"
          onChange={handleCheck}
          checked={permissions.sales.active ? true : false}
        >
          Sales
        </Checkbox>
        <Checkbox.Group className="add-userType-form-crudGroup">
          <Row>
            <Col span={8}>
              <Checkbox
                value="sales.salesList"
                onChange={handleCheck}
                checked={permissions.sales.salesList.active ? true : false}
              >
                Sales List
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="sales.salesList.read"
                onChange={handleCheck}
                checked={permissions.sales.salesList.read ? true : false}
              >
                View
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="sales.salesList.create"
                onChange={handleCheck}
                checked={permissions.sales.salesList.create ? true : false}
              >
                Add
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="sales.salesList.update"
                onChange={handleCheck}
                checked={permissions.sales.salesList.update ? true : false}
              >
                Edit
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="sales.salesList.delete"
                onChange={handleCheck}
                checked={permissions.sales.salesList.delete ? true : false}
              >
                Delete
              </Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
      </>
      <Divider />
      <>
        <Checkbox.Group className="add-userType-form-crudGroup_single">
          <Row>
            <Col span={8}>
              <Checkbox
                value="collection"
                onChange={handleCheck}
                checked={permissions.collection.active ? true : false}
              >
                Collection
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="collection.read"
                onChange={handleCheck}
                checked={permissions.collection.read ? true : false}
              >
                View
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="collection.create"
                onChange={handleCheck}
                checked={permissions.collection.create ? true : false}
              >
                Add
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="collection.update"
                onChange={handleCheck}
                checked={permissions.collection.update ? true : false}
              >
                Edit
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="collection.delete"
                onChange={handleCheck}
                checked={permissions.collection.delete ? true : false}
              >
                Delete
              </Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
        <Checkbox.Group className="add-userType-form-crudGroup_single">
          <Row>
            <Col span={8}>
              <Checkbox
                value="payment"
                onChange={handleCheck}
                checked={permissions.payment.active ? true : false}
              >
                Payment
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="payment.read"
                onChange={handleCheck}
                checked={permissions.payment.read ? true : false}
              >
                View
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="payment.create"
                onChange={handleCheck}
                checked={permissions.payment.create ? true : false}
              >
                Add
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="payment.update"
                onChange={handleCheck}
                checked={permissions.payment.update ? true : false}
              >
                Edit
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="payment.delete"
                onChange={handleCheck}
                checked={permissions.payment.delete ? true : false}
              >
                Delete
              </Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
      </>
      <Divider />
      <>
        <Checkbox
          value="hrManagement"
          onChange={handleCheck}
          checked={permissions.hrManagement.active ? true : false}
        >
          HR Management
        </Checkbox>
        <Checkbox.Group className="add-userType-form-crudGroup">
          <Row>
            <Col span={8}>
              <Checkbox
                value="hrManagement.employeeType"
                onChange={handleCheck}
                checked={
                  permissions.hrManagement.employeeType.active ? true : false
                }
              >
                Employee Type
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="hrManagement.employeeType.read"
                onChange={handleCheck}
                checked={
                  permissions.hrManagement.employeeType.read ? true : false
                }
              >
                View
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="hrManagement.employeeType.create"
                onChange={handleCheck}
                checked={
                  permissions.hrManagement.employeeType.create ? true : false
                }
              >
                Add
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="hrManagement.employeeType.update"
                onChange={handleCheck}
                checked={
                  permissions.hrManagement.employeeType.update ? true : false
                }
              >
                Edit
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="hrManagement.employeeType.delete"
                onChange={handleCheck}
                checked={
                  permissions.hrManagement.employeeType.delete ? true : false
                }
              >
                Delete
              </Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
        <Checkbox.Group className="add-userType-form-crudGroup">
          <Row>
            <Col span={8}>
              <Checkbox
                value="hrManagement.designation"
                onChange={handleCheck}
                checked={
                  permissions.hrManagement.designation.active ? true : false
                }
              >
                Designation
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="hrManagement.designation.read"
                onChange={handleCheck}
                checked={
                  permissions.hrManagement.designation.read ? true : false
                }
              >
                View
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="hrManagement.designation.create"
                onChange={handleCheck}
                checked={
                  permissions.hrManagement.designation.create ? true : false
                }
              >
                Add
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="hrManagement.designation.update"
                onChange={handleCheck}
                checked={
                  permissions.hrManagement.designation.update ? true : false
                }
              >
                Edit
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="hrManagement.designation.delete"
                onChange={handleCheck}
                checked={
                  permissions.hrManagement.designation.delete ? true : false
                }
              >
                Delete
              </Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
        <Checkbox.Group className="add-userType-form-crudGroup">
          <Row>
            <Col span={8}>
              <Checkbox
                value="hrManagement.employeeList"
                onChange={handleCheck}
                checked={
                  permissions.hrManagement.employeeList.active ? true : false
                }
              >
                Employee List
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="hrManagement.employeeList.read"
                onChange={handleCheck}
                checked={
                  permissions.hrManagement.employeeList.read ? true : false
                }
              >
                View
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="hrManagement.employeeList.create"
                onChange={handleCheck}
                checked={
                  permissions.hrManagement.employeeList.create ? true : false
                }
              >
                Add
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="hrManagement.employeeList.update"
                onChange={handleCheck}
                checked={
                  permissions.hrManagement.employeeList.update ? true : false
                }
              >
                Edit
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="hrManagement.employeeList.delete"
                onChange={handleCheck}
                checked={
                  permissions.hrManagement.employeeList.delete ? true : false
                }
              >
                Delete
              </Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
        <Checkbox.Group className="add-userType-form-crudGroup">
          <Row>
            <Col span={8}>
              <Checkbox
                value="hrManagement.monthlySalary"
                onChange={handleCheck}
                checked={
                  permissions.hrManagement.monthlySalary.active ? true : false
                }
              >
                Monthly Salary
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="hrManagement.monthlySalary.read"
                onChange={handleCheck}
                checked={
                  permissions.hrManagement.monthlySalary.read ? true : false
                }
              >
                View
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="hrManagement.monthlySalary.create"
                onChange={handleCheck}
                checked={
                  permissions.hrManagement.monthlySalary.create ? true : false
                }
              >
                Add
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="hrManagement.monthlySalary.update"
                onChange={handleCheck}
                checked={
                  permissions.hrManagement.monthlySalary.update ? true : false
                }
              >
                Edit
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="hrManagement.monthlySalary.delete"
                onChange={handleCheck}
                checked={
                  permissions.hrManagement.monthlySalary.delete ? true : false
                }
              >
                Delete
              </Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
      </>
      <Divider />
      <>
        <Checkbox
          value="account"
          onChange={handleCheck}
          checked={permissions.account.active ? true : false}
        >
          Account
        </Checkbox>
        <Checkbox.Group className="add-userType-form-crudGroup">
          <Row>
            <Col span={8}>
              <Checkbox
                value="account.journal"
                onChange={handleCheck}
                checked={permissions.account.journal.active ? true : false}
              >
                Journal
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="account.journal.read"
                onChange={handleCheck}
                checked={permissions.account.journal.read ? true : false}
              >
                View
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="account.journal.create"
                onChange={handleCheck}
                checked={permissions.account.journal.create ? true : false}
              >
                Add
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="account.journal.update"
                onChange={handleCheck}
                checked={permissions.account.journal.update ? true : false}
              >
                Edit
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="account.journal.delete"
                onChange={handleCheck}
                checked={permissions.account.journal.delete ? true : false}
              >
                Delete
              </Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
        <Checkbox.Group className="add-userType-form-crudGroup">
          <Row>
            <Col span={8}>
              <Checkbox
                value="account.accountHead"
                onChange={handleCheck}
                checked={permissions.account.accountHead.active ? true : false}
              >
                Account Head
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="account.accountHead.read"
                onChange={handleCheck}
                checked={permissions.account.accountHead.read ? true : false}
              >
                View
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="account.accountHead.create"
                onChange={handleCheck}
                checked={permissions.account.accountHead.create ? true : false}
              >
                Add
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="account.accountHead.update"
                onChange={handleCheck}
                checked={permissions.account.accountHead.update ? true : false}
              >
                Edit
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="account.accountHead.delete"
                onChange={handleCheck}
                checked={permissions.account.accountHead.delete ? true : false}
              >
                Delete
              </Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
        <Checkbox.Group className="add-userType-form-crudGroup">
          <Row>
            <Col span={8}>
              <Checkbox
                value="account.subHead"
                onChange={handleCheck}
                checked={permissions.account.subHead.active ? true : false}
              >
                Sub Head
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="account.subHead.read"
                onChange={handleCheck}
                checked={permissions.account.subHead.read ? true : false}
              >
                View
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="account.subHead.create"
                onChange={handleCheck}
                checked={permissions.account.subHead.create ? true : false}
              >
                Add
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="account.subHead.update"
                onChange={handleCheck}
                checked={permissions.account.subHead.update ? true : false}
              >
                Edit
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="account.subHead.delete"
                onChange={handleCheck}
                checked={permissions.account.subHead.delete ? true : false}
              >
                Delete
              </Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
        <Checkbox.Group className="add-userType-form-crudGroup">
          <Row>
            <Col span={8}>
              <Checkbox
                value="account.bankSetup"
                onChange={handleCheck}
                checked={permissions.account.bankSetup.active ? true : false}
              >
                Bank Setup
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="account.bankSetup.read"
                onChange={handleCheck}
                checked={permissions.account.bankSetup.read ? true : false}
              >
                View
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="account.bankSetup.create"
                onChange={handleCheck}
                checked={permissions.account.bankSetup.create ? true : false}
              >
                Add
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="account.bankSetup.update"
                onChange={handleCheck}
                checked={permissions.account.bankSetup.update ? true : false}
              >
                Edit
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="account.bankSetup.delete"
                onChange={handleCheck}
                checked={permissions.account.bankSetup.delete ? true : false}
              >
                Delete
              </Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
        <Checkbox.Group className="add-userType-form-crudGroup">
          <Row>
            <Col span={8}>
              <Checkbox
                value="account.expense"
                onChange={handleCheck}
                checked={permissions.account.expense.active ? true : false}
              >
                Expense
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="account.expense.read"
                onChange={handleCheck}
                checked={permissions.account.expense.read ? true : false}
              >
                View
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="account.expense.create"
                onChange={handleCheck}
                checked={permissions.account.expense.create ? true : false}
              >
                Add
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="account.expense.update"
                onChange={handleCheck}
                checked={permissions.account.expense.update ? true : false}
              >
                Edit
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="account.expense.delete"
                onChange={handleCheck}
                checked={permissions.account.expense.delete ? true : false}
              >
                Delete
              </Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
        <Checkbox.Group className="add-userType-form-crudGroup">
          <Row>
            <Col span={8}>
              <Checkbox
                value="account.otherIncome"
                onChange={handleCheck}
                checked={permissions.account.otherIncome.active ? true : false}
              >
                Others Income
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="account.otherIncome.read"
                onChange={handleCheck}
                checked={permissions.account.otherIncome.read ? true : false}
              >
                View
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="account.otherIncome.create"
                onChange={handleCheck}
                checked={permissions.account.otherIncome.create ? true : false}
              >
                Add
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="account.otherIncome.update"
                onChange={handleCheck}
                checked={permissions.account.otherIncome.update ? true : false}
              >
                Edit
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="account.otherIncome.delete"
                onChange={handleCheck}
                checked={permissions.account.otherIncome.delete ? true : false}
              >
                Delete
              </Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
        <Checkbox.Group className="add-userType-form-crudGroup">
          <Row>
            <Col span={8}>
              <Checkbox
                value="account.bankDeposit"
                onChange={handleCheck}
                checked={permissions.account.bankDeposit.active ? true : false}
              >
                Bank Deposit
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="account.bankDeposit.read"
                onChange={handleCheck}
                checked={permissions.account.bankDeposit.read ? true : false}
              >
                View
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="account.bankDeposit.create"
                onChange={handleCheck}
                checked={permissions.account.bankDeposit.create ? true : false}
              >
                Add
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="account.bankDeposit.update"
                onChange={handleCheck}
                checked={permissions.account.bankDeposit.update ? true : false}
              >
                Edit
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="account.bankDeposit.delete"
                onChange={handleCheck}
                checked={permissions.account.bankDeposit.delete ? true : false}
              >
                Delete
              </Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
        <Checkbox.Group className="add-userType-form-crudGroup">
          <Row>
            <Col span={8}>
              <Checkbox
                value="account.bankWithdraw"
                onChange={handleCheck}
                checked={permissions.account.bankWithdraw.active ? true : false}
              >
                Bank Withdraw
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="account.bankWithdraw.read"
                onChange={handleCheck}
                checked={permissions.account.bankWithdraw.read ? true : false}
              >
                View
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="account.bankWithdraw.create"
                onChange={handleCheck}
                checked={permissions.account.bankWithdraw.create ? true : false}
              >
                Add
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="account.bankWithdraw.update"
                onChange={handleCheck}
                checked={permissions.account.bankWithdraw.update ? true : false}
              >
                Edit
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="account.bankWithdraw.delete"
                onChange={handleCheck}
                checked={permissions.account.bankWithdraw.delete ? true : false}
              >
                Delete
              </Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
        <Checkbox.Group className="add-userType-form-crudGroup">
          <Row>
            <Col span={8}>
              <Checkbox
                value="account.bankTransfer"
                onChange={handleCheck}
                checked={permissions.account.bankTransfer.active ? true : false}
              >
                Bank Transfer
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="account.bankTransfer.read"
                onChange={handleCheck}
                checked={permissions.account.bankTransfer.read ? true : false}
              >
                View
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="account.bankTransfer.create"
                onChange={handleCheck}
                checked={permissions.account.bankTransfer.create ? true : false}
              >
                Add
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="account.bankTransfer.update"
                onChange={handleCheck}
                checked={permissions.account.bankTransfer.update ? true : false}
              >
                Edit
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="account.bankTransfer.delete"
                onChange={handleCheck}
                checked={permissions.account.bankTransfer.delete ? true : false}
              >
                Delete
              </Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
      </>
      <Divider />
      <>
        <Checkbox.Group className="add-userType-form-crudGroup_single">
          <Row>
            <Col span={8}>
              <Checkbox
                value="companySetup"
                onChange={handleCheck}
                checked={permissions.companySetup.active ? true : false}
              >
                Company Setup
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="companySetup.read"
                onChange={handleCheck}
                checked={permissions.companySetup.read ? true : false}
              >
                View
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="companySetup.create"
                onChange={handleCheck}
                checked={permissions.companySetup.create ? true : false}
              >
                Add
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="companySetup.update"
                onChange={handleCheck}
                checked={permissions.companySetup.update ? true : false}
              >
                Edit
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox
                value="companySetup.delete"
                onChange={handleCheck}
                checked={permissions.companySetup.delete ? true : false}
              >
                Delete
              </Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
      </>
      <Divider />
      <>
        <Checkbox
          value="report"
          onChange={handleCheck}
          checked={permissions.report.active ? true : false}
        >
          Report
        </Checkbox>
        <Checkbox.Group className="add-userType-form-crudGroup">
          <Row>
            <Col span={8} style={{ marginLeft: "20px" }}>
              <Checkbox
                style={{ marginLeft: "0" }}
                value="report.salesReport"
                onChange={handleCheck}
                checked={permissions.report.salesReport ? true : false}
              >
                Sales Report
              </Checkbox>
              <Checkbox
                style={{ marginLeft: "0" }}
                value="report.salesDetails"
                onChange={handleCheck}
                checked={permissions.report.salesDetails ? true : false}
              >
                Sales Details
              </Checkbox>
              <Checkbox
                style={{ marginLeft: "0" }}
                value="report.customerReport"
                onChange={handleCheck}
                checked={permissions.report.customerReport ? true : false}
              >
                Customer Report
              </Checkbox>
              <Checkbox
                style={{ marginLeft: "0" }}
                value="report.customerDueReport"
                onChange={handleCheck}
                checked={permissions.report.customerDueReport ? true : false}
              >
                Customer Due Report
              </Checkbox>
              <Checkbox
                style={{ marginLeft: "0" }}
                value="report.cashStatement"
                onChange={handleCheck}
                checked={permissions.report.cashStatement ? true : false}
              >
                Cash Statement
              </Checkbox>
              <Checkbox
                style={{ marginLeft: "0" }}
                value="report.bankStatement"
                onChange={handleCheck}
                checked={permissions.report.bankStatement ? true : false}
              >
                Bank Statement
              </Checkbox>
              <Checkbox
                style={{ marginLeft: "0" }}
                value="report.monthlySalarySheet"
                onChange={handleCheck}
                checked={permissions.report.monthlySalarySheet ? true : false}
              >
                Monthly Salary Sheet
              </Checkbox>
              <Checkbox
                style={{ marginLeft: "0" }}
                value="report.collectionReport"
                onChange={handleCheck}
                checked={permissions.report.collectionReport ? true : false}
              >
                Collection Report
              </Checkbox>
              <Checkbox
                style={{ marginLeft: "0" }}
                value="report.employeeReport"
                onChange={handleCheck}
                checked={permissions.report.employeeReport ? true : false}
              >
                Employee Report
              </Checkbox>
            </Col>
            <Col span={8} style={{ marginLeft: "20px" }}>
              <Checkbox
                style={{ marginLeft: "0" }}
                value="report.employeeExpense"
                onChange={handleCheck}
                checked={permissions.report.employeeExpense ? true : false}
              >
                Employee Expense
              </Checkbox>
              <Checkbox
                style={{ marginLeft: "0" }}
                value="report.customerLedger"
                onChange={handleCheck}
                checked={permissions.report.customerLedger ? true : false}
              >
                Customer Ledger
              </Checkbox>
              <Checkbox
                style={{ marginLeft: "0" }}
                value="report.expenseHead"
                onChange={handleCheck}
                checked={permissions.report.expenseHead ? true : false}
              >
                Expense Head
              </Checkbox>
              <Checkbox
                style={{ marginLeft: "0" }}
                value="report.accountLedger"
                onChange={handleCheck}
                checked={permissions.report.accountLedger ? true : false}
              >
                Account Ledger
              </Checkbox>
              <Checkbox
                style={{ marginLeft: "0" }}
                value="report.expenseReport"
                onChange={handleCheck}
                checked={permissions.report.expenseReport ? true : false}
              >
                Expense Report
              </Checkbox>
              <Checkbox
                style={{ marginLeft: "0" }}
                value="report.profileAndLossReport"
                onChange={handleCheck}
                checked={permissions.report.profileAndLossReport ? true : false}
              >
                Profit and Loss Report
              </Checkbox>
              <Checkbox
                style={{ marginLeft: "0" }}
                value="report.employeeLedger"
                onChange={handleCheck}
                checked={permissions.report.employeeLedger ? true : false}
              >
                Employee Ledger
              </Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
      </>
      <Divider />
      <>
        <Checkbox
          value="dashboard"
          onChange={handleCheck}
          checked={permissions.dashboard.active ? true : false}
        >
          Dashboard
        </Checkbox>
        <Checkbox.Group className="add-userType-form-crudGroup">
          <Row>
            <Col span={8} style={{ marginLeft: "20px" }}>
              <Checkbox
                style={{ marginLeft: "0" }}
                value="dashboard.cashStatement"
                onChange={handleCheck}
                checked={permissions.dashboard.cashStatement ? true : false}
              >
                Cash Statement
              </Checkbox>
              <Checkbox
                style={{ marginLeft: "0" }}
                value="dashboard.bankStatement"
                onChange={handleCheck}
                checked={permissions.dashboard.bankStatement ? true : false}
              >
                Bank Statement
              </Checkbox>
              <Checkbox
                style={{ marginLeft: "0" }}
                value="dashboard.dailySales"
                onChange={handleCheck}
                checked={permissions.dashboard.dailySales ? true : false}
              >
                Daily Sales
              </Checkbox>
              <Checkbox
                style={{ marginLeft: "0" }}
                value="dashboard.monthlySales"
                onChange={handleCheck}
                checked={permissions.dashboard.monthlySales ? true : false}
              >
                Monthly Sales
              </Checkbox>
              <Checkbox
                style={{ marginLeft: "0" }}
                value="dashboard.dailyPurchase"
                onChange={handleCheck}
                checked={permissions.dashboard.dailyPurchase ? true : false}
              >
                Daily Purchases
              </Checkbox>
              <Checkbox
                style={{ marginLeft: "0" }}
                value="dashboard.monthlyPurchase"
                onChange={handleCheck}
                checked={permissions.dashboard.monthlyPurchase ? true : false}
              >
                Monthly Purchases
              </Checkbox>
            </Col>
            <Col span={8} style={{ marginLeft: "20px" }}>
              <Checkbox
                style={{ marginLeft: "0" }}
                value="dashboard.dailyCollection"
                onChange={handleCheck}
                checked={permissions.dashboard.dailyCollection ? true : false}
              >
                Daily Collection
              </Checkbox>
              <Checkbox
                style={{ marginLeft: "0" }}
                value="dashboard.monthlyCollection"
                onChange={handleCheck}
                checked={permissions.dashboard.monthlyCollection ? true : false}
              >
                Monthly Collection
              </Checkbox>
              <Checkbox
                style={{ marginLeft: "0" }}
                value="dashboard.dailyPayment"
                onChange={handleCheck}
                checked={permissions.dashboard.dailyPayment ? true : false}
              >
                Monthly Payment
              </Checkbox>
              <Checkbox
                style={{ marginLeft: "0" }}
                value="dashboard.dailyExpense"
                onChange={handleCheck}
                checked={permissions.dashboard.dailyExpense ? true : false}
              >
                Daily Expense
              </Checkbox>
              <Checkbox
                style={{ marginLeft: "0" }}
                value="dashboard.monthlyExpense"
                onChange={handleCheck}
                checked={permissions.dashboard.monthlyExpense ? true : false}
              >
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

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
        <Checkbox name="hrAdmin">HR Admin</Checkbox>
        <Checkbox.Group className="add-userType-form-crudGroup">
          <Row>
            <Col span={8}>
              <Checkbox value="hrAdmin.users">Users</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox value="hrAdmin.users.read">List</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox value="hrAdmin.users.create">Add</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox value="hrAdmin.users.update">Edit</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox value="hrAdmin.users.delete">Delete</Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
        <Checkbox.Group className="add-userType-form-crudGroup">
          <Row>
            <Col span={8}>
              <Checkbox value="A">User Type</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox value="B">List</Checkbox>
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
        <Checkbox>Contact</Checkbox>
        <Checkbox.Group className="add-userType-form-crudGroup">
          <Row>
            <Col span={8}>
              <Checkbox value="A">Customer</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox value="B">List</Checkbox>
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
              <Checkbox value="A">Suppliers</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox value="B">List</Checkbox>
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
        <Checkbox>Medicine</Checkbox>
        <Checkbox.Group className="add-userType-form-crudGroup">
          <Row>
            <Col span={8}>
              <Checkbox value="A">Medicine List</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox value="B">List</Checkbox>
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
        <Checkbox>Purchases</Checkbox>
        <Checkbox.Group className="add-userType-form-crudGroup">
          <Row>
            <Col span={8}>
              <Checkbox value="A">Purchases List</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox value="B">List</Checkbox>
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
        <Checkbox>Sales</Checkbox>
        <Checkbox.Group className="add-userType-form-crudGroup">
          <Row>
            <Col span={8}>
              <Checkbox value="A">Sales List</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox value="B">List</Checkbox>
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
              <Checkbox value="A">Collection</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox value="B">List</Checkbox>
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
              <Checkbox value="A">Payment</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox value="B">List</Checkbox>
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
        <Checkbox>HR Management</Checkbox>
        <Checkbox.Group className="add-userType-form-crudGroup">
          <Row>
            <Col span={8}>
              <Checkbox value="A">Employee Type</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox value="B">List</Checkbox>
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
              <Checkbox value="A">Designation</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox value="B">List</Checkbox>
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
              <Checkbox value="A">Employee List</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox value="B">List</Checkbox>
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
              <Checkbox value="B">List</Checkbox>
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
        <Checkbox>Account</Checkbox>
        <Checkbox.Group className="add-userType-form-crudGroup">
          <Row>
            <Col span={8}>
              <Checkbox value="A">Journal</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox value="B">List</Checkbox>
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
              <Checkbox value="A">Account Head</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox value="B">List</Checkbox>
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
              <Checkbox value="A">Sub Head</Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox value="B">List</Checkbox>
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
              <Checkbox value="B">List</Checkbox>
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
              <Checkbox value="B">List</Checkbox>
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
              <Checkbox value="B">List</Checkbox>
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
              <Checkbox value="B">List</Checkbox>
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
              <Checkbox value="B">List</Checkbox>
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
              <Checkbox value="B">List</Checkbox>
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
              <Checkbox value="B">List</Checkbox>
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
              <Checkbox value="B">List</Checkbox>
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

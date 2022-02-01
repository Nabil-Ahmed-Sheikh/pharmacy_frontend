import React from "react";
import { Checkbox, Row, Col, Divider, Input, Select } from "antd";
// import "./AddUserTypeForm.css";
import { FiUser, FiMail, FiUserPlus, FiPhoneCall, FiKey } from "react-icons/fi";

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
    <div className="add-user-form">
        <Row gutter={[24, 8]}>
            <Col sm={24} md={12}>
                <div>
                    <label>
                        <h4>User Name</h4>
                    </label>
                    <Input
                        addonBefore={<FiUser />}
                        name="userName"
                        disabled
                        onChange={handleChangeUserType}
                    />
                </div>
            </Col>
            <Col sm={24} md={12}>
                <div>
                    <label>
                    <h4>Full Name</h4>
                    </label>
                    <Input
                    addonBefore={<FiUserPlus />}
                    name="fullName"
                    onChange={handleChangeUserType}
                    />
                </div>
            </Col>

            <Col sm={24} md={12}>
                <div>
                    <label>
                    <h4>Email Address</h4>
                    </label>
                    <Input
                    addonBefore={<FiMail />}
                    name="fullName"
                    onChange={handleChangeUserType}
                    />
                </div>
            </Col>
            <Col sm={24} md={12}>
                <div>
                    <label>
                    <h4>Mobile Number</h4>
                    </label>
                    <Input
                    addonBefore={<FiPhoneCall />}
                    name="fullName"
                    onChange={handleChangeUserType}
                    />
                </div>
            </Col>

            <Col sm={24} md={12}>
                <div>
                    <label>
                    <h4>Password</h4>
                    </label>
                    <Input
                    addonBefore={<FiKey />}
                    name="fullName"
                    onChange={handleChangeUserType}
                    />
                </div>
            </Col>
            <Col sm={24} md={12}>
                <div>
                    <label>
                    <h4>Confirm Password</h4>
                    </label>
                    <Input
                    addonBefore={<FiKey />}
                    name="fullName"
                    onChange={handleChangeUserType}
                    />
                </div>
            </Col>

            <Col sm={24} md={12}>
                <div>
                    <label>
                    <h4>User Type</h4>
                    </label>
                    <Select
                        style={{ width: "100%" }}
                        onChange={handleChangeStatus}
                        value={'Admin'}
                        >
                        <Option value={"SUPERADMIN"}>Super Admin</Option>
                        <Option value={"ADMIN"}>Admin</Option>
                        <Option value={"SALSEMAN"}>Salesman</Option>
                    </Select>
                </div>
            </Col>
            <Col sm={24} md={12}>
                <div>
                    <label>
                    <h4>Profile Picture</h4>
                    </label>
                    <Input
                    addonBefore={<FiUser />}
                    name="fullName"
                    onChange={handleChangeUserType}
                    />
                </div>
            </Col>

            <Col sm={24} md={12}>
                <div>
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
            </Col>

        </Row>
    </div>
  );
};

export default AddUserTypeForm;

import React, { useState } from "react";
import { useSelector } from "react-redux";
import ReactDOM from "react-dom";
import { Checkbox, Row, Col, Divider, Input, Select } from "antd";
import "./AddUserForm.css";
import {
  FiUser,
  FiMail,
  FiUserPlus,
  FiPhoneCall,
  FiKey,
  FiPlus,
} from "react-icons/fi";
import defaultImagePreview from "../../../assets/images/avatar.png";

import "antd/dist/antd.css";

const { Option } = Select;

const AddUserForm = ({
  handleChangeUserType,
  handleChangeStatus,
  handleChange,
  changeProfileImage,
  formData,
  profileImagePreview,
}) => {
  const { userTypeList } = useSelector((state) => state.getUserType);

  return (
    <div className="add-user-form">
      <Row>
        <Col sm={24} md={14}>
          <Row gutter={[24, 8]}>
            <Col sm={24} md={12}>
              <div>
                <label>
                  <h4>User Name</h4>
                </label>
                <Input
                  addonBefore={<FiUser />}
                  name="username"
                  onChange={handleChange}
                  value={formData.username}
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
                  name="name"
                  onChange={handleChange}
                  value={formData.name}
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
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
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
                  name="phoneNo"
                  onChange={handleChange}
                  value={formData.phoneNo}
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
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={formData.password}
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
                  type="password"
                  name="confirmPassword"
                  onChange={handleChange}
                  value={formData.confirmPassword}
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
                  onChange={handleChangeUserType}
                  value={formData.userType}
                >
                  {userTypeList?.length > 0 &&
                    userTypeList.map((userType) => {
                      return (
                        <Option key={userType._id} value={userType._id}>
                          {userType.name}
                        </Option>
                      );
                    })}
                </Select>
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
            <Col sm={24} md={12}>
              <label style={{ display: "flex", flexDirection: "column" }}>
                Select Campaign Image
                <label className="image-btn">
                  <div>
                    <FiPlus />
                  </div>
                  <input
                    id="profile-file-input"
                    type="file"
                    style={{ display: "none" }}
                    onChange={changeProfileImage}
                  />
                </label>
              </label>
            </Col>
          </Row>
        </Col>
        <Col sm={24} md={10}>
          <img
            className="add-user-form-image-preview"
            src={
              profileImagePreview ? profileImagePreview : defaultImagePreview
            }
          />
        </Col>
      </Row>
    </div>
  );
};

export default AddUserForm;

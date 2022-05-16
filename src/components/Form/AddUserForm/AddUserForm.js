import React from "react";
import { useSelector } from "react-redux";
import { Checkbox, Row, Col, Divider, Input, Select } from "antd";
import "./AddUserForm.css";
import {
  FiUser,
  FiMail,
  FiUserPlus,
  FiPhoneCall,
  FiKey,
  FiUpload,
} from "react-icons/fi";
import defaultImagePreview from "../../../assets/images/avatar.png";

import "antd/dist/antd.css";

let { REACT_APP_API_DOMAIN } = process.env;
if (process.env.NODE_ENV === "development") {
  REACT_APP_API_DOMAIN = "http://localhost:5000";
}

const { Option } = Select;

const AddUserForm = ({
  handleChangeUserType,
  handleChangeStatus,
  handleChange,
  changeProfileImage,
  formData,
  profileImagePreview,
  handleChangeStore,
}) => {
  const { userTypeList } = useSelector((state) => state.getUserType);
  const { loading: listStoreLoading, stores } = useSelector(
    (state) => state.listStore
  );

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
                  disabled={formData.edit ? true : false}
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
                  <h4>Store</h4>
                </label>
                <Select
                  style={{ width: "100%" }}
                  onChange={handleChangeStore}
                  value={formData.store}
                >
                  {stores?.map((store) => (
                    <Option key={store._id} value={store._id}>
                      {store.name}
                    </Option>
                  ))}
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
                <h4>Upload Profile Image</h4>
                <label className="image-btn">
                  <div>
                    <FiUpload />
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
              formData.profilePhoto
                ? REACT_APP_API_DOMAIN + "/uploads/" + formData.profilePhoto
                : profileImagePreview
                ? profileImagePreview
                : defaultImagePreview
            }
          />
        </Col>
      </Row>
    </div>
  );
};

export default AddUserForm;

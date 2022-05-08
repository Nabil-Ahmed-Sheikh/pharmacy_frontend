import React from "react";
import { Input, Col, Row, Select } from "antd";

const { Option } = Select;

const AddStoreForm = ({ handleChange, handleChangeStatus, formData }) => {
  return (
    <div>
      <Col sm={24}>
        <div>
          <label>
            <h4>
              Store Name <span style={{ color: "red" }}>*</span>
            </h4>
          </label>
          <Input
            // addonBefore={<FiUserPlus />}
            name="name"
            onChange={handleChange}
            value={formData.name}
          />
        </div>
      </Col>
      <Col sm={24}>
        <div>
          <label>
            <h4>Address</h4>
          </label>
          <Input
            // addonBefore={<FiUserPlus />}
            name="address"
            onChange={handleChange}
            value={formData.address}
          />
        </div>
      </Col>
      <Row gutter={[8, 8]}>
        <Col sm={24} md={12}>
          <div>
            <label>
              <h4>Mobile Number</h4>
            </label>
            <Input
              //   addonBefore={<FiPhoneCall />}
              name="phoneNo"
              onChange={handleChange}
              value={formData.phoneNo}
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

export default AddStoreForm;

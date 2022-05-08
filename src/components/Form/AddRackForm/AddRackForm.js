import React from "react";
import { Input, Col, Select } from "antd";
const { Option } = Select;

const AddRackForm = ({
  handleChange,
  handleChangeStatus,
  formData,
  setFormData,
}) => {
  return (
    <div>
      <Col sm={24}>
        <div>
          <label>
            <h4>
              Rack Name <span style={{ color: "red" }}>*</span>
            </h4>
          </label>
          <Input
            // addonBefore={<FiUserPlus />}
            name="rackName"
            onChange={handleChange}
            value={formData.rackName}
          />
        </div>
      </Col>

      <Col sm={24}>
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
    </div>
  );
};

export default AddRackForm;

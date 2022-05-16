import React from "react";
import { Input, Col, Select } from "antd";
const { Option } = Select;

const AddMedicineFormForm = ({
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
              Medicine Form Name <span style={{ color: "red" }}>*</span>
            </h4>
          </label>
          <Input
            // addonBefore={<FiUserPlus />}
            name="medicineFormName"
            onChange={handleChange}
            value={formData.medicineFormName}
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

export default AddMedicineFormForm;

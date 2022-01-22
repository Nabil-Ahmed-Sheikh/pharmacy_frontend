import React from "react";
import { Row, Col, Input, Select, Button } from "antd";
import { FiPlusSquare } from "react-icons/fi";

const { Option } = Select;
const { TextArea } = Input;

const menuList = [
  {
    name: "Beximco",
  },
  {
    name: "Acme",
  },
];

function onChange(value) {
  console.log(`selected ${value}`);
}

function onSearch(val) {
  console.log("search:", val);
}

const AddMedicineForm = () => {
  return (
    <div className="addMedicineForm">
      <div className="addMedicineFormHeader"></div>
      <Row>
        <Col md={8}>
          <div>
            <label>Medicine Name</label>
            <Input addonBefore={<FiPlusSquare />} />
          </div>
          <div>
            <label>Purchases Prices</label>
            <Input addonBefore={<FiPlusSquare />} />
          </div>
          <div>
            <label>Medicine Name</label>
            <br />
            <div>
              <Select
                showSearch
                placeholder="Company Name"
                optionFilterProp="children"
                style={{ width: "100%" }}
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                {menuList.map((menu) => (
                  <Option>{menu.name}</Option>
                ))}
              </Select>
            </div>
          </div>
          <div>
            <label>Indication</label>
            <TextArea addonBefore={<FiPlusSquare />} rows={4} />
          </div>
        </Col>
        <Col md={8}>
          <div>
            <label>Medicine Name</label>
            <Input addonBefore={<FiPlusSquare />} />
          </div>
          <div>
            <label>Purchases Prices</label>
            <Input addonBefore={<FiPlusSquare />} />
          </div>
          <div>
            <label>Medicine Name</label>
            <br />
            <div>
              <Select
                showSearch
                placeholder="Company Name"
                optionFilterProp="children"
                style={{ width: "100%" }}
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                {menuList.map((menu) => (
                  <Option>{menu.name}</Option>
                ))}
              </Select>
            </div>
          </div>
          <div>
            <label>Indication</label>
            <TextArea addonBefore={<FiPlusSquare />} rows={4} />
          </div>
        </Col>
        <Col md={8}>
          <div>
            <label>Medicine Name</label>
            <Input addonBefore={<FiPlusSquare />} />
          </div>
          <div>
            <label>Purchases Prices</label>
            <Input addonBefore={<FiPlusSquare />} />
          </div>
          <div>
            <label>Medicine Name</label>
            <br />
            <div>
              <Select
                showSearch
                placeholder="Company Name"
                optionFilterProp="children"
                style={{ width: "100%" }}
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                {menuList.map((menu) => (
                  <Option>{menu.name}</Option>
                ))}
              </Select>
            </div>
          </div>
          <div>
            <label>Indication</label>
            <TextArea addonBefore={<FiPlusSquare />} rows={4} />
          </div>
        </Col>
      </Row>
      <div style={{ textAlign: "center" }}>
        <Button type="primary">Submit</Button>
        <Button type="primary" danger>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default AddMedicineForm;

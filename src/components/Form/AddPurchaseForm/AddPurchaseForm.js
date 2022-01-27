import React, { useState } from "react";
import {
  Card,
  Input,
  Button,
  Select,
  Row,
  Col,
  Tooltip,
  DatePicker,
  Table,
} from "antd";
import {
  FaAddressCard,
  FaRegMoneyBillAlt,
  FaHandshake,
  FaRegPlusSquare,
} from "react-icons/fa";

const selectStyles = {
  width: "calc(100% - 32px)",
};

const formHeaderStyles = {
  backgroundColor : "#000",
  
};



const toolTipButtonStyle = {
  padding: "3.1px 1px",
};

const AddPurchasesForm = () => {
  let [formData, setFormData] = useState({
    supplierName: "",
    totalAmount: 0.0,
    payment: 0.0,
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  const handleProductNameChange = () => {
    console.log("Wording");
  };

  return (
    <div>
      <Card title="Add Purchase">
        <Row gutter={[24, 8]}>
          <Col sm={24} md={6}>
            <Input.Group compact>
              <label>
                <h4>Supplier Name</h4>
              </label>
              <br />
              <Select
                showSearch
                name="supplierName"
                onChange={handleChange}
                suffixIcon={<FaAddressCard />}
                style={selectStyles}
              ></Select>
              <Tooltip>
                <Button style={toolTipButtonStyle} icon={<FaRegPlusSquare />} />
              </Tooltip>
            </Input.Group>
            <br />
            <Input.Group compact>
              <label>
                <h4>Total Amount</h4>
              </label>
              <Input
                type="number"
                name="totalAmount"
                onChange={handleChange}
                disabled
                value={formData.totalAmount}
                addonBefore={<FaRegMoneyBillAlt />}
              />
            </Input.Group>
            <br />
            <Input.Group compact>
              <label>
                <h4>Payment</h4>
              </label>
              <Input
                type="number"
                name="payment"
                onChange={handleChange}
                value={formData.payment}
                addonBefore={<FaHandshake />}
              />
            </Input.Group>
          </Col>
          <Col sm={24} md={6}>
            <Input.Group compact>
              <label>
                <h4>Previous Dues</h4>
              </label>
              <Input
                type="number"
                name="previousDues"
                onChange={handleChange}
                disabled
                value={formData.previousDues}
                addonBefore={<FaRegMoneyBillAlt />}
              />
            </Input.Group>
            <br />
            <Input.Group compact>
              <label>
                <h4>Discount</h4>
              </label>
              <Input
                type="number"
                name="discount"
                onChange={handleChange}
                value={formData.discount}
                addonBefore={<FaRegMoneyBillAlt />}
              />
            </Input.Group>
            <br />
            <Input.Group compact>
              <label>
                <h4>Dues</h4>
              </label>
              <Input
                type="number"
                name="dues"
                onChange={handleChange}
                disabled
                value={formData.dues}
                addonBefore={<FaRegMoneyBillAlt />}
              />
            </Input.Group>
          </Col>
          <Col sm={24} md={6}>
            <Input.Group compact>
              <label>
                <h4>Invoice Number</h4>
              </label>
              <Input
                type="text"
                name="invoiceNumber"
                onChange={handleChange}
                disabled
                value={formData.invoiceNumber}
                addonBefore={<FaRegMoneyBillAlt />}
              />
            </Input.Group>
            <br />
            <Input.Group compact>
              <label>
                <h4>Shipping Charge</h4>
              </label>
              <Input
                type="number"
                name="shippingCharge"
                onChange={handleChange}
                value={formData.shippingCharge}
                addonBefore={<FaRegMoneyBillAlt />}
              />
            </Input.Group>
          </Col>
          <Col sm={24} md={6}>
            <Input.Group compact>
              <label>
                <h4>Date</h4>
              </label>
              <DatePicker
                name="date"
                onChange={handleChange}
                value={formData.date}
                style={{ width: "100%" }}
              />
            </Input.Group>
            <br />
            <Input.Group compact>
              <label>
                <h4>Payment Method</h4>
              </label>
              <br />
              <Select
                showSearch
                name="paymentMethod"
                onChange={handleChange}
                suffixIcon={<FaAddressCard />}
                style={{ width: "100%" }}
              ></Select>
            </Input.Group>
          </Col>
        </Row>
        <br />
        <Row gutter={[24, 8]}>
          <Col xs={24}>
            <Input.Group compact>
              <label>
                <h4>Product Name</h4>
              </label>
              <Select
                showSearch
                name="productName"
                onChange={handleProductNameChange}
                style={{ width: "100%" }}
              ></Select>
            </Input.Group>
          </Col>
        </Row>
        <Row gutter={[24, 8]}>
          <Col>
            <Table></Table>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default AddPurchasesForm;

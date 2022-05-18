import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { debounce } from "lodash";
import { Card, Input, Select, Row, Col, DatePicker } from "antd";
import { FaAddressCard, FaRegMoneyBillAlt } from "react-icons/fa";

import * as contactActions from "../../../redux/actions/contactActions";

const { Option } = Select;

const AddSalesForm = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector((state) => state.listActiveContact);

  let [formData, setFormData] = useState({
    phoneNo: "",
    totalAmount: 0.0,
    discount: 0.0,
    less: 0.0,
    cashReceived: 0.0,
    dueAmount: 0.0,
    refundAmount: 0.0,
  });

  const callCustomerList = async (value) => {
    await dispatch(
      contactActions.getActiveContacts({
        type: "customer",
        page: 1,
        limit: 10,
        searchTerm: value,
      })
    );
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCustomerNameChange = (value) => {
    // setFormData((prev) => ({ ...prev, customerName: value }));
    let customer = contacts?.filter((contact) => contact._id === value)[0];
    setFormData((prev) => ({
      ...prev,
      phoneNo: customer?.phoneNo,
    }));
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  const handleProductNameChange = () => {
    console.log("Wording");
  };

  return (
    <div>
      <Card>
        <Row gutter={[24, 8]}>
          <Col sm={24} md={6}>
            <Input.Group compact>
              <label>
                <h4>Customer Name</h4>
              </label>
              <Select
                showSearch
                placeholder="Customer Name"
                optionFilterProp="children"
                style={{ width: "100%" }}
                onChange={handleCustomerNameChange}
                onSearch={debounce(callCustomerList, 500)}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
                value={formData.generic}
              >
                {contacts?.map((contact) => (
                  <Option key={contact._id} value={contact._id}>
                    {contact.contactName}
                  </Option>
                ))}
              </Select>
            </Input.Group>
            <br />
          </Col>
          <Col sm={24} md={6}>
            <Input.Group compact>
              <label>
                <h4>Mobile Number</h4>
              </label>
              <Input
                size="default"
                placeholder="Mobile Number"
                onChange={handleChange}
                value={formData.phoneNo}
                addonBefore={<FaRegMoneyBillAlt />}
              />
            </Input.Group>
            <br />
          </Col>
          <Col sm={24} md={6}>
            <Input.Group compact>
              <label>
                <h4>Previous Dues</h4>
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
          </Col>
          <Col sm={18} md={18}>
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
            <br />
            <table className="pharma-table">
              <thead>
                <tr>
                  <th>SL</th>
                  <th>Medi.Name</th>
                  <th>Quantity</th>
                  <th>Unit Price</th>
                  <th>Discount</th>
                  <th>Sub Total</th>
                  <th>Cost Price</th>
                  <th style={{ textAlign: "center" }}>Action</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </Col>
          <Col sm={24} md={6}>
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
                <h4>Less</h4>
              </label>
              <Input
                type="number"
                name="less"
                onChange={handleChange}
                value={formData.less}
                addonBefore={<FaRegMoneyBillAlt />}
              />
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
                <h4>Cash Received*</h4>
              </label>
              <br />
              <Input
                type="number"
                name="cashReceived"
                onChange={handleChange}
                value={formData.cashReceived}
                addonBefore={<FaRegMoneyBillAlt />}
              />
            </Input.Group>
            <br />
            <Input.Group compact>
              <label>
                <h4>Due Amount</h4>
              </label>
              <br />
              <Input
                type="number"
                name="dueAmount"
                onChange={handleChange}
                disabled
                value={formData.dueAmount}
                addonBefore={<FaRegMoneyBillAlt />}
              />
            </Input.Group>
            <br />
            <Input.Group compact>
              <label>
                <h4>Change/Refund Amount</h4>
              </label>
              <br />
              <Input
                type="number"
                name="refundAmount"
                onChange={handleChange}
                disabled
                value={formData.refundAmount}
                addonBefore={<FaRegMoneyBillAlt />}
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
            <br />
          </Col>
        </Row>
        <br />
      </Card>
    </div>
  );
};

export default AddSalesForm;

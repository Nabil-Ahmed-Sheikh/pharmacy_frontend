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
import { FiUser } from "react-icons/fi";
const selectStyles = {
    width: "calc(100% - 32px)",
};

const formHeaderStyles = {
    backgroundColor: "#000",

};



const toolTipButtonStyle = {
    padding: "3.1px 1px",
};

const AddPaymentForm = () => {
    let [formData, setFormData] = useState({
        customerName: "",
        totalAmount: 0.00,
        discount: 0.0,
        less: 0.0,
        totalDues: 0.0,
        todaypaid: 0.0,
        finalDues: 0.0,
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
            <Card>
                <Row gutter={[24, 8]}>
                    <Col sm={24} md={8}>
                        <Input.Group compact>
                            <label>
                                <h4>Company Name</h4>
                            </label>
                            <Input
                                size="default"
                                placeholder="Company Name"
                                onChange={handleChange}
                                value={formData.companyname}
                                addonBefore={<FaRegMoneyBillAlt />}
                            />
                        </Input.Group>
                        <br />
                    </Col>
                    <Col sm={24} md={8}>
                        <Input.Group compact>
                            <label>
                                <h4>Address</h4>
                            </label>
                            <Input
                                type="number"
                                name="address"
                                onChange={handleChange}
                                disabled
                                value={formData.address}
                                addonBefore={<FaRegMoneyBillAlt />}
                            />
                        </Input.Group>
                        <br />
                    </Col>
                    <Col sm={24} md={8}>
                        <Input.Group compact>
                            <label>
                                <h4>Money Receipt</h4>
                            </label>
                            <Input
                                size="default"
                                placeholder="Money Receipt"
                                onChange={handleChange}
                                value={formData.moneyreceipt}
                                addonBefore={<FaRegMoneyBillAlt />}
                            />
                        </Input.Group>
                        <br />
                    </Col>
                    <Col sm={24} md={8}>
                        <Input.Group compact>
                            <label>
                                <h4>Total Dues</h4>
                            </label>
                            <Input
                                type="number"
                                name="totalDues"
                                onChange={handleChange}
                                disabled
                                value={formData.totalDues}
                                addonBefore={<FaRegMoneyBillAlt />}
                            />
                        </Input.Group>
                        <br />
                    </Col>

                    <Col sm={24} md={8}>
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
                    <Col sm={24} md={8}>
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
                    <Col sm={24} md={8}>
                        <Input.Group compact>
                            <label>
                                <h4>Remarks</h4>
                            </label>
                            <Input
                                size="default"
                                placeholder="Remarks"
                                onChange={handleChange}
                                value={formData.remarks}
                                addonBefore={<FaRegMoneyBillAlt />}
                            />
                        </Input.Group>
                        <br />
                    </Col>
                    <Col sm={24} md={8}>
                        <Input.Group compact>
                            <label>
                                <h4>Today Paid</h4>
                            </label>
                            <Input
                                type="number"
                                name="todaypaid"
                                onChange={handleChange}
                                value={formData.todaypaid}
                                addonBefore={<FaRegMoneyBillAlt />}
                            />
                        </Input.Group>
                        <br />
                    </Col>
                    <Col sm={24} md={4}>
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
                    </Col>
                    <Col sm={24} md={4}>
                        <Input.Group compact>
                            <label>
                                <h4>Final Dues</h4>
                            </label>
                            <Input
                                type="number"
                                name="finalDues"
                                onChange={handleChange}
                                disabled
                                value={formData.finalDues}
                                addonBefore={<FaRegMoneyBillAlt />}
                            />
                        </Input.Group>
                        <br />
                    </Col>
                </Row>
                <br />
            </Card>
        </div >
    );
};

export default AddPaymentForm;

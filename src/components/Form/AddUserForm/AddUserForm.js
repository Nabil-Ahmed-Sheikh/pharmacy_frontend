import React, { useState } from "react";
import ReactDOM from 'react-dom';
import { Checkbox, Row, Col, Divider, Input, Select } from "antd";
// import "./AddUserTypeForm.css";
import { FiUser, FiMail, FiUserPlus, FiPhoneCall, FiKey } from "react-icons/fi";


import 'antd/dist/antd.css';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';

const { Option } = Select;

const AddUserTypeForm = ({
  handleChangeUserType,
  handleChangeStatus,
  formData,
  handleCheck,
  handleCheckAllPermission,
}) => {
  const { permissions } = formData;


  const [fileList, setFileList] = useState([
    
  ]);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async file => {
    let src = file.url;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

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
                <div>
                    <label>
                    <h4>Profile Picture</h4>
                    </label>
                    {/* <Input
                    addonBefore={<FiUser />}
                    name="fullName"
                    onChange={handleChangeUserType}
                    /> */}


                    <ImgCrop rotate>
                        <Upload
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            listType="picture-card"
                            fileList={fileList}
                            onChange={onChange}
                            onPreview={onPreview}
                        >
                            {fileList.length < 1 && '+ Upload'}
                        </Upload>
                    </ImgCrop>
                </div>
            </Col>

            

        </Row>
    </div>
  );
};

export default AddUserTypeForm;

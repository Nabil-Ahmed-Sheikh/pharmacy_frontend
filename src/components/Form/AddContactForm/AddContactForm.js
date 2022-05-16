import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Input, Col, Select } from "antd";
import * as storeManagementActions from "../../../redux/actions/storeManagementActions";
const { Option } = Select;

const AddContactForm = ({
  handleChange,
  handleChangeStatus,
  handleChangeStore,
  formData,
  setFormData,
}) => {
  const dispatch = useDispatch();

  const getStores = async () => {
    await dispatch(storeManagementActions.getStores());
  };

  const { user } = useSelector((state) => state.userLogin?.userInfo?.user);
  const { stores } = useSelector((state) => state.listStore);

  useEffect(() => {
    getStores();
    setFormData((prev) => ({ ...prev, store: user?.store._id }));
  }, []);

  return (
    <div>
      <Col sm={24}>
        <div>
          <label>
            <h4>Store</h4>
          </label>
          <Select
            style={{ width: "100%" }}
            onChange={handleChangeStore}
            value={formData.store}
            disabled={user.type === "ADMIN" ? false : true}
          >
            {stores?.map((store) => (
              <Option key={store._id} value={store._id}>
                {store.name}
              </Option>
            ))}
          </Select>
        </div>
      </Col>
      <Col sm={24}>
        <div>
          <label>
            <h4>
              Contact Name <span style={{ color: "red" }}>*</span>
            </h4>
          </label>
          <Input
            // addonBefore={<FiUserPlus />}
            name="contactName"
            onChange={handleChange}
            value={formData.contactName}
          />
        </div>
      </Col>
      <Col sm={24}>
        <div>
          <label>
            <h4>Company Name</h4>
          </label>
          <Input
            // addonBefore={<FiUserPlus />}
            name="companyName"
            onChange={handleChange}
            value={formData.companyName}
          />
        </div>
      </Col>
      <Col sm={24}>
        <div>
          <label>
            <h4>Phone Number</h4>
          </label>
          <Input
            // addonBefore={<FiUserPlus />}
            name="phoneNo"
            onChange={handleChange}
            value={formData.phoneNo}
          />
        </div>
      </Col>
      <Col sm={24}>
        <div>
          <label>
            <h4>Email</h4>
          </label>
          <Input
            // addonBefore={<FiUserPlus />}
            name="email"
            onChange={handleChange}
            value={formData.email}
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

      <Col sm={24}>
        <div>
          <label>
            <h4>Opening Balance</h4>
          </label>
          <Input
            //   addonBefore={<FiPhoneCall />}
            type={"number"}
            name="openingBalance"
            onChange={handleChange}
            value={formData.openingBalance}
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

export default AddContactForm;

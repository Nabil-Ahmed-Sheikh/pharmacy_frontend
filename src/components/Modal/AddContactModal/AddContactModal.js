import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Spin, Button } from "antd";
import "./AddContactModal.css";
import AddContactForm from "../../Form/AddContactForm/AddContactForm";
import * as contactActions from "../../../redux/actions/contactActions";

const AddContactModal = ({
  type,
  toggle,
  setToggle,
  visible,
  setVisible,
  initialFormData,
  formData,
  setFormData,
}) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userLogin?.userInfo?.user);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleChangeStatus = (value) => {
    setFormData((prev) => ({ ...prev, status: value }));
  };

  const handleChangeStore = (value) => {
    setFormData((prev) => ({ ...prev, store: value }));
  };

  const handleAddContact = async (e) => {
    e.preventDefault();
    await dispatch(contactActions.addContact(formData));
    closeModal();
    setToggle(!toggle);
  };

  const handleEditContact = async (e) => {
    e.preventDefault();
    await dispatch(contactActions.editContact(formData));
    closeModal();
    setToggle(!toggle);
  };

  const closeModal = () => {
    setFormData({ ...initialFormData, store: user?.store._id });
    setVisible(false);
  };
  const { loading: addLoading } = useSelector((state) => state.addStore);
  const { loading: editLoading } = useSelector((state) => state.editStore);

  let Modalfooter = [];

  if (addLoading) {
    Modalfooter = [<Spin />];
  } else {
    if (formData.id) {
      Modalfooter = [
        <Button
          key="submit"
          type="primary"
          onClick={handleEditContact}
          style={{ width: "76px" }}
        >
          {editLoading ? <Spin /> : "Submit"}
        </Button>,
      ];
    } else {
      Modalfooter = [
        <Button key="back" onClick={closeModal}>
          Cancel
        </Button>,
        <Button
          key="submit"
          type="primary"
          onClick={handleAddContact}
          style={{ width: "76px" }}
        >
          {addLoading ? <Spin /> : "Submit"}
        </Button>,
      ];
    }
  }

  return (
    <Modal
      visible={visible}
      onCancel={closeModal}
      title={type === "customer" ? "Add Customer" : "Add Supplier"}
      footer={Modalfooter}
    >
      <AddContactForm
        type={type}
        handleChange={handleChange}
        handleChangeStatus={handleChangeStatus}
        formData={formData}
        setFormData={setFormData}
        handleChangeStore={handleChangeStore}
      />
    </Modal>
  );
};

export default AddContactModal;

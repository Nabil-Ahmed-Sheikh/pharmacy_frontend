import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Spin, Button } from "antd";
import "./AddStoreModal.css";
import AddStoreForm from "../../Form/AddStoreForm/AddStoreForm";
import * as storeManagementActions from "../../../redux/actions/storeManagementActions";

const AddStoreModal = ({
  toggle,
  setToggle,
  visible,
  setVisible,
  initialFormData,
  formData,
  setFormData,
}) => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleChangeStatus = (value) => {
    setFormData((prev) => ({ ...prev, status: value }));
  };

  const handleAddStore = async (e) => {
    e.preventDefault();
    await dispatch(storeManagementActions.addStore(formData));
    closeModal();
    setToggle(!toggle);
  };

  const handleEditStore = async (e) => {
    e.preventDefault();
    await dispatch(storeManagementActions.editStore(formData));
    closeModal();
    setToggle(!toggle);
  };

  const closeModal = () => {
    setFormData({ ...initialFormData });
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
          onClick={handleEditStore}
          style={{ width: "76px" }}
          disabled={formData.name ? false : true}
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
          onClick={handleAddStore}
          style={{ width: "76px" }}
          disabled={formData.name ? false : true}
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
      title={"Add Store"}
      footer={Modalfooter}
    >
      <AddStoreForm
        handleChange={handleChange}
        handleChangeStatus={handleChangeStatus}
        formData={formData}
      />
    </Modal>
  );
};

export default AddStoreModal;

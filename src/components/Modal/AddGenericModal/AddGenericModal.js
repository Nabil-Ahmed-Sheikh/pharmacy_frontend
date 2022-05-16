import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Spin, Button } from "antd";
import "./AddGenericModal.css";
import AddGenericForm from "../../Form/AddGenericForm/AddGenericForm";
import * as genericActions from "../../../redux/actions/genericActions";

const AddGenericModal = ({
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

  const handleAddGeneric = async (e) => {
    e.preventDefault();
    await dispatch(genericActions.addGeneric(formData));
    closeModal();
    setToggle(!toggle);
  };

  const handleEditGeneric = async (e) => {
    e.preventDefault();
    await dispatch(genericActions.editGeneric(formData));
    closeModal();
    setToggle(!toggle);
  };

  const closeModal = () => {
    setFormData({ ...initialFormData });
    setVisible(false);
  };
  const { loading: addLoading } = useSelector((state) => state.addGeneric);
  const { loading: editLoading } = useSelector((state) => state.editGeneric);

  let Modalfooter = [];

  if (addLoading) {
    Modalfooter = [<Spin />];
  } else {
    if (formData.genericId) {
      Modalfooter = [
        <Button
          key="submit"
          type="primary"
          onClick={handleEditGeneric}
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
          onClick={handleAddGeneric}
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
      title={formData.genericId ? "Edit Generic" : "Add Generic"}
      footer={Modalfooter}
    >
      <AddGenericForm
        handleChange={handleChange}
        handleChangeStatus={handleChangeStatus}
        formData={formData}
        setFormData={setFormData}
      />
    </Modal>
  );
};

export default AddGenericModal;

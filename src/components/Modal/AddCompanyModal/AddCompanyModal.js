import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Spin, Button } from "antd";
import AddCompanyForm from "../../Form/AddCompanyForm/AddCompanyForm";
import * as companyActions from "../../../redux/actions/companyActions";

const AddCompanyModal = ({
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

  const handleAddCompany = async (e) => {
    e.preventDefault();
    await dispatch(companyActions.addCompany(formData));
    closeModal();
    setToggle(!toggle);
  };

  const handleEditCompany = async (e) => {
    e.preventDefault();
    await dispatch(companyActions.editCompany(formData));
    closeModal();
    setToggle(!toggle);
  };

  const closeModal = () => {
    setFormData({ ...initialFormData });
    setVisible(false);
  };
  const { loading: addLoading } = useSelector((state) => state.addCompany);
  const { loading: editLoading } = useSelector((state) => state.editCompany);

  let Modalfooter = [];

  if (addLoading) {
    Modalfooter = [<Spin />];
  } else {
    if (formData.companyId) {
      Modalfooter = [
        <Button
          key="submit"
          type="primary"
          onClick={handleEditCompany}
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
          onClick={handleAddCompany}
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
      title={formData.companyId ? "Edit Company" : "Add Company"}
      footer={Modalfooter}
    >
      <AddCompanyForm
        handleChange={handleChange}
        handleChangeStatus={handleChangeStatus}
        formData={formData}
        setFormData={setFormData}
      />
    </Modal>
  );
};

export default AddCompanyModal;

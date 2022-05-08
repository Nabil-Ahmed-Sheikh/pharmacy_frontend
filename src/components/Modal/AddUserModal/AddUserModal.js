import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Button, Spin } from "antd";
import AddUserForm from "../../Form/AddUserForm/AddUserForm";
import * as hrAdminActions from "../../../redux/actions/hrAdminActions";
import * as storeManagementActions from "../../../redux/actions/storeManagementActions";
import "./AddUserModal.css";

const AddUserModal = ({
  isVisible,
  setIsVisible,
  loading,
  message,
  toggler,
  formData,
  setFormData,
  closeModal,
  setToggler,
}) => {
  const dispatch = useDispatch();

  const [profileImage, setProfileImage] = useState(null);
  const [profileImagePreview, setProfileImagePreview] = useState(null);

  const { loading: addLoading, message: addMessage } = useSelector(
    (state) => state.addUser
  );

  const handleChangeUserType = (value) => {
    setFormData((prev) => ({ ...prev, userType: value }));
  };

  const handleChangeStatus = (value) => {
    setFormData((prev) => ({ ...prev, status: value }));
  };

  const handleChangeStore = (value) => {
    setFormData((prev) => ({ ...prev, store: value }));
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    let obj = new FormData();
    obj.append("name", formData.name);
    obj.append("username", formData.username);
    obj.append("email", formData.email);
    obj.append("phoneNo", formData.phoneNo);
    obj.append("password", formData.password);
    obj.append("status", formData.status);
    obj.append("userType", formData.userType);
    obj.append("store", formData.store);
    obj.append("image", profileImage);

    await dispatch(hrAdminActions.addUser(obj));
    if (addMessage === "User created") {
      setFormData({
        name: "",
        username: "",
        email: "",
        phoneNo: "",
        password: "",
        userType: "",
        store: "",
        status: "",
      });
      setProfileImage(null);
      setProfileImagePreview(null);
      setIsVisible(false);
    }

    setToggler(!toggler);
  };

  const getStores = async () => {
    await dispatch(storeManagementActions.getStores());
  };

  useEffect(() => {
    getStores();
  }, []);

  const changeProfileImage = (e) => {
    setProfileImage(e.target.files[0]);
    console.log(e.target.files[0]);
    try {
      if (e.target.files[0]) {
        setProfileImagePreview(URL.createObjectURL(e.target.files[0]));
      }
    } catch (e) {
      message.error("Please upload the image again, something went wrong");
    }
  };

  let Modalfooter = [];

  if (addLoading) {
    Modalfooter = [<Spin />];
  } else {
    Modalfooter = [
      <Button key="back" onClick={closeModal}>
        Cancel
      </Button>,
      <Button
        key="submit"
        type="primary"
        onClick={handleSubmit}
        disabled={loading}
        style={{ width: "76px" }}
      >
        {loading ? <Spin /> : "Submit"}
      </Button>,
    ];
  }

  return (
    <Modal
      className="add-user-modal"
      title={"Add User"}
      onCancel={closeModal}
      visible={isVisible}
      footer={Modalfooter}
    >
      <AddUserForm
        handleChangeUserType={handleChangeUserType}
        handleChangeStatus={handleChangeStatus}
        handleChangeStore={handleChangeStore}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formData={formData}
        loading={loading}
        changeProfileImage={changeProfileImage}
        profileImagePreview={profileImagePreview}
      />
    </Modal>
  );
};

export default AddUserModal;

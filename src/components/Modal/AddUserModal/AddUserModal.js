import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Button, Spin, message } from "antd";
import AddUserForm from "../../Form/AddUserForm/AddUserForm";
import { addUser } from "../../../redux/actions/hrAdminActions";
import "./AddUserModal.css";

const AddUserModal = ({ isVisible, setIsVisible, loading, message }) => {
  const dispatch = useDispatch();
  const [fileList, setFileList] = useState([]);

  const [profileImage, setProfileImage] = useState(null);
  const [profileImagePreview, setProfileImagePreview] = useState(null);

  const {
    loading: addLoading,
    message: addMessage,
    error,
  } = useSelector((state) => state.addUser);

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    phoneNo: "",
    password: "",
    userType: "",
    status: "",
  });

  const handleChangeUserType = (value) => {
    setFormData((prev) => ({ ...prev, userType: value }));
  };

  const handleChangeStatus = (value) => {
    setFormData((prev) => ({ ...prev, status: value }));
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCancel = () => {
    setIsVisible(false);
  };

  const handleSubmit = (e) => {
    let obj = new FormData();
    obj.append("name", formData.name);
    obj.append("username", formData.username);
    obj.append("email", formData.email);
    obj.append("phoneNo", formData.phoneNo);
    obj.append("password", formData.password);
    obj.append("status", formData.status);
    obj.append("userType", formData.userType);
    obj.append("image", profileImage);

    // for (var key of obj.entries()) {
    //   console.log(key[0] + ", " + key[1]);
    // }
    dispatch(addUser(obj));
  };

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
      <Button key="back" onClick={handleCancel}>
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
      className="add_userType_modal"
      className="add-user-modal"
      title={"Add User"}
      onCancel={handleCancel}
      visible={isVisible}
      footer={Modalfooter}
    >
      <AddUserForm
        handleChangeUserType={handleChangeUserType}
        handleChangeStatus={handleChangeStatus}
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

import React, { useState, useEffect } from "react";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import AddUserTypeModal from "../../Modal/AddUserTypeModal/AddUserTypeModal";
import UserTypeList from "../../List/UserTypeList/UserTypeList";

const UserTypes = () => {
  const [isVisible, setIsVisible] = useState(false);

  const openModal = () => {
    setIsVisible(true);
  };
  const [loadToggler, setLoadToggler] = useState(false);

  return (
    <div>
      <h2>UserTypes</h2>
      <Button onClick={openModal}>Add User Type</Button>
      <AddUserTypeModal isVisible={isVisible} setIsVisible={setIsVisible} />
      <UserTypeList loadToggler={loadToggler} setLoadToggler={setLoadToggler} />
    </div>
  );
};

export default UserTypes;

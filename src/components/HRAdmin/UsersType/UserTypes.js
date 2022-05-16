import React, { useState, useEffect } from "react";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import AddUserTypeModal from "../../Modal/AddUserTypeModal/AddUserTypeModal";
import UserTypeList from "../../List/UserTypeList/UserTypeList";

const UserTypes = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [loadToggler, setLoadToggler] = useState(false);
  const openModal = () => {
    setIsVisible(true);
  };
  const [id, setId] = useState(null);

  return (
    <div>
      <h2>UserTypes</h2>
      <Button onClick={openModal}>Add User Type</Button>
      <AddUserTypeModal
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        loadToggler={loadToggler}
        setLoadToggler={setLoadToggler}
        id={id}
      />
      <UserTypeList
        loadToggler={loadToggler}
        setLoadToggler={setLoadToggler}
        setId={setId}
        setIsVisible={setIsVisible}
      />
    </div>
  );
};

export default UserTypes;

import React, { useState } from "react";
import { Button } from "antd";
import AddUserTypeModal from "../../Modal/AddUserTypeModal/AddUserTypeModal";

const UserTypes = () => {
  const [isVisible, setIsVisible] = useState(false);
  const openModal = () => {
    setIsVisible(true);
  };

  return (
    <div>
      <h2>UserTypes</h2>
      <Button onClick={openModal}>Add User Type</Button>
      <AddUserTypeModal isVisible={isVisible} setIsVisible={setIsVisible} />
    </div>
  );
};

export default UserTypes;

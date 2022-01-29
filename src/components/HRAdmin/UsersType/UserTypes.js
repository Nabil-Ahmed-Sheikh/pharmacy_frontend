import React, { useState, useEffect } from "react";
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { getUserType } from "../../../redux/actions/hrAdminActions";
import AddUserTypeModal from "../../Modal/AddUserTypeModal/AddUserTypeModal";
import UserTypeList from "../../List/UserTypeList/UserTypeList";

const UserTypes = () => {
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);
  const [loadToggler, setLoadToggler] = useState(false);
  const openModal = () => {
    setIsVisible(true);
  };

  useEffect(() => {
    dispatch(getUserType());
  }, [loadToggler]);

  const { loading, error, message } = useSelector((state) => state.addUserType);

  return (
    <div>
      <h2>UserTypes</h2>
      <Button onClick={openModal}>Add User Type</Button>
      <AddUserTypeModal
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        loading={loading}
        message={message}
      />
      <UserTypeList />
    </div>
  );
};

export default UserTypes;

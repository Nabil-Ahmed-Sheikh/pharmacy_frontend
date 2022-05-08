import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./UserList.css";
import * as hrAdminActions from "../../../redux/actions/hrAdminActions";
import AddUserModal from "../../Modal/AddUserModal/AddUserModal";
import { Spin, Pagination, Tooltip } from "antd";
import { FiTrash2, FiEdit } from "react-icons/fi";
import ConfirmModal from "../../Modal/ConfirmModal/ConfirmModal";

const UserList = () => {
  let initialState = {
    name: "",
    username: "",
    email: "",
    phoneNo: "",
    password: "",
    userType: "",
    store: "",
    status: "",
  };

  const [formData, setFormData] = useState({ ...initialState });
  const { loading, message } = useSelector((state) => state.addUserType);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  let [page, setPage] = useState(1);
  let [limit, setLimit] = useState(10);
  const {
    loading: listLoading,
    users,
    count,
  } = useSelector((state) => state.listUser);
  const { loading: deleteLoading } = useSelector((state) => state.deleteUser);

  const callUserList = async () => {
    await dispatch(hrAdminActions.getUsers({ page, limit }));
  };

  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const [toggle, setToggle] = useState(false);

  const openModal = () => {
    setIsVisible(true);
  };

  const closeModal = () => {
    setFormData({ ...initialState });
    setIsVisible(false);
  };

  const openDeleteModal = (id) => {
    setDeleteId(id);
    setDeleteModalVisible(true);
  };

  const closeDeleteModal = () => {
    setDeleteId("");
    setDeleteModalVisible(false);
  };

  const openEditModal = (user) => {
    setFormData({
      name: user.name,
      username: user.username,
      email: user.email,
      phoneNo: user.phoneNo,
      userType: user.userType._id,
      store: user.store._id,
      status: user.status,
      profilePhoto: user.profilePhoto,
      edit: true,
    });
    openModal();
  };

  const deleteUser = async () => {
    await dispatch(hrAdminActions.deleteUser({ id: deleteId }));
    if (users.length === 1 && page > 1) {
      setPage(page - 1);
    }
    closeDeleteModal();
    setToggle(!toggle);
  };

  useEffect(() => {
    callUserList();
  }, [toggle]);

  const data = (
    <>
      {users?.map((user) => (
        <tr key={user._id}>
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.phoneNo}</td>
          <td>{user.userType?.name}</td>
          <td>{user.status}</td>
          <td>{user.store?.name}</td>
          <td>
            {
              <div className="pharma-table-action">
                {user.type !== "ADMIN" && (
                  <>
                    <Tooltip color="red" title="Delete User">
                      <FiTrash2
                        className="pharma-table-action-icon"
                        color="red"
                        onClick={() => openDeleteModal(user._id)}
                      />
                    </Tooltip>
                    <Tooltip color="rgb(56 157 251)" title="Edit User">
                      <FiEdit
                        className="pharma-table-action-icon"
                        color="rgb(56 157 251)"
                        onClick={() => openEditModal(user)}
                      />
                    </Tooltip>
                  </>
                )}
              </div>
            }
          </td>
        </tr>
      ))}
    </>
  );

  let blankRowsCount = 10;
  let blankRows = [];
  for (let i = 0; i < blankRowsCount; i++) {
    blankRows.push(
      <tr key={i}>
        <td style={{ height: "38px" }}></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    );
  }
  const onShowSizeChange = (current, pageSize) => {
    setLimit(pageSize);
    setToggle(!toggle);
  };

  const onChangePage = (page) => {
    setPage(page);
    setToggle(!toggle);
  };

  useEffect(() => {
    dispatch(hrAdminActions.getUserType());
  }, [toggle]);

  return (
    <>
      <div className="pharma-table-container">
        <div className="pharma-table-header">
          <button className="button-primary" onClick={openModal}>
            Add User
          </button>
        </div>
        {listLoading ? (
          <div className="table-spin-container">
            <Spin size="large" tip="Loading..." />
          </div>
        ) : (
          <table className="pharma-table">
            <thead>
              <tr>
                <th>User Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone No.</th>
                <th>User Type</th>
                <th>Status</th>
                <th>Store</th>
                <th style={{ textAlign: "center" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {data}
              {blankRows}
            </tbody>
          </table>
        )}

        <AddUserModal
          formData={formData}
          setFormData={setFormData}
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          loading={loading}
          closeModal={closeModal}
          message={message}
          toggler={toggle}
          setToggler={setToggle}
        />

        <ConfirmModal
          visible={deleteModalVisible}
          setVisible={setDeleteModalVisible}
          title="Delete User"
          content="Are you sure you want to delete this user?"
          loading={deleteLoading}
          onConfirm={deleteUser}
          onCancel={closeDeleteModal}
        />
      </div>
      <Pagination
        className="pharma-table-pagination-container"
        showSizeChanger
        showQuickJumper
        defaultCurrent={1}
        onChange={onChangePage}
        onShowSizeChange={onShowSizeChange}
        total={count}
      />
    </>
  );
};

export default UserList;

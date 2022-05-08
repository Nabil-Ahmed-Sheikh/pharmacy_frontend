import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as storeManagementActions from "../../../redux/actions/storeManagementActions";
import { FiTrash2, FiEdit } from "react-icons/fi";
import { Tooltip, Spin } from "antd";
import AddStoreModal from "../../Modal/AddStoreModal/AddStoreModal";
import ConfirmModal from "../../Modal/ConfirmModal/ConfirmModal";

const StoreList = () => {
  const dispatch = useDispatch();
  const { loading: listLoading, stores } = useSelector(
    (state) => state.listStore
  );
  const { loading: deleteLoading } = useSelector((state) => state.deleteStore);
  const initialFormData = {
    id: "",
    name: "",
    address: "",
    phoneNo: "",
    status: "",
  };

  const [deleteId, setDeleteId] = useState("");

  const [formData, setFormData] = useState({
    ...initialFormData,
  });

  const [toggle, setToggle] = useState(false);

  const getStores = async () => {
    await dispatch(storeManagementActions.getStores());
  };

  const deleteStore = async () => {
    await dispatch(storeManagementActions.deleteStore({ id: deleteId }));
    setToggle(!toggle);
  };

  const openDeleteModal = (id) => {
    setDeleteId(id);
    setDeleteModalVisible(true);
  };

  const closeDeleteModal = () => {
    setDeleteId("");
    setDeleteModalVisible(false);
  };

  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [visible, setVisible] = useState(false);

  const openModal = () => {
    setVisible(true);
  };

  const openEditModal = async (store) => {
    setFormData({
      id: store._id,
      name: store.name,
      address: store.address,
      phoneNo: store.phoneNo,
      status: store.status,
    });
    setVisible(true);
  };

  useEffect(() => {
    getStores();
  }, [toggle]);

  let data = (
    <>
      {stores?.map((store) => (
        <tr key={store._id}>
          <td>{store.name}</td>
          <td>{store.address}</td>
          <td>{store.phoneNo}</td>
          <td>{store.status}</td>
          <td>
            {
              <div className="pharma-table-action">
                <Tooltip color="red" title="Delete Store">
                  <FiTrash2
                    className="pharma-table-action-icon"
                    color="red"
                    onClick={() => openDeleteModal(store._id)}
                  />
                </Tooltip>
                <Tooltip color="rgb(56 157 251)" title="Edit Store">
                  <FiEdit
                    className="pharma-table-action-icon"
                    color="rgb(56 157 251)"
                    onClick={() => openEditModal(store)}
                  />
                </Tooltip>
              </div>
            }
          </td>
        </tr>
      ))}
    </>
  );

  let blankRowsCount = stores?.length > 0 ? 10 - stores.length : 10;
  let blankRows = [];
  for (let i = 0; i < blankRowsCount; i++) {
    blankRows.push(
      <tr key={i}>
        <td style={{ height: "38px" }}></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    );
  }

  return (
    <div className="pharma-table-container">
      <div className="pharma-table-header">
        <button className="button-primary" onClick={openModal}>
          Add Store
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
              <th> Store Name</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Status</th>
              <th style={{ textAlign: "center" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {data}
            {blankRows}
          </tbody>
        </table>
      )}
      <AddStoreModal
        visible={visible}
        setVisible={setVisible}
        toggle={toggle}
        setToggle={setToggle}
        formData={formData}
        setFormData={setFormData}
      />
      <ConfirmModal
        visible={deleteModalVisible}
        setVisible={setDeleteModalVisible}
        title="Delete Store"
        content="Are you sure you want to delete this store?"
        loading={deleteLoading}
        onConfirm={deleteStore}
        onCancel={closeDeleteModal}
      />
    </div>
  );
};

export default StoreList;

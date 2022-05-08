import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ContactList.css";
import * as contactActions from "../../../redux/actions/contactActions";
import { Spin, Pagination, Tooltip, Input, Row, Col } from "antd";
import { FiTrash2, FiEdit } from "react-icons/fi";
import AddContactModal from "../../Modal/AddContactModal/AddContactModal";
import ConfirmModal from "../../Modal/ConfirmModal/ConfirmModal";
import { debounce } from "lodash";

const ContactList = ({ type }) => {
  let initialFormData = {
    companyName: "",
    contactName: "",
    email: "",
    phoneNo: "",
    address: "",
    openingBalance: 0.0,
    store: "",
    status: "ACTIVE",
    type,
  };

  const [formData, setFormData] = useState({ ...initialFormData });
  let [page, setPage] = useState(1);
  let [limit, setLimit] = useState(10);
  let [searchTerm, setSearchTerm] = useState("");
  const {
    loading: listLoading,
    contacts,
    count: contactCount,
  } = useSelector((state) => state.listContact);
  const { loading: deleteLoading } = useSelector(
    (state) => state.deleteContact
  );

  const callContactList = async () => {
    await dispatch(
      contactActions.getContacts({ type, page, limit, searchTerm })
    );
  };

  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [deleteId, setDeleteId] = useState("");

  const openModal = () => {
    setVisible(true);
  };

  const openEditModal = async (contact) => {
    setFormData({
      id: contact._id,
      companyName: contact.companyName,
      contactName: contact.contactName,
      email: contact.email,
      phoneNo: contact.phoneNo,
      address: contact.address,
      openingBalance: contact.openingBalance,
      store: contact.store,
      status: contact.status,
      type,
    });
    setVisible(true);
  };

  const closeModal = () => {
    setFormData({ ...initialFormData });
    setVisible(false);
  };

  const changeSearchTerm = (e) => {
    debounce(() => {
      setSearchTerm(e.target.value);
      setToggle(!toggle);
    }, 500)();
  };

  useEffect(() => {
    callContactList();
  }, [toggle]);

  const onChangePage = (page) => {
    setPage(page);
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

  function onShowSizeChange(current, pageSize) {
    setLimit(pageSize);
    setToggle(!toggle);
  }

  const deleteContact = async () => {
    await dispatch(contactActions.deleteContact({ type, id: deleteId }));
    if (contacts.length === 1 && page > 1) {
      setPage(page - 1);
    }
    closeDeleteModal();
    setToggle(!toggle);
  };

  const data = (
    <>
      {contacts?.map((contact) => (
        <tr key={contact._id}>
          <td>{contact.contactName}</td>
          <td>{contact.companyName}</td>
          <td>{contact.email}</td>
          <td>{contact.phoneNo}</td>
          <td>{contact.openingBalance}</td>
          <td>{contact.status}</td>
          <td>
            {
              <div className="pharma-table-action">
                <Tooltip
                  color="red"
                  title={
                    type === "customer" ? "Delete Customer" : "Delete Supplier"
                  }
                >
                  <FiTrash2
                    className="pharma-table-action-icon"
                    color="red"
                    onClick={() => openDeleteModal(contact._id)}
                  />
                </Tooltip>
                <Tooltip
                  color="rgb(56 157 251)"
                  title={
                    type === "customer" ? "Edit Customer" : "Edit Supplier"
                  }
                >
                  <FiEdit
                    className="pharma-table-action-icon"
                    color="rgb(56 157 251)"
                    onClick={() => openEditModal(contact)}
                  />
                </Tooltip>
              </div>
            }
          </td>
        </tr>
      ))}
    </>
  );

  let blankRowsCount =
    contacts?.length > 10
      ? 0
      : contacts?.length < limit
      ? limit - contacts?.length
      : 0;
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
      </tr>
    );
  }

  return (
    <>
      <div className="pharma-table-container">
        <div className="pharma-table-header">
          <Row>
            <Col span={10}>
              <Input
                type={"text"}
                onChange={changeSearchTerm}
                placeholder={"Search"}
              />
            </Col>
            <Col offset={10} span={4}>
              <button
                className="button-primary"
                style={{ width: "100%" }}
                onClick={openModal}
              >
                {type === "customer" ? "Add Customer" : "Add Supplier"}
              </button>
            </Col>
          </Row>
        </div>
        {listLoading ? (
          <div className="table-spin-container">
            <Spin size="large" tip="Loading..." />
          </div>
        ) : (
          <table className="pharma-table">
            <thead>
              <tr>
                <th>Contact Name</th>
                <th>Company Name</th>
                <th>Email</th>
                <th>Phone No.</th>
                <th>Opening Balance</th>
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

        <AddContactModal
          type={type}
          formData={formData}
          setFormData={setFormData}
          visible={visible}
          setVisible={setVisible}
          closeModal={closeModal}
          toggle={toggle}
          setToggle={setToggle}
          initialFormData={initialFormData}
        />

        <ConfirmModal
          visible={deleteModalVisible}
          setVisible={setDeleteModalVisible}
          title={type === "customer" ? "Delete Customer" : "Delete Supplier"}
          content={
            type === "customer"
              ? "Are you sure you want to delete this customer?"
              : "Are you sure you want to delete this supplier?"
          }
          loading={deleteLoading}
          onConfirm={deleteContact}
          onCancel={closeDeleteModal}
        />
      </div>
      <Pagination
        className="pharma-table-pagination-container"
        showSizeChanger
        showQuickJumper
        onShowSizeChange={onShowSizeChange}
        onChange={onChangePage}
        total={contactCount}
      />
    </>
  );
};

export default ContactList;

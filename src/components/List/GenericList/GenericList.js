import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./GenericList.css";
import * as genericActions from "../../../redux/actions/genericActions";
import { Spin, Pagination, Tooltip, Input, Row, Col } from "antd";
import { FiTrash2, FiEdit } from "react-icons/fi";
import AddGenericModal from "../../Modal/AddGenericModal/AddGenericModal";
import ConfirmModal from "../../Modal/ConfirmModal/ConfirmModal";
import { debounce } from "lodash";

const GenericList = ({ type }) => {
  let initialFormData = {
    genericName: "",
    status: "ACTIVE",
  };

  const [formData, setFormData] = useState({ ...initialFormData });
  let [page, setPage] = useState(1);
  let [limit, setLimit] = useState(10);
  let [searchTerm, setSearchTerm] = useState("");
  const {
    loading: listLoading,
    generics,
    count: contactCount,
  } = useSelector((state) => state.listGeneric);
  const { loading: deleteLoading } = useSelector(
    (state) => state.deleteGeneric
  );

  const callGenericList = async () => {
    await dispatch(genericActions.getGenerics({ page, limit, searchTerm }));
  };

  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [deleteId, setDeleteId] = useState("");

  const openModal = () => {
    setVisible(true);
  };

  const openEditModal = async (generic) => {
    setFormData({
      genericId: generic._id,
      genericName: generic.genericName,
      status: generic.status,
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
    callGenericList();
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

  const deleteGeneric = async () => {
    await dispatch(genericActions.deleteGeneric({ genericId: deleteId }));
    if (generics.length === 1 && page > 1) {
      setPage(page - 1);
    }
    closeDeleteModal();
    setToggle(!toggle);
  };

  const data = (
    <>
      {generics?.map((generic) => (
        <tr key={generic._id}>
          <td>{generic.genericName}</td>
          <td style={{ whiteSpace: "nowrap" }}>
            {generic.updatedBy[0]
              ? generic.updatedBy[0]?.name
              : generic.createdBy[0]?.name}
          </td>
          <td>{generic.status}</td>
          <td>
            {
              <div className="pharma-table-action">
                <Tooltip color="red" title={"Delete Generic"}>
                  <FiTrash2
                    className="pharma-table-action-icon"
                    color="red"
                    onClick={() => openDeleteModal(generic._id)}
                  />
                </Tooltip>
                <Tooltip color="rgb(56 157 251)" title={"Edit Generic"}>
                  <FiEdit
                    className="pharma-table-action-icon"
                    color="rgb(56 157 251)"
                    onClick={() => openEditModal(generic)}
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
    generics?.length > 10
      ? 0
      : generics?.length < limit
      ? limit - generics?.length
      : 0;
  let blankRows = [];
  for (let i = 0; i < blankRowsCount; i++) {
    blankRows.push(
      <tr key={i}>
        <td style={{ height: "38px" }}></td>
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
                {"Add Generic"}
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
                <th>Generic Name</th>
                <th>Updated By</th>
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

        <AddGenericModal
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
          title={"Delete Generic"}
          content={"Are you sure you want to delete this generic?"}
          loading={deleteLoading}
          onConfirm={deleteGeneric}
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

export default GenericList;

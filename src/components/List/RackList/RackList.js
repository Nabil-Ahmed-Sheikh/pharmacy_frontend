import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as rackActions from "../../../redux/actions/rackActions";
import * as storeManagementActions from "../../../redux/actions/storeManagementActions";
import { Spin, Pagination, Tooltip, Input, Row, Col, Select } from "antd";
import { FiTrash2, FiEdit } from "react-icons/fi";
import AddRackModal from "../../Modal/AddRackModal/AddRackModal";
import ConfirmModal from "../../Modal/ConfirmModal/ConfirmModal";
import { debounce } from "lodash";

const RackList = ({ type }) => {
  const { user } = useSelector((state) => state.userLogin.userInfo.user);
  const {
    loading: listLoading,
    racks,
    count: rackCount,
  } = useSelector((state) => state.listRack);
  const { loading: storeListLoading, stores } = useSelector(
    (state) => state.listStore
  );
  let initialFormData = {
    rackName: "",
    status: "ACTIVE",
    store: user?.store?._id ? user.store._id : "",
  };
  const [formData, setFormData] = useState({ ...initialFormData });
  let [page, setPage] = useState(1);
  let [limit, setLimit] = useState(10);
  let [searchTerm, setSearchTerm] = useState("");
  const { loading: deleteLoading } = useSelector((state) => state.deleteRack);

  const getStores = async () => {
    await dispatch(storeManagementActions.getStores());
  };

  const callRackList = async () => {
    await dispatch(
      rackActions.getRacks({ page, limit, store: formData.store, searchTerm })
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

  const openEditModal = async (rack) => {
    setFormData({
      rackId: rack._id,
      rackName: rack.rackName,
      status: rack.status,
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
    getStores();
    callRackList();
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

  const deleteRack = async () => {
    await dispatch(rackActions.deleteRack({ rackId: deleteId }));
    if (racks.length === 1 && page > 1) {
      setPage(page - 1);
    }
    closeDeleteModal();
    setToggle(!toggle);
  };

  const changeStore = (store) => {
    setFormData({ ...formData, store: store });
    setToggle(!toggle);
  };

  const data = (
    <>
      {racks?.map((rack) => (
        <tr key={rack._id}>
          <td>{rack.rackName}</td>
          <td style={{ whiteSpace: "nowrap" }}>
            {rack.updatedBy[0]
              ? rack.updatedBy[0]?.name
              : rack.createdBy[0]?.name}
          </td>
          <td>{rack.status}</td>
          <td>
            {
              <div className="pharma-table-action">
                <Tooltip color="red" title={"Delete Rack"}>
                  <FiTrash2
                    className="pharma-table-action-icon"
                    color="red"
                    onClick={() => openDeleteModal(rack._id)}
                  />
                </Tooltip>
                <Tooltip color="rgb(56 157 251)" title={"Edit Rack"}>
                  <FiEdit
                    className="pharma-table-action-icon"
                    color="rgb(56 157 251)"
                    onClick={() => openEditModal(rack)}
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
    racks?.length > 10 ? 0 : racks?.length < limit ? limit - racks?.length : 0;
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
          <Row gutter={[12, 12]}>
            <Col span={10}>
              <Input
                type={"text"}
                onChange={changeSearchTerm}
                placeholder={"Search"}
              />
            </Col>
            <Col span={10}>
              <Select
                style={{ width: "100%" }}
                value={formData.store}
                onChange={changeStore}
                disabled={user.type === "ADMIN" ? false : true}
              >
                {stores?.map((store) => (
                  <Select.Option key={store._id} value={store._id}>
                    {store.name}
                  </Select.Option>
                ))}
              </Select>
            </Col>
            <Col span={4}>
              <button
                className="button-primary"
                style={{ width: "100%" }}
                onClick={openModal}
              >
                {"Add Rack"}
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
                <th>Rack Name</th>
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

        <AddRackModal
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
          title={"Delete Rack"}
          content={"Are you sure you want to delete this rack?"}
          loading={deleteLoading}
          onConfirm={deleteRack}
          onCancel={closeDeleteModal}
        />
      </div>
      <Pagination
        className="pharma-table-pagination-container"
        showSizeChanger
        showQuickJumper
        onShowSizeChange={onShowSizeChange}
        onChange={onChangePage}
        total={rackCount}
      />
    </>
  );
};

export default RackList;

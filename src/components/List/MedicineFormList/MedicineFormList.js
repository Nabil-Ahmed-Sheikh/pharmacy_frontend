import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as medicineFormActions from "../../../redux/actions/medicineFormActions";
import { Spin, Pagination, Tooltip, Input, Row, Col } from "antd";
import { FiTrash2, FiEdit } from "react-icons/fi";
import AddMedicineFormModal from "../../Modal/AddMedicineFormModal/AddMedicineFormModal";
import ConfirmModal from "../../Modal/ConfirmModal/ConfirmModal";
import { debounce } from "lodash";

const MedicineFormList = ({ type }) => {
  let initialFormData = {
    medicineFormName: "",
    status: "ACTIVE",
  };

  const [formData, setFormData] = useState({ ...initialFormData });
  let [page, setPage] = useState(1);
  let [limit, setLimit] = useState(10);
  let [searchTerm, setSearchTerm] = useState("");
  const {
    loading: listLoading,
    medicineForms,
    count: medicineFormCount,
  } = useSelector((state) => state.listMedicineForm);
  const { loading: deleteLoading } = useSelector(
    (state) => state.deleteMedicineForm
  );

  const callMedicineFormList = async () => {
    await dispatch(
      medicineFormActions.getMedicineForms({ page, limit, searchTerm })
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

  const openEditModal = async (medicineForm) => {
    setFormData({
      medicineFormId: medicineForm._id,
      medicineFormName: medicineForm.medicineFormName,
      status: medicineForm.status,
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
    callMedicineFormList();
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

  const deleteMedicineForm = async () => {
    await dispatch(
      medicineFormActions.deleteMedicineForm({ medicineFormId: deleteId })
    );
    if (medicineForms.length === 1 && page > 1) {
      setPage(page - 1);
    }
    closeDeleteModal();
    setToggle(!toggle);
  };

  const data = (
    <>
      {medicineForms?.map((medicineForm) => (
        <tr key={medicineForm._id}>
          <td>{medicineForm.medicineFormName}</td>
          <td style={{ whiteSpace: "nowrap" }}>
            {medicineForm.updatedBy[0]
              ? medicineForm.updatedBy[0]?.name
              : medicineForm.createdBy[0]?.name}
          </td>
          <td>{medicineForm.status}</td>
          <td>
            {
              <div className="pharma-table-action">
                <Tooltip color="red" title={"Delete Medicine Form"}>
                  <FiTrash2
                    className="pharma-table-action-icon"
                    color="red"
                    onClick={() => openDeleteModal(medicineForm._id)}
                  />
                </Tooltip>
                <Tooltip color="rgb(56 157 251)" title={"Edit Medicine Form"}>
                  <FiEdit
                    className="pharma-table-action-icon"
                    color="rgb(56 157 251)"
                    onClick={() => openEditModal(medicineForm)}
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
    medicineForms?.length > 10
      ? 0
      : medicineForms?.length < limit
      ? limit - medicineForms?.length
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
                {"Add Medicine Form"}
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
                <th>Medicine Form Name</th>
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

        <AddMedicineFormModal
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
          title={"Delete Medicine Form"}
          content={"Are you sure you want to delete this medicine form?"}
          loading={deleteLoading}
          onConfirm={deleteMedicineForm}
          onCancel={closeDeleteModal}
        />
      </div>
      <Pagination
        className="pharma-table-pagination-container"
        showSizeChanger
        showQuickJumper
        onShowSizeChange={onShowSizeChange}
        onChange={onChangePage}
        total={medicineFormCount}
      />
    </>
  );
};

export default MedicineFormList;

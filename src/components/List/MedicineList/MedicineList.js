import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as medicineActions from "../../../redux/actions/medicineActions";
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
    medicines,
    count: medicine,
  } = useSelector((state) => state.listMedicine);
  const { loading: deleteLoading } = useSelector(
    (state) => state.deleteMedicine
  );

  const callMedicineFormList = async () => {
    await dispatch(medicineActions.getMedicines({ page, limit, searchTerm }));
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
    await dispatch(medicineActions.deleteMedicine({ medicineId: deleteId }));
    if (medicines.length === 1 && page > 1) {
      setPage(page - 1);
    }
    closeDeleteModal();
    setToggle(!toggle);
  };

  const data = (
    <>
      {medicines?.map((medicine) => (
        <tr key={medicine._id}>
          <td>{medicine.medicineName}</td>
          <td>{medicine.generic[0] && medicine.generic[0].genericName}</td>
          <td>{medicine.companyName}</td>
          <td>{medicine.medicineForm}</td>
          <td>{medicine.medicineStrength}</td>
          <td>{medicine.purchasePrice}</td>
          <td>{medicine.salePrice}</td>
          <td>{medicine.mrpPrice}</td>
          <td>{medicine.stock}</td>
          {/* <td style={{ whiteSpace: "nowrap" }}>
            {medicine.updatedBy[0]
              ? medicine.updatedBy[0]?.name
              : medicine.createdBy[0]?.name}
          </td> */}

          <td>{medicine.status}</td>
          <td>
            {
              <div className="pharma-table-action">
                <Tooltip color="red" title={"Delete Medicine"}>
                  <FiTrash2
                    className="pharma-table-action-icon"
                    color="red"
                    onClick={() => openDeleteModal(medicine._id)}
                  />
                </Tooltip>
                <Tooltip color="rgb(56 157 251)" title={"Edit Medicine"}>
                  <FiEdit
                    className="pharma-table-action-icon"
                    color="rgb(56 157 251)"
                    onClick={() => openEditModal(medicine)}
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
    medicines?.length > 10
      ? 0
      : medicines?.length < limit
      ? limit - medicines?.length
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
                <th>Medicine Name</th>
                <th>Generic Name</th>
                <th>Company Name</th>
                <th>Medicine Form</th>
                <th>Strength</th>
                <th>Purchase Price</th>
                <th>Sales Price</th>
                <th>MRP Price</th>
                <th>Stock</th>
                {/* <th>Updated By</th> */}
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
          title={"Delete Medicine"}
          content={"Are you sure you want to delete this medicine?"}
          loading={deleteLoading}
          onConfirm={deleteMedicineForm}
          onCancel={closeDeleteModal}
        />
      </div>
      <Pagination
        className="pharma-table-pagination-container"
        showSizeChanger
        showQuickJumper
        defaultCurrent={1}
        onShowSizeChange={onShowSizeChange}
        onChange={onChangePage}
        total={medicine}
      />
    </>
  );
};

export default MedicineFormList;

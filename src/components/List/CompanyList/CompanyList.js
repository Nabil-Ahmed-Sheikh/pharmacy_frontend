import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as companyActions from "../../../redux/actions/companyActions";
import { Spin, Pagination, Tooltip, Input, Row, Col } from "antd";
import { FiTrash2, FiEdit } from "react-icons/fi";
import AddCompanyModal from "../../Modal/AddCompanyModal/AddCompanyModal";
import ConfirmModal from "../../Modal/ConfirmModal/ConfirmModal";
import { debounce } from "lodash";

const CompanyList = ({ type }) => {
  const dispatch = useDispatch();
  let initialFormData = {
    companyName: "",
    status: "ACTIVE",
  };

  const [formData, setFormData] = useState({ ...initialFormData });
  let [page, setPage] = useState(1);
  let [limit, setLimit] = useState(10);
  let [searchTerm, setSearchTerm] = useState("");
  const {
    loading: listLoading,
    companies,
    count: contactCount,
  } = useSelector((state) => state.listCompany);
  const { loading: deleteLoading } = useSelector(
    (state) => state.deleteCompany
  );

  const callCompanyList = async () => {
    await dispatch(companyActions.getCompanies({ page, limit, searchTerm }));
  };

  const [visible, setVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [deleteId, setDeleteId] = useState("");

  const openModal = () => {
    setVisible(true);
  };

  const openEditModal = async (company) => {
    setFormData({
      companyId: company._id,
      companyName: company.companyName,
      status: company.status,
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
    callCompanyList();
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

  const deleteCompany = async () => {
    await dispatch(companyActions.deleteCompany({ companyId: deleteId }));
    if (companies.length === 1 && page > 1) {
      setPage(page - 1);
    }
    closeDeleteModal();
    setToggle(!toggle);
  };

  const data = (
    <>
      {companies?.map((company) => (
        <tr key={company._id}>
          <td>{company.companyName}</td>
          <td style={{ whiteSpace: "nowrap" }}>
            {company.updatedBy[0]
              ? company.updatedBy[0]?.name
              : company.createdBy[0]?.name}
          </td>
          <td>{company.status}</td>
          <td>
            {
              <div className="pharma-table-action">
                <Tooltip color="red" title={"Delete Company"}>
                  <FiTrash2
                    className="pharma-table-action-icon"
                    color="red"
                    onClick={() => openDeleteModal(company._id)}
                  />
                </Tooltip>
                <Tooltip color="rgb(56 157 251)" title={"Edit Company"}>
                  <FiEdit
                    className="pharma-table-action-icon"
                    color="rgb(56 157 251)"
                    onClick={() => openEditModal(company)}
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
    companies?.length > 10
      ? 0
      : companies?.length < limit
      ? limit - companies?.length
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
                {"Add Company"}
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
                <th>Company Name</th>
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

        <AddCompanyModal
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
          title={"Delete Company"}
          content={"Are you sure you want to delete this company?"}
          loading={deleteLoading}
          onConfirm={deleteCompany}
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

export default CompanyList;

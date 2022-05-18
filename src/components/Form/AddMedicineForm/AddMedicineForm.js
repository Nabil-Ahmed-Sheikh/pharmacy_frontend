import React, { useEffect, useState } from "react";
import { Row, Col, Input, Select, Button, Spin } from "antd";
import { FiPlusSquare, FiDollarSign, FiZap, FiPackage } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import "./AddMedicineForm.css";
import * as genericActions from "../../../redux/actions/genericActions";
import * as medicineFormActions from "../../../redux/actions/medicineFormActions";
import * as companyActions from "../../../redux/actions/companyActions";
import * as rackActions from "../../../redux/actions/rackActions";
import * as medicineActions from "../../../redux/actions/medicineActions";
import * as storeManagementActions from "../../../redux/actions/storeManagementActions";
import { debounce } from "lodash";
const { Option } = Select;
const { TextArea } = Input;

const AddMedicineForm = () => {
  const dispatch = useDispatch();
  const { companies } = useSelector((state) => state.listActiveCompany);
  const { generics } = useSelector((state) => state.listActiveGeneric);
  const { racks } = useSelector((state) => state.listActiveRack);
  const { medicineForms } = useSelector(
    (state) => state.listActiveMedicineForm
  );
  const { stores } = useSelector((state) => state.listActiveStore);
  const { user } = useSelector((state) => state.userLogin.userInfo.user);
  const { loading: addMedicineLoading } = useSelector(
    (state) => state.addMedicine
  );

  const initialFormData = {
    store: user.store._id,
    medicineName: "",
    generic: "",
    medicineForm: "",
    purchasePrice: 0,
    salePrice: 0,
    medicineStrength: "",
    company: "",
    rack: "",
    minStock: 0,
    indication: "",
    sideEffects: "",
    adminstration: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  const handleStoreChange = (value) => {
    setFormData({ ...formData, store: value });
  };

  function onRackSearch(val) {
    callRackList(val);
  }

  const callRackList = async (val) => {
    await dispatch(
      rackActions.getActiveRacks({
        page: 1,
        limit: 10,
        searchTerm: val,
      })
    );
  };

  function onGenericSearch(val) {
    callGenericList(val);
  }

  const callGenericList = async (val) => {
    await dispatch(
      genericActions.getActiveGenerics({
        page: 1,
        limit: 10,
        searchTerm: val,
      })
    );
  };

  function onMedicineFormSearch(val) {
    callMedicineFormList(val);
  }

  const callMedicineFormList = async (val) => {
    await dispatch(
      medicineFormActions.getActiveMedicineForms({
        page: 1,
        limit: 10,
        searchTerm: val,
      })
    );
  };

  function onCompanySearch(val) {
    callCompanyList(val);
  }

  const callCompanyList = async (val) => {
    await dispatch(
      companyActions.getActiveCompanies({
        page: 1,
        limit: 10,
        searchTerm: val,
      })
    );
  };

  const handleGenericChange = (value) => {
    setFormData({ ...formData, generic: value });
  };

  const handleMedicineFormChange = (value) => {
    setFormData({ ...formData, medicineForm: value });
  };

  const handleCompanyChange = (value) => {
    setFormData({ ...formData, company: value });
  };

  const handleRackChange = (value) => {
    setFormData({ ...formData, rack: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      medicineActions.addMedicine({
        ...formData,
      })
    );
    setFormData(initialFormData);
  };

  const callStoreList = async () => {
    await dispatch(storeManagementActions.getActiveStores());
  };

  useEffect(() => {
    callStoreList();
  }, []);

  return (
    <div className="addMedicineForm">
      <div className="addMedicineFormHeader"></div>
      <Row>
        <Col sm={24}>
          <div>
            <label>Store</label>
            <br />
            <div>
              <Select
                placeholder="Store"
                optionFilterProp="children"
                style={{ width: "100%" }}
                onChange={handleStoreChange}
                disabled={user.type === "ADMIN" ? false : true}
                value={formData.store}
              >
                {stores?.map((store) => (
                  <Option key={store._id} value={store._id}>
                    {store.name}
                  </Option>
                ))}
              </Select>
            </div>
          </div>
        </Col>
      </Row>
      <Row gutter={[24, 24]}>
        <Col md={8}>
          <div>
            <label>Medicine Name</label>
            <Input
              name="medicineName"
              addonBefore={<FiPlusSquare />}
              onChange={onChange}
              value={formData.medicineName}
            />
          </div>
          <div>
            <label>Purchases Price</label>
            <Input
              name="purchasePrice"
              type="number"
              addonBefore={<FiDollarSign />}
              onChange={onChange}
              value={formData.purchasePrice}
            />
          </div>
          <div>
            <label>Company Name</label>
            <br />
            <div>
              <Select
                showSearch
                placeholder="Company Name"
                optionFilterProp="children"
                style={{ width: "100%" }}
                onChange={handleCompanyChange}
                onSearch={debounce(onCompanySearch, 500)}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
                value={formData.company}
              >
                {companies?.map((company) => (
                  <Option key={company._id} value={company._id}>
                    {company.companyName}
                  </Option>
                ))}
              </Select>
            </div>
          </div>
          <div>
            <label>Indication</label>
            <TextArea
              name="indication"
              rows={4}
              onChange={onChange}
              value={formData.indication}
            />
          </div>
        </Col>
        <Col md={8}>
          <div>
            <label>Generic Name</label>
            <br />
            <div>
              <Select
                showSearch
                placeholder="Generic"
                optionFilterProp="children"
                style={{ width: "100%" }}
                onChange={handleGenericChange}
                onSearch={debounce(onGenericSearch, 500)}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
                value={formData.generic}
              >
                {generics?.map((generic) => (
                  <Option key={generic._id} value={generic._id}>
                    {generic.genericName}
                  </Option>
                ))}
              </Select>
            </div>
          </div>
          <div>
            <label>Sales Price</label>
            <Input
              type="number"
              name="salePrice"
              addonBefore={<FiDollarSign />}
              onChange={onChange}
              value={formData.salePrice}
            />
          </div>
          <div>
            <label>Rack Name</label>
            <br />
            <div>
              <Select
                showSearch
                placeholder="Rack Name"
                optionFilterProp="children"
                style={{ width: "100%" }}
                onChange={handleRackChange}
                onSearch={onRackSearch}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
                value={formData.rack}
              >
                {racks?.map((rack) => (
                  <Option key={rack._id} value={rack._id}>
                    {rack.rackName}
                  </Option>
                ))}
              </Select>
            </div>
          </div>
          <div>
            <label>Side Effect</label>
            <TextArea
              name="sideEffects"
              value={formData.sideEffects}
              rows={4}
              onChange={onChange}
            />
          </div>
        </Col>
        <Col md={8}>
          <div>
            <label>Medicine Form</label>
            <br />
            <div>
              <Select
                showSearch
                placeholder="Medicine Form"
                optionFilterProp="children"
                style={{ width: "100%" }}
                onChange={handleMedicineFormChange}
                onSearch={onMedicineFormSearch}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
                value={formData.medicineForm}
              >
                {medicineForms?.map((medicineForm) => (
                  <Option
                    key={medicineForm._id}
                    value={medicineForm.medicineFormName}
                  >
                    {medicineForm.medicineFormName}
                  </Option>
                ))}
              </Select>
            </div>
          </div>
          <div>
            <label>Strength</label>
            <Input
              name="medicineStrength"
              addonBefore={<FiZap />}
              onChange={onChange}
              value={formData.medicineStrength}
            />
          </div>
          <div>
            <label>Minimum Stock</label>
            <Input
              type="number"
              name="minStock"
              addonBefore={<FiPackage />}
              onChange={onChange}
              value={formData.minStock}
            />
          </div>
          <div>
            <label>Administration</label>
            <TextArea
              name="administration"
              rows={4}
              onChange={onChange}
              value={formData.adminstration}
            />
          </div>
        </Col>
      </Row>
      <div className="add-medicine-button-container">
        {addMedicineLoading ? (
          <Spin />
        ) : (
          <Button type="primary" onClick={handleSubmit}>
            Submit
          </Button>
        )}
        <Button type="primary" danger>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default AddMedicineForm;

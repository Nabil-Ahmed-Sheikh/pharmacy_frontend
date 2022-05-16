import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Spin, Button } from "antd";
import "./AddMedicineFormModal.css";
import AddMedicineFormForm from "../../Form/AddMedicineFormForm/AddMedicineFormForm";
import * as medicineFormActions from "../../../redux/actions/medicineFormActions";

const AddMedicineFormModal = ({
  toggle,
  setToggle,
  visible,
  setVisible,
  initialFormData,
  formData,
  setFormData,
}) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userLogin?.userInfo?.user);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleChangeStatus = (value) => {
    setFormData((prev) => ({ ...prev, status: value }));
  };

  const handleAddMedicineForm = async (e) => {
    e.preventDefault();
    await dispatch(medicineFormActions.addMedicineForm(formData));
    closeModal();
    setToggle(!toggle);
  };

  const handleEditMedicineForm = async (e) => {
    e.preventDefault();
    await dispatch(medicineFormActions.editMedicineForm(formData));
    closeModal();
    setToggle(!toggle);
  };

  const closeModal = () => {
    setFormData({ ...initialFormData });
    setVisible(false);
  };
  const { loading: addLoading } = useSelector((state) => state.addMedicineForm);
  const { loading: editLoading } = useSelector(
    (state) => state.editMedicineForm
  );

  let Modalfooter = [];

  if (addLoading) {
    Modalfooter = [<Spin />];
  } else {
    if (formData.medicineFormId) {
      Modalfooter = [
        <Button
          key="submit"
          type="primary"
          onClick={handleEditMedicineForm}
          style={{ width: "76px" }}
        >
          {editLoading ? <Spin /> : "Edit"}
        </Button>,
      ];
    } else {
      Modalfooter = [
        <Button key="back" onClick={closeModal}>
          Cancel
        </Button>,
        <Button
          key="submit"
          type="primary"
          onClick={handleAddMedicineForm}
          style={{ width: "76px" }}
        >
          {addLoading ? <Spin /> : "Submit"}
        </Button>,
      ];
    }
  }

  return (
    <Modal
      visible={visible}
      onCancel={closeModal}
      title={
        formData.MedicineFormId ? "Edit Medicine Form" : "Add Medicine Form"
      }
      footer={Modalfooter}
    >
      <AddMedicineFormForm
        handleChange={handleChange}
        handleChangeStatus={handleChangeStatus}
        formData={formData}
        setFormData={setFormData}
      />
    </Modal>
  );
};

export default AddMedicineFormModal;

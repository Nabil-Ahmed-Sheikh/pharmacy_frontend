import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Spin, Button } from "antd";
import AddRackForm from "../../Form/AddRackForm/AddRackForm";
import * as rackActions from "../../../redux/actions/rackActions";

const AddRackModal = ({
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

  const handleAddRack = async (e) => {
    e.preventDefault();
    await dispatch(rackActions.addRack(formData));
    closeModal();
    setToggle(!toggle);
  };

  const handleEditRack = async (e) => {
    e.preventDefault();
    await dispatch(rackActions.editRack(formData));
    closeModal();
    setToggle(!toggle);
  };

  const closeModal = () => {
    setFormData({ ...initialFormData, store: formData.store });
    setVisible(false);
  };
  const { loading: addLoading } = useSelector((state) => state.addRack);
  const { loading: editLoading } = useSelector((state) => state.editRack);

  let Modalfooter = [];

  if (addLoading) {
    Modalfooter = [<Spin />];
  } else {
    if (formData.rackId) {
      Modalfooter = [
        <Button
          key="submit"
          type="primary"
          onClick={handleEditRack}
          style={{ width: "76px" }}
        >
          {editLoading ? <Spin /> : "Submit"}
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
          onClick={handleAddRack}
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
      title={formData.rackId ? "Edit Rack" : "Add Rack"}
      footer={Modalfooter}
    >
      <AddRackForm
        handleChange={handleChange}
        handleChangeStatus={handleChangeStatus}
        formData={formData}
        setFormData={setFormData}
      />
    </Modal>
  );
};

export default AddRackModal;

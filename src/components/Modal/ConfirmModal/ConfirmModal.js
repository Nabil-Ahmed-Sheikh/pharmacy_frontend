import React from "react";
import { Modal, Button, Spin } from "antd";
import "./ConfirmModal.css";

const ConfirmModal = ({
  visible,
  setVisible,
  title,
  loading,
  content,
  onConfirm,
  onCancel,
}) => {
  return (
    <Modal
      visible={visible}
      onCancel={onCancel}
      title={title}
      footer={[
        <Button key="back" onClick={onCancel}>
          Cancel
        </Button>,
        <Button
          key="submit"
          type="primary"
          danger
          onClick={onConfirm}
          style={{ width: "76px" }}
        >
          {loading ? <Spin /> : "Yes"}
        </Button>,
      ]}
    >
      {content}
    </Modal>
  );
};

export default ConfirmModal;

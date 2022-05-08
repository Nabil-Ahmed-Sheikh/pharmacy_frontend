import React from "react";
import AddMedicineForm from "../../Form/AddMedicineForm/AddMedicineForm";
import "./AddMedicine.css";

const AddMedicine = () => {
  return (
    <div>
      <h2>Add Medicine</h2>
      <div className="addMedicineContainer">
        <AddMedicineForm />
      </div>
    </div>
  );
};

export default AddMedicine;

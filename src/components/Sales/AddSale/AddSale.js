import React from "react";
import AddSalesForm from "../../Form/AddSalesForm/AddSalesForm";
import "./AddSale.css";

const AddSale = () => {
  return (
    <div>
      <h2>Add Sale</h2>
      <div className="addSaleContainer">
        <AddSalesForm />
      </div>
    </div>
  );
};

export default AddSale;





import React from "react";
import AddPaymentForm from "../../Form/AddPaymentForm/AddPaymentForm";
import "./AddPayment.css";


const AddPayment = () => {
  return (
    <div>
      <h2>Add Payment</h2>
      <div className="addPaymentContainer">
        <AddPaymentForm />
      </div>
    </div>
  );
};


export default AddPayment;







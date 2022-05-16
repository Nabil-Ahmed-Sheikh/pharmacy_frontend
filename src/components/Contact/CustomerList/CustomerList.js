import React from "react";
import ContactList from "../../List/ContactList/ContactList";

const CustomerList = () => {
  return (
    <div>
      <h2>Customer List</h2>
      <ContactList type="customer" />
    </div>
  );
};

export default CustomerList;

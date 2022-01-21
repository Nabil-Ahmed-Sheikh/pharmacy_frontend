import React from "react";
import "./Content.css";
import { Route, Switch } from "react-router-dom";



import UserTypes from "../HRAdmin/UserTypes";
import Users from "../HRAdmin/Users";

import CustomerList from "../Contact/CustomerList";
import SupplierList from "../Contact/SupplierList";

import AddMedicine from "../Medicine/AddMedicine";
import MedicineList from "../Medicine/MedicineList";

import AddPurchases from "../Purchases/AddPurchases";


const UserContent = ({ collapsed }) => {
  return (
    <div className={collapsed ? "content_collapsed" : "content"}>
      <Switch>
        <Route exact path="/user/user_types" component={UserTypes} />
        <Route exact path="/user/users" component={Users} />
        
        <Route exact path="/user/customer_list" component={CustomerList} />
        <Route exact path="/user/supplier_list" component={SupplierList} />

        <Route exact path="/user/add_medicine" component={AddMedicine} />
        <Route exact path="/user/medicine_list" component={MedicineList} />

        
        <Route exact path="/user/add_purchases" component={AddPurchases} />

        


      </Switch>
    </div>
  );
};

export default UserContent;

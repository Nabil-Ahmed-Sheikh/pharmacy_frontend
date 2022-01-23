import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import "./Menubar.css";
import { Button, Menu } from "antd";
import {
  FiChevronLeft,
  FiChevronRight,
  FiUsers,
  FiTrendingUp,
  FiGrid,
} from "react-icons/fi";

const MenuItem = Menu.Item;
const { SubMenu } = Menu;

const Menubar = ({ collapsed, toggleCollapsed }) => {
  const history = useHistory();

  const goto = (value) => {
    let prefix = "/user";
    history.push(prefix + value);
  };

  return (
    <div className="menubar">
      <Button onClick={toggleCollapsed}>
        {collapsed ? <FiChevronRight /> : <FiChevronLeft />}
      </Button>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]} inlineCollapsed={collapsed}>
        <MenuItem key="1" icon={<FiGrid />}>
          Dashboard
        </MenuItem>


        <SubMenu key="2" title="HR Admin" icon={<FiUsers />}>
          <MenuItem onClick={() => goto("/user_types")}>User Type</MenuItem>
          <MenuItem onClick={() => goto("/users")}>Users</MenuItem>
        </SubMenu>


        <SubMenu key="3" title="Content" icon={<FiUsers />}>
          <MenuItem onClick={() => goto("/customer_list")}>Customer List</MenuItem>
          <MenuItem onClick={() => goto("/supplier_list")}>Supplier List</MenuItem>
        </SubMenu>

        
        <SubMenu key="4" title="Medicine" icon={<FiUsers />}>
          <MenuItem onClick={() => goto("/add_medicine")}>Add Medicine</MenuItem>
          <MenuItem onClick={() => goto("/medicine_list")}>Medicine List</MenuItem>
        </SubMenu>

                
        <SubMenu key="5" title="Purchases" icon={<FiUsers />}>
          <MenuItem onClick={() => goto("/add_purchases")}>Add Purchases</MenuItem>
          <MenuItem onClick={() => goto("/purchases_list")}>Purchases List</MenuItem>
        </SubMenu>
                
        <SubMenu key="6" title="Sales" icon={<FiUsers />}>
          <MenuItem onClick={() => goto("/add_sale")}>Add Sale</MenuItem>
          <MenuItem onClick={() => goto("/sales_list")}>Sales List</MenuItem>
        </SubMenu>
                
        <SubMenu key="7" title="Collection" icon={<FiUsers />}>
          <MenuItem onClick={() => goto("/add_collection")}>Add Collection</MenuItem>
          <MenuItem onClick={() => goto("/collection_list")}>Collection List</MenuItem>

        </SubMenu>
                
        <SubMenu key="8" title="Payment" icon={<FiUsers />}>
          <MenuItem onClick={() => goto("/add_payment")}>Add Payment</MenuItem>
          <MenuItem onClick={() => goto("/payment_list")}>Payment List</MenuItem>
        </SubMenu>
                
        <SubMenu key="9" title="SalesReturn" icon={<FiUsers />}>
          <MenuItem onClick={() => goto("/add_purchases")}>Add Purchases</MenuItem>
        </SubMenu>
                
        <SubMenu key="10" title="StockMatching" icon={<FiUsers />}>
          <MenuItem onClick={() => goto("/add_purchases")}>Add Purchases</MenuItem>
        </SubMenu>
                
        <SubMenu key="11" title="HRManagement" icon={<FiUsers />}>
          <MenuItem onClick={() => goto("/employee_type")}>Employee Type</MenuItem>
          <MenuItem onClick={() => goto("/designation")}>Designation</MenuItem>
          <MenuItem onClick={() => goto("/employee_list")}>Employee List</MenuItem>
          <MenuItem onClick={() => goto("/monthly_salary")}>Monthly Salary</MenuItem>
        </SubMenu>
                
        <SubMenu key="12" title="Account" icon={<FiUsers />}>
          <MenuItem onClick={() => goto("/expense_list")}>Expense List </MenuItem>
          <MenuItem onClick={() => goto("/others_income")}>Others Income</MenuItem>
          <MenuItem onClick={() => goto("/bank_deposit")}>Bank Deposit </MenuItem>
          <MenuItem onClick={() => goto("/bank_withdraw")}>Bank Withdraw </MenuItem>
          <MenuItem onClick={() => goto("/bank_transfer")}>Bank Transfer </MenuItem>
        </SubMenu>
                
        <SubMenu key="13" title="Report" icon={<FiUsers />}>
          <MenuItem onClick={() => goto("/cash_statement_report")}>Cash Statement Report</MenuItem>
          <MenuItem onClick={() => goto("/expire_medicine_report")}>Expire Medicine Report</MenuItem>
          <MenuItem onClick={() => goto("/stock_report")}>Stock Report</MenuItem>
          <MenuItem onClick={() => goto("/sales_report")}>Sales Report</MenuItem>
          <MenuItem onClick={() => goto("/purchases_report")}>Purchases Report</MenuItem>
          <MenuItem onClick={() => goto("/sales_details")}>Sales Details</MenuItem>
          <MenuItem onClick={() => goto("/customer_report")}>Customer Report</MenuItem>
          <MenuItem onClick={() => goto("/supplier_report")}>Supplier Report</MenuItem>
          <MenuItem onClick={() => goto("/customer_due_report")}>Customer Due Report</MenuItem>
          <MenuItem onClick={() => goto("/bank_statement")}>Bank Statement</MenuItem>
          <MenuItem onClick={() => goto("/collection_report")}>Collection Report  </MenuItem>
          <MenuItem onClick={() => goto("/payment_report")}>Payment Report</MenuItem>
          <MenuItem onClick={() => goto("/employee_report")}>Employee Report</MenuItem>
          <MenuItem onClick={() => goto("/employee_expense")}>Employee Expense</MenuItem>
          <MenuItem onClick={() => goto("/employee_ledger")}>Employee Ledger</MenuItem>
          <MenuItem onClick={() => goto("/employee_salary_sheet")}>Employee Salary Sheet</MenuItem>
          <MenuItem onClick={() => goto("/customer_ledger")}>Customer Ledger</MenuItem>
          <MenuItem onClick={() => goto("/supplier_ledger")}>Supplier Ledger</MenuItem>
          <MenuItem onClick={() => goto("/expense_head_report")}>Expense Head Report</MenuItem>
          <MenuItem onClick={() => goto("/head_wise_report")}>Head Wise Report</MenuItem>
          <MenuItem onClick={() => goto("/expense_details_report")}>Expense Details Report</MenuItem>
          <MenuItem onClick={() => goto("/invoice_wise_profit")}>Invoice Wise Profit</MenuItem>
          <MenuItem onClick={() => goto("/net_profit_loss")}>Net Profit Loss</MenuItem>    
        </SubMenu>


        <SubMenu key="14" title="Setting" icon={<FiUsers />}>
          <MenuItem onClick={() => goto("/generic_list")}>Generic List</MenuItem>
          <MenuItem onClick={() => goto("/company_list")}>Company List</MenuItem> 
          <MenuItem onClick={() => goto("/medicine_form")}>Medicine Form</MenuItem>
          <MenuItem onClick={() => goto("/rack_list")}>Rack List</MenuItem> 
          <MenuItem onClick={() => goto("/journal_list")}>Journal List</MenuItem>
          <MenuItem onClick={() => goto("/account_head")}>Account Head</MenuItem> 
          <MenuItem onClick={() => goto("/sub_head")}>Sub Head</MenuItem>
          <MenuItem onClick={() => goto("/bank_setup")}>Bank Setup</MenuItem> 
          <MenuItem onClick={() => goto("/company_setup")}>Company Setup</MenuItem> 
          <MenuItem onClick={() => goto("/database_backup")}>Database Backup</MenuItem> 
          <MenuItem onClick={() => goto("/commit_test")}>Commit Test</MenuItem>   
        </SubMenu>


        <MenuItem
          onClick={() => goto("/sales")}
          key="15"
          icon={<FiTrendingUp />}
        >
          Sales
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Menubar;

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
import PurchasesList from "../Purchases/PurchasesList";

import AddSale from "../Sales/AddSale";
import SalesList from "../Sales/SalesList";

import AddCollection from "../Collection/AddCollection";
import CollectionList from "../Collection/CollectionList";

import AddPayment from "../Payment/AddPayment";
import PaymentList from "../Payment/PaymentList";

import EmployeeType from "../HRManagement/EmployeeType";
import Designation from "../HRManagement/Designation";
import EmployeeList from "../HRManagement/EmployeeList";
import MonthlySalary from "../HRManagement/MonthlySalary";

import ExpenseList from "../Account/ExpenseList";
import OthersIncome from "../Account/OthersIncome";
import BankDeposit from "../Account/BankDeposit";
import BankWithdraw from "../Account/BankWithdraw";
import BankTransfer from "../Account/BankTransfer";

import CashStatementReport from "../Report/CashStatementReport";
import ExpireMedicineReport from "../Report/ExpireMedicineReport";
import StockReport from "../Report/StockReport";
import SalesReport from "../Report/SalesReport";
import PurchasesReport from "../Report/PurchasesReport";
import SalesDetails from "../Report/SalesDetails";
import CustomerReport from "../Report/CustomerReport";
import SupplierReport from "../Report/SupplierReport";
import CustomerDueReport from "../Report/CustomerDueReport";
import BankStatement from "../Report/BankStatement";
import CollectionReport from "../Report/CollectionReport";
import PaymentReport from "../Report/PaymentReport";
import EmployeeReport from "../Report/EmployeeReport";
import EmployeeExpense from "../Report/EmployeeExpense";
import EmployeeLedger from "../Report/EmployeeLedger";
import EmployeeSalarySheet from "../Report/EmployeeSalarySheet";
import CustomerLedger from "../Report/CustomerLedger";
import SupplierLedger from "../Report/SupplierLedger";
import ExpenseHeadReport from "../Report/ExpenseHeadReport";
import HeadWiseReport from "../Report/HeadWiseReport";
import ExpenseDetailsReport from "../Report/ExpenseDetailsReport";
import InvoiceWiseProfit from "../Report/InvoiceWiseProfit";
import NetProfitLoss from "../Report/NetProfitLoss";

import GenericList from "../Setting/GenericList";
import CompanyList from "../Setting/CompanyList";
import MedicineForm from "../Setting/MedicineForm";
import RackList from "../Setting/RackList";
import JournalList from "../Setting/JournalList";
import AccountHead from "../Setting/AccountHead";
import SubHead from "../Setting/SubHead";
import BankSetup from "../Setting/BankSetup";
import CompanySetup from "../Setting/CompanySetup";
import DatabaseBackup from "../Setting/DatabaseBackup";
import CommitTest from "../Setting/CommitTest";

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
        <Route exact path="/user/purchases_list" component={PurchasesList} />

        <Route exact path="/user/add_sale" component={AddSale} />
        <Route exact path="/user/sales_list" component={SalesList} />

        <Route exact path="/user/add_collection" component={AddCollection} />
        <Route exact path="/user/collection_list" component={CollectionList} />

        <Route exact path="/user/add_payment" component={AddPayment} />
        <Route exact path="/user/payment_list" component={PaymentList} />

        <Route exact path="/user/employee_type" component={EmployeeType} />
        <Route exact path="/user/designation" component={Designation} />
        <Route exact path="/user/employee_list" component={EmployeeList} />
        <Route exact path="/user/monthly_salary" component={MonthlySalary} />

        <Route exact path="/user/expense_list" component={ExpenseList} />
        <Route exact path="/user/others_income" component={OthersIncome} />
        <Route exact path="/user/bank_deposit" component={BankDeposit} />
        <Route exact path="/user/bank_withdraw" component={BankWithdraw} />
        <Route exact path="/user/bank_transfer" component={BankTransfer} />

        <Route
          exact
          path="/user/cash_statement_report"
          component={CashStatementReport}
        />
        <Route
          exact
          path="/user/expire_medicine_report"
          component={ExpireMedicineReport}
        />
        <Route exact path="/user/stock_report" component={StockReport} />
        <Route exact path="/user/sales_report" component={SalesReport} />
        <Route
          exact
          path="/user/purchases_report"
          component={PurchasesReport}
        />
        <Route exact path="/user/sales_details" component={SalesDetails} />
        <Route exact path="/user/customer_report" component={CustomerReport} />
        <Route exact path="/user/supplier_report" component={SupplierReport} />
        <Route
          exact
          path="/user/customer_due_report"
          component={CustomerDueReport}
        />
        <Route exact path="/user/bank_statement" component={BankStatement} />
        <Route
          exact
          path="/user/collection_report"
          component={CollectionReport}
        />
        <Route exact path="/user/payment_report" component={PaymentReport} />
        <Route exact path="/user/employee_report" component={EmployeeReport} />
        <Route
          exact
          path="/user/employee_expense"
          component={EmployeeExpense}
        />
        <Route exact path="/user/employee_ledger" component={EmployeeLedger} />
        <Route
          exact
          path="/user/employee_salary_sheet"
          component={EmployeeSalarySheet}
        />
        <Route exact path="/user/customer_ledger" component={CustomerLedger} />
        <Route exact path="/user/supplier_ledger" component={SupplierLedger} />
        <Route
          exact
          path="/user/expense_head_report"
          component={ExpenseHeadReport}
        />
        <Route exact path="/user/head_wise_report" component={HeadWiseReport} />
        <Route
          exact
          path="/user/expense_details_report"
          component={ExpenseDetailsReport}
        />
        <Route
          exact
          path="/user/invoice_wise_profit"
          component={InvoiceWiseProfit}
        />
        <Route exact path="/user/net_profit_loss" component={NetProfitLoss} />

        <Route exact path="/user/generic_list" component={GenericList} />
        <Route exact path="/user/company_list" component={CompanyList} />
        <Route exact path="/user/medicine_form" component={MedicineForm} />
        <Route exact path="/user/rack_list" component={RackList} />
        <Route exact path="/user/journal_list" component={JournalList} />
        <Route exact path="/user/account_head" component={AccountHead} />
        <Route exact path="/user/sub_head" component={SubHead} />
        <Route exact path="/user/bank_setup" component={BankSetup} />
        <Route exact path="/user/company_setup" component={CompanySetup} />
        <Route exact path="/user/database_backup" component={DatabaseBackup} />
        <Route exact path="/user/commit_test" component={CommitTest} />
      </Switch>
    </div>
  );
};

export default UserContent;

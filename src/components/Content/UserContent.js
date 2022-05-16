import React from "react";
import "./Content.css";
import { Route, Switch } from "react-router-dom";

import StoreManagement from "../StoreManagement/StoreManagement";

import UserTypes from "../HRAdmin/UsersType/UserTypes";
import Users from "../HRAdmin/User/Users";

import CustomerList from "../Contact/CustomerList/CustomerList";
import SupplierList from "../Contact/SupplierList/SupplierList";

import AddMedicine from "../Medicine/AddMedicine/AddMedicine";
import Medicine from "../Medicine/Medicine/Medicine";

import AddPurchases from "../Purchases/AddPurchases/AddPurchases";
import PurchasesList from "../Purchases/PurchasesList/PurchasesList";

import AddSale from "../Sales/AddSale/AddSale";
import SalesHistory from "../Sales/SalesHistory/SalesHistory";

import AddCollection from "../Collection/AddCollection/AddCollection";
import CollectionList from "../Collection/CollectionList/CollectionList";

import AddPayment from "../Payment/AddPayment/AddPayment";
import PaymentList from "../Payment/PaymentList/PaymentList";

import EmployeeType from "../HRManagement/EmployeeType/EmployeeType";
import Designation from "../HRManagement/Designation/Designation";
import EmployeeList from "../HRManagement/EmployeeList/EmployeeList";
import MonthlySalary from "../HRManagement/MonthlySalary/MonthlySalary";

import ExpenseList from "../Account/ExpenseList/ExpenseList";
import OthersIncome from "../Account/OthersIncome/OthersIncome";
import BankDeposit from "../Account/BankDeposit/BankDeposit";
import BankWithdraw from "../Account/BankWithdraw/BankWithdraw";
import BankTransfer from "../Account/BankTransfer/BankTransfer";

import CashStatementReport from "../Report/CashStatementReport/CashStatementReport";
import ExpireMedicineReport from "../Report/ExpireMedicineReport/ExpireMedicineReport";
import StockReport from "../Report/StockReport/StockReport";
import SalesReport from "../Report/SalesReport/SalesReport";
import PurchasesReport from "../Report/PurchasesReport/PaymentReport";
import SalesDetails from "../Report/SalesDetails/SalesDetails";
import CustomerReport from "../Report/CustomerReport/CustomerReport";
import SupplierReport from "../Report/SupplierReport/SupplierReport";
import CustomerDueReport from "../Report/CustomerDueReport/CustomerDueReport";
import BankStatement from "../Report/BankStatement/BankStatement";
import CollectionReport from "../Report/CollectionReport/CollectionReport";
import PaymentReport from "../Report/PaymentReport/PurchasesReport";
import EmployeeReport from "../Report/EmployeeReport/EmployeeReport";
import EmployeeExpense from "../Report/EmployeeExpense/EmployeeExpense";
import EmployeeLedger from "../Report/EmployeeLedger/EmployeeLedger";
import EmployeeSalarySheet from "../Report/EmployeeSalarySheet/EmployeeSalarySheet";
import CustomerLedger from "../Report/CustomerLedger/CustomerLedger";
import SupplierLedger from "../Report/SupplierLedger/SupplierLedger";
import ExpenseHeadReport from "../Report/ExpenseHeadReport/ExpenseHeadReport";
import HeadWiseReport from "../Report/HeadWiseReport/HeadWiseReport";
import ExpenseDetailsReport from "../Report/ExpenseDetailsReport/ExpenseDetailsReport";
import InvoiceWiseProfit from "../Report/InvoiceWiseProfit/InvoiceWiseProfit";
import NetProfitLoss from "../Report/NetProfitLoss/NetProfitLoss";

import Generic from "../Setting/Generic/Generic";
import Company from "../Setting/Company/Company";
import MedicineForm from "../Setting/MedicineForm/MedicineForm";
import Rack from "../Setting/Rack/Rack";
import JournalList from "../Setting/JournalList/JournalList";
import AccountHead from "../Setting/AccountHead/AccountHead";
import SubHead from "../Setting/SubHead/SubHead";
import BankSetup from "../Setting/BankSetup/BankSetup";
import CompanySetup from "../Setting/CompanySetup/CompanySetup";
import DatabaseBackup from "../Setting/DatabaseBackup/DatabaseBackup";
import CommitTest from "../Setting/CommitTest/CommitTest";

const UserContent = ({ collapsed }) => {
  return (
    <div className={collapsed ? "content_collapsed" : "content"}>
      <Switch>
        <Route path="/user/store_management" component={StoreManagement} />

        <Route exact path="/user/user_types" component={UserTypes} />
        <Route exact path="/user/users" component={Users} />

        <Route exact path="/user/customer_list" component={CustomerList} />
        <Route exact path="/user/supplier_list" component={SupplierList} />

        <Route exact path="/user/add_medicine" component={AddMedicine} />
        <Route exact path="/user/medicine_list" component={Medicine} />

        <Route exact path="/user/add_purchases" component={AddPurchases} />
        <Route exact path="/user/purchases_list" component={PurchasesList} />

        <Route exact path="/user/add_sale" component={AddSale} />
        <Route exact path="/user/sales_history" component={SalesHistory} />

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
        <Route exact path="/user/expense_details_report" component={ExpenseDetailsReport} />
        <Route exact path="/user/invoice_wise_profit" component={InvoiceWiseProfit}/>
        <Route exact path="/user/net_profit_loss" component={NetProfitLoss} />

        <Route exact path="/user/generic_list" component={Generic} />
        <Route exact path="/user/company_list" component={Company} />
        <Route exact path="/user/medicine_form" component={MedicineForm} />
        <Route exact path="/user/rack_list" component={Rack} />
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

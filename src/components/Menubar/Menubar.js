import React from "react";
import { useHistory } from "react-router-dom";
import "./Menubar.css";
import { Button, Menu } from "antd";
import { logout } from "../../redux/actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import {
  FiChevronLeft,
  FiChevronRight,
  FiTrendingUp,
  FiGrid,
  FiTool,
} from "react-icons/fi";
import { IoBandage, IoLogoStackoverflow } from "react-icons/io5";
import { ImStatsBars, ImUsers } from "react-icons/im";
import {
  AiFillDollarCircle,
  AiOutlineShoppingCart,
  AiTwotoneContainer,
} from "react-icons/ai";
import { GiArrowDunk } from "react-icons/gi";
import { MdAnchor } from "react-icons/md";
import { RiBubbleChartLine } from "react-icons/ri";
import { SiDraugiemdotlv } from "react-icons/si";
import { BiStore } from "react-icons/bi";

const defaultLogoURL =
  "https://media.istockphoto.com/vectors/pharmacy-and-medicine-line-icon-on-gray-background-vector-id1028691062?k=20&m=1028691062&s=612x612&w=0&h=mEkHZQXzsprgKhpktqW72M5xJ99CyNSdJ8LLPRxUjmg=";

const MenuItem = Menu.Item;
const { SubMenu } = Menu;

const Menubar = ({ collapsed, toggleCollapsed }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userLogin?.userInfo?.user);

  const { userType, type } = user;
  const { permission } = userType;

  const goto = (value) => {
    let prefix = "/user";
    history.push(prefix + value);
  };

  const handleLogout = () => {
    dispatch(logout(history));
  };

  return (
    <div className="menubar">
      <div className="menubar-header">
        <div
          className={
            collapsed ? "menubar-header-logo-shrinked" : "menubar-header-logo"
          }
        >
          <img src={defaultLogoURL} alt="logo" />
        </div>
      </div>

      <Button
        className={collapsed ? "shrink-button-shrinked" : "shrink-button"}
        onClick={toggleCollapsed}
      >
        {collapsed ? <FiChevronRight /> : <FiChevronLeft />}
      </Button>
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={["1"]}
        inlineCollapsed={collapsed}
      >
        {permission?.dashboard?.active && (
          <MenuItem
            key="1"
            onClick={() => goto("/dashboard")}
            icon={<FiGrid />}
          >
            Dashboards
          </MenuItem>
        )}

        {type === "ADMIN" && (
          <MenuItem
            key="2"
            onClick={() => goto("/store_management")}
            icon={<BiStore />}
          >
            Store Management
          </MenuItem>
        )}

        {permission?.hrAdmin?.active && (
          <SubMenu key="3" title="HR Admin" icon={<ImUsers />}>
            <MenuItem key={31} onClick={() => goto("/user_types")}>
              User Type
            </MenuItem>
            <MenuItem key={32} onClick={() => goto("/users")}>
              Users
            </MenuItem>
          </SubMenu>
        )}

        {permission?.contact?.active && (
          <SubMenu key="4" title="Contact" icon={<RiBubbleChartLine />}>
            <MenuItem key={41} onClick={() => goto("/customer_list")}>
              Customer List
            </MenuItem>
            <MenuItem key={42} onClick={() => goto("/supplier_list")}>
              Supplier List
            </MenuItem>
          </SubMenu>
        )}

        {permission?.medicine?.active && (
          <SubMenu key="5" title="Medicine" icon={<IoBandage />}>
            <MenuItem key={51} onClick={() => goto("/add_medicine")}>
              Add Medicine
            </MenuItem>
            <MenuItem key={52} onClick={() => goto("/medicine_list")}>
              Medicine List
            </MenuItem>
          </SubMenu>
        )}

        {permission?.purchases?.active && (
          <SubMenu key="6" title="Purchases" icon={<AiOutlineShoppingCart />}>
            <MenuItem key={61} onClick={() => goto("/add_purchases")}>
              Add Purchases
            </MenuItem>
            <MenuItem key={62} onClick={() => goto("/purchases_list")}>
              Purchases List
            </MenuItem>
          </SubMenu>
        )}

        {permission?.sales && (
          <SubMenu key="7" title="Sales" icon={<FiTrendingUp />}>
            <MenuItem key={71} onClick={() => goto("/add_sale")}>
              Add Sale
            </MenuItem>
            <MenuItem key={72} onClick={() => goto("/sales_history")}>
              Sales History
            </MenuItem>
          </SubMenu>
        )}

        {permission?.collection?.active && (
          <SubMenu key="8" title="Collection" icon={<IoLogoStackoverflow />}>
            <MenuItem key={81} onClick={() => goto("/add_collection")}>
              Add Collection
            </MenuItem>
            <MenuItem key={82} onClick={() => goto("/collection_list")}>
              Collection List
            </MenuItem>
          </SubMenu>
        )}

        {permission?.payment?.active && (
          <SubMenu key="9" title="Payment" icon={<ImStatsBars />}>
            <MenuItem key={91} onClick={() => goto("/add_payment")}>
              Add Payment
            </MenuItem>
            <MenuItem key={92} onClick={() => goto("/payment_list")}>
              Payment List
            </MenuItem>
          </SubMenu>
        )}

        <MenuItem
          key="10"
          onClick={() => goto("/sales")}
          icon={<GiArrowDunk />}
        >
          SalesReturn*
        </MenuItem>

        <MenuItem key="11" onClick={() => goto("/sales")} icon={<MdAnchor />}>
          StockMatching*
        </MenuItem>

        {permission?.hrManagement?.active && (
          <SubMenu key="12" title="HRManagement" icon={<SiDraugiemdotlv />}>
            <MenuItem key={121} onClick={() => goto("/employee_type")}>
              Employee Type
            </MenuItem>
            <MenuItem key={122} onClick={() => goto("/designation")}>
              Designation
            </MenuItem>
            <MenuItem key={123} onClick={() => goto("/employee_list")}>
              Employee List
            </MenuItem>
            <MenuItem key={124} onClick={() => goto("/monthly_salary")}>
              Monthly Salary
            </MenuItem>
          </SubMenu>
        )}

        {permission?.account?.active && (
          <SubMenu key="13" title="Account" icon={<AiFillDollarCircle />}>
            <MenuItem key={131} onClick={() => goto("/expense_list")}>
              Expense List{" "}
            </MenuItem>
            <MenuItem key={132} onClick={() => goto("/others_income")}>
              Others Income
            </MenuItem>
            <MenuItem key={133} onClick={() => goto("/bank_deposit")}>
              Bank Deposit{" "}
            </MenuItem>
            <MenuItem key={134} onClick={() => goto("/bank_withdraw")}>
              Bank Withdraw{" "}
            </MenuItem>
            <MenuItem key={135} onClick={() => goto("/bank_transfer")}>
              Bank Transfer{" "}
            </MenuItem>
          </SubMenu>
        )}

        {permission?.report?.active && (
          <SubMenu key="14" title="Report" icon={<AiTwotoneContainer />}>
            <MenuItem onClick={() => goto("/cash_statement_report")}>
              Cash Statement Report
            </MenuItem>
            <MenuItem key={141} onClick={() => goto("/expire_medicine_report")}>
              Expire Medicine Report
            </MenuItem>
            <MenuItem key={142} onClick={() => goto("/stock_report")}>
              Stock Report
            </MenuItem>
            <MenuItem key={143} onClick={() => goto("/sales_report")}>
              Sales Report
            </MenuItem>
            <MenuItem key={144} onClick={() => goto("/purchases_report")}>
              Purchases Report
            </MenuItem>
            <MenuItem key={145} onClick={() => goto("/sales_details")}>
              Sales Details
            </MenuItem>
            <MenuItem key={146} onClick={() => goto("/customer_report")}>
              Customer Report
            </MenuItem>
            <MenuItem key={147} onClick={() => goto("/supplier_report")}>
              Supplier Report
            </MenuItem>
            <MenuItem key={148} onClick={() => goto("/customer_due_report")}>
              Customer Due Report
            </MenuItem>
            <MenuItem key={149} onClick={() => goto("/bank_statement")}>
              Bank Statement
            </MenuItem>
            <MenuItem key={1410} onClick={() => goto("/collection_report")}>
              Collection Report{" "}
            </MenuItem>
            <MenuItem key={1411} onClick={() => goto("/payment_report")}>
              Payment Report
            </MenuItem>
            <MenuItem key={1412} onClick={() => goto("/employee_report")}>
              Employee Report
            </MenuItem>
            <MenuItem key={1413} onClick={() => goto("/employee_expense")}>
              Employee Expense
            </MenuItem>
            <MenuItem key={1414} onClick={() => goto("/employee_ledger")}>
              Employee Ledger
            </MenuItem>
            <MenuItem key={1415} onClick={() => goto("/employee_salary_sheet")}>
              Employee Salary Sheet
            </MenuItem>
            <MenuItem key={1416} onClick={() => goto("/customer_ledger")}>
              Customer Ledger
            </MenuItem>
            <MenuItem key={1417} onClick={() => goto("/supplier_ledger")}>
              Supplier Ledger
            </MenuItem>
            <MenuItem key={1418} onClick={() => goto("/expense_head_report")}>
              Expense Head Report
            </MenuItem>
            <MenuItem key={1419} onClick={() => goto("/head_wise_report")}>
              Head Wise Report
            </MenuItem>
            <MenuItem
              key={1420}
              onClick={() => goto("/expense_details_report")}
            >
              Expense Details Report
            </MenuItem>
            <MenuItem key={1421} onClick={() => goto("/invoice_wise_profit")}>
              Invoice Wise Profit
            </MenuItem>
            <MenuItem key={1422} onClick={() => goto("/net_profit_loss")}>
              Net Profit Loss
            </MenuItem>
          </SubMenu>
        )}

        <SubMenu key="15" title="Setting" icon={<FiTool />}>
          <MenuItem key={151} onClick={() => goto("/generic_list")}>
            Generic List
          </MenuItem>
          <MenuItem key={152} onClick={() => goto("/company_list")}>
            Company List
          </MenuItem>
          <MenuItem key={153} onClick={() => goto("/medicine_form")}>
            Medicine Form
          </MenuItem>
          <MenuItem key={154} onClick={() => goto("/rack_list")}>
            Rack List
          </MenuItem>
          <MenuItem key={155} onClick={() => goto("/journal_list")}>
            Journal List
          </MenuItem>
          <MenuItem key={156} onClick={() => goto("/account_head")}>
            Account Head
          </MenuItem>
          <MenuItem key={157} onClick={() => goto("/sub_head")}>
            Sub Head
          </MenuItem>
          <MenuItem key={158} onClick={() => goto("/bank_setup")}>
            Bank Setup
          </MenuItem>
          <MenuItem key={159} onClick={() => goto("/company_setup")}>
            Company Setup
          </MenuItem>
          <MenuItem key={1510} onClick={() => goto("/database_backup")}>
            Database Backup
          </MenuItem>
          <MenuItem key={1511} onClick={() => goto("/commit_test")}>
            Commit Test
          </MenuItem>
        </SubMenu>
        <MenuItem key="16" icon={<FiGrid />} onClick={handleLogout}>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Menubar;

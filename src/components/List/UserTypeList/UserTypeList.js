import React, { useEffect } from "react";
import { Table, Tag, Space, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUserType,
  getUserType,
} from "../../../redux/actions/hrAdminActions";

const UserTypeList = ({ loadToggler, setLoadToggler }) => {
  const dispatch = useDispatch();
  const { loading, userTypeList } = useSelector((state) => state.getUserType);

  const deleteUser = (id) => {
    dispatch(deleteUserType({ id }));
  };

  useEffect(() => {
    dispatch(getUserType());
    setLoadToggler(!loadToggler);
  }, []);

  const columns = [
    {
      title: "User Type",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },

    {
      title: "status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        let color = "geekblue";
        if (status === "INACTIVE") {
          color = "volcano";
        } else if (status === "ACTIVE") {
          color = "green";
        }
        return (
          <Tag color={color} key={status}>
            {status.toUpperCase()}
          </Tag>
        );
      },
    },
    {
      title: "Action",
      key: "_id",
      render: (id) => (
        <Space size="middle">
          {/* <a>Edit</a> */}
          <a onClick={() => deleteUser(id)}>Delete</a>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={userTypeList} />
    </>
  );
};

export default UserTypeList;

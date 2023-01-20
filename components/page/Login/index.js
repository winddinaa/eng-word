import React from "react";
import { useSelector, useDispatch } from "react-redux";

//component
import { Space, Table, Button, Modal, Input } from "antd";
import styled from "styled-components";

import { Stack } from "@mui/system";

import CardMain from "components/CardMain";

//utils
import {
  getPersonal,
  updatePersonal,
  setInput,
  clearInput,
  setChoose,
  addPersonal,
  deletePersonal,
} from "redux/features/personal/personalSlice";

const Text = styled("a")(({}) => ({
  color: "black",
  "&:hover": {
    color: "red",
  },
}));

const LoginPage = () => {
  const dispatch = useDispatch();
  const { personal, inputValue, choose } = useSelector(
    (state) => state.personal
  );
  const [isModalOpen, setIsModalOpen] = React.useState({
    isOpen: false,
    title: "",
  });
  React.useEffect(() => {
    dispatch(getPersonal());
    return () => {
      return;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showModal = (type) => {
    if (type === "add") {
      setIsModalOpen({ isOpen: true, title: "add" });
    } else setIsModalOpen({ isOpen: true, title: "update" });
  };

  const handleOk = () => {
    const onSuccess = () => {
      dispatch(getPersonal());
    };
    if (isModalOpen.title === "add") {
      dispatch(
        addPersonal({
          body: { name: inputValue },
          onSuccess,
        })
      );
    } else if (isModalOpen.title === "update") {
      dispatch(
        updatePersonal({
          body: { name: inputValue },
          params: choose,
          onSuccess,
        })
      );
    }
    setIsModalOpen({ isOpen: false, title: "" });
    dispatch(clearInput());
  };

  const handleCancel = () => {
    dispatch(clearInput());
    setIsModalOpen({ isOpen: false, title: "" });
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "CreatedAt",
      dataIndex: "createdAt",
      key: "createdAt",
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a
            onClick={() => {
              dispatch(setInput(record?.name));
              dispatch(setChoose(record?.id));
              showModal("update");
            }}
          >
            Edit
          </a>
          <Text
            onClick={() => {
              const onSuccess = () => {
                dispatch(getPersonal());
              };
              dispatch(
                deletePersonal({
                  params: record?.id,
                  onSuccess,
                })
              );
            }}
          >
            Delete
          </Text>
        </Space>
      ),
    },
  ];

  return (
    <CardMain>
      <Stack p="40px" spacing={2}>
        <Modal
          title={isModalOpen.title}
          open={isModalOpen.isOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Input
            placeholder="Name"
            value={inputValue}
            onChange={(value) => dispatch(setInput(value.target.value))}
          />
        </Modal>
        <Button
          onClick={() => showModal("add")}
          style={{
            width: "100px",
            backgroundColor: "#1677ff",
            color: "white",
            padding: "4px",
          }}
        >
          Add people
        </Button>
        <Table columns={columns} dataSource={personal} rowKey="id" />
      </Stack>
    </CardMain>
  );
};

export default LoginPage;

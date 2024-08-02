import "../../index.css";
import { useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Col, Input, Row, Space, Table } from "antd";
import Highlighter from "react-highlight-words";
import transactions from "../../Constants/TransactionData.json";
import moment from "moment-jalaali";
import JalaliDateFormatter from "../../Components/DateFormater";
import { AmountFormater } from "../../Components/AmountFormater";
import TransactionStatus from "../../Components/TransactionStatus";
import { CopyableText } from "../../Components/CopyableText";

moment.loadPersian({ usePersianDigits: true });
export const MockPage = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, close }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1677ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  
  const columns = [
    {
      title: "شماره تراکنش",
      dataIndex: "trackId",
      key: "trackId",
      width: "20%",
      ...getColumnSearchProps("trackId"),
      render: (text) => <CopyableText text={text} />,
    },
    {
      title: "وضعیت تراکنش",
      dataIndex: "status",
      key: "status",
      width: "20%",
      render: (text) => <TransactionStatus status={text} />,
    },
    {
      title: "تاریخ پرداخت",
      dataIndex: "paidAt",
      key: "paidAt",
      width: "20%",
      render: (text) => <JalaliDateFormatter date={text} />, // استفاده از کامپوننت جدید
    },
    {
      title: "مبلغ",
      dataIndex: "amount",
      key: "amount",
      width: "20%",
      render: (text) => <AmountFormater amount={text} />,
    },

    {
      title: "شماره کارت",
      dataIndex: "cardNumber",
      key: "cardNumber",
      width: "20%",
      ...getColumnSearchProps("cardNumber"),
    },
  ];

  const data = transactions.data;

  return (
    <>
      <Row align="middle" justify="space-around" className="h-screen">
        <Col span={20}>
          <Table
            columns={columns}
            dataSource={data}
            pagination={{
              position: ["bottomCenter"],
              pageSize: 5,
            }}
            size="middle"
            footer={() => `تعداد نتایج : ${data.length}`}
          />
        </Col>
      </Row>
    </>
  );
};

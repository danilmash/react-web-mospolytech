import React, { useState, useEffect } from "react";
import { Button, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import axios, { AxiosResponse } from "axios";

interface Transaction {
  hash: string;
  timestamp: string;
  value: string;
  from: string;
  to: string;
}

interface ApiResponse {
  result: Transaction[];
  message: string;
}

interface TransactionTableProps {
  address: string;
}

const TransactionTable: React.FC<TransactionTableProps> = ({ address }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [page, setPage] = useState<number>(1);
  const fetchData = async (page: number) => {
    try {
      const response: AxiosResponse<ApiResponse> = await axios.get("https://api.etherscan.io/api", {
        params: {
          module: "account",
          action: "txlist",
          address,
          startblock: 0,
          endblock: 99999999,
          page,
          offset: 10,
          sort: "desc",
          apikey: "BVTYZ11RT8UYMWFPNQHKZAKVKIWBTV52UQ",
        },
      });
      const { result, message } = response.data;
      if (message === "OK") {
        setTransactions(result);
      } else {
        console.error("Error fetching data:", message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const columns: ColumnsType<Transaction> = [
    {
      title: "Hash",
      dataIndex: "hash",
      key: "hash",
      ellipsis: {
        showTitle: false,
      },
    },
    {
      title: "Value",
      dataIndex: "value",
      key: "value",
      ellipsis: {
        showTitle: false,
      },
    },
    {
      title: "From",
      dataIndex: "from",
      key: "from",
      ellipsis: {
        showTitle: false,
      },
    },
    {
      title: "To",
      dataIndex: "to",
      key: "to",
      ellipsis: {
        showTitle: false,
      },
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={transactions} pagination={false} />
      <div className="table__page-buttons">
        <Button
          onClick={() => {
            setPage(page - 1);
          }}
          disabled={!(page - 1)}
        >
          Назад
        </Button>
        <p className="table__page-count">{page}</p>
        <Button
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Вперед
        </Button>
      </div>
    </>
  );
};

export default TransactionTable;

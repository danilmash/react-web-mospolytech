import React, { useEffect, useState } from "react";
import { Table, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import axios from "axios";
import styled from "styled-components";

const MyTable = styled(Table)`
  color: black;
`;

interface DataType {
  name: string;
  country: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Country",
    dataIndex: "country",
    key: "country",
  },
];

function TableComponent() {
  const LIMIT_LIST_SCHOOL = 10;
  const [page, setPage] = useState<number>(1);
  const [dataSource, setDataSource] = useState<DataType[]>();
  const getUniversity = async (page: number, limit: number) => {
    const response = await axios.get(
      `http://universities.hipolabs.com/search?offset=${(page - 1) * limit}&limit=${limit}`,
    );
    setDataSource(response.data);
  };
  useEffect(() => {
    getUniversity(page, LIMIT_LIST_SCHOOL);
  }, [page]);

  return (
    <>
      <MyTable dataSource={dataSource} columns={columns} pagination={false} />
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
}

export default TableComponent;

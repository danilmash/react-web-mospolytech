import React from 'react';
import { Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  key: string;
  name: string;
  author: string;
  pages: number;
  tags: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Author',
    dataIndex: 'author',
    key: 'author',
  },
  {
    title: 'Pages',
    dataIndex: 'pages',
    key: 'pages',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = 'green'
          if (tag === 'unavailable') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
];

const data: DataType[] = [
    {
        key: '1',
        name: "1984",
        author: "George Orwell",
        pages: 328,
        tags: ["available"]
      },
      {
        key: '2',
        name: "To Kill a Mockingbird",
        author: "Harper Lee",
        pages: 336,
        tags: ["available"]
      },
      {
        key: '3',
        name: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        pages: 180,
        tags: ["unavailable"]
      },
      {
        key: '4',
        name: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        pages: 320,
        tags: ["available"]
      }
];

function TableComponent() {
    return (
        <>
            <Table columns={columns} dataSource={data} />;
        </>
    )
}

export default TableComponent;
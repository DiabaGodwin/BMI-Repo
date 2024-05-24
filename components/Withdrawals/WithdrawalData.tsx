import React, { useRef, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import type { InputRef, TableColumnsType, TableColumnType } from 'antd';
import { Button, Input, Space, Table } from 'antd';
import type { FilterDropdownProps } from 'antd/es/table/interface';
import Highlighter from 'react-highlight-words';

interface DataType {
  key: string;
  name: string;
  amount: number;
  accountNumber: string;
  dateTime: string;
  method:string;
  accountBalance:number;
  teller:string;
}

type DataIndex = keyof DataType;

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    amount: 232,
    accountNumber: '15456254454515',
    dateTime: '2021-09-01',
    method:'Momo',
    accountBalance: 1000,
    teller:'John Doe'
  },
  {
    key: '15',
    name: 'John Brown',
    amount: 232,
    accountNumber: '15456254454515',
    dateTime: '2021-09-01',
    method:'Momo',
    accountBalance: 1000,
    teller:'John Doe'
  }
  ,
  {
    key: '2',
    name: 'John Brown',
    amount: 232,
    accountNumber: '15456254454515',
    dateTime: '2021-09-01',
    method:'bank',
    accountBalance: 1000,
    teller:'John Doe'
  }
  ,
  {
    key: '3',
    name: 'John Brown',
    amount: 232,
    accountNumber: '15456254454515',
    dateTime: '2021-09-01',
    method:'bank',
    accountBalance: 1000,
    teller:'John Doe'
  }
  ,
  {
    key: '4',
    name: 'John Brown',
    amount: 232,
    accountNumber: '15456254454515',
    dateTime: '2021-09-01',
    method:'bank',
    accountBalance: 1000,
    teller:'John Doe'
  }
  ,
  {
    key: '5',
    name: 'John Brown',
    amount: 232,
    accountNumber: '15456254454515',
    dateTime: '2021-09-01',
    method:'bank',
    accountBalance: 1000,
    teller:'John Doe'
  }
  ,
  {
    key: '6',
    name: 'John Brown',
    amount: 232,
    accountNumber: '15456254454515',
    dateTime: '2021-09-01',
    method:'cash',
    accountBalance: 1000,
    teller:'John Doe'
  }
  ,
  {
    key: ' 7',
    name: 'John Brown',
    amount: 232,
    accountNumber: '15456254454515',
    dateTime: '2021-09-01',
    method:'cash',
    accountBalance: 1000,
    teller:'John Doe'
  }
  ,
  {
    key: '8',
    name: 'John Brown',
    amount: 232,
    accountNumber: '15456254454515',
    dateTime: '2021-09-01',
    method:'cash',
    accountBalance: 1000,
    teller:'John Doe'
  }
  ,
  {
    key: '9',
    name: 'John Brown',
    amount: 232,
    accountNumber: '15456254454515',
    dateTime: '2021-09-01',
    method:'cash',
    accountBalance: 1000,
    teller:'John Doe'
  }
  ,
  {
    key: '10',
    name: 'John Brown',
    amount: 232,
    accountNumber: '15456254454515',
    dateTime: '2021-09-01',
    method:'cash',
    accountBalance: 1000,
    teller:'John Doe'
  }
  ,
  {
    key: '11',
    name: 'John Brown',
    amount: 232,
    accountNumber: '15456254454515',
    dateTime: '2021-09-01',
    method:'cash',
    accountBalance: 1000,
    teller:'John Doe'
  }
  ,
  {
    key: '12',
    name: 'John Brown',
    amount: 232,
    accountNumber: '15456254454515',
    dateTime: '2021-09-01',
    method:'cash',
    accountBalance: 1000,
    teller:'John Doe'
  }
  ,
  {
    key: '13',
    name: 'John Brown',
    amount: 232,
    accountNumber: '15456254454515',
    dateTime: '2021-09-01',
    method:'cash',
    accountBalance: 1000,
    teller:'John Doe'
  }
  
];

const WithdrawalData = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef<InputRef>(null);

  const handleSearch = (
    selectedKeys: string[],
    confirm: FilterDropdownProps['confirm'],
    dataIndex: DataIndex,
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex: DataIndex): TableColumnType<DataType> => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div style={{ padding: 8, backgroundColor:'gray'}} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText((selectedKeys as string[])[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
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
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const columns: TableColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '10%',
      ...getColumnSearchProps('name'),
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '10%',
      ...getColumnSearchProps('name'),
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      ...getColumnSearchProps('amount'),
    },
    {
      title: 'Account Number',
      dataIndex: 'accountNumber',
      key: 'accountNumber',
      ...getColumnSearchProps('accountNumber'),
    },
    {
      title: 'Withdrawal Date',
      dataIndex: 'dateTime',
      key: 'dateTime',
      ...getColumnSearchProps('dateTime'),
    },
    {
      title: 'Method',
      dataIndex: 'method',
      key: 'method',
      ...getColumnSearchProps('method'),
    },
    {
      title: 'Acc Balance',
      dataIndex: 'accountBalance',
      key: 'accountBalance',
      ...getColumnSearchProps('accountBalance'),
    },
    {
      title: 'Telller',
      dataIndex: 'teller',
      key: 'teller',
      ...getColumnSearchProps('teller'),
    },
  ];

  return <Table columns={columns} dataSource={data} />;
};

export default WithdrawalData;
"use client"
import React, { useEffect, useRef, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import type { InputRef, TableColumnsType, TableColumnType } from 'antd';
import { Button, Input, Space, Table } from 'antd';
import type { FilterDropdownProps } from 'antd/es/table/interface';
import Highlighter from 'react-highlight-words';

interface DataType {
  key: string;
  firstname: string;
  lastname: string;
  phone: string;
  dateOfBirth?: Date;
  accountNumber: string;
  customerIdType: string;
  customerIdNumber: string;
  accountBalance: string;
  nextOfKinFirstName?: string;
  nextOfKinLastName?: string;
  nextOfKinIdType?: string;
  nextOfKinIdNumber: string;
}

const CustomerDetailsNew = () => {
  const [customers, setCustomers] = useState<DataType[]>([]);
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef<InputRef>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('api/account');
        const result = await response.json();
        const transformedData = result.map((result: any, index: number) => ({
          key: (index + 1).toString(),
          firstname: result.firstname,
          lastname: result.lastname,
          phone: result.phone,
          dateOfBirth: new Date(result.dateOfBirth),
          accountNumber: result.accountNumber,
          customerIdType: result.customerIdType,
          customerIdNumber: result.customerIdNumber,
          accountBalance: result.accountBalance,
          nextOfKinFirstName: result.nextOfKinFirstName,
          nextOfKinLastName: result.nextOfKinLastName,
          nextOfKinIdType: result.nextOfKinIdType,
          nextOfKinIdNumber: result.nextOfKinIdNumber,
        }));
        setCustomers(transformedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (
    selectedKeys: string[],
    confirm: FilterDropdownProps['confirm'],
    dataIndex: keyof DataType,
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex: keyof DataType): TableColumnType<DataType> => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div style={{ padding: 8, backgroundColor: 'gray' }} onKeyDown={(e) => e.stopPropagation()}>
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
            Close
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
      title: 'Firstname',
      dataIndex: 'firstname',
      key: 'firstname',
      width: '10%',
      ...getColumnSearchProps('firstname'),
    },
    {
      title: 'Lastname',
      dataIndex: 'lastname',
      key: 'lastname',
      width: '10%',
      ...getColumnSearchProps('lastname'),
      sorter: (a, b) => a.lastname.length - b.lastname.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
      ...getColumnSearchProps('phone'),
    },
    {
      title: 'Acc Number',
      dataIndex: 'accountNumber',
      key: 'accountNumber',
      ...getColumnSearchProps('accountNumber'),
    },
    {
      title: 'DateOfBirth',
      dataIndex: 'dateOfBirth',
      key: 'dateOfBirth',
      ...getColumnSearchProps('dateOfBirth'),
    },
    {
      title: 'Cus IdType',
      dataIndex: 'customerIdType',
      key: 'customerIdType',
      ...getColumnSearchProps('customerIdType'),
    },
    {
      title: 'Cus IdNumber',
      dataIndex: 'customerIdNumber',
      key: 'customerIdNumber',
      ...getColumnSearchProps('customerIdNumber'),
    },
    {
      title: 'Acc Balance',
      dataIndex: 'accountBalance',
      key: 'accountBalance',
      ...getColumnSearchProps('accountBalance'),
    },
    {
      title: 'NextOfKinFirstName',
      dataIndex: 'nextOfKinFirstName',
      key: 'nextOfKinFirstName',
      ...getColumnSearchProps('nextOfKinFirstName'),
    },
    {
      title: 'NextOfKinLastName',
      dataIndex: 'nextOfKinLastName',
      key: 'nextOfKinLastName',
      ...getColumnSearchProps('nextOfKinLastName'),
    },
    {
      title: 'NextOfKinIdType',
      dataIndex: 'nextOfKinIdType',
      key: 'nextOfKinIdType',
      ...getColumnSearchProps('nextOfKinIdType'),
    },
    {
      title: 'NextOfKinIdNumber',
      dataIndex: 'nextOfKinIdNumber',
      key: 'nextOfKinIdNumber',
      ...getColumnSearchProps('nextOfKinIdNumber'),
    },
  ];

  return <Table columns={columns} dataSource={customers} />;
};

export default CustomerDetailsNew;

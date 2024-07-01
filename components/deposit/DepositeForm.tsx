'use client'
import React, { useState } from 'react'
import { ExclamationCircleOutlined } from '@ant-design/icons';

import {
    Button,
    Checkbox,
    Form,
    Input,
    Select,
    Modal,
    Space
  } from 'antd';
const DepositForm = () => {
    const [componentDisabled, setComponentDisabled] = useState<boolean>(true);
    const options = [
        { value: '14254956222652025', label: '14254956222652025' },
        { value: '14254956222652052', label: '14254956222652052' },
        { value: '14254956222652027', label: '14254956222652027' }
      ];
    const handleChange = (value:any) => {
        console.log(`selected ${value}`);
      }
    const handleSearch = (value:any) => {
        console.log('search:', value);
      }
    const [open, setOpen] = useState(false);

    const showModal = () => {
        setOpen(true);
    };

    const hideModal = () => {
        setOpen(false);
    };

    //Modal
    const [modal, contextHolder] = Modal.useModal();
    const confirm = () => {
        modal.confirm({
          title: 'Confirm',
          icon: <ExclamationCircleOutlined />,
          content: 'Ar you sure you want to withdraw this amount?',
          okText: 'Ok',
          cancelText: 'Cancel',
        });
      };
      
  return (
    <div>
        <Checkbox
        checked={componentDisabled}
        onChange={(e) => setComponentDisabled(e.target.checked)}
      >
        Form disabled
      </Checkbox>
      <div className="border-4 p-2 rounded-md">
      <Form labelCol={{ span: 5 }} wrapperCol={{ span: 14 }} layout="inline" disabled={componentDisabled} style={{ maxWidth: 14000, display: 'flex', flexWrap: 'nowrap', gap: '10px', fontSize: '18px' }}
    >
        <Form.Item label="Account Number" style={{ flex: '1 1 auto' }}>
            <Select
            showSearch
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={handleChange}
            onSearch={handleSearch}
            filterOption={(input, option) =>
                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
            options={options}>

            </Select>
        </Form.Item>

      <Form.Item label="Amount" style={{ flex: '1 1 auto' }}>
        <Input style={{ fontSize: '18px' }} />
      </Form.Item>
      <Form.Item label="Method" style={{ flex: '1 1 auto' }}>
          <Select >
            <Select.Option value="Momo">Momo</Select.Option>
            <Select.Option value="Cash">Cash</Select.Option>
            <Select.Option value="Bank">Bank</Select.Option>
          </Select>
        </Form.Item>
      <Form.Item style={{ flex: '0 1 auto' }}>
        <Space>
            <Button type="primary" onClick={confirm} htmlType="submit" style={{ fontSize: '18px', paddingBottom:'20px' }}
            >
            Submit
            </Button>
        </Space>
       {contextHolder}
        </Form.Item>
        </Form>

        {/* <Modal
            title="Withdrawal Comfirmation"
            open={open}
            onOk={hideModal}
            onCancel={hideModal}
            okText="Ok"
            cancelText="Cancel"
        >
            <p>Are you sure you want to withdraw this amount?</p>
        </Modal> */}
      </div>
    </div>
  )
}

export default DepositForm

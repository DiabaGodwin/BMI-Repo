'use client'
import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Cascader,
  Checkbox,
  ColorPicker,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
} from 'antd';

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

export const AddCustomerForm= () => {
  const [componentDisabled, setComponentDisabled] = useState<boolean>(true);

  return (
    <>
    
      <Checkbox
        checked={componentDisabled}
        onChange={(e) => setComponentDisabled(e.target.checked)}
      >
        Form disabled
      </Checkbox>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        disabled={componentDisabled}
        style={{ maxWidth: 600 }}
      >
        {/* <Form.Item label="Checkbox" name="disabled" valuePropName="checked">
          <Checkbox>Checkbox</Checkbox>
        </Form.Item> */}
        <h3 className='pt-2 pb-2'>Personal Infomation</h3>
        <Form.Item label="Firstname">
          <Input />
        </Form.Item>
        <Form.Item label="Lastname">
          <Input />
        </Form.Item>
        <Form.Item label="Middlename">
          <Input />
        </Form.Item>
        <Form.Item label="Phone">
          <Input />
        </Form.Item>
        <Form.Item label="Email">
          <Input />
        </Form.Item>
        <Form.Item label="Address">
          <Input />
        </Form.Item>
        <Form.Item label="Date of Birth">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload action="/upload.do" listType="picture-card">
            <button style={{ border: 0, background: 'none' }} type="button">
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </button>
          </Upload>
        </Form.Item>
        <h3 className='pt-2 pb-2'>Next of Kin Infomation</h3>
        <Form.Item label="Firstname">
          <Input />
        </Form.Item>
        <Form.Item label="Lastname">
          <Input />
        </Form.Item>
        <Form.Item label="Phone">
          <Input />
        </Form.Item>
        <Form.Item label="Email">
          <Input />
        </Form.Item>


        <h3 className='pt-2 pb-2'>Identification Documents</h3>

        <Form.Item label="Select">
          <Select>
            <Select.Option value="Voters ID">Voters ID</Select.Option>
            <Select.Option value="Ghana Crad">Ghana Crad</Select.Option>
            <Select.Option value="Drivers Lincense">Drivers Lincense</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Id Number">
          <Input />
        </Form.Item>
        <Form.Item className='mr-3'>
        <Button type="primary">Submit</Button>
      </Form.Item>
      </Form>
    </>
  );
};


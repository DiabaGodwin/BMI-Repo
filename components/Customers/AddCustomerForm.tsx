"use client";
import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import axios from "axios";
import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  Input,
  Select,
  Upload,
  UploadFile,
} from "antd";
import { UploadChangeParam } from "antd/es/upload";

type Customer ={
  id: string;
  email: string;
  middlename?: string | null;
  firstname: string;
  lastname: string;
  phone: string;
  address: string;
  accountNumber: string;
  customerIdType: string;
  customerIdDocuments?: string | null;
  customerIdNumber: string;
  dateOfBirth?: Date | null;
  nextOfKinFirstName?: string | null;
  nextOfKinLastName?: string | null;
  nextOfKinPhone?: string | null;
  nextOfKinEmail?: string | null;
  nextOfKinIdType?: string | null;
  nextOfKinIdNumber: string;
  accountBalance: string;
  createdAt: Date;
  updatedAt: Date;
}

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};


export const AddCustomerForm = () => {
  const [form] = Form.useForm();
  const [imageUrl, setimageUrl] = useState<UploadFile<any>>();
  const [componentDisabled, setComponentDisabled] = useState<boolean>(true);
  const onImageChange =(e:UploadChangeParam<UploadFile<any>>)=>{
    setimageUrl(e.file)
  } 

  async function CreateNewAccount(data: Customer) {
    try {
      //const formData = new FormData();
      //const formValues = Object.fromEntries(formData.entries());
      //Object.keys(data).forEach((key)=>formData.append(key,data[key as keyof customer]as string))
      //formData.append("customerIdDocuments",imageUrl as unknown as  Blob)
    
     //formData.append()
      console.log("@#", data);
      await axios.post("api/account", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Checkbox
        checked={componentDisabled}
        onChange={(e) => setComponentDisabled(e.target.checked)}
      >
        Form disabled
      </Checkbox>
      <Form
        onFinish ={CreateNewAccount}
        form={form}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        disabled={componentDisabled}
        style={{ maxWidth: 800 }}
        autoComplete="on"
      >
        <h3 className="pt-2 pb-2">Personal Infomation</h3>
        <Form.Item label="Firstname" name="firstname">
          <Input required  type="text" />
        </Form.Item>
        <Form.Item label="Lastname" name="lastname">
          <Input required  type="text" />
        </Form.Item>
        <Form.Item label="Middlename" name="middlename">
          <Input  type="text" />
        </Form.Item>
        <Form.Item label="Phone" name={'phone'}>
          <Input required type="tel"  />
        </Form.Item>
        <Form.Item label="Email" name={'email'}>
          <Input required type="email"  />
        </Form.Item>
        <Form.Item label="Address" name={'address'}>
          <Input required type="text"  />
        </Form.Item>
        <Form.Item label="Date of Birth" name={'dateOfBirth'}>
          <DatePicker required  />
        </Form.Item>
        <Form.Item label="ID Type" name={'customerIdType'}>
          <Select defaultValue="">
            <Select.Option value="Voters ID">Voters ID</Select.Option>
            <Select.Option value="Ghana Crad">Ghana Crad</Select.Option>
            <Select.Option value="Drivers Lincense">
              Drivers Lincense
            </Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="customer ID Number" name={'customerIdNumber'}>
          <Input required type="text"  />
        </Form.Item>
        <Form.Item
          label="Id"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload onChange={onImageChange} action="/upload.do" listType="picture-card" name="identificationCard">
            <button style={{ border: 0, background: "none" }} type="button">
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </button>
          </Upload>
        </Form.Item>
        <h3 className="pt-2 pb-2">Next of Kin Infomation</h3>
        <Form.Item label="Firstname" name="nextOfKinFirstName" >
          <Input required  type="text" />
        </Form.Item>
        <Form.Item label="Lastname" name="nextOfKinLastName">
          <Input required  type="text"/>
        </Form.Item>
        <Form.Item label="Phone" name="nextOfKinPhone">
          <Input required  type="text" />
        </Form.Item>
        <Form.Item label="Email" name="nextOfKinEmail">
          <Input required  type="email" />
        </Form.Item>
        <h3 className="pt-2 pb-2">Identification Documents</h3>
        <Form.Item label="ID Type" name="">
          <Select  defaultValue="">
            <Select.Option value="Voters ID">Voters ID</Select.Option>
            <Select.Option value="Ghana Crad">Ghana Crad</Select.Option>
            <Select.Option value="Drivers Lincense">
              Drivers Lincense
            </Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Id Number" name="nextOfKinIdNumber">
          <Input required  type="text"/>
        </Form.Item>
        <Form.Item className="mr-3">
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

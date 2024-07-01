"use client";
import React, { useState } from "react";
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

type User = {
  id: String;
  email: String;
  firstname: String;
  lastname: String;
  phone: String;
  address: String;
};
type UserAuth = {
  userId: String;
  email: String;
  role: String;
  password: String;
};


export const AddUserForm = () => {
  const [form] = Form.useForm();
  const [componentDisabled, setComponentDisabled] = useState<boolean>(true);
  async function CreateNewUser(data: User) {
    try {
      console.log("@#", data);
      await axios.post("api/", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.log(error);
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
        onFinish={CreateNewUser}
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
          <Input required type="text" />
        </Form.Item>
        <Form.Item label="Lastname" name="lastname">
          <Input required type="text" />
        </Form.Item>
        <Form.Item label="Phone" name={"phone"}>
          <Input required type="tel" />
        </Form.Item>
        <Form.Item label="Email" name={"email"}>
          <Input required type="email" />
        </Form.Item>
        <Form.Item label="Address" name={"address"}>
          <Input required type="text" />
        </Form.Item>
        <Form.Item label="Password" name={"password"}>
          <Input required type="password" />
        </Form.Item>
        <Form.Item label="Role" name="role">
          <Select defaultValue="">
            <Select.Option value="Admin">Admin</Select.Option>
            <Select.Option value="Teller">Teller</Select.Option>
            <Select.Option value="Manager">Manager</Select.Option>
          </Select>
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

import React, { forwardRef } from "react";
import { Form, InputNumber, Radio } from "antd";
import { SelectInput } from "../../SelectInput";
import FormItem from "antd/es/form/FormItem";
import TextArea from "antd/es/input/TextArea";

const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const options = [
  {
    value: "jack",
    label: "Jack",
  },
  {
    value: "lucy",
    label: "Lucy",
  },
  {
    value: "tom",
    label: "Tom",
  },
];

export const ModalForm = forwardRef((props, ref) => {
  const [form] = Form.useForm();

  React.useImperativeHandle(ref, () => ({
    validateFields: () => form.validateFields(),
  }));

  return (
    <Form
      form={form}
      name="ModalFrom"
      labelCol={{
        span: 24,
      }}
      wrapperCol={{
        span: 24,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        name="remember"
        wrapperCol={{
          span: 24,
        }}
        rules={[{ required: true, message: "این فیلد اجباری است" }]}
      >
        <Radio.Group>
          <Radio.Button value="to bank">به حساب</Radio.Button>
          <Radio.Button value="to wallet">به کیف پول</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        label="مقصد تسویه"
        name="مقصد تسویه"
        rules={[
          {
            required: true,
            message: "وارد کردن مقصد اجباری است",
          },
        ]}
      >
        <SelectInput label="شماره حساب" options={options} />
      </Form.Item>
      <Form.Item
        label="مبلغ تسویه"
        name="مبلغ تسویه"
        rules={[
          {
            required: true,
            message: "وارد کردن مبلغ الزامی است",
          },
        ]}
        className="w-full"
      >
        <InputNumber
          formatter={(value) =>
            `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          }
          parser={(value) => value?.replace(/\$\s?|(,*)/g, "")}
          className="w-full"
          addonAfter="ریال"
        />
      </Form.Item>
      <FormItem label="توضیحات(بابت)" name="توضیحات">
        <TextArea rows={4} placeholder="توضیحات را وارد کنید" maxLength={6} />
      </FormItem>
    </Form>
  );
});
ModalForm.displayName = "ModalForm";


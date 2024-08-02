import React, { useRef } from "react";
import { Button, Modal } from "antd";
import { AccountBalance } from "./AccountBalance";
import { ModalForm } from "./ModalForm";
export const ModalComponent = () => {

  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const formRef = useRef(null);

  const handleOk = () => {
    if (formRef.current) {
      formRef.current
        .validateFields()
        .then(() => {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            setOpen(false);
          }, 3000);
          setOpen(false);
        })
        .catch((errorInfo) => {
          console.error("Validation Failed:", errorInfo);
          alert("اطلاعات را وارد کنید ");
        });
    }
  };
  const handleCancel = () => {
    setOpen(false);
  };
  const showLoading = () => {
    setOpen(true);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      <Button type="primary" onClick={showLoading}>
        Open Modal
      </Button>
      <Modal
        title={<p>تسویه کیف پول</p>}
        loading={loading}
        open={open}
        onCancel={() => setOpen(false)}
        footer={[
          <Button
            key="back"
            type="primary"
            htmlType="submit"
            danger
            onClick={handleCancel}
          >
            انصراف
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            ثبت درخواست تسویه
          </Button>,
        ]}
      >
        <AccountBalance />
        <ModalForm />
      </Modal>
    </>
  );
};

import { Button, Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { ModalComponent } from "../../Components/Modal";

export const MainPage = () => {
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate("/Table")
  }
  return (
    <>
      <Row align="middle" justify="center" className="h-screen">
        <Col span={8}></Col>
        <Col span={8} className=" grid grid-cols-2 gap-4 content-center">
          <Button onClick={handleNavigate}>Table</Button>
          <ModalComponent/>
        </Col>
        <Col span={8}></Col>
      </Row>
    </>
  );
};

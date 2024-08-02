import { Col, Row, Statistic } from "antd";
import CountUp from "react-countup";
const formatter = (value) => <CountUp end={value} separator="," />;
export const AccountBalance = () => (
  <Row gutter={16}>
    <Col span={24} className="p-5">
        <Statistic
          title="موجودی فعلی"
          value={15000}
          precision={2}
          formatter={formatter}
        />
    </Col>
  </Row>
);

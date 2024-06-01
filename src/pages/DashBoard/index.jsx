import { Link } from "react-router-dom";
import DivLink from "../../component/modal/DivLink";
import Pishclass from "./pishclass";
import Progress from "./progress";
import Blog from "./blog";
import Consult from "./consult";
import DontAzmoon from "./dontAzmoon";
import ResultAzmoon from "./resultAzmoon";
import Video from "./video";
import ProfileMenu from "./../../Layout/ProfileMenu";
import { Col, Row, Grid, Divider } from "antd";

const DashBoard = () => {
  return (
    <div>
      <div>
        <Divider orientation="left">Normal</Divider>
        <Row justify="start" align="bottom">
          <Col span={6} order={4}>
            1 col-order-4
          </Col>
          <Col span={6} order={3}>
            2 col-order-3
          </Col>
          <Col flex={6} span={6} order={2}>
            3 col-order-2
          </Col>
          <Col span={6} order={1}>
            4 col-order-1
          </Col>
        </Row>
        <Divider orientation="left">Responsive</Divider>
        <Row>
          <Col
            span={6}
            xs={{
              order: 1,
            }}
            sm={{
              order: 2,
            }}
            md={{
              order: 3,
            }}
            lg={{
              order: 4,
            }}
          >
            1 col-order-responsive
          </Col>
          <Col
            span={6}
            xs={{
              order: 2,
            }}
            sm={{
              order: 1,
            }}
            md={{
              order: 4,
            }}
            lg={{
              order: 3,
            }}
          >
            2 col-order-responsive
          </Col>
          <Col
            span={6}
            xs={{
              order: 3,
            }}
            sm={{
              order: 4,
            }}
            md={{
              order: 2,
            }}
            lg={{
              order: 1,
            }}
          >
            3 col-order-responsive
          </Col>
          <Col
            span={6}
            xs={{
              order: 4,
            }}
            sm={{
              order: 3,
            }}
            md={{
              order: 1,
            }}
            lg={{
              order: 2,
            }}
          >
            4 col-order-responsive
          </Col>
        </Row>
      </div>
      <Row gutter={16} className=" bg-green-400">
        <ProfileMenu />
        <Col span={16} order={2}>
          <Progress />ن
        </Col>
        <Col span={8} order={1}>
          <Pishclass />
        </Col>
      </Row>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
        className=" bg-red-400"
      >
        <Col span={8} order={2}>
          <DontAzmoon />
        </Col>
        <Col span={16} order={1}>
          <ResultAzmoon />
        </Col>
      </Row>
      ن2
      <Row className=" bg-blue-400">
        <Col span={8} order={3}>
          <Blog />
        </Col>
        <Col span={8} order={2}>
          <Video />
        </Col>
        <Col span={8} order={1}>
          <Consult />
        </Col>
      </Row>
    </div>
  );
};

export default DashBoard;

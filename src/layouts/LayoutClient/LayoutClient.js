import React from "react";
import { Routes, Route } from "react-router-dom";
import { Row, Col, Layout } from "antd";

import MenuTop from "../../components/Client/MenuTop";
import FooterComponent from "../../components/Client/Footer";

import { map } from "lodash";

import "./LayoutClient.scss";

export default function LayoutClient(props) {
  const { routes } = props;
  const { Header, Content, Footer } = Layout;
  return (
    <div className="layout-client">
      <Header className="layout-client__header">
        <Row>
          <Col lg={2}></Col>
          <Col lg={20}>
            <MenuTop />
          </Col>
          <Col lg={2}></Col>
        </Row>
      </Header>
      <Content className="layout-client__content">
        <LoadRoutes routes={routes} />
      </Content>
      <Footer className="layout-client__footer">
        <FooterComponent />
      </Footer>
    </div>
  );
}

function LoadRoutes(props) {
  const { routes } = props;

  return (
    <Routes>
      {map(routes, (item, index) => (
        <Route key={index} path={item.path} element={<item.element />} />
      ))}
    </Routes>
  );
}

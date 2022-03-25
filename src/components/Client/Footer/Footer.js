import React from "react";
import { Layout, Row, Col, List, Avatar, Image } from "antd";

import SocialLinks from "../SocialLinks";

import LogoUnivalle from "../../../assets/img/png/logo-uv.png";
import AmongUsRojo from "../../../assets/img/png/rojo.png";
import AmongUsAzul from "../../../assets/img/png/azul.png";
import AmongUsAmarillo from "../../../assets/img/png/amarillo.png";
import AmongUsNegro from "../../../assets/img/png/negro.png";
import AmongUsVerde from "../../../assets/img/png/verde.png";

import "./Footer.scss";

export default function Footer() {
  const { Footer } = Layout;

  const dataTeam = [
    {
      avatar: AmongUsAmarillo,
      name: "José Fabricio Quezada Quiroga",
      email: "qqj2021344@est.univalle.edu",
    },
    {
      avatar: AmongUsRojo,
      name: "Jesus Cristhian Yujra Huanca",
      email: "yhj2022280@est.univalle.edu",
    },
    {
      avatar: AmongUsNegro,
      name: "Jose Manuel Gutierrez Navarro",
      email: "gnj2021901@est.univalle.edu",
    },
    {
      avatar: AmongUsAzul,
      name: "Gary German Valverde Quisbert",
      email: "vqg2021079@est.univalle.edu",
    },
    {
      avatar: AmongUsVerde,
      name: "José Manuel Facio Villarroel",
      email: "fvj2022035@est.univalle.edu",
    },
  ];

  return (
    <Footer className="footer">
      <Row>
        <Col md={2} />
        <Col md={16}>
          <Row>
            <Col md={10}>
              <h1>Team Information</h1>
              <TeamInfo dataTeam={dataTeam} />
            </Col>
            <Col md={8} className="footer__social">
              <h1>Social</h1>
              <SocialLinks />
            </Col>
            <Col md={6} className="footer__logo">
              <Image
                width={300}
                alt="Univalle ISI - TheBackstreetNativos22"
                src={LogoUnivalle}
              />
            </Col>
          </Row>
          <Row className="footer__copyright">
            <Col md={12}>© 2022 ALL RIGHTS RESERVED</Col>
            <Col md={12}>
              THE BACKSTREET NATIVOS 22 | SOFTWARE PROJECT MANAGEMENT
            </Col>
          </Row>
        </Col>
        <Col md={2} />
      </Row>
    </Footer>
  );
}

function TeamInfo(props) {
  const { dataTeam } = props;

  return (
    <List
      className="team-info"
      dataSource={dataTeam}
      renderItem={(item, index) => (
        <List.Item key={index}>
          <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={item.name}
            description={item.email}
          />
        </List.Item>
      )}
    />
  );
}

import React from "react";
import { Row, Col } from "antd";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import PostListWeb from "../../../components/Client/Blog/PostListWeb";
import PostInfo from "../../../components/Client/Blog/PostInfo";

export default function Blog() {
  const location = useLocation();
  const navigate = useNavigate();
  const { url } = useParams();

  return (
    <Row>
      <Col md={4}></Col>
      <Col md={16}>
        {url ? (
          <PostInfo url={url} />
        ) : (
          <PostListWeb location={location} navigate={navigate} />
        )}
      </Col>
      <Col md={4}></Col>
    </Row>
  );
}

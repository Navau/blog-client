import React, { useState, useEffect } from "react";
import { Spin, List, notification } from "antd";
import { Link } from "react-router-dom";
import moment from "moment";
import queryString from "query-string";
import Pagination from "../../../Admin/Pagination";
import { getPostsApi } from "../../../../api/post";
import "moment/locale/es";

import "./PostListWeb.scss";

export default function PostListWeb(props) {
  const { location, navigate } = props;
  const [posts, setPosts] = useState(null);
  const { page = 1 } = queryString.parse(location.search);

  useEffect(() => {
    getPostsApi(12, page)
      .then((response) => {
        if (response?.code !== 200) {
          notification["warning"]({
            message: response.message,
          });
        } else {
          setPosts(response.postStored);
        }
      })
      .catch((err) => {
        notification["error"]({
          message: "Ocurrio un error inesperado." + err.message,
        });
      });
  }, [page]);

  if (!posts) {
    return (
      <Spin tip="Cargando" style={{ width: "100%", padding: "200px 0" }} />
    );
  }

  return (
    <div className="post-list-web">
      <h1>Blog</h1>
      <List
        dataSource={posts.docs}
        renderItem={(post) => <Post post={post} />}
      />
      <Pagination posts={posts} location={location} navigate={navigate} />
    </div>
  );
}

function Post(props) {
  const { post, location, navigate } = props;
  // console.log(post);
  // console.log(location);
  // console.log(navigate);
  const day = moment(post.date).format("DD");
  const month = moment(post.date).format("MMMM");

  return (
    <Link to={`${post.url}`}>
      <List.Item className="post">
        <div className="post__date">
          <span>{day}</span>
          <span>{month}</span>
        </div>

        <List.Item.Meta title={post.title} style={{ color: "white" }} />
      </List.Item>
    </Link>
  );
}

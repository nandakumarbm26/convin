import React, { useEffect, useState } from "react";
import axios from "axios";
import "./post.css";
import { CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
function Post({ id }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.store);
  const [postData, setPostData] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        setPostData(res.data.data);
        console.log(res.data);
        setLoading(false);
      })
      .then(console.log(state))
      .catch((err) => {
        setPostData({
          avatar: "",
          email: "click to display profile",
          first_name: "first name",
          id: 1,
          last_name: "last name",
        });
        setLoading(false);
      });
  }, [id]);
  return (
    <div id="login-container">
      {loading && <CircularProgress />}
      <div
        class="profile-img"
        style={{
          background: ` url(${postData.avatar})`,
        }}
      ></div>
      <br />
      <br />
      <br />
      <h1>{postData.email}</h1>
      <button>{postData.first_name + " " + postData.last_name}</button>

      <footer>
        <div class="likes">
          <p>
            <i class="fa fa-heart"></i>
          </p>
          <p>React - Redux Demo</p>
        </div>
        <div class="projects">
          <p>ID</p>
          <p>{postData.id}</p>
        </div>
      </footer>
    </div>
  );
}

export default Post;

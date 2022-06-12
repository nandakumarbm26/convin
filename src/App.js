import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { setCurrentId, setPosts, setPostsCount } from "./redux/action";
import { useDispatch, useSelector } from "react-redux";
import Post from "./Post";
import axios from "axios";
import { Stack, Typography, Pagination } from "@mui/material";
function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.store);
  const [page, setPage] = React.useState(1);
  const [id, setId] = React.useState(null);
  const handleChange = (event, value) => {
    dispatch(setCurrentId(value));
    setId(value);

    console.log(state);
  };

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page=1")
      .then((res) => {
        dispatch(setPostsCount(res.data.total));
        setPage(res.data.total);
        dispatch(setPosts(res.data.data));
      })
      .then(console.log(state))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    console.log(page, " ", id);
  }, [state]);
  return (
    <>
      <div className="App">
        <Stack spacing={2}>
          <Post id={id} />
          <Pagination
            count={page}
            variant="outlined"
            color="primary"
            page={id}
            onChange={handleChange}
          />
        </Stack>
      </div>
    </>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import { Grid, Grow } from "@mui/material";
import { Container } from "@mui/system";
import { useDispatch } from "react-redux";
import { fetchPost } from "../../features/postSlice";
import Form from "../Form/Form";
import Posts from "../Posts/Posts";

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchPost());
  }, [setCurrentId, dispatch]);

  return (
    <Grow in>
      <Container>
        <Grid
          container
          justify="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;

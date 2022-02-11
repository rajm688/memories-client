import React, { useEffect } from "react";
import "./App.css";
import Container from "@mui/material/Container";
import { AppBar, Grid, Grow, Typography } from "@mui/material";
import memoriers from "./images/memories.png";
import { Form } from "./components/forms/Form";
import { Posts } from "./components/posts/Posts";
import { useDispatch } from "react-redux"; // dispatch an action
import { getPosts } from "./actions/posts";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]); //to call a function once the action is complete we provide empty dependency array

  return (
    <Container maxWidth="lg">
      <AppBar className="appBar" position="static" color="inherit">
        <Typography className="heading" variant="h2" align="center">
          memories
        </Typography>
        <img className="img" src={memoriers} alt="memories" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;

import React from "react";
import { Container } from '@material-ui/core';
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom"
import './App.css';
import Auth from "./components/Auth/auth";
import Home from "./components/Home/home";
import CreatorOrTag from "./components/CreatorOrTag/CreatorOrTag";
import PostDetails from './components/PostDetails/PostDetails';
import Navbar from "./components/Navbar/navbar";
import useStyles from './styles';


const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const styles = useStyles();


  return (
    <BrowserRouter>
      <Container className={styles.background} maxWidth="lg">
        <Navbar />
        <Switch>
          <Route path="/" exact component={() => <Redirect to="/posts" />} />
          <Route path="/posts" exact component={Home} />
          <Route path="/posts/search" exact component={Home} />
          <Route path="/posts/:id" exact component={PostDetails} />
          <Route path={['/creator/:name', '/tags/:name']} component={CreatorOrTag} />
          <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/posts" />)} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;

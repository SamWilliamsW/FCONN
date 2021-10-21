import React from "react";
import { Container } from '@material-ui/core';
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import AddReview from "./components/Restaurants/add-review";
import Restaurant from "./components/Restaurants/restaurants";
import Auth from "./components/Auth/auth";
import Navbar from "./components/Navbar/navbar";

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
  
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar/>
        <Switch>
          <Route path="/" exact component={() => <Redirect to="/restaurants" />}/>
          <Route path="/restaurants/:id/review" render={(props) => ( <AddReview {...props} user={props.user} />)}/>
          <Route path="/restaurants/:id" render={(props) => (
          <Restaurant {...props} user={props.user} /> )}/>
          <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/restaurants"/>)} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;

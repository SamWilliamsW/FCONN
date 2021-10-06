import React from "react";
import { Container } from '@material-ui/core';
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import AddReview from "./components/Restaurants/add-review";
import RestaurantsList from "./components/Restaurants/restaurants-list";
import Restaurant from "./components/Restaurants/restaurants";
import Login from "./components/Login/login";
import Navbar from "./components/Navbar/navbar";

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
  
  return (
    <BrowserRouter>
      <Container maxWidth="x1">
        <Navbar/>
        <Switch>
          <Route exact path={["/", "/restaurants"]} component={RestaurantsList} />
          <Route path="/restaurants/:id/review" render={(props) => ( <AddReview {...props} user={props.user} />)}/>
          <Route path="/restaurants/:id" render={(props) => (
          <Restaurant {...props} user={props.user} /> )}/>
          <Route path="/login" exact component={() => (!user ? <Login /> : <Redirect to="/restaurants" />)}/>
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;

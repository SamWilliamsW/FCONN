import React, {useState} from "react";
import { Switch, Route, Link } from "react-router-dom"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import AddReview from "./components/add-review";
import RestaurantsList from "./components/restaurants-list";
import Restaurant from "./components/restaurants";
import Login from "./components/Login/login";
import Navbar from "./components/Navbar/navbar";

function App() {
  const [user, setUser] = useState(null);

  async function login(user = null) {
    setUser(user);
  }

  async function logout(){
    setUser(null);
  }

  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path={["/", "/restaurants"]} component={RestaurantsList} />
        <Route 
          path="/restaurants/:id/review"
          render={(props) => (
            <AddReview {...props} user={props.user} />
        )}
        />
        <Route 
          path="/restaurants/:id"
          render={(props) => (
            <Restaurant {...props} user={props.user} />
        )}
        />
        <Route 
          path="/login"
          render={(props) => (
            <Login {...props} login={props.login} />
        )}
        />
      </Switch>
    </div>
  );
}

export default App;

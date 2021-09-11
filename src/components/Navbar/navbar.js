import React, {useState} from 'react'
import { Switch, Route, Link } from "react-router-dom"
import { Avatar, Typography, Button, AppBar} from '@material-ui/core'
import RestaurantsList from "../Restaurants/restaurants-list";
import Restaurant from "../Restaurants/restaurants";
import Login from "../Login/login";
import AddReview from '../add-review';
import useStyles from './styles';

export default function Navbar() {

    const [user, setUser] = useState(null);

    async function login(user = null) {
        setUser(user);
    }

    async function logout(){
        setUser(null);
    }

    const styles = useStyles();

    return (
        <AppBar className={styles.appBar} position="static" color="inherit">
            <a href="/restaurants" className="navbar-brand">
                Restaurant Reviews
            </a>
            { user ? (
                <div>
                    <Avatar alt={user.result.name} src={user.result.imageUrl}></Avatar>
                    <Button variant="contained" color="secondary"></Button>
                </div>
            ) : (            
                <Button component={Link} to="/login" variant="contained" color="primary">Sign in</Button>
            )}
        </AppBar>
    )
}

import React, {useState} from 'react'
import { Link } from "react-router-dom"
import { Avatar, Button, AppBar} from '@material-ui/core'

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
                Food Connection
            </a>
            { user ? (
                <div>
                    <Avatar alt={user.result.name} src={user.result.imageUrl}></Avatar>
                    <Button variant="contained" color="secondary"></Button>
                </div>
            ) : (            
                <Button className={styles.button} component={Link} to="/login" variant="contained" color="primary">Sign in</Button>
            )}
        </AppBar>
    )
}

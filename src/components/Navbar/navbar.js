import React, {useState, useEffect} from 'react'
import { Avatar, Button, AppBar, Toolbar, Typography} from '@material-ui/core'
import decode from 'jwt-decode';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as actionType from '../../constants/actionTypes';
import useStyles from './styles';

export default function Navbar() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const styles = useStyles();

    const logout = () => {
        dispatch({ type: actionType.LOGOUT });
        history.push('/login');
        setUser(null);
      };

      useEffect(() => {
        const token = user?.token;
    
        if (token) {
          const decodedToken = decode(token);
          if (decodedToken.exp * 1000 < new Date().getTime()) 
          logout();
        }
    
        setUser(JSON.parse(localStorage.getItem('profile')));
      }, [location]);

    return (
        <AppBar className={styles.appBar} position="static" color="inherit">
            {user === null ? 
              <Link to="/login" className={styles.brandContainer} style={{textDecoration: 'none'}}>
                <h4 className={styles.imageUrl}>Food Connection</h4>
                <img className={styles.image} src="fconnLogo.png" alt="icon" height="40px" />
              </Link>
            : <Link to="/" className={styles.brandContainer} style={{textDecoration: 'none'}}>
                <h4 className={styles.imageUrl}>Food Connection</h4>
                <img className={styles.image} src="fconnLogo.png" alt="icon" height="40px" />
              </Link>
            }
            <Toolbar className={styles.toolbar}>
                {user?.result ? (
                <div className={styles.profile}>
                    <Avatar className={styles.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
                    <Typography className={styles.userName} variant="h6">{user?.result.name}</Typography>
                    <Button variant="contained" to="/login" className={styles.logout} color="secondary" onClick={logout}>Logout</Button>
                </div>
                ) : (
                <Button component={Link} to="/login" variant="contained" color="primary">Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
    )
}

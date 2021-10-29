import React, { useState, useEffect, useCallback } from 'react'
import { Avatar, Button, AppBar, Toolbar, Typography } from '@material-ui/core'
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import * as actionType from '../../constants/actionTypes';
import useStyles from './styles';
import CreatorOrTag from '../CreatorOrTag/CreatorOrTag';

export default function Navbar() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const styles = useStyles();

  const logout = useCallback(() => {
    dispatch({ type: actionType.LOGOUT });
    history.push('/auth');
    setUser(null);
  }, []);

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <AppBar className={styles.appBar} position="static" color="inherit">
      {user === null ?
        <Link to="/auth" className={styles.brandContainer} style={{ textDecoration: 'none' }}>
          <h4 className={styles.heading}>CAMPUS CANTINA</h4>
        </Link>
        : <Link to="/" className={styles.brandContainer} style={{ textDecoration: 'none' }}>
          <h4 className={styles.heading}>CAMPUS CANTINA</h4>
        </Link>
      }
      <Toolbar className={styles.toolbar}>
        {user?.result ? (
          <div className={styles.profile}>
            <Avatar className={styles.purple} alt={user?.result.name} src={user?.result.imageUrl}></Avatar>
            <Button link={CreatorOrTag} className={styles.userName} variant="h6">{user?.result.name}</Button>
            <Button variant="contained" to="/auth" className={styles.logout} color="secondary" onClick={logout}>Logout</Button>
          </div>
        ) : (
          <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
        )}
      </Toolbar>
    </AppBar>
  )
}

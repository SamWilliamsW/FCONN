import React from 'react'
import {Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import useStyles from './styles';
//import LockOutlineIcon from '@material-ui/icons/LockOutlinedIcon';

const Login = () => {

    const styles = useStyles();
    const isSignedIn = false;

    return (
        <Container component="main" maxWidth ='xs'>
            <Paper className={styles.paper} elevation={3}>
                <Avatar>
                    {/* <LockOutlinedIcon/> */}
                </Avatar>
                <Typography variant='h5'>
                    {isSignedIn? 'Sign Up' : 'Sign In'}   
                </Typography>
            </Paper>
        </Container>
    )
}

export default Login;

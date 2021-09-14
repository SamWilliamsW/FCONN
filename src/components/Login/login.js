import React, {useState, useHistory, useDispatch} from 'react'
import {Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@material-ui/core';
import useStyles from './styles';
import { GoogleLogin }  from 'react-google-login';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input from './input';
import Icon from './icon';


const init = {firstName: '', lastName: '', email: '', password: '', confirmPassword: ''};

const Login = () => {

    const [form, setForm] = useState(init);
    const styles = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    //const dispatch = useDispatch();
    //const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
    
        // if (isSignUp) {
        //   dispatch(signup(form, history));
        // } else {
        //   dispatch(signin(form, history));
        // }
      };

    const handleShowPassword = () => { 
        setShowPassword((prevShowPassword) => !prevShowPassword)
    }
    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    const switchMode = () => {
        setForm(init);
        setIsSignUp((prevIsSignUp) => !prevIsSignUp)
        setShowPassword(false);
    }

    return (
        <Container component="main" maxWidth ='xs'>
            <Paper className={styles.paper} elevation={6}>
                <Avatar className={styles.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant='h5'>
                    {isSignUp ? 'Sign Up' : 'Sign In'}   
                </Typography>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {isSignUp && (
                            <>
                                <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half></Input>
                                <Input name="lastName" label="Last Name" handleChange={handleChange} half></Input>

                            </>
                        )}
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" autoFocus></Input>
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}></Input>
                        { isSignUp && 
                            <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password"/>
                        }
                    </Grid>
                    {/* <GoogleLogin
                        clientId="GOOGLE ID"
                        render={(renderProps) =>{(
                            <Button 
                                className={styles.googleButton} 
                                color='primary' 
                                fullWidth 
                                onClick={renderProps.onClick} 
                                disabled={renderProps.disabled} 
                                startIcon={<Icon />} 
                                variant="contained">
                            </Button>
                        )}}
                    /> */}
                    <Button type="submit" fullWidth variant="contained" color="primary" className={styles.submit}>
                        { isSignUp ? 'Sign Up' : 'Sign In' }
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                { isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Login;

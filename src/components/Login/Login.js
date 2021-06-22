import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useState } from 'react';
const Login = () => {

    const [user, setUser] = useState(false);
    console.log(user);

    const paperStyle = { padding: 20, height: '70vh', width: 320, margin: "20px auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0' }
    const linkStyle = { cursor: 'pointer', color: 'blue' }
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>{user ? 'Sign Up' : 'Sign In'}</h2>
                </Grid>
                {user && <TextField label='Username' placeholder='Enter username' fullWidth required />}
                <TextField label='Email' placeholder='Enter email' fullWidth required />
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required />
                <FormControlLabel
                    control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="Remember me"
                />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                <Typography >
                    <Link href="#" >
                        Forgot password ?
                    </Link>
                </Typography>
                <Typography > Do you have an account ?
                    <Link to="/login" style={linkStyle} onClick={() => setUser(!user)}>{user ? 'Sign In' : 'Sign Up'}</Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login
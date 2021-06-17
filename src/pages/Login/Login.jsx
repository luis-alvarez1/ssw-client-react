import {
  Box,
  TextField,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Button,
  InputAdornment,
  IconButton,
  OutlinedInput,
  InputLabel,
  FormControl,
} from '@material-ui/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  PersonAdd,
  Visibility,
  VisibilityOff,
} from '@material-ui/icons';
import { useMutation } from '@apollo/client';
import { useLoginStyles } from './LoginStyles';
import Car from '../../core/assets/car.png';
import { fireAlertNotification } from '../../utils/helpers/Alerts';
import { setItem } from '../../utils/helpers/LocalStorage';
import {
  AUTH_USER,
  JWT_TOKEN_KEY,
} from '../../core/constants';

export const Login = (props) => {
  const classes = useLoginStyles();

  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setFormValues({
      ...formValues,
      [prop]: event.target.value,
    });
  };

  const handleClickShowPassword = () => {
    setFormValues({
      ...formValues,
      showPassword: !formValues.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [authUser] = useMutation(AUTH_USER);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formValues;

    if (email === '' || password === '') {
      fireAlertNotification(
        'Fields missing',
        'All fieds are required',
        'error',
      );
      return;
    }
    try {
      const { data } = await authUser({
        variables: {
          user: {
            email,
            password,
          },
        },
      });
      const { token } = data.authUser;
      setItem(JWT_TOKEN_KEY, token);
      props.history.push('/');
    } catch (error) {
      fireAlertNotification(
        'Error!',
        'Whether email or password are not valid, please check and try again.',
        'error',
      );
    }
  };

  return (
    <>
      <Box className={classes.container}>
        <Box className={classes.title}>
          <img
            src={Car}
            alt='CAR'
            className={classes.img}
          />
          <Typography className={classes.titleText}>
            Supersportwagen
          </Typography>
        </Box>
        <Card className={classes.cardContainer}>
          <CardHeader title='Login' />
          <CardContent>
            <form
              onSubmit={handleSubmit}
              className={classes.cardContent}
            >
              <FormControl
                variant='outlined'
                className={classes.textfield}
              >
                <TextField
                  id='outlined'
                  value={formValues.email}
                  onChange={handleChange('email')}
                  label='User Email'
                  variant='outlined'
                />
              </FormControl>
              <FormControl
                variant='outlined'
                className={classes.textfield}
              >
                <InputLabel htmlFor='outlined-adornment-password'>
                  Password
                </InputLabel>
                <OutlinedInput
                  id='outlined-adornment-password'
                  autoComplete='current-password'
                  type={
                    formValues.showPassword
                      ? 'text'
                      : 'password'
                  }
                  value={formValues.password}
                  onChange={handleChange('password')}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={
                          handleMouseDownPassword
                        }
                      >
                        {formValues.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={70}
                />
              </FormControl>
              <Box className={classes.createUser}>
                <PersonAdd style={{ margin: '0 10px' }} />
                <Link to='/create-user'>
                  Doesn&lsquo;t have an account? Create one
                  here
                </Link>
              </Box>

              <Button
                type='submit'
                variant='contained'
                className={classes.button}
                color='secondary'
              >
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

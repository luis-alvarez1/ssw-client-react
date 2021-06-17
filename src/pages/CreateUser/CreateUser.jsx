import { useMutation } from '@apollo/client';
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
import {
  Visibility,
  VisibilityOff,
  VpnKeyRounded,
} from '@material-ui/icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CREATE_USER } from '../../core/constants';
import Car from '../../core/assets/car.png';
import { fireAlertNotification } from '../../utils/helpers/Alerts';
import { useCreateUserStyles } from './CreateUserStyles';

export const CreateUser = (props) => {
  const classes = useCreateUserStyles();

  const [formValues, setFormValues] = useState({
    name: '',
    password: '',
    repeatPassword: '',
    email: '',
    phoneNumber: '',
    rol_id: 0,
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

  const [createUser] = useMutation(CREATE_USER);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      email,
      password,
      name,
      repeatPassword,
      phoneNumber,
    } = formValues;

    if (password !== repeatPassword) {
      fireAlertNotification(
        'Passwords does not match',
        'Please enter again the password',
        'error',
      );
      return;
    }
    if (email === '' || password === '' || name === '') {
      fireAlertNotification(
        'Fields missing',
        'All fieds are required',
        'error',
      );
      return;
    }

    const { data } = await createUser({
      variables: {
        user: {
          email,
          password,
          name,
          phoneNumber,
          rol_id: 5,
        },
      },
    });

    fireAlertNotification(
      'Successfully',
      `Your user was registered correctly. Please, log in, ${data.createUser.name} .`,
      'success',
    );
    props.history.push('/login');
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
          <CardHeader title='Register' />
          <CardContent>
            <form
              onSubmit={handleSubmit}
              className={classes.cardContent}
            >
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Box style={{ display: 'flex' }}>
                  <FormControl
                    variant='outlined'
                    className={classes.textfield}
                  >
                    <TextField
                      id='outlined'
                      value={formValues.name}
                      onChange={handleChange('name')}
                      label='User Name'
                      variant='outlined'
                    />
                  </FormControl>
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
                </Box>

                <Box style={{ display: 'flex' }}>
                  <FormControl
                    variant='outlined'
                    className={classes.textfield}
                  >
                    <InputLabel htmlFor='outlined-adornment-password'>
                      Password
                    </InputLabel>
                    <OutlinedInput
                      id='outlined-adornment-password'
                      type='password'
                      value={formValues.password}
                      onChange={handleChange('password')}
                      labelWidth={70}
                    />
                  </FormControl>
                  <FormControl
                    variant='outlined'
                    className={classes.textfield}
                  >
                    <InputLabel htmlFor='outlined-adornment-repeat-password'>
                      Repeat Password
                    </InputLabel>
                    <OutlinedInput
                      id='outlined-adornment-repeat-password'
                      type={
                        formValues.showPassword
                          ? 'text'
                          : 'password'
                      }
                      value={formValues.repeatPassword}
                      onChange={handleChange(
                        'repeatPassword',
                      )}
                      endAdornment={
                        <InputAdornment position='end'>
                          <IconButton
                            onClick={
                              handleClickShowPassword
                            }
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
                </Box>

                <FormControl
                  variant='outlined'
                  className={classes.textfield}
                >
                  <TextField
                    id='outlined'
                    value={formValues.phoneNumber}
                    onChange={handleChange('phoneNumber')}
                    label='Phone Number'
                    variant='outlined'
                  />
                </FormControl>

                <Box className={classes.createUser}>
                  <VpnKeyRounded
                    style={{ margin: '0 10px' }}
                  />
                  <Link to='/login'>
                    Already have an account? Login here
                  </Link>
                </Box>
              </Box>
              <Button
                type='submit'
                variant='contained'
                className={classes.button}
                color='secondary'
              >
                Register
              </Button>
            </form>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

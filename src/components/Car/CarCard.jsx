import React, { useState } from 'react';
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';
import { useCarCardStyles } from './useCarCardStyles';
import { capitalize } from '../../utils/helpers/FormatString';
import { formatCurrency } from '../../utils/helpers/Currency';
import { GEARBOX_BY_ID } from '../../core/constants';

export const CarCard = ({ car }) => {
  const [gearbox, setGearbox] = useState(null);
  const classes = useCarCardStyles();

  useQuery(GEARBOX_BY_ID, {
    variables: {
      filter: {
        id: car.gearbox,
      },
    },
    onCompleted: (data) => {
      setGearbox(data.gearboxes[0]);
    },
  });

  return (
    <Card className={classes.root}>
      <CardMedia
        component='img'
        alt={car.name + car.model}
        height='150'
        image={car.imgUrl}
        title={car.name + car.model}
      />
      <CardContent>
        <Typography
          gutterBottom
          className={classes.cardTitle}
        >
          {car.name} - {car.model}{' '}
          <small>({car.year})</small>
        </Typography>
        <Typography className={classes.cardSubtitle}>
          <strong>Features:</strong>
        </Typography>
        <ul className={classes.featureList}>
          <li>
            <strong>Cylinder capacity: </strong>
            {car.year
              ? `${car.cylinderCapacity}c.c.`
              : 'N/A'}
          </li>
          <li>
            <strong>Colour: </strong>
            {car.colour ? capitalize(car.colour) : 'N/A'}
          </li>
          <li>
            <strong>Gearbox: </strong>
            {gearbox ? gearbox.type : 'N/A'}
          </li>
          <li>
            <strong>Stock: </strong>
            {car.stock ? `${car.stock} units` : 'N/A'}
          </li>
        </ul>

        <Box className={classes.footer}>
          <Typography className={classes.price}>
            {formatCurrency(car.price)}
          </Typography>
          <Box className={classes.actions}>
            <Button
              className={classes.primaryBtn}
              variant='contained'
              color='primary'
            >
              Buy now
            </Button>
            <Button
              variant='outlined'
              color='secondary'
              className={classes.secondaryBtn}
            >
              View Details
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

CarCard.propTypes = {
  car: PropTypes.shape({
    name: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    colour: PropTypes.string,
    cylinderCapacity: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
    imgUrl: PropTypes.string.isRequired,
  }).isRequired,
};

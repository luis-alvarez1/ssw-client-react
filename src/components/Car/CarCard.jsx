/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';
import {
  Typography,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Box,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { gql, useQuery } from '@apollo/client';
import { useCarCardStyles } from './useCarCardStyles';
import { capitalize } from '../../utils/helpers/FormatString';

export const CarCard = ({ car }) => {
  const [gearbox, setGearbox] = useState(null);
  const classes = useCarCardStyles();

  const GEARBOX_BY_ID = gql`
    query getGearboxById($filter: FilterGearbox!) {
      gearboxes(filter: $filter) {
        id
        type
      }
    }
  `;
  const { loading, data, error } = useQuery(GEARBOX_BY_ID, {
    variables: {
      filter: {
        id: car.gearbox,
      },
    },
  });

  useEffect(() => {
    if (error) return <div>{error}</div>;
    if (loading) return <div>{loading}</div>;
    if (data) {
      setGearbox(data.gearboxes[0]);
    }
  }, []);

  return (
    <Card className={classes.root}>
      <CardMedia
        component='img'
        alt={car.name}
        height='100'
        image={car.imgUrl}
        title={car.name}
      />
      <CardContent>
        <Typography
          gutterBottom
          className={classes.cardTitle}
        >
          {car.name} - {car.model} (
          <small>{car.year}</small>)
        </Typography>
        <Typography className={classes.cardSubtitle}>
          <strong>Features:</strong>
        </Typography>
        <ul className={classes.featureList}>
          <li>
            <strong>Cylinder capacity: </strong>
            {car.year ? `${car.year}c.c.` : 'N/A'}
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
        <Typography />
        <Box />
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

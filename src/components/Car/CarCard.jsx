import React from 'react';
import {
  Typography,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { useCarCardStyles } from './useCarCardStyles';

export const CarCard = ({ car }) => {
  const classes = useCarCardStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component='img'
          // alt='Contemplative Reptile'
          height='140'
          // image='/static/images/cards/contemplative-reptile.jpg'
          // title='Contemplative Reptile'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            Lizard
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
          Share
        </Button>
        <Button size='small' color='primary'>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

CarCard.propTypes = {
  // TODO: define car shape based on gql
  car: PropTypes.shape({}).isRequired,
};

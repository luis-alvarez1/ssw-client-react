import { makeStyles } from '@material-ui/core';

export const useCarCardStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
    marginLeft: '20px',
  },
  cardTitle: {
    fontSize: '24px',
  },
  cardSubtitle: {
    fontSize: '15px',
    fontWeight: 'bold',
  },
  featureList: {
    fontSize: '15px',
  },
  price: {
    fontSize: '25px',
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    margin: '5px 15px 0 0',
    color: theme.palette.primary.main,
  },
  footer: {
    display: 'flex',
    flexDirection: 'column',
  },
  actions: {
    marginTop: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  primaryBtn: {
    fontSize: '18px',
    marginTop: '5px',
    fontWeight: 'bold',
  },
  secondaryBtn: {
    margin: '5px 0 ',
    fontWeight: 'bold',
  },
}));

export const useCarListStyles = makeStyles(() => ({
  root: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '80%',
    margin: '30px',
  },
}));

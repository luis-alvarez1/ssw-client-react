import { makeStyles } from '@material-ui/core';

export const useLoginStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: window.innerHeight,
    backgroundColor: theme.palette.primary.main,
  },
  textfield: {
    margin: '10px 0',
    width: '100%',
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  createUser: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '10px 0',
  },
  titleText: {
    fontSize: '50px',
    margin: '20px',
    color: theme.palette.white,
    fontStyle: 'italic',
  },
  button: {
    margin: '10px 0',
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '30px',
  },
  img: {
    width: '100%',
    maxWidth: '100px',
  },
}));

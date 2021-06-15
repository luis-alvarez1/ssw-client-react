import { makeStyles } from '@material-ui/styles';

export const useLandingPageStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: window.innerHeight,
  },
}));

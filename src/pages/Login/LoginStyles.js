import { makeStyles } from '@material-ui/core';

export const useLoginStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: window.innerHeight,
  },
}));

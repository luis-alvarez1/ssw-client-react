import { useDispatch, useSelector } from 'react-redux';
import { setOpen as setDialogOpen } from '../redux/reducers/dialog/dialog';

export function useInfoDialogManagement() {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.dialog.open);

  const setOpen = (value) => {
    dispatch(setDialogOpen(value));
  };

  return {
    open,
    setOpen,
  };
}

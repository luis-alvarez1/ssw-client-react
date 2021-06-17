import { useDispatch, useSelector } from 'react-redux';
import {
  removeUser,
  setUser,
} from '../redux/reducers/user/user';

export function useUsersManagement() {
  const dispatch = useDispatch();
  const userGloablState = useSelector(
    (state) => state.user.value,
  );

  function setUserGlobalState(user) {
    dispatch(setUser(user));
  }

  function cleanUserGlobalState() {
    dispatch(removeUser());
  }

  return {
    user: userGloablState,
    setUser: setUserGlobalState,
    deleteUser: cleanUserGlobalState,
  };
}

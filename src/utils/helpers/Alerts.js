import { useTheme } from '@material-ui/styles';
import Swal from 'sweetalert2';

export const fireAlert = (title, message, alertType) => {
  Swal.fire(title, message, alertType);
};
export const fireAlertWithConfirmation = (
  title,
  message,
  confirmButtonText,
  callback,
) => {
  const theme = useTheme();
  Swal.fire({
    title,
    text: message,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: theme.palette.primary.main,
    cancelButtonColor: theme.palette.warning.main,
    confirmButtonText,
  }).then((result) => {
    if (result.isConfirmed) {
      callback();
    }
  });
};

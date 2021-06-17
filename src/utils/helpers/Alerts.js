import Swal from 'sweetalert2';

export const fireAlertNotification = (
  title,
  message,
  alertType,
) => {
  Swal.fire(title, message, alertType);
};
export const fireAlertWithConfirmation = (
  title,
  message,
  confirmButtonText,
  callback,
) => {
  Swal.fire({
    title,
    text: message,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#4D7CA3',
    cancelButtonColor: '#D33',
    confirmButtonText,
  }).then((result) => {
    if (result.isConfirmed) {
      callback();
    }
  });
};

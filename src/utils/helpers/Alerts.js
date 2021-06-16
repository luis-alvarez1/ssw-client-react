import Swal from 'sweetalert2';

export const fireAlert = (title, message, alertType) => {
  Swal.fire(title, message, alertType);
};

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import React from 'react';
import { useInfoDialogManagement } from '../../core/hooks/useInfoDialogManagement';
import { useUsersManagement } from '../../core/hooks/useProfileManagement';

export const InfoDialog = () => {
  const { open, setOpen } = useInfoDialogManagement();
  const { user } = useUsersManagement();

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>
          User Info
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Here are the current user properties. you can
            update them whenever you want.
          </DialogContentText>

          <ul styles={{ fontSize: '15px' }}>
            <li>
              <strong>User Name: </strong>
              {user.name ? user.name : 'N/A'}
            </li>
            <li>
              <strong>User Email: </strong>
              {user.email ? user.email : 'N/A'}
            </li>
            <li>
              <strong>Role: </strong>
              {user.rol_id ? user.rol_id : 'N/A'}
            </li>
            <li>
              <strong>Phone Number: </strong>
              {user.phoneNumber ? user.phoneNumber : 'N/A'}
            </li>
            {user.discountCode && (
              <li>
                <strong>Discount code: </strong>
                {user.discountCode
                  ? user.discountCode
                  : 'N/A'}
              </li>
            )}
          </ul>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Cancel
          </Button>
          <Button onClick={handleClose} color='primary'>
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

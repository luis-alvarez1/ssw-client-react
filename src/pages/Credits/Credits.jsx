import {
  List,
  ListItem,
  ListItemAvatar,
  Box,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core';

import { Delete as DeleteIcon } from '@material-ui/icons';
import React from 'react';
import { useCreditsStyles } from './CreditsStyles';

export const Credits = () => {
  const classes = useCreditsStyles();

  function generate(element) {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }
  return (
    <Box>
      <div className={classes.demo}>
        <List>
          {generate(
            <ListItem>
              <ListItemText
                primary='Single-line item'
                secondary={
                  "secondary ? 'Secondary text' : null"
                }
              />
              <ListItemSecondaryAction>
                <IconButton edge='end' aria-label='delete'>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>,
          )}
        </List>
      </div>
    </Box>
  );
};

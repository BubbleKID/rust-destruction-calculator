import React,  { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Avatar } from '@material-ui/core';
 
type Props = {
    value: number,
    image: string,
    id: string,
    label: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
  
const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: '20vw',
    paddingRight: '20vw',
    paddingTop: '20vh',
    display: 'flex',
    justifyContent: 'center',
    flexGrow: 1,
  },
  container: {
    width: '600px', 
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  textField: {
    marginLeft: theme.spacing(2),
  },
  icon: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(2),
  }
}));

const Material: React.FC <Props> = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.inputContainer}>
        <Avatar variant="square" alt={props.image}  src={`/assets/images/${props.image}.png`} className={classes.icon} />
        <TextField
            type="number"
            {...props}
            className={classes.textField}
            id={props.id}
            label={props.label}
            value={props.value}
            variant="outlined"
        />
    </div>
  );
}

export default Material;
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Avatar, Paper } from '@material-ui/core';
 
type Props = {
    value: number,
    image: string,
    id: string,
    label: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    disabled: boolean
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
  textField: {
    marginLeft: theme.spacing(2),
  },
  icon: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  paper: {
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(2),
   
    padding: theme.spacing(2),
    textAlign: 'center',    

  }
}));

const Material: React.FC <Props> = (props) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
        <Avatar variant="square" alt={props.image}  src={`/assets/images/${props.image}.png`} className={classes.icon} />
        <TextField
            type="number"
            {...props}
            className={classes.textField}
            id={props.id}
            label={props.label}
            value={props.value}
            variant="outlined"
            disabled={props.disabled}
        />
    </Paper>
  );
}

export default Material;
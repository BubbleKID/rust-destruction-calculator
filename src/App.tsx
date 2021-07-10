import React,  { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Grid, Paper, TextField } from '@material-ui/core';
 
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
}));

function App() {
  const classes = useStyles();
  const [satchel, setSatchel] = useState(0);

  const [resource, setResource] = useState({
    rope: 0,
    smallStash: 0,
    beancanGrenade: 0,
    gunPowder: 0,
    metalFragments: 0,
    charcoal: 0,
    sulfur: 0,
  });

  interface SyntheticEvent<T> {
    currentTarget: EventTarget & T;
  }

  const calculateRecource = () => {
    resource.rope = satchel * 1;
    resource.smallStash = satchel * 1;
    resource.beancanGrenade = satchel * 4;
    resource.gunPowder = resource.beancanGrenade * 60;
    resource.metalFragments = resource.beancanGrenade * 20;
    resource.charcoal = resource.gunPowder * 3;
    resource.sulfur = resource.gunPowder * 2;
    setResource(resource);
  }

  const updateSatchelNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSatchel(parseInt(e.currentTarget.value));
    calculateRecource();
  }

  return (
      <div className="App">
        <Grid className={classes.root} container spacing={3}>
          <Grid item xl={3}>
            <Paper className={classes.paper}>      
              <TextField
                type="number"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateSatchelNumber(e)}
                id="outlined-helperText"
                label="Satchel Charge"
                defaultValue={satchel}
                variant="outlined"
              />
            </Paper>
          </Grid>
          <Grid item xl={3}>
            <Paper className={classes.paper}>
              <TextField
                id="outlined-helperText"
                label="Rope"
                value={resource.rope}
                variant="outlined"
              />
              <TextField
                id="outlined-helperText"
                label="Small Stash"
                value={resource.smallStash}
                variant="outlined"
              />
              <TextField
                id="outlined-helperText"
                label="Beancan Grenade"
                value={resource.beancanGrenade}
                variant="outlined"
              />
            </Paper>
          </Grid>
          <Grid item xl={3}>  
            <Paper className={classes.paper}>
              <TextField
                id="outlined-helperText"
                label="Gun Powder"
                value={resource.gunPowder}
                variant="outlined"
              />
              <TextField
                id="outlined-helperText"
                label="Metal Fragments"
                value={resource.metalFragments}
                variant="outlined"
              />
            </Paper>
          </Grid> 
          <Grid item xl={3}>  
            <Paper className={classes.paper}>
              <TextField
                id="outlined-helperText"
                label="Charcoal"
                value={resource.charcoal}
                variant="outlined"
              />
              <TextField
                id="outlined-helperText"
                label="Sulfur"
                value={resource.sulfur}
                variant="outlined"
              />
            </Paper>
          </Grid>       
        </Grid>
      </div>
  );
}

export default App;

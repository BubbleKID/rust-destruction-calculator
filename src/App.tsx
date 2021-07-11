import React,  { useState, useEffect } from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, TextField, Avatar, Typography } from '@material-ui/core';
import Material from './components/Material';
 
const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: '20vw',
    paddingRight: '20vw',
    paddingTop: theme.spacing(10),
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
  },
  typo: {
    paddingTop: '20vh',
    color: '#fff',
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
  const updateSatchelNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(parseInt(e.currentTarget.value) < 0) {
      setSatchel(0);
    } else {
      setSatchel(parseInt(e.currentTarget.value));
    }
  }

  useEffect(() => {
    setResource(prevState => ({
      rope: satchel * 1,
      smallStash: satchel * 1,
      beancanGrenade: satchel * 4,
      gunPowder: satchel * 240,
      metalFragments: satchel * 120,
      charcoal: satchel * 3 * 240,
      sulfur: satchel * 2 * 240
    }));
  }, [satchel]);

  return (
      <div className="App">
        <Typography variant="h3" className={classes.typo} gutterBottom>
          Rust Destruction Calculator
        </Typography>
        <Grid className={classes.root} container spacing={3}>
          <Grid item xl={3}>
            <Paper className={classes.paper}>    
              <Material onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateSatchelNumber(e)} id="satchel-input" image="Satchel_icon" label="Satchel" value={satchel} />
            </Paper>
          </Grid>
          <Grid item xl={3}>
            <Paper className={classes.paper}>
              <Material id="stash-input" image="Small_Stash_icon" label="Small Stash" value={resource.smallStash} />
              <Material id="beancan-grenade-input" image="Beancan_Grenade_icon" label="Beancan Grenade" value={resource.beancanGrenade} />
            </Paper>
          </Grid>
          <Grid item xl={3}>  
            <Paper className={classes.paper}>
              <Material id="gun-powder-input" image="Gun_Powder_icon" label="Gun Powder" value={resource.gunPowder} />
              <Material id="metal-fragments-input" image="Metal_Fragments_icon" label="Metal Fragments" value={resource.metalFragments} />
            </Paper>
          </Grid> 
          <Grid item xl={3}>  
            <Paper className={classes.paper}>
              <Material id="charcoal-input" image="Charcoal_icon" label="Charcoal" value={resource.charcoal} />
              <Material id="sulfur-input" image="Sulfur_icon" label="Sulfur" value={resource.sulfur} />
            </Paper>
          </Grid>       
        </Grid>
      </div>
  );
}

export default App;

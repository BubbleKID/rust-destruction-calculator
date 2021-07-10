import React,  { useState, useEffect } from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, TextField, Avatar, Typography } from '@material-ui/core';
 
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
    if(e.currentTarget.value)
    setSatchel(parseInt(e.currentTarget.value));
  }

  useEffect(() => {
    setResource(prevState => ({
      rope: satchel * 1,
      smallStash: satchel * 1,
      beancanGrenade: satchel * 4,
      gunPowder: resource.beancanGrenade * 60,
      metalFragments: resource.beancanGrenade * 20,
      charcoal: resource.gunPowder * 3,
      sulfur: resource.gunPowder * 2
    }));
  }, [satchel]);

  return (
      <div className="App">
        <Typography variant="h3" gutterBottom>
          Rust Destruction Calculator
        </Typography>
        <Grid className={classes.root} container spacing={3}>
          <Grid item xl={3}>
            <Paper className={classes.paper}>    
              <div className={classes.inputContainer}> 
                <Avatar variant="square" alt="Satchel_icon" src="/assets/images/Satchel_icon.png" className={classes.icon} />
                <TextField
                  className={classes.textField}
                  type="number"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateSatchelNumber(e)}
                  id="satchel-input"
                  label="Satchel Charge"
                  defaultValue={satchel}
                  variant="outlined"
                />
              </div>
            </Paper>
          </Grid>
          <Grid item xl={3}>
            <Paper className={classes.paper}>
              <div className={classes.inputContainer}>
                <Avatar variant="square" alt="Rope_icon" src="/assets/images/Rope_icon.png" className={classes.icon} />
                <TextField
                  className={classes.textField}
                  id="rope-input"
                  label="Rope"
                  value={resource.rope}
                  variant="outlined"
                />
              </div>
              <div className={classes.inputContainer}>
                <Avatar variant="square" alt="Small_Stash_icon" src="/assets/images/Small_Stash_icon.png" className={classes.icon} />
                <TextField
                  className={classes.textField}
                  id="stash-input"
                  label="Small Stash"
                  value={resource.smallStash}
                  variant="outlined"
                />
              </div>
              <div className={classes.inputContainer}>
                <Avatar variant="square" alt="Beancan_Grenade_icon" src="/assets/images/Beancan_Grenade_icon.png" className={classes.icon} />
                <TextField
                  className={classes.textField}
                  id="beancan-grenade-input"
                  label="Beancan Grenade"
                  value={resource.beancanGrenade}
                  variant="outlined"
                />
              </div>
            </Paper>
          </Grid>
          <Grid item xl={3}>  
            <Paper className={classes.paper}>
              <div className={classes.inputContainer}>
                <Avatar variant="square" alt="Metal_Fragments_icon" src="/assets/images/Metal_Fragments_icon.png" className={classes.icon} />
                <TextField
                  className={classes.textField}
                  id="gun-powder-input"
                  label="Gun Powder"
                  value={resource.gunPowder}
                  variant="outlined"
                />
              </div>
              <div className={classes.inputContainer}>
                <Avatar variant="square" alt="Gun_powder_icon" src="/assets/images/Gun_powder_icon.png" className={classes.icon} />
                <TextField
                  className={classes.textField}
                  id="metal-fragments-input"
                  label="Metal Fragments"
                  value={resource.metalFragments}
                  variant="outlined"
                />
              </div>
            </Paper>
          </Grid> 
          <Grid item xl={3}>  
            <Paper className={classes.paper}>
              <div className={classes.inputContainer}>
                <Avatar variant="square" alt="Trevor Henderson" src="/assets/images/Charcoal_icon.png" className={classes.icon} />
                <TextField
                  className={classes.textField}
                  id="charcoal-input"
                  label="Charcoal"
                  value={resource.charcoal}
                  variant="outlined"
                />
              </div>
              <div className={classes.inputContainer}>
                <Avatar variant="square" alt="Trevor Henderson" src="/assets/images/Sulfur_icon.png" className={classes.icon} />
                <TextField
                  className={classes.textField}
                  id="sulfur-input"
                  label="Sulfur"
                  value={resource.sulfur}
                  variant="outlined"
                />
              </div>
            </Paper>
          </Grid>       
        </Grid>
      </div>
  );
}

export default App;

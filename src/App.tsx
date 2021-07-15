import React,  { useState, useEffect } from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
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
  const [timedExplosiveCharge, setTimedExplosiveCharge] = useState(0);
  const [resource, setResource] = useState({
    rope: 0,
    smallStash: 0,
    beancanGrenade: 0,
    gunPowder: 0,
    metalFragments: 0,
    charcoal: 0,
    sulfur: 0,
    explosives: 0
  });

  const updateGoodNumber = (e: React.ChangeEvent<HTMLInputElement>, setStateFunction: React.Dispatch<React.SetStateAction<number>>) => {
    if(parseInt(e.currentTarget.value) < 0 || e.currentTarget.value === '') {
      setStateFunction(0);
    } else {
      setStateFunction(parseInt(e.currentTarget.value));
    }
  }

  useEffect(() => {
    setResource(prevState => ({
      rope: satchel * 1,
      smallStash: satchel * 1,
      beancanGrenade: satchel * 4,
      gunPowder: satchel * 240 + timedExplosiveCharge * 20 * 50,
      metalFragments: satchel * 120 + timedExplosiveCharge * 20 * 10,
      charcoal: satchel * 3 * 240 + timedExplosiveCharge * 20 * 50 * 3,
      sulfur: satchel * 2 * 240 + timedExplosiveCharge * 20 * (10 + 50 * 2),
      explosives: timedExplosiveCharge * 20,
    }));
  }, [satchel, timedExplosiveCharge]);

  return (
      <div className="App">
        <Typography variant="h3" className={classes.typo} gutterBottom>
          Rust Destruction Calculator
        </Typography>
        <Grid className={classes.root} container spacing={3}>
          <Grid item xl={3}>
            <Material disabled={false} onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateGoodNumber(e, setSatchel)} id="satchel-input" image="Satchel_icon" label="Satchel" value={satchel} />
            <Material disabled={false} onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateGoodNumber(e, setTimedExplosiveCharge)} id="timed-explosive-charge-input" image="Timed_Explosive_Charge_icon" label="Timed Explosive Charge" value={timedExplosiveCharge} />
          </Grid>
          <Grid item xl={3}>
            <Material disabled={true} id="stash-input" image="Small_Stash_icon" label="Small Stash" value={resource.smallStash} />
            <Material disabled={true} id="beancan-grenade-input" image="Beancan_Grenade_icon" label="Beancan Grenade" value={resource.beancanGrenade} />
            <Material disabled={true} id="explosives-input" image="Explosives_icon" label="Explosives" value={resource.explosives} />
          </Grid>
          <Grid item xl={3}>
            <Material disabled={true} id="gun-powder-input" image="Gun_Powder_icon" label="Gun Powder" value={resource.gunPowder} />
            <Material disabled={true} id="metal-fragments-input" image="Metal_Fragments_icon" label="Metal Fragments" value={resource.metalFragments} />
          </Grid> 
          <Grid item xl={3}>
            <Material disabled={true} id="charcoal-input" image="Charcoal_icon" label="Charcoal" value={resource.charcoal} />
            <Material disabled={true} id="sulfur-input" image="Sulfur_icon" label="Sulfur" value={resource.sulfur} />
          </Grid>       
        </Grid>
      </div>
  );
}

export default App;

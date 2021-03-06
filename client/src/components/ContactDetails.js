import React from 'react'
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid"

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
  avatar: {
    height: "5rem",
    width: "5rem",
  },
  grid: {
    border: "1px solid red"
  },
  center: {    
    margin: "auto",
    textAlign: "center"
  }
}));

const ContactDetails = () => {  
  const classes = useStyles();
  return (
    <Grid container className={classes.grid}>
      <Grid item xs={12} >
        <Avatar className={`${classes.center} ${classes.avatar}`}>H</Avatar>
        <h2 className={classes.center}>Contact Details</h2>
      </Grid>
      <Grid item xs={6} >
        <h2 className={classes.center}>Contact Details</h2>
      </Grid>
      <Grid item xs={6} >
        <h2 className={classes.center}>Contact Details</h2>
      </Grid>
      <Grid item xs={6} >
        <h2 className={classes.center}>Contact Details</h2>
      </Grid>
      <Grid item xs={6} >
        <h2 className={classes.center}>Contact Details</h2>
      </Grid>
      <Grid item xs={6} >
        <Avatar className={`${classes.center} ${classes.avatar}`}>H</Avatar>
        <h2 className={classes.center}>Contact Details</h2>
      </Grid>
      <Grid item xs={6} >
        <Avatar className={`${classes.center} ${classes.avatar}`}>H</Avatar>
        <h2 className={classes.center}>Contact Details</h2>
      </Grid>
      <Grid item xs={6} >
        <Avatar className={`${classes.center} ${classes.avatar}`}>H</Avatar>
        <h2 className={classes.center}>Contact Details</h2>
      </Grid>
      <Grid item xs={6} >
        <Avatar className={`${classes.center} ${classes.avatar}`}>H</Avatar>
        <h2 className={classes.center}>Contact Details</h2>
      </Grid>
      <Grid item xs={6} >
        <Avatar className={`${classes.center} ${classes.avatar}`}>H</Avatar>
        <h2 className={classes.center}>Contact Details</h2>
      </Grid>
      <Grid item xs={6} >
        <Avatar className={`${classes.center} ${classes.avatar}`}>H</Avatar>
        <h2 className={classes.center}>Contact Details</h2>
      </Grid>
    </Grid>

  )
}

export default ContactDetails

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
    backgroundColor: "#f50057",
  },
  grid: {
    marginLeft: "10rem",
    padding: "2rem",
    width: "25rem",
    fontSize: ".8rem",
    fontFamily: "Helvetica",    
    backgroundColor: "#F1F1F1",
    color: "#E0BB75"
  },
  center: {    
    margin: "auto",
    textAlign: "center"
  }
}));

const ContactDetails = ({selected}) => { 
  const classes = useStyles();

  return (
    <Grid container className={classes.grid}>
      <Grid item xs={12} >
        <Avatar className={`${classes.center} ${classes.avatar}`}>H</Avatar>
        <p className={classes.center}>Contact Details</p>
      </Grid>
      <Grid item xs={6} >
        <p>Full name</p>
      </Grid>
      <Grid item xs={6} >
        <p>{selected.fullName}</p>
      </Grid>
      <Grid item xs={6} >
        <p>Email</p>
      </Grid>
      <Grid item xs={6} >
        <p>{selected.email}</p>
      </Grid>
      <Grid item xs={6} >
        <p>Phone</p>
      </Grid>
      <Grid item xs={6} >
        <p>{selected.phone}</p>
      </Grid>
      <Grid item xs={6} >
        <p>Company</p>
      </Grid>
      <Grid item xs={6} >
        <p>{selected.company}</p>
      </Grid>
      <Grid item xs={6} >
        <p>Address</p>
      </Grid>
      <Grid item xs={6} >
        <p>{selected.address}</p>
      </Grid>
    </Grid>

  )
}

export default ContactDetails

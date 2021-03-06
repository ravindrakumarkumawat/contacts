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
    border: "1px solid red",
    marginLeft: "3rem",
    padding: "1rem",
    width: "30rem"
  },
  center: {    
    margin: "auto",
    textAlign: "center"
  }
}));

const ContactDetails = ({ fullName, email, phone, company, address }) => {  
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
        <p>{fullName}</p>
      </Grid>
      <Grid item xs={6} >
        <p>Email</p>
      </Grid>
      <Grid item xs={6} >
        <p>{email}</p>
      </Grid>
      <Grid item xs={6} >
        <p>Phone</p>
      </Grid>
      <Grid item xs={6} >
        <p>{phone}</p>
      </Grid>
      <Grid item xs={6} >
        <p>Company</p>
      </Grid>
      <Grid item xs={6} >
        <p>{company}</p>
      </Grid>
      <Grid item xs={6} >
        <p>Address</p>
      </Grid>
      <Grid item xs={6} >
        <p>{address}</p>
      </Grid>
    </Grid>

  )
}

export default ContactDetails

import React from "react"
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ContactsIcon from '@material-ui/icons/Contacts';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,        
    marginTop: "1.5rem",    
    marginLeft: "2.5rem",
  },
  contactIcon: {
    height: "2.5rem",
    width: "2.5rem",
    marginTop: "1.2rem"
  },
  headerText: {    
    marginTop: "1.5rem"
  }
}));

const Contact =() =>{
  const classes = useStyles();
    return (
        <Grid container spacing={6} className={classes.root}>
          <Grid item xs={1}>        
            <ContactsIcon className={classes.contactIcon}/>
          </Grid>

          <Grid item xs={11}>        
            <h3 className={classes.headerText}>Contacts</h3>
          </Grid>
        </Grid>  
    );  
}

export default Contact

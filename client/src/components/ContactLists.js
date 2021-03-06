import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import Avatar from "@material-ui/core/Avatar";
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
    height: "30px",
    width: "30px",
    marginTop: "18px"
  },
  checkbox: {
    height: "25px",
    width: "25px",
    marginTop: "10px"
  }
}));

const ContactList = () => {
  const data = [
    {
      name: "Ravindra",
      address: "Jaipur",
    },
    {
      name: "Ravindra",
      address: "Jaipur",
    },
    {
      name: "Ravindra",
      address: "Jaipur",
    },
    {
      name: "Ravindra",
      address: "Jaipur",
    },
  ];

  const checked = true;
  const handleChange = () => {};
  const classes = useStyles();

  return (
    <>
      <Paper variant="outlined" className={classes.paper}>
        <Grid container>    
          <Grid item xs={3}>
          +
          </Grid>
          <Grid item xs={3}>
          Basic Info
          </Grid>
          <Grid item xs={3}>
          Company
          </Grid>
        </Grid>
      </Paper>
    
      {data.map((value) => (
        <Paper variant="outlined" className={classes.paper}>
          <div className={classes.root}>
            <Grid container>
              <Grid item xs={2}>
                  <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    className={classes.checkbox}
                    inputProps={{ "aria-label": "primary checkbox" }}
                  />
              </Grid>
              <Grid item xs={1}>
                  <Avatar className={classes.avatar}>H</Avatar>
              </Grid>
              <Grid item xs={4}>
                <h6>{value.name}</h6>
              </Grid>
              <Grid item xs={5}><h6>{value.address}</h6>
              </Grid>
            </Grid>
          </div>
        </Paper>
      ))}
    </>
  );
};

export default ContactList;

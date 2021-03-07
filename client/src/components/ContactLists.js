import { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import ContactDetails from "./ContactDetails";
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paperHeader: {
    padding: theme.spacing(0.7),
    textAlign: "left",
    color: theme.palette.text.secondary,
    width: "39.3rem",
    marginLeft: "7rem",
    fontFamily: "Helvetica",
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: "left",
    color: theme.palette.text.secondary,
    width: "40rem",
    marginLeft: "7rem",
    cursor: "pointer",
  },
  avatar: {
    height: "30px",
    width: "30px",
    backgroundColor: "#f50057",
    marginTop: "18px",
  },
  checkbox: {
    height: "25px",
    width: "25px",
    marginTop: "10px",
  },
}));

const ContactList = () => {
  const classes = useStyles();
  const [contacts, setContacts] = useState([])
  const [selected, setSelected] = useState(null)
  const checked = true;

  useEffect(() => {
    fetch("http://localhost:5001/users")
      .then((response) => response.json())
      .then((res) => {
        setContacts(res)
      });    
  }, []);

  const handleChange = () => {};
  
  const handleDelete = async (e, id) => {
    e.stopPropagation()
    try {
      const del = await fetch(`http://localhost:5001/users/${id}`,{
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      const response = await del.json()
      console.log(response)
      if(response.deleted){
        setContacts([...contacts.filter(contact => contact._id !== id)])
      }
    } catch (err) {
      console.log('Error', err)
    }
  }

  return (
    <Grid container>
      <Grid item xs={6}>
        <Paper variant="outlined" className={classes.paperHeader}>
          <Grid container>
            <Grid item xs={3}>
              <h4>+</h4>
            </Grid>
            <Grid item xs={3}>
              <h4>Basic Info</h4>
            </Grid>
            <Grid item xs={3}>
              <h4>Company</h4>
            </Grid>
          </Grid>
        </Paper>
        {contacts.map((contact) => (
          <Paper
            variant="outlined"
            className={classes.paper}
            key={contact._id}
            onClick={() => setSelected(contact)}
          >
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
                  <Avatar className={classes.avatar}>
                    {contact.fullName[0]}
                  </Avatar>
                </Grid>
                <Grid item xs={4}>
                  <h6>{contact.fullName}</h6>
                </Grid>
                <Grid item xs={4}>
                  <h6>{contact.company}</h6>
                </Grid>
                <Grid item xs={1}> 
                  <DeleteForeverRoundedIcon 
                  className={classes.checkbox} onClick={(e) => handleDelete(e, contact._id)}/>
                </Grid>
              </Grid>
            </div>
          </Paper>
        ))}
      </Grid>
      {selected && (
        <Grid item xs={6}>
          <ContactDetails selected={selected}/>
        </Grid>
      )}
    </Grid>
  );
};

export default ContactList;

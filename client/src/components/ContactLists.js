import { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import ContactDetails from "./ContactDetails";

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

const ContactList = ({isAdded, handleAdded, search}) => {
  const classes = useStyles();
  const [contacts, setContacts] = useState([])
  const [selected, setSelected] = useState(null)
  const checked = true;
  
  const [fullNameError, setFullNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [phoneError, setPhoneError] = useState('')
  const [companyError, setCompanyError] = useState('')
  const [addressError, setAddressError] = useState('')

  useEffect(() => {
    if(!isAdded) {
      fetch("http://localhost:5001/users")
      .then((response) => response.json())
      .then((res) => {
        setContacts(res)
      }); 
    } else {
      setContacts([])
      fetch("http://localhost:5001/users")
      .then((response) => response.json())
      .then((res) => {
        setContacts(res)
      });
      handleAdded()
    }
  }, [isAdded, handleAdded]);

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
      if(response.deleted){
        setContacts([...contacts.filter(contact => contact._id !== id)])
        setSelected(false)
      }
    } catch (err) {
      console.log('Error', err)
    }
  }

  const handleUpdate = async (e, id, fullName, email, phone, company, address) => {
    if(!fullName) {
      setFullNameError('Full Name is Missing')
    }
    if(!company) {
      setCompanyError('Company is Missing')
    }
    if(!phone) {
      setPhoneError('Phone is Missing')
    }
    if(!address) {
      setAddressError('Address is Missing')
    }
    if(!email){
      setEmailError('Email is Missing')
    }
    if (fullName && company && phone && email && address) {  
      try{
        const data =  await fetch(`http://localhost:5001/users/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({fullName, company, phone, email, address}),
        })
        const response = await data.json()
        
        if(!response.error) {
          setContacts([...contacts.filter(contact => contact._id !== id), response])
          setSelected(response)
        }
      }catch(err) {
        console.log(err)
      }     
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
        {contacts.filter(contact => contact.fullName.match(search)).map((contact) => (
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
                <Grid item xs={5}>
                  <h6>{contact.company}</h6>
                </Grid>
              </Grid>
            </div>
          </Paper>
        ))}
      </Grid>
      {selected && (
        <Grid item xs={6}>
          <ContactDetails selected={selected} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
        </Grid>
      )}
    </Grid>
  );
};

export default ContactList;

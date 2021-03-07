import "./App.css";
import React, {useState} from "react";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Contact from "./components/Contact";
import Grid from "@material-ui/core/Grid";
import ContactList from "./components/ContactLists";
import Search from "./components/Search";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const App = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [company, setCompany] = useState('')
  const [address, setAddress] = useState('')
  const [isAdded, setIsAdded] = useState(false)
  const [responseData, setResponseData] = useState({})

  const [fullNameError, setFullNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [phoneError, setPhoneError] = useState('')
  const [companyError, setCompanyError] = useState('')
  const [addressError, setAddressError] = useState('')

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
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
        const data =  await fetch('http://localhost:5001/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({fullName, company, phone, email, address}),
        })
        const response = await data.json()
        
        if(!response.error) {
          setOpen(false)
          setIsAdded(true)
          setResponseData(response)
        } else {
          setOpen(false)
        }
      }catch(err) {
        console.log(err)
      }     
    }
  }
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Contact />
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Search />
          </Grid>
          <Grid item xs={2} >
            <Button
              variant="contained"
              color="secondary"
              onClick={handleClickOpen}
            >
              + Add Contact
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <ContactList isAdded={isAdded} handleAdded={() => setIsAdded(false)} data={responseData}/>
        </Grid>
      </Grid>
      <Dialog
        fullWidth={true}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Add Contact
        </DialogTitle>
        <DialogContent dividers>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField  label="Full Name" required={true} value={fullName} onChange={(e)=> setFullName(e.target.value)}/>
            <TextField   label="Email" type="email" required={true} value={email} onChange={(e)=> setEmail(e.target.value)}/>
            <TextField label="Phone" required={true} value={phone} onChange={(e)=> setPhone(e.target.value)}/>
            <TextField  label="Company" required={true} value={company} onChange={(e)=> setCompany(e.target.value)}/>
            <TextField  label="Address" required={true} value={address} onChange={(e)=> setAddress(e.target.value)}/>
          </form>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleSubmit} color="secondary">
            Add Contact
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default App;

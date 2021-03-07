import React, {useState} from 'react'
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
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
    color: "#47525da6",
    boxShadow: "0 0 .6rem rgba(0,0,0,0.2)",
    border: "1px solid rgba(0,0,0,0.2)"
  },
  center: {    
    margin: "1.5rem auto",
    textAlign: "center",
  },
  detail: {
    color: "black",
    fontSize: ".9rem",
  }
}));

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

const ContactDetails = ({selected, handleDelete, handleUpdate}) => { 
  const classes = useStyles();
  const [open, setOpen] = useState(false); 
  const [fullName, setFullName] = useState(selected.fullName)
  const [email, setEmail] = useState(selected.email)
  const [phone, setPhone] = useState(selected.phone)
  const [company, setCompany] = useState(selected.company)
  const [address, setAddress] = useState(selected.address)

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
    <Grid container className={classes.grid}>
      <Grid item xs={12} >
        <Avatar className={`${classes.center} ${classes.avatar}`}>{selected.fullName[0]}</Avatar>
        <p className={classes.center}>Working at | {selected.company}</p>
      </Grid>
      <Grid item xs={6} >
        <p>Full name</p>
      </Grid>
      <Grid item xs={6} >
        <p className={classes.detail}>{selected.fullName}</p>
      </Grid>
      <Grid item xs={6} >
        <p>Email</p>
      </Grid>
      <Grid item xs={6} >
        <p className={classes.detail}>{selected.email}</p>
      </Grid>
      <Grid item xs={6} >
        <p>Phone</p>
      </Grid>
      <Grid item xs={6} >
        <p className={classes.detail}>{selected.phone}</p>
      </Grid>
      <Grid item xs={6} >
        <p>Company</p>
      </Grid>
      <Grid item xs={6} >
        <p className={classes.detail}>{selected.company}</p>
      </Grid>
      <Grid item xs={6} >
        <p>Address</p>
      </Grid>
      <Grid item xs={6} >
        <p className={classes.detail}>{selected.address}</p>
      </Grid>
      <Grid item xs={4} >
        <Button
          variant="contained"
          color="secondary"
          onClick={handleClickOpen}
        >
          Edit
        </Button>
      </Grid>
      
      <Grid item xs={4} >
        <Button
          variant="contained"
          color="secondary"
          onClick={(e) => handleDelete(e, selected._id)}
        >
          Delete
        </Button>
      </Grid>
    </Grid>
    <Dialog
        fullWidth={true}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Update Contact
        </DialogTitle>
        <DialogContent dividers>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField  label="Full Name" required={true} value={fullName} onChange={(e)=>  setFullName(e.target.value)}/>
            <TextField   label="Email" type="email" required={true} value={email} onChange={(e)=> setEmail(e.target.value)}/>
            <TextField label="Phone" required={true} value={phone} onChange={(e)=> setPhone(e.target.value)}/>
            <TextField  label="Company" required={true} value={company} onChange={(e)=> setCompany(e.target.value)}/>
            <TextField  label="Address" required={true} value={address} onChange={(e)=> setAddress(e.target.value)}/>
          </form>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={(e) => { 
            handleUpdate(e, selected._id, fullName, email, phone, company, address)
            handleClose()
          }} color="secondary">
            Update Contact
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default ContactDetails

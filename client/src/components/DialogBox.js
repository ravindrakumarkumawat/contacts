import React, { useState } from 'react'
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

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

const DialogBox = ({handleClose, open, selected, handleSubmit}) => {

  const classes = useStyles()
  const [fullName, setFullName] = useState(selected.fullName)
  const [email, setEmail] = useState(selected.email)
  const [phone, setPhone] = useState(selected.phone)
  const [company, setCompany] = useState(selected.company)
  const [address, setAddress] = useState(selected.address)
  return (
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
  )
}

export default DialogBox

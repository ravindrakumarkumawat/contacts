import "./App.css";
import React from "react";
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
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Contact />
        </Grid>
        <Grid container>
          <Grid item xs={4}>
            <Search />
          </Grid>
          <Grid item xs={2}>
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
          <ContactList />
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
            <TextField id="standard-basic" label="Full Name" />
            <TextField id="standard-basic" label="Email" />
            <TextField id="standard-basic" label="Phone" />
            <TextField id="standard-basic" label="Company" />
            <TextField id="standard-basic" label="Address" />
          </form>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="secondary">
            Add Contact
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default App;

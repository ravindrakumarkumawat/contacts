import React from "react"
import ContactPhoneIcon from "@material-ui/icons/ContactPhone"
import Divider from "@material-ui/core/Divider"
import Grid from "@material-ui/core/Grid";

class Contact extends React.Component {
  state = {
    name: "abhi",
  };

  render() {
    return (
        <Grid container >
          <Grid item xs={6}>        
            <ContactPhoneIcon />
          </Grid>

          <Grid item xs={6}>        
            <h1>Contacts</h1>
          </Grid>
        </Grid>  
    );
  }
}

export default Contact

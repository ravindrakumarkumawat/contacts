import "./App.css";
import React from "react";
import Contact from "./components/Contact";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import ContactList from "./components/ContactLists";
import ContactDetails from "./components/ContactDetails";
class App extends React.Component {
  state = {
    name: "abhi",
  };

  

  render() {
    return (
      <Grid container spacing={3}>
        <Grid xs={8}>              
          <Contact />
        </Grid>
        <Grid item xs={6}>   
          <ContactList />
        </Grid>
        <Grid item xs={6}>        
          <ContactDetails />
        </Grid>
        <Divider />
      </Grid>
    );
  }
}

export default App;

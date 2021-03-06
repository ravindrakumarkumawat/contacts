import "./App.css"
import Contact from "./components/Contact"
import Grid from "@material-ui/core/Grid"
import ContactList from "./components/ContactLists"

const App = () => {
  return (
    <Grid container spacing={3}>
      <Grid xs={8}>              
        <Contact />
      </Grid>
      <Grid item xs={12}>   
        <ContactList />
      </Grid>
    </Grid>
  );
}


export default App;

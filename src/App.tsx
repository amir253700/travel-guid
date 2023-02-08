import { Grid } from "@mui/material";

import Map from "./components/Map/Map";
import Header from "./components/Header/Header";
import PlaceList from "./components/PlaceList/PlaceList";
import "./app.css";

const App = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12} md={4}>
        <PlaceList />
      </Grid>
      <Grid item xs={12} md={4}>
        <Map />
      </Grid>
    </Grid>
  );
};

export default App;

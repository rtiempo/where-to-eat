import { Navbar, Map, Details, List } from './components';
import { Grid } from './App.styles';

function App() {
  return (
    <>
      <Grid>
        <Navbar />
        <Details />
        <Map />
        <List />
      </Grid>
    </>
  );
}

export default App;

import React, { Component } from 'react';
import './App.css';

// MATERIAL-UI
// import Button from '@material-ui/core/Button';
// import Grid from '@material-ui/core/Grid';
// import Container from '@material-ui/core/Container';

import {
  Button,
  Grid,
  Container
} from '@material-ui/core';

// THEMEING
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import {
  teal,
  cyan,
  red,
} from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: cyan,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  }
})

class App extends Component {

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <header className="App-header">
            <h1>STYLE ME</h1>
          </header>

          <Container>
            <Grid container spacing={5}>
              <Grid item xs={12}>
                <h2>Cell 1</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor convallis condimentum. Donec ullamcorper mauris facilisis ante efficitur commodo. Vivamus congue blandit nulla et venenatis. Suspendisse nec scelerisque ipsum. In.</p>
              </Grid>
              <Grid item xs={6}>
                <h2>Cell 2</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor convallis condimentum. Donec ullamcorper mauris facilisis ante efficitur commodo. Vivamus congue blandit nulla et venenatis. Suspendisse nec scelerisque ipsum. In.</p>
              </Grid>
              <Grid item xs={6}>
                <h2>Cell 3</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor convallis condimentum. Donec ullamcorper mauris facilisis ante efficitur commodo. Vivamus congue blandit nulla et venenatis. Suspendisse nec scelerisque ipsum. In.</p>
              </Grid>
            </Grid>
          </Container>

          <Button variant="contained" color="primary">ME BUTTON</Button>
          <Button variant="contained" color="secondary">ME BUTTON</Button>
          <Button variant="contained" color="default">ME BUTTON</Button>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

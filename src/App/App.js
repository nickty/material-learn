
import React from 'react'
import SideMenu from '../components/SideMenu';
import './App.css';
import {CssBaseline, makeStyles, createMuiTheme, ThemeProvider} from '@material-ui/core'
import Header from '../components/Header';
import PageHeader from '../components/PageHeader';

import Employees from '../pages/Employees/Employees';

const useStyles = makeStyles({
  appMain : {
    paddingLeft: '320px',
    width: '100%'
  }
})

const theme = createMuiTheme({
  palette: {
    background:{
      default: '#f2f5fd'
    }
  }
})

function App() {
  const classes = useStyles(); 
  return (
    <ThemeProvider theme={theme}>
    <SideMenu/>
      <div className={classes.appMain}>
        <Header/>
       
        <Employees/>
      </div>
      <CssBaseline/>
    </ThemeProvider>
  );
}

export default App;

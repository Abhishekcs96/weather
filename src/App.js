import './App.scss';
import React from 'react';
import {WiDaySunny} from 'react-icons/wi';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {  CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import Search from './components/Search';



function App() {
  const useStyle = makeStyles((theme)=>({
    text: {
      display: 'flex',
      textAlign: 'center',
      justifyContent: 'start',
      alignItems:'center',
      

       },
  }))
  const classes = useStyle();
  return(
    <div className = "App">
     
           <CssBaseline/>
           <AppBar position='relative' color ='transparent' className={classes.text}>
          <Toolbar>
            
          <WiDaySunny/>
             <Typography variant = "h4"> WEATHER CHECK</Typography>
            
              </Toolbar>
                    </AppBar>
                    <Search base = 'https://api.openweathermap.org/data/2.5/'/>
                    
                   
            
          </div>  
  
          
  

 
    
  )
}

export default App;

import React from 'react'
import './Data.scss'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(()=>({
    root: {
       
       display: 'flex',
       flexDirection: 'column',
       flexWrap: 'wrap',
       justifyContent:'center',
       alignItems:'center',
    },

    bullet: {
        display: 'flex',
        justifyContent: 'center',
    },

    title:{
        textAlign:'center',
        fontSize: '14px',

    }
    
}))


const Data = ({wweather}) => {
    
    //let date= String(new Date());
    //const date1 = date.slice(0,15);
    const classes = useStyles();
     return (
        <div  className = {classes.root} color="transparent">
           <div className="search2">   
            { 
             (typeof {wweather}.main != "undefined") ?
                   (
                       <>
                       <div className="containers">

                       <div className="time-container">
                         04:00<span id="following">AM</span>
                       </div>

                       <div className="date-container">
                           Saturday, 21st August

                       </div>

                       <div className="place-container">
                           {{wweather}.name}
                           <div className="lat">{{wweather}.coord.lat}</div>
                           <div className="lon">{{wweather}.coord.lon}</div>

                       </div>


                   <div className="weather-container">
                     <div className="temp">Temperature: {{wweather}.main.temp}</div>
                     <div className="humidity">Humidity : {{wweather}.main.humidity}</div>
                     <div className="windspeed">Wind speed : {{wweather}.wind.speed}</div>
                     <div className="desc">{{wweather}.weather.description}</div>
                     
                    </div>
                    <div className="future-forecast">
                       <div className="day">Sunday</div>
                       <div className="temp-night">24</div>
                       <div className="temp-day">25</div>
                    </div>
                    </div>
                   </> ) : ('') }
                    
               </div>
               </div>
        


    )
}

export default Data


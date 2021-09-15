import { createStyles, alpha, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { useState } from "react";
import "./Search.scss";
import moment from "moment";

const useStyles = makeStyles((theme) =>
  createStyles({
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,

      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  })
);

const key = "93f8dbfd938dc05678649e36af7757a2";

const Search = ({ base }) => {
  //start of component description
  const [Place, setPlace] = useState("");
  const [Weather, setWeather] = useState({});

  //nesting/chaining promises, as we need to use data from the first promise api call(if it resolves), to then use it in our next fetch api call
  const handlechange = (e1) => {
    if (e1.key === "Enter") {
      const data1 = fetch(
        `${base}weather?q=${Place}&units=metric&APPID=${key}`
      ).then((res) => res.json());

      data1.then((coordinfo) => {
        return fetch(
          `${base}onecall?lat=${coordinfo.coord.lat}&lon=${coordinfo.coord.lon}&exclude=minutely,hourly&units=metric&appid=${key}`
        )
          .then((res) => res.json())
          .then((weatherinfo) => {
            setWeather(weatherinfo);
            setPlace("");
            console.log(weatherinfo);
          });
      });
    }
  };
  //using materials-ui usestyles hook in order to create custom css styling for the style components
  const classes = useStyles();
  return (
    <div className="wrap">
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Enter city name..."
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search " }}
          value={Place}
          onChange={(e) => setPlace(e.target.value)}
          onKeyPress={handlechange}
        />
      </div>

      <div className={classes.root} color="transparent">
        {typeof Weather.current != "undefined" ? (
          <div className="container">
            <div className="current-info">
              <div className="first-container">
                <div className="time-container">
                  {moment(Weather.current.dt * 1000).format("LL")}
                </div>

                <div className="date-container"></div>

                <div className="weather-container">
                  <div className="temp">
                    Temperature:{" "}
                    <div className="temp1">{Weather.current.temp}&deg;C</div>
                  </div>
                  <div className="humidity">
                    Humidity :{" "}
                    <div className="humidity1">{Weather.current.humidity}%</div>
                  </div>
                  <div className="pressure">
                    Pressure :{" "}
                    <div className="pressure1">
                      {Weather.current.pressure} Pa
                    </div>
                  </div>
                  <div className="sunrise">
                    Sunrise :{" "}
                    <div className="sunrise1">
                      {moment(Weather.current.sunrise * 1000).format(
                        "HH:mm: a"
                      )}
                    </div>
                  </div>

                  <div className="sunset">
                    Sunset :{" "}
                    <div className="sunset1">
                      {moment(Weather.current.sunset * 1000).format("HH:mm: a")}
                    </div>
                  </div>
                </div>
              </div>

              <div className="place-info">
                <div className="city">{Weather.timezone}</div>
                <div className="lat-lon"></div>
              </div>
            </div>

            <div className="future-forecast">
              <div className="today">
                <div className="day">
                  {moment(Weather.current.dt * 1000).format("ddd")}
                </div>
                <img
                  src={`http://openweathermap.org/img/wn/${Weather.daily[0].weather[0].icon}@2x.png`}
                  alt="weather-display"
                  className="icon1"
                />
                <div className="temp-day">
                  Day: {Weather.daily[0].temp.day}&deg;C
                </div>
                <div className="temp-night">
                  Night: {Weather.daily[0].temp.night}&deg;C
                </div>
              </div>

              <div className="weather-forecast">
                <div className="item1">
                  <div className="day">
                    {moment(Weather.daily[1].dt * 1000).format("ddd")}
                  </div>
                  <img
                    src={`http://openweathermap.org/img/wn/${Weather.daily[1].weather[0].icon}@2x.png`}
                    alt="weather-display"
                    className="icon1"
                  />
                  <div className="temp-day">
                    Day: {Weather.daily[1].temp.day}&deg;C
                  </div>
                  <div className="temp-night">
                    Night: {Weather.daily[1].temp.night}&deg;C
                  </div>
                </div>
                <div className="item1">
                  <div className="day">
                    {moment(Weather.daily[2].dt * 1000).format("ddd")}
                  </div>
                  <img
                    src={`http://openweathermap.org/img/wn/${Weather.daily[2].weather[0].icon}@2x.png`}
                    alt="weather-display"
                    className="icon1"
                  />
                  <div className="temp-day">
                    Day: {Weather.daily[2].temp.day}&deg;C
                  </div>
                  <div className="temp-night">
                    Night: {Weather.daily[2].temp.night}&deg;C
                  </div>
                </div>
                <div className="item1">
                  <div className="day">
                    {moment(Weather.daily[3].dt * 1000).format("ddd")}
                  </div>
                  <img
                    src={`http://openweathermap.org/img/wn/${Weather.daily[3].weather[0].icon}@2x.png`}
                    alt="weather-display"
                    className="icon1"
                  />
                  <div className="temp-day">
                    Day: {Weather.daily[3].temp.day}&deg;C
                  </div>
                  <div className="temp-night">
                    Night: {Weather.daily[3].temp.night}&deg;C
                  </div>
                </div>
                <div className="item1">
                  <div className="day">
                    {moment(Weather.daily[4].dt * 1000).format("ddd")}
                  </div>
                  <img
                    src={`http://openweathermap.org/img/wn/${Weather.daily[4].weather[0].icon}@2x.png`}
                    alt="weather-display"
                    className="icon1"
                  />
                  <div className="temp-day">
                    Day: {Weather.daily[4].temp.day}&deg;C
                  </div>
                  <div className="temp-night">
                    Night: {Weather.daily[4].temp.night}&deg;C
                  </div>
                </div>

                <div className="item1">
                  <div className="day">
                    {moment(Weather.daily[5].dt * 1000).format("ddd")}
                  </div>
                  <img
                    src={`http://openweathermap.org/img/wn/${Weather.daily[5].weather[0].icon}@2x.png`}
                    alt="weather-display"
                    className="icon1"
                  />
                  <div className="temp-day">
                    Day: {Weather.daily[5].temp.day}&deg;C
                  </div>
                  <div className="temp-night">
                    Night: {Weather.daily[5].temp.night}&deg;C
                  </div>
                </div>

                <div className="item1">
                  <div className="day">
                    {moment(Weather.daily[6].dt * 1000).format("ddd")}
                  </div>
                  <img
                    src={`http://openweathermap.org/img/wn/${Weather.daily[6].weather[0].icon}@2x.png`}
                    alt="weather-display"
                    className="icon1"
                  />
                  <div className="temp-day">
                    Day: {Weather.daily[6].temp.day}&deg;C
                  </div>
                  <div className="temp-night">
                    Night: {Weather.daily[6].temp.night}&deg;C
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default Search;

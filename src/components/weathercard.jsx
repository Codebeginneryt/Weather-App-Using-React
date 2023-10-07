import React, { useEffect, useState } from 'react'
import '../components/weathercard.css';
//import axios from 'axios';

function Weathercard() {

    // search city
    //const addcity = document.getElementById('addcity');

    const [citySearch, setSearch] = useState('Delhi');

    //  useEffect(() => {
    //      setcitySearch(addcity.value)
    //    }, [citySearch])


    async function send() {
        const city = document.getElementById('city');
        const temperature = document.getElementById('temp');
        const naturecon = document.getElementById('natureCon');
        const windspeed = document.getElementById('windspeed');
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=668c8bb4289a7a499bf4448ffec4ae9c`;
        const res = await fetch(url);
        const data = await res.json();
        const cityName = data.name;
        const temp = data.main.temp;
        const speed = data.wind.speed;
        const nature = data.weather[0].main;
        console.log(temp);
        city.innerHTML = cityName;
        naturecon.innerHTML = nature;
        windspeed.innerHTML = speed + " " + "Wind Speed";
        temperature.innerHTML = temp + " " + "deg C";
        console.log(data);
    }

return (
    <>
        <div className="card">
            <div className="inputvalue">
                <input type="text" value={citySearch} id="addcity" placeholder="Enter The City Name" autoComplete="off" onChange={(e) => setSearch(e.target.value)} />
                <button onClick={() => send()}>Send</button>

            </div>
            <div className="card-image">
                <img src="https://abhay-tomar03.github.io/Weather-App/icons/011-cloud.png" alt="" />
            </div>
            <div className="temperature">
                <h1 id="temp"></h1>
            </div>
            <div className="city">
                <h3 id="city"></h3>
            </div>
            <div className="item">
                <div className="condition">
                    <p><br /><span id="natureCon"></span></p>
                </div>
                <div className="speed">
                    <p id="windspeed"></p>
                </div>
            </div>

        </div>

    </>
)
}

export default Weathercard
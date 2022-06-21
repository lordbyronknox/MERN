import React, { useState } from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const [backgroundImage, setBackgroundImage] = useState('app');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=b453e5c550649bebb421904b03571781`;
  const urlLondon = `https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=b453e5c550649bebb421904b03571781`;
  const urlTokyo = `https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=b453e5c550649bebb421904b03571781`;
  const urlNewYork = `https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=b453e5c550649bebb421904b03571781`;

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
        if (data.weather[0].description === 'overcast clouds') {
          setBackgroundImage('overcast')
        }
        else if (data.weather[0].description === 'clear sky') {
          setBackgroundImage('clear')
        }
        else if (data.weather[0].description === 'clouds') {
          setBackgroundImage('clouds')
        } else {
          setBackgroundImage('app')
        };
      })
      setLocation('');
      setBackgroundImage(backgroundImage);
    }
  }

  const getLondon = (event) => {
    if (event.key === 'Enter') {
      axios.get(urlLondon).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      // setLocation('')
    }
  }

  const getTokyo = (event) => {
    if (event.key === 'Enter') {
      axios.get(urlTokyo).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      // setLocation('')
    }
  }

  const getNewYork= (event) => {
    if (event.key === 'Enter') {
      axios.get(urlNewYork).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      // setLocation('')
    }
  }

  return (

    <div className={`${backgroundImage}`}>

      <div className="search row">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" />
          </div>
     
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].description}</p> : null}
          </div>

        <aside className="col-2">
          <div className="city">London</div>

          <div className="city">Tokyo</div>

          <div className="city">New York</div>

        </aside>

        </div>
        </div>
      



      {data.name !== undefined &&
        <div className="bottom">
          <div className="feels">
            {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} KPH</p> : null}
            <p>Wind Speed</p>
          </div>
        </div>
      }



    </div>
    // </div >

  );
}

export default App;
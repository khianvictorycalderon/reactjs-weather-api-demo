import React, { useState } from 'react'

export default function App() {

  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

  const getWeather = async() => {
    try {
      setError("");
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

      if (!response.ok) {
        throw new Error("City not Found");
      }

      const data = await response.json();
      setWeather(data);

    } catch (err) {

      setError(err.message);
      setWeather(null)
        
    }
  }

  return (
    <div>

      <input 
        type="text"
        placeholder="Enter a City..."
        
      />
      
    </div>
  );
}
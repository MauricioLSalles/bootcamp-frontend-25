import { useRef, useState } from "react";
import ClimateView from "./ClimateView";

function Climate() {
    const mockWeatherData = {
    'New York': {
      temperature: '22°C',
      humidity: '56%',
      windSpeed: '15 km/h'
    },
    'Los Angeles': {
      temperature: '27°C',
      humidity: '45%',
      windSpeed: '10 km/h',
    },
    'London': {
      temperature: '15°C',
      humidity: '70%',
      windSpeed: '20 km/h'
    },
  };
  const [history, setHistory] = useState([]);


  function handleSearch(){
    const locationName = inputRef.current.value;
    const location = mockWeatherData[locationName];
    console.log(location);
    setHistory([...history, location]);
  }

  function handleClean(){
    inputRef.current.value = "";
    inputRef.current.focus();
  }

  const inputRef = useRef(null);
 
  return (
    <div>
        <input ref={inputRef}/>
        <button onClick={handleSearch}>Search</button>
        <button onClick={handleClean}><b>Clean</b></button>
        {history[0] === undefined? <></>: <ClimateView temperature={history[0].temperature} humidity={history[0].humidity} windSpeed={history[0].humidity}/>}
    </div>
  )
}

export default Climate
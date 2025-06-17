import { useRef, useState } from "react";
import ClimateView from "./ClimateView";
import ClimateHistory from "./ClimateHistory";

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
  const [current, setCurrent] = useState();
   


  function handleSearch(){
    const locationName = inputRef.current.value;
    const location = mockWeatherData[locationName];
    const saveHistory = {...location,name:locationName}
    history.push(saveHistory);
    setCurrent(location);
    setHistory([...history]);   
  }

  function searchHistory(locationName){
    const location = mockWeatherData[locationName];
    setCurrent(location);
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
        {history[0] === undefined? <></>:<ClimateHistory search={searchHistory} history={history}/>}
        {current === undefined? <></>: 
          <ClimateView temperature={current.temperature} humidity={current.humidity} windSpeed={current.humidity}/>
        }
    </div>
  )
}

export default Climate
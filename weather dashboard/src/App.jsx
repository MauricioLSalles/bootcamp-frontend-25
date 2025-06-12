import { useState } from 'react'

function App() {
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
 
  const [count, setCount] = useState(0)

  return (
    <>
      </>
  )
}

export default App

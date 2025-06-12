
function ClimateView({temperature, humidity, windSpeed}) {
  return (
    <div>
        <p>{`Temperature: ${temperature}`}</p>
        <p>{`Humidity: ${humidity}`}</p>
        <p>{`Wind speed: ${windSpeed}`}</p>
    </div>
  )
}

export default ClimateView

function ClimateHistory({history, search}) {
  console.log(history);
  return (
    <div>
    {history.map((h,i) => (
        <button onClick={()=>search(h[1].name)} key={i}>{h[1].name}</button>
    ))}
    </div>
  )
}

export default ClimateHistory
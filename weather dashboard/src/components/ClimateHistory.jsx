
function ClimateHistory({history, search}) {
  console.log(history);
  return (
    <div>
    {history.map((h,i) => (
        <button onClick={()=>search(h.name)} key={i}>{h.name}</button>
    ))}
    </div>
  )
}

export default ClimateHistory
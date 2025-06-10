export function SeatComp2({
    state = false,
    onClick,
  }){  
    
   
    return (
    <div
    onClick={onClick}
        style={{
            backgroundColor:state?"green":"red",
            width:"30px",
            height:"30px"
        }}
    >
    </div>
  )
}
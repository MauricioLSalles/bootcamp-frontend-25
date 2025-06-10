import { useState } from "react";
import { CinemaSeats } from "./CinemaSeats";
import { Seat } from "./Seat";
import { SeatComp2 } from "./SeatComp2";

function Cinema() {

    const [seat, setSeat] = useState(CinemaSeats.createSeats(10, 10));

     console.log("render father");
    function reserveSeat(row,col){
        try{
            seat[row][col].state = !seat[row][col].state;
            setSeat([...seat]);
        }
        catch (error){
            console.log(error);
        }
    }


  return (
    <div>{seat.map((row, id) => {
        return (
            <div style={{display:"flex", gap:"5px", marginTop:"5px"}} key={id} className="row">
                {row.map((seat, index) => (
                     <SeatComp2
                    style={{width:"50px", height:"50px"}}
                    onClick={() => reserveSeat(id, index)}
                    state={seat.state}
                    />
                ))}
            </div>
        );
    })}</div>
  )
}

export default Cinema
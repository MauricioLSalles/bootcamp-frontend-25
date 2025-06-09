import { useState } from "react";
import { CinemaSeats } from "./CinemaSeats";

function Cinema() {

    const [seat, setSeat] = useState(CinemaSeats.createSeats(10, 10));

    function reserveSeat(row,col){
        try{
            if(seat[row][col].state !== "empty") throw Error("seat isnt empty");
            seat[row][col].state = "inUse";
            setSeat([...seat]);
        }
        catch (error){
            console.log(error);
        }
    }


  return (
    <div>{seat.map((row, id) => {
        return (
            <div style={{display:"flex", gap:"5px"}} key={id} className="row">
                {row.map((seat, index) => {
                    return (
                    <button
                    style={{width:"50px", height:"50px", backgroundColor: seat.state === "empty" ? "green" : "red"}}
                    onClick={() => reserveSeat(id, index)}
                        key={index}
                    >
                        {seat.state}
                    </button>
                    );
                })}
            </div>
        );
    })}</div>
  )
}

export default Cinema
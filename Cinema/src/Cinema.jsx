import { useState } from "react";
import { CinemaSeats } from "./CinemaSeats";

function Cinema() {

    const [seat, setSeat] = useState(CinemaSeats.createSeats(10, 10));


  return (
    <div>{seat.map((row, id) => {
        return (
            <div style={{display:"flex", gap:"5px"}} key={id} className="row">
                {row.map((seat, index) => {
                    return (
                    <button
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
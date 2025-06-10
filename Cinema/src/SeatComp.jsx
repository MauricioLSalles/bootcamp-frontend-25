import { useState } from "react"

export default function SeatComp() {
    const [empty, setEmpty] = useState(false);
    const [time, setTime] = useState(Date.now());

    function timeAction(){
        setTime(time);
        setEmpty(!empty);
    }
  return (
    <div
    onClick={() => timeAction()}
        style={{
            backgroundColor:empty?"green":"red",
            width:"30px",
            height:"30px"
        }}
    >
    </div>
  )
}

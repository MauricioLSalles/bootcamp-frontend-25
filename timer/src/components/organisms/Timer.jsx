import { useEffect, useState } from "react";
import Button from "../atoms/Button";

export default function Timer() {
    const [mins, setMins] = useState(0);
    const [secs, setSecs] = useState(0);
    const [stop, setStop] = useState(true);

    useEffect(() => { 
        if(stop) return;
        const interval = setInterval(() => {
            if(secs === 59) {
                setSecs(0);
                setMins(mins + 1);
            }else
                setSecs(secs + 1);
        }, 500);
            return () => clearInterval(interval);
  }, [mins,secs,stop]);

  function reset(){
    setMins(0);
    setSecs(0);
    setStop(true);
  }

  return (
    <div>
        <h1>timer</h1>
        <p> {mins} mins {secs} secs</p>
        <div>
            <Button onClick={() => setStop(false)} text={"Start"} color={"green"}/>
            <Button onClick={() => setStop(true)} text={"Stop"} color={"red"}/>
            <Button onClick={reset} text={"Reset"} color={"yellow"}/>
        </div>
    </div>
  )
}

import SeatComp from "./SeatComp";

function Cinema2() {

    console.log("render father");


  return (
    <div >{Array.from({length:10}).map((row, id) => {
        return (
            <div style={{display:"flex", gap:"5px", marginTop:"5px"}} key={id} className="row">
                {Array.from({length:10}).map(() => <SeatComp/>)}
            </div>
        );
    })}</div>
  )
}

export default Cinema2
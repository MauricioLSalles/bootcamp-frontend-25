export class CinemaSeats{
    cinemaSits;
    constructor(rows, seatsPerRow){
        this.cinemaSits = Array.from({length:rows}, (v,i) => Array.from({length:seatsPerRow},(vc,j)=>new Seat(i,j))) ;
    }

    showSeatStatus() {
        let res = "";
        this.cinemaSits.map(row => {
            row.map( (seat) => {
                res = res + seat +" ";
            })
            res = res + "\n"
        })       
        console.log(res)
    }

    reserveSeat(row,seat){
        try{
            if(this.cinemaSits[row][seat].state !== "empty") throw Error("seat isnt empty");
            this.cinemaSits[row][seat].state = "inUse"
        }
        catch (error){
            console.log(error);
        }
    }
}
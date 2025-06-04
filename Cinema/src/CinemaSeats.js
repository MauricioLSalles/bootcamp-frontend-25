import { Seat } from "./Seat";
export class CinemaSeats{
    static createSeats(rows, seatsPerRow){
        return Array.from({length:rows}, (v,i) => Array.from({length:seatsPerRow},(vc,j)=>new Seat(i,j))) ;
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
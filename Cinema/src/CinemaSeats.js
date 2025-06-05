import { Seat } from "./Seat";
export class CinemaSeats{
    static createSeats(rows, seatsPerRow){
        return Array.from({length:rows}, (v,i) => Array.from({length:seatsPerRow},(vc,j)=>new Seat(i,j))) ;
    }

}
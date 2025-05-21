class Seat{
    state = "empty";
    row;
    number;
    constructor(row, number){   
        this.row = row;
        this.number = number;
    }
}


class Cinema{
    cinemaSits;
    constructor(rows, seatsPerRow){
        this.cinemaSits = Array.from({length:rows}, () => Array.from({length:seatsPerRow},()=>new Seat())) ;
    }

    showSeatStatus() {
        let res = "";
        this.cinemaSits.map(row => {
            row.map( (seat) => {
                res = res + seat.state+" ";
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
            console.log("error");
        }
    }
}

const cinema = new Cinema(5,5);

cinema.showSeatStatus();

cinema.reserveSeat(1,2);

cinema.showSeatStatus();

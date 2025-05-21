class Seat{
    state = "empty";
}


class Cinema{
    cinemaSits;
    constructor(rows, seatsPerRow){
        let arr = [];
        for(let i =0; i<rows; i++){
            let row = [];
             for(let i =0; i<rows; i++){
                row.push(new Seat());
            }
            arr.push(row)
        }
        this.cinemaSits = arr;
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

cinema.reserveSeat(1,20);

cinema.showSeatStatus();

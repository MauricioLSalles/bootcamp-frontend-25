class Cinema{
    cinemaSits;
    constructor(rows, seatsPerRow){
        this.cinemaSits = Array.from({ length: rows }, () => new Array(seatsPerRow).fill("empty"));
    }

    showSeatStatus() {
        console.log(this.cinemaSits);        
    }

    reserveSeat(row,seat){
        try{
            if(this.cinemaSits[row][seat] !== "empty") throw Error("seat isnt empty");
            this.cinemaSits[row][seat] = "inUse"
        }
        catch (error){
            console.log(error);
        }
    }
}

const cinema = new Cinema(5,5);

cinema.showSeatStatus();

cinema.reserveSeat(1,2);

cinema.showSeatStatus();

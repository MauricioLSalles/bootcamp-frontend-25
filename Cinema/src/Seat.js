export class Seat{
    state = "empty";
    row;
    number;
    constructor(row, number){   
        this.row = row;
        this.number = number;
    }

    toString() {
    return this.state;
  }
}
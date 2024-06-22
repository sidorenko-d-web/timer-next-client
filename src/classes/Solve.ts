export class Solve {
    time: Date;
    timestamp: number;
    scramble: string;
    penalty: string;
    isPenaltied: boolean = false;

    constructor(
        time: Date,
        timestamp: number,
        scramble: string,
        penalty: string
    ) {
        this.time = time;
        this.timestamp = timestamp;
        this.scramble = scramble;
        this.penalty = penalty;
    }

    setPenalty(penalty: string): Solve {
        if(this.penalty !== ""){
            if (this.penalty == "+2") {
                this.time.setSeconds(this.time.getSeconds() - 2);
            }
            this.isPenaltied = false;
            this.penalty = "";
        }else{
            if(penalty == '+2'){
                this.time.setSeconds(this.time.getSeconds() + 2);
            }
            this.isPenaltied = true;
            this.penalty = penalty
        }

        return new Solve(this.time, this.timestamp, this.scramble, this.penalty)
    }

    timeToString(): string {
        if (this.penalty === "DNF") {
            return this.penalty;
        }

        let string: string

        let ms = this.time.getMilliseconds().toString();
        if (ms.length == 1) ms = "00" + ms.toString();
        else if (ms.length == 2) ms = "0" + ms.toString();

        if (this.time.getMinutes()) {
            if (this.time.getSeconds() < 10) {
                string = `${this.time.getMinutes()}:0${this.time.getSeconds()}.${ms}`;
            }
            string = `${this.time.getMinutes()}:${this.time.getSeconds()}.${ms}`;
        } else if (this.time.getSeconds()) {
            string = `${this.time.getSeconds()}.${ms}`;
        } else {
            string = `0.${ms}`;
        }
        
        if(this.penalty === "+2"){
            return `+${string}`
        }
        return string
    }
}

export class Solve {
    time: Date;
    createdAt: Date;
    scramble: string;
    penalty: string | null;
    isPenaltied: boolean = false;

    constructor(
        time: Date,
        createdAt?: Date,
        scramble?: string,
        penalty?: string | null

    ) {
        this.createdAt = createdAt ?? new Date(0);
        this.scramble = scramble ?? '';
        this.penalty = penalty ?? '';
        this.time = this.penalty === 'plus2' ? new Date(time!.setSeconds(time!.getSeconds() + 2)) : time  
    }

    

    timeToString(): string {
        if (this.penalty === "dnf") {
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
        
        if(this.penalty === "plus2"){
            return `+${string}`
        }
        return string
    }
}

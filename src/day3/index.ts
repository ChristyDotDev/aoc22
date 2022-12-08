import { stringify } from "querystring";
import { Day } from "../day";

const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

class Day3 extends Day {

    constructor(){
        super(3);
    }

    solveForPartOne(input: string): string {
        return input.split('\n')
            .map((item) => {
                const firstCompartment = item.substring(0, item.length/2)
                const secondCompartment = item.substring(item.length/2, item.length)
                for(var i = 0;i<firstCompartment.length;i++) {
                    if(secondCompartment.indexOf(firstCompartment[i]) > -1){
                        return alphabet.indexOf(firstCompartment[i]) + 1
                    }
                }
                return 0
            })
            .reduce((acc, val) => acc + val)
            .toString();
    }

    solveForPartTwo(input: string): string {
        const lines = input.split("\n")
        let runningTotal = 0;

        for(var i = 0; i < lines.length; i+=3) {
            const group = lines.slice(i, i+3);
            for(var x = 0; x < group[0].length;x++) {
                if(group[1].indexOf(group[0][x]) > -1 && group[2].indexOf(group[0][x]) > -1){
                    runningTotal += (alphabet.indexOf(group[0][x]) + 1)
                    x+=group[0].length;
                }
            }
        }
        return runningTotal.toString();
    }
}

export default new Day3;
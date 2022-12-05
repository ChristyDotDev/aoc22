import { Day } from "../day";

class Day1 extends Day {

    constructor(){
        super(1);
    }

    

    solveForPartOne(input: string): string {
        const i = input.split('\n\n')                       //each elf is split by two newlines
            .map((e) => e.split('\n').map(Number))          //map the entries for the elf (as numbers)
            .map((e) => e.reduce((e1, e2) => e1 + e2, 0))   //reduce the entries to the sum for each elf
            .sort((e1, e2) => e2 - e1)                      //sort descending
            .slice(0, 1)                                    //get the first elf (top by sorting)
            .reduce((f1, f2) => f1 + f2, 0);                //sum their food
        return "" + i
    }

    solveForPartTwo(input: string): string {
        const i = input.split('\n\n')                       //each elf is split by two newlines
            .map((e) => e.split('\n').map(Number))          //map the entries for the elf (as numbers)
            .map((e) => e.reduce((e1, e2) => e1 + e2, 0))   //reduce the entries to the sum for each elf
            .sort((e1, e2) => e2 - e1)                      //sort descending
            .slice(0, 3)                                    //get the top 3 elves
            .reduce((f1, f2) => f1 + f2, 0);                //sum their food
        return "" + i
    }
}

export default new Day1;
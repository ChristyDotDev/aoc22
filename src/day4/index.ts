import { Day } from "../day";

function fullyContains(job1:string[], job2:string[]){
    if(parseFloat(job1[0]) <= parseFloat(job2[0]) && parseFloat(job1[1]) >= parseFloat(job2[1])){
        return true;
    }
    return false;
}

function overlaps(job1:string[], job2:string[]){
    
    if(parseFloat(job1[0]) <= parseFloat(job2[1]) && parseFloat(job2[0]) <= parseFloat(job1[1])){
        return true;
    }
    return false;
}

class Day4 extends Day {

    constructor(){
        super(4);
    }

    solveForPartOne(input: string): string {
        return input.split("\n")
           .map((line) => {
                return line.split(",");
            })
            .map(element => {
                const elf1 = element[0].split("-");
                const elf2 = element[1].split("-");
                if(fullyContains(elf1,elf2 ) || fullyContains(elf2, elf1)) {
                    return 1;
                }
                return 0;
            })
            .reduce<number>((a, b) => a + b, 0)
            .toString();
    }

    solveForPartTwo(input: string): string {
        return input.split("\n")
           .map((line) => {
                return line.split(",");
            })
            .map(element => {
                const elf1 = element[0].split("-");
                const elf2 = element[1].split("-");
                if(overlaps(elf1,elf2 ) || overlaps(elf2, elf1)) {
                    console.log(elf1, elf2)
                    return 1;
                }
                return 0;
            })
            .reduce<number>((a, b) => a + b, 0)
            .toString();
    }
}

export default new Day4;
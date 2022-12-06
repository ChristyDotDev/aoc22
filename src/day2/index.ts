import { Day } from "../day";

const shapeScores1 = new Map<string, number>([
    ["X",1],
    ["Y",2],
    ["Z",3]
]);

const shapeScores2 = new Map<string, number>([
    ["A",1],
    ["B",2],
    ["C",3]
]);

const h2hScores = new Map<string, number>([
    ["A-X",3],  //rock-rock = draw
    ["A-Y",6],  //rock-paper = win
    ["A-Z",0],  //rock-scissors = lose
    ["B-X",0],  //paper-rock = lose
    ["B-Y",3],  //paper-paper = draw
    ["B-Z",6],  //paper-scissors = win
    ["C-X",6],  //scissors-rock = win
    ["C-Y",0],  //scissors-paper = lose
    ["C-Z",3],  //scissors-scissors = draw
]);

const resultMap = new Map<string, number>([
    ["X",0],
    ["Y",3],
    ["Z",6]
]);

function scoreRound(round:String[]){
    const shapeScore = shapeScores1.get(round[1] as string) || 0;
    const h2hScore = h2hScores.get(round[0] + "-" + round[1]) || 0
    return shapeScore + h2hScore
}

function getShapeForResult(resultScore:number, round:String[]){
    switch (resultScore){
        case 0: //need to lose
            if(round[0] == "A") return "C"
            if(round[0] == "B") return "A"
            if(round[0] == "C") return "B"
            break;
        case 3: //need to draw
            return round[0]
        case 6: //need to win
            if(round[0] == "A") return "B"
            if(round[0] == "B") return "C"
            if(round[0] == "C") return "A"
            break;
    }
}

function scoreRoundForResult(round:String[]){
    const resultScore = resultMap.get(round[1] as string) || 0
    const shapeNeeded = getShapeForResult(resultScore, round)
    const shapeScore = shapeScores2.get(shapeNeeded as string) || 0;
    return shapeScore + resultScore
}

class Day2 extends Day {

    constructor(){
        super(2);
    }

    solveForPartOne(input: string): string {
        return input.split("\n")
            .map((l) => l.split(" "))
            .map(scoreRound)
            .reduce((acc, val) => acc + val)
            .toString()
    }

    solveForPartTwo(input: string): string {
        return input.split("\n")
            .map((l) => l.split(" "))
            .map(scoreRoundForResult)
            .reduce((acc, val) => acc + val)
            .toString()
    }
}

export default new Day2;
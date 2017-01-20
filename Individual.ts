/// <reference path="Genetic.ts" />

class Individual{
    color: Array<number> = [];
    S: number = 0; // survival coefficient
    R: number; // reverse coefficient
    C: number; // coefficient selection

    constructor(color: Array<number>){
       this.color = color;
       this.calcCoefficients();
    }

    private calcCoefficients(){
        for(let i in this.color){
            this.S += Math.abs(Genetic.input[i] - this.color[i]);
        }
        return this.R = 1 / this.S;
    }

    calcSelection(generationR: number){
        this.C = this.R / generationR;
    }
}
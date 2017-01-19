/// <reference path="Individual.ts" />

class Generation{
    individuals: Array<Individual> = [];
    R: number = 0;

    constructor(count: number){
        for(let i = 0; i < count; i++){
            this.addIndividual();
        }
        this.calcCoefficients();
        this.calcSelection();
    }

    addIndividual(individual?: Individual){
        this.individuals.push(individual || new Individual([Math.random()*255, Math.random()*255, Math.random()*255]));
    }

    calcCoefficients(){
        for (let i in this.individuals){
            this.R += this.individuals[i].calcCoefficients();
        }
    }

    calcSelection(){
        for (let i in this.individuals){
            this.individuals[i].calcSelection(this.R);
        }
    }
}
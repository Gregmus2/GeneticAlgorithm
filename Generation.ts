/// <reference path="Individual.ts" />

class Generation{
    individuals: Individual[];

    constructor(){

    }

    addIndividual(individual: Individual){
        this.individuals.push(individual);
    }
}
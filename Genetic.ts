/// <reference path="Input.ts" />
/// <reference path="Population.ts" />

class Genetic{
    input: Input;
    population: Population;

    constructor(input: Input){
        this.input = input;
    }

    createPopulation(count?: number){
        this.population = new Population();
    }
}
/// <reference path="Population.ts" />

class Genetic{
    static input: Array<number> = [];
    static population: Population;

    static setInput(input: Array<number>){
        Genetic.input = input;
    }

    static createPopulation(generation: Generation){
        return Genetic.population = new Population(generation);
    }
}
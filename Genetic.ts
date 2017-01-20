/// <reference path="Population.ts" />

class Genetic{
    static input: Array<number> = [];
    // планируется массив популяций
    static population: Population;
    static generation_length: number;

    static setInput(input: Array<number>){
        Genetic.input = input;
    }

    static createPopulation(generation: Generation){
        return Genetic.population = new Population(generation);
    }

    static evolve(){
        Genetic.population.evolve();
    }

    static setGenerationLength(length: number){
        Genetic.generation_length = length;
    }
}
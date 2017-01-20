/// <reference path="Population.ts" />

class Genetic{
    static input: Array<number> = [];
    // планируется массив популяций
    static population: Population;
    static generation_length: number;
    static length_of_bests: number;

    static setInput(input: Array<number>){
        Genetic.input = input;
    }

    static createPopulation(){
        return Genetic.population = new Population();
    }

    static evolve(){
        return Genetic.population.evolve();
    }

    static setGenerationLength(length: number){
        Genetic.generation_length = length;
        /* TODO просчитать формулой */
        Genetic.length_of_bests = length;
    }
}
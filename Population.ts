/// <reference path="Generation.ts" />

class Population{
    generations: Array<Generation> = [];

    constructor(generation: Generation){
        this.addGeneration(generation);
    }

    addGeneration(generation: Generation){
        this.generations.push(generation);
    }

    evolve(){
        let last_gen = this.generations[this.generations.length-1];
        let generation = Generation.evolveFrom(last_gen);
        this.addGeneration(generation);
    }
}
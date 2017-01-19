/// <reference path="Generation.ts" />

class Population{
    generations: Array<Generation> = [];

    constructor(generation: Generation){
        this.addGeneration(generation);
    }

    addGeneration(generation: Generation){
        this.generations.push(generation);
    }
}
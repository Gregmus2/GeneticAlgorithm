/// <reference path="Generation.ts" />

class Population{
    generations: Generation[];

    constructor(){
        this.addGeneration();
    }

    addGeneration(generation?: Generation){
        this.generations.push(generation|new Generation());
    }
}
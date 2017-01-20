/// <reference path="Generation.ts" />

class Population{
    individuals: Array<Individual> = [];
    R: number = 0;
    S_avg: number;

    constructor(){
        for (let i = 0; i < Genetic.generation_length; i++) {
            this.addIndividual();
        }
        this.calcCoefficients();
        this.calcSelection();
    }

    addIndividual(individual?: Individual){
        this.individuals.push(individual || new Individual([Math.round(Math.random()*255), Math.round(Math.random()*255), Math.round(Math.random()*255)]));
    }

    calcCoefficients(){
        let S_sum = 0;
        for (let i in this.individuals){
            S_sum += this.individuals[i].S;
            this.R += this.individuals[i].R;
        }
        this.S_avg = S_sum / this.individuals.length;
        return this;
    }

    calcSelection(){
        for (let i in this.individuals){
            this.individuals[i].calcSelection(this.R);
        }
        return this;
    }

    evolve(){
        let processing = true;
        let bests_of_generation = this.getBests();
        this.individuals = bests_of_generation;
        for (let i = 0; i < Genetic.length_of_bests; i++){
            for (let j = i+1; j < Genetic.length_of_bests; j++){
                let mother = bests_of_generation[i];
                let father = bests_of_generation[j];
                let childes = Common.crossover(mother.color, father.color, Math.round(Math.random()*(father.color.length-2)+1));
                // 10% вероятность мутации
                if (Math.random() < 0.01){
                    childes[Math.round(Math.random())][Math.round(Math.random()*(father.color.length-1))] = Math.round(Math.random()*255);
                }
                let individual1 = new Individual(childes[0]);
                let individual2 = new Individual(childes[1]);
                if (individual1.S == 0 || individual2.S == 0){
                    processing = false;
                }
                this.addIndividual(individual1);
                this.addIndividual(individual2);
            }
        }
        this.calcCoefficients();
        this.calcSelection();
        return processing;//this.S_avg;
    }

    getBests(){
        this.individuals.sort(function (a, b) {
            return a.S - b.S;
        });
        return this.individuals.slice(0, Genetic.length_of_bests);
    }
}
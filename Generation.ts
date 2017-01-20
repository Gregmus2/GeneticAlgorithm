/// <reference path="Individual.ts" />
/// <reference path="Common.ts" />

class Generation{
    individuals: Array<Individual> = [];
    R: number = 0;
    S_avg: number;

    constructor(count?: number){
        if (count) {
            for (let i = 0; i < count; i++) {
                this.addIndividual();
            }
            this.calcCoefficients();
            this.calcSelection();
        }
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

    getLength(){
        return this.individuals.length;
    }

    getRandom(){
        return this.individuals[Math.round(Math.random()*(this.individuals.length-1))];
    }

    static evolveFrom(generation: Generation){
        let next_gen = new Generation();
        // let gen_length = generation.getLength();
        let bests_of_generation = generation.getBests();
        for (let i = 0; i < bests_of_generation.length; i++){
            for (let j = i+1; j < bests_of_generation.length; j++){
                let mother = bests_of_generation[i];
                let father = bests_of_generation[j];
                let childes = Common.crossover(mother.color, father.color, Math.round(Math.random()*(father.color.length-2)+1));
                next_gen.addIndividual(new Individual(childes[0]));
                next_gen.addIndividual(new Individual(childes[1]));
            }
        }
        next_gen.calcCoefficients();
        next_gen.calcSelection();
        /** TODO мутация 1% в любом случае */
        if (next_gen.S_avg > generation.S_avg){
            next_gen.mutate();
        }
        return next_gen;
    }

    mutate(){
        this.individuals.forEach(function (individual) {
            individual.color[Math.round(Math.random()*2)] = Math.round(Math.random()*255);
        });
        this.calcCoefficients();
        this.calcSelection();
    }

    getBests(){
        let count = Math.round(this.individuals.length/2);
        this.individuals.sort(function (a, b) {
            return a.S - b.S;
        });
        return this.individuals.slice(0, count);
    }
}
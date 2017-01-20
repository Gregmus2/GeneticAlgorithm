/// <reference path="Genetic.ts" />
/// <reference path="Common.ts" />

Genetic.setInput([158, 123, 5]);
Genetic.createPopulation(new Generation(5));
for (let i = 0; i < 50; i++) {
    Genetic.evolve();
    console.log(Genetic.population.generations[Genetic.population.generations.length-1].S_avg);
}
console.log(Genetic.population);

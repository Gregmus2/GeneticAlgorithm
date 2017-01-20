/// <reference path="Genetic.ts" />
/// <reference path="Common.ts" />

Genetic.setInput([158, 123, 5]);
Genetic.setGenerationLength(10);
Genetic.createPopulation();

let i = 1;
/* TODO добавить устанавливаемый процент погрешности */
while(Genetic.evolve()){
    console.log(Genetic.population.S_avg, i++);
}
console.log(Genetic.population);

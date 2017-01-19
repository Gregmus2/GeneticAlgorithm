/// <reference path="Genetic.ts" />

Genetic.setInput([158, 123, 5]);
Genetic.createPopulation(new Generation(5));
console.log(Genetic.population);
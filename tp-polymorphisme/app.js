const Ingredient = require('./pizzeria/class/ingredient');
const Pizza = require('./pizzeria/class/pizza');

const pate = new Ingredient('Pâte', 1.5);
const sauceTomate = new Ingredient('Sauce Tomate', 0.5);
const fromage = new Ingredient('Fromage', 1.0);
const pepperoni = new Ingredient('Pepperoni', 1.2);

const pizza = new Pizza(pate, sauceTomate);

pizza.ajouterIngredient(fromage);
pizza.ajouterIngredient(pepperoni);

console.log(pizza);
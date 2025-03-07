const Ingredient = require('./pizzeria/class/ingredient');
const Pizza = require('./pizzeria/class/pizza');
const Reine = require('./pizzeria/class/reine');
const Customer = require('./pizzeria/class/customer');

const pate = new Ingredient('Pâte', 1.5);
const sauceTomate = new Ingredient('Sauce Tomate', 0.5);
const fromage = new Ingredient('Fromage', 1.0);
const pepperoni = new Ingredient('Pepperoni', 1.2);

const pizza = new Pizza(pate, sauceTomate);

pizza.ajouterIngredient(fromage);
pizza.ajouterIngredient(pepperoni);

console.log(pizza);

const pizzaReine = new Reine();
console.log(pizzaReine);

const Jacques = new Customer('Jacques', '123 Main St, Anytown, USA');
Jacques.addPizza(pizzaReine);
Jacques.printOrder();

const Pierre = new Customer('Pierre', '123 Main St, Anytown, USA');
Pierre.addPizza(pizzaReine);
Pierre.printOrder();

const Paul = new Customer('Paul', '123 Main St, Anytown, USA');
Paul.addPizza(pizzaReine);
Paul.printOrder();

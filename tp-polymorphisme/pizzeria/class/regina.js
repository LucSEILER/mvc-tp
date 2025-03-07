const Pizza = require('./pizza');
const Ingredient = require('./ingredient');

class Regina extends Pizza {
    constructor() {
        super('Regina', 'pâte fine', 'tomate');
        this.tag = 'en attente';
        this.ajouterIngredient(new Ingredient('jambon', 2.5));
        this.ajouterIngredient(new Ingredient('champignons', 1.8));
        this.ajouterIngredient(new Ingredient('mozzarella', 2));
        this.ajouterIngredient(new Ingredient('olives', 0.5));
    }
}

module.exports = Regina;
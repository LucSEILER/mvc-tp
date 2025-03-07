const Pizza = require('./pizza');
const Ingredient = require('./ingredient');

class Reine extends Pizza {
    constructor() {
        super('Reine', 'pâte fine', 'tomate');
        this.tag = 'en attente';
        this.ajouterIngredient(new Ingredient('jambon', 2.5));
        this.ajouterIngredient(new Ingredient('champignons', 1.8));
        this.ajouterIngredient(new Ingredient('mozzarella', 2));
    }
}

module.exports = Reine;

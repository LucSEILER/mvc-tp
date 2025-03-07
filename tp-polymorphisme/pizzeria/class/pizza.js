class Pizza {
    constructor(name, pate, sauce, tag = 'en attente') {
        this.name = name;
        this.pate = pate;
        this.sauce = sauce;
        this.tag = tag;
        this.ingredients = [];
    }

    ajouterIngredient(ingredient) {
        this.ingredients.push(ingredient);
    }
}

module.exports = Pizza;
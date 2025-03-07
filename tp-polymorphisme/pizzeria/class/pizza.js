class Pizza {
    constructor(pate, sauce, tag = 'en attente') {
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
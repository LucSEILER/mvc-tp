class Pizzaiolo {
    constructor(nom, prenom, pizza) {
        this.nom = nom;
        this.prenom = prenom;
        this.pizza = pizza;
    }

    CuirePizza() {
        this.pizza.tag = 'En cuisson';
        setTimeout(() => {
            this.pizza.tag = "Cuit";
        }, 30000);
    }
}

module.exports = Pizzaiolo;
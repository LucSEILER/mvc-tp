class Customer {
    constructor(name, address) {
        this.name = name;
        this.address = address;
        this.order = [];
    }

    addPizza(pizza) {
        this.order.push(pizza);
    }

    printOrder() {
        console.log(`${this.name} ask for pizzas :`);
        this.order.forEach((pizza, index) => {
            console.log(`${index + 1}. Pizza ${pizza.name} ${pizza.tag} with ingredients :`);
            pizza.ingredients.forEach(ingredient => {
                console.log(`- ${ingredient.name} (COst: ${ingredient.cout}€)`);
            });
        });
    }
}

module.exports = Customer;

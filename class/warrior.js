const Character = require('./character');

class Warrior extends Character {
    constructor(power, name, pv, endurance) {
        super(power, name, pv);
        this.endurance = endurance; 
    }

    attack(target) {
        if (this.endurance > 0) {
            super.attack(target);
            this.endurance--;
            console.log(`${this.name} attaque ${target.name} et lui inflige ${this.power} dégâts ! Endurance restante : ${this.endurance}`);
        } else {
            console.log(`${this.name} est trop fatigué pour attaquer !`);
        }
    }

    recoverEndurance(amount) {
        this.endurance += amount;
        console.log(`${this.name} récupère ${amount} points d'endurance.`);
    }
}

module.exports = Warrior;

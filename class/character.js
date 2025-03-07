class Character {
    constructor(power, name, pv) {
        this.power = power;
        this.name = name;
        this.pv = pv;
        
    }

    attack(target) {
        target.pv -= this.power;
    }

    takeDamage(damage) {
        this.pv -= damage
    }  

    isAlive() {
        return this.pv > 0;
    }
}

module.exports = Character

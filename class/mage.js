import Character from "./character";
class Mage extends Character {
  constructor(power, name, pv, mana) {
    this.mana = mana;
  }

  attack(target) {
    if (this.mana > 0) {
      super.attack(target);
      this.mana--;
      console.log(
        `${this.name} attaque ${target.name} et lui inflige ${this.power} dégâts ! Mana restant : ${this.mana}`
      );
    } else {
      console.log(`${this.name} n'as plus de mana pour attaquer !`);
    }
  }

  recoverMana(amount) {
    this.mana += amount;
    console.log(`${this.name} récupère ${amount} points de mana.`);
  }
}

module.exports = mage;

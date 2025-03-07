import Character from "./character";
class Mage extends Character {
  constructor(power, name, pv, mana, endurance) {
    this.mana = mana;
    this.endurance = endurance;
  }

  attackSpell(target) {
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

  attackPhysical(target) {
    if (this.endurance > 0) {
      super.attack(target);
      this.endurance--;
      console.log(
        `${this.name} attaque ${target.name} et lui inflige ${this.power} dégâts ! Endurance restant : ${this.endurance}`
      );
    } else {
      console.log(`${this.name} n'as plus d'endurance pour attaquer !`);
    }
  }

  recoverMana(amount) {
    this.mana += amount;
    console.log(`${this.name} récupère ${amount} points de mana.`);
  }

  recoverEndurance(amount) {
    this.endurance += amount;
    console.log(`${this.name} récupère ${amount} points d'endurance.`);
}
}

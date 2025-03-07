import Character from "./character";

export class Attaque {
    constructor(nom, degats, cout, type) {
      this.nom = nom;
      this.degats = degats;
      this.cout = cout; // Coût en mana ou endurance
      this.type = type; // "mana" ou "endurance"
    }

utiliser(Character) {
    if (this.type === "mana") {
      if (Character.mana >= this.cout) {
        Character.mana -= this.cout;
        console.log(`${Character.nom} utilise ${this.nom} et inflige ${this.degats} dégâts ! (Mana restant: ${Character.mana})`);
      } else {
        console.log(`${Character.nom} n'a pas assez de mana pour utiliser ${this.nom} !`);
      }
    } else if (this.type === "endurance") {
      if (Character.endurance >= this.cout) {
        Character.endurance -= this.cout;
        console.log(`${Character.nom} utilise ${this.nom} et inflige ${this.degats} dégâts ! (Endurance restante: ${Character.endurance})`);
      } else {
        console.log(`${Character.nom} est trop fatigué(e) pour utiliser ${this.nom} !`);
      }
    }
  }
  
}
// Création d'attaques
export const eclairMagique = new Attaque("Éclair Magique", 80, 20, "mana");
export const coupDepee = new Attaque("Coup d'Épée", 50, 10, "endurance");
    module.exports = Attaque;
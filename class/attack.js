import Character from "./character";

export class Attaque {
    constructor(nom, degats, cout, type) {
      this.nom = nom;
      this.degats = degats;
      this.cout = cout; // Coût en mana ou endurance
      this.type = type; // "mana" ou "endurance"
    }

    utiliser(Character) {
        const ressources = {
          mana: Character.mana,
          endurance: Character.endurance
        };
      
        if (ressources[this.type] >= this.cout) {
          ressources[this.type] -= this.cout;
          Character[this.type] = ressources[this.type];
      
          console.log(`${Character.nom} utilise ${this.nom} et inflige ${this.degats} dégâts ! (${this.type} restant: ${ressources[this.type]})`);
        } else {
          console.log(`${Character.nom} n'a pas assez de ${this.type} pour utiliser ${this.nom} !`);
        }
      }
  
}
// Création d'attaques
export const eclairMagique = new Attaque("Éclair Magique", 80, 20, "mana");
export const coupDepee = new Attaque("Coup d'Épée", 50, 10, "endurance");
    module.exports = Attaque;
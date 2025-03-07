class Character {
    constructor(name, power,  pv, endurance, mana) {
        this.power = power;
        this.name = name;
        this.pv = pv;
        this.mana = mana;
        this.endurance = endurance;
        this.attaques = [];
        
    }

    ajouterAttaque(attaque) {
        this.attaques.push(attaque);
      }
    
      attaquer(index) {
        if (this.attaques[index]) {
          this.attaques[index].utiliser(this);
        } else {
          console.log("Cette attaque n'existe pas !");
        }
      }

    takeDamage(damage) {
        this.pv -= damage
    }  

    isAlive() {
        return this.pv > 0;
    }
}
const mage = new Personnage("Gandalf", 100, 205, 0, 100);
const guerrier = new Personnage("Conan", 220, 100, 100, 0);
const paladin = new Personnage("Frost", 220, 100, 50, 50);

// Attribution des attaques
mage.ajouterAttaque(eclairMagique);
guerrier.ajouterAttaque(coupDepee);
paladin.ajouterAttaque(coupDepee, eclairMagique);


module.exports = Character

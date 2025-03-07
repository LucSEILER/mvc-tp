const Warrior = require('./class/warrior');
const Mage = require('./class/mage');
const Character = require('./class/character');

const hero = new Warrior(10, "Scrum warrior", 100, 3);
const enemy = new Character(8, "Goblin", 50);

console.log(`Avant l'attaque : ${enemy.name} a ${enemy.pv} PV`);
hero.attack(enemy);
console.log(`Après l'attaque : ${enemy.name} a ${enemy.pv} PV`);

hero.attack(enemy);
hero.attack(enemy);
hero.attack(enemy);

hero.recoverEndurance(2);
console.log(`Endurance récupérée : ${hero.endurance}`);

hero.attack(enemy);
console.log(`Après récupération et attaque : ${enemy.name} a ${enemy.pv} PV`);

console.log("-------------------------------------------------------");

const mage = new Mage(10, "Scrum mage", 100, 3);
const enemy2 = new Character(8, "Slime", 50);

console.log(`Avant l'attaque : ${enemy2.name} a ${enemy2.pv} PV`);
mage.attack(enemy);
console.log(`Après l'attaque : ${enemy2.name} a ${enemy2.pv} PV`);

mage.attack(enemy2);
mage.attack(enemy2);
mage.attack(enemy2);

mage.recoverMana(2);
console.log(`Mana récupérée : ${mage.mana}`);

mage.attack(enemy2);
console.log(`Après récupération et attaque : ${enemy2.name} a ${enemy2.pv} PV`);
// import Archetype, { Mage } from './Archetypes';
// import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
// import Race, { Elf } from './Races';
// import getRandomInt from './utils';

export default class Character implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  receiveDamage(attackPoints: number): number {
    this._lifePoints = attackPoints - this._lifePoints;
    if (this.lifePoints <= 0) {
      this._lifePoints = -1;
      return -1;
    }
    return this._lifePoints;
  }

  attack(enemy: Fighter | SimpleFighter): void {
    enemy.receiveDamage(this.strength);
  }
}
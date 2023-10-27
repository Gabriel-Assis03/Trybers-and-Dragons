import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private energy: EnergyType;
  private static countInstances = 0;

  constructor(
    name: string,
    special = 0,
    cost = 0,
  ) {
    super(name, special, cost);
    this.energy = 'stamina';
  }
    
  static createdArchetypeInstances(): number {
    this.countInstances += 1;
    return this.countInstances;
  }
    
  get energyType() {
    return this.energy;
  }
}
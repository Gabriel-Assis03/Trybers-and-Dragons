import { EnergyType } from '../Energy';

export default abstract class Archetype {
  constructor(
    private _name: string,
    private _special: number = 0,
    private _cost: number = 0,
  ) {}
  
  get name(): string {
    return this.name;
  }

  get special(): number {
    return this.special;
  }

  get cost(): number {
    return this.cost;
  }
  
  static createdArchetypeInstances(): number {
    throw new Error('Not implemented'); 
  }

  abstract get energyType(): EnergyType;
}
import Race from './Race';

export default class Dwarf extends Race {
  private maxLife: number;
  private static countInstances = 0;

  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    this.maxLife = 80;
  }
    
  static createdRacesInstances(): number {
    this.countInstances += 1;
    return this.countInstances;
  }
    
  get maxLifePoints() {
    return this.maxLife;
  }
}
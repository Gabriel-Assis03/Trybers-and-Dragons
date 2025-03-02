import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(
    private player1: Fighter,
    private player2: Fighter,
  ) {
    super(player1);
  }

  fight(): number {
    for (let index = 0; index !== 1; index) {
      if (this.player1.lifePoints <= 0) {
        index = 1;
      }
      if (this.player2.lifePoints <= 0) {
        index = 1;
      }
      this.player1.attack(this.player2);
      this.player2.attack(this.player1);
    }

    return super.fight();
  }
}
class Spaceship {
  constructor() {
    this.spaceship = $('<div>').addClass('ship');
  }

  makeShip() {
    this.spaceship.appendTo($('.bottom'));
  }
}

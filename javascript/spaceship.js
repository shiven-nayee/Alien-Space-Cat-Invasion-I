class Spaceship {
  constructor() {
    this.spaceship = $('<div>').addClass('ship');
  }

  makeShip() {
    this.spaceship.appendTo($('.bottom'));
  }

  getShip() {
    return this.spaceship;
  }

  getPosition() {
    const pos = {
      x: this.spaceship.offset().left,
      y: this.spaceship.offset().top,
    };
    return pos;
  }
}

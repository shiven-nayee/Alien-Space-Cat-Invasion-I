class World {
  constructor() {
    this.world = $('.bottom');
    this.position = this.world.offset();
  }

  getShip() {
    return this.ship;
  }

  getWorld() {
    return this.shipArea;
  }

  getPosition() {
    return this.position;
  }
}

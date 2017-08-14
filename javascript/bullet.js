class Bullet {
  constructor() {
    this.projectile = $('<div>').addClass('bullet');
  }

  // Coordinates is an object of { top: y, left: x }
  makeBullet(coordinates) {
    this.projectile.appendTo($('.game'));
    this.projectile.offset(coordinates);
  }

  getPosition() {
    const pos = {
      x: this.projectile.offset().left,
      y: this.projectile.offset().top,
    };
    return pos;
  }

  removeBullet() {
    this.projectile.remove();
  }
}

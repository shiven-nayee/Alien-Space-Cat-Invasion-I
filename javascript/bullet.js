class Bullet {
  constructor() {
    this.projectile = $('<div>').addClass('bullet');
  }

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

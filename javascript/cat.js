class Cat {
  constructor(x, y) {
    this.title = 'cat';
    this.x = x;
    this.y = y;
    this.alien = $('<div>').addClass('cat');
  }

  getAlien() {
    return this.alien;
  }

  setAlien(el) {
    this.alien = el;
  }

  makeCat(lane) {
    this.alien.attr('left', this.x);
    this.alien.attr('top', this.y);
    this.alien.appendTo(lane);
  }
}

const catto = new Cat(200, 300);
catto.makeCat();

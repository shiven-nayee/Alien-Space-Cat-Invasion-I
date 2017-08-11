class Cat {
  constructor() {
    this.alien = $('<div>').addClass('cat');
  }

  getAlien() {
    return this.alien;
  }

  makeCat(lane) {
    // this.alien.attr('left', 50);
    // this.alien.attr('top', 0);
    this.alien.appendTo(lane);
  }

  // Returns object pos with x and y of Cat
  getPosition() {
    const pos = {
      x: this.alien.offset().left,
      y: this.alien.offset().top,
    };
    return pos;
  }

  removeCat() {
    this.alien.remove();
  }
}

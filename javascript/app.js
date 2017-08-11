window.onload = function () {
  const place = new World();
  const worldPos = place.getPosition;
  let nul = null;
  const cats = [{ type: 'cat' }];
  const ship = new Spaceship();
  ship.makeShip();
  const lanes = [$('#lane1'), $('#lane2'), $('#lane3'), $('#lane4'), $('#lane5')];

  // Generates Cats
  setInterval(() => {
    cats.push(new Cat());
    const i = cats.length - 1;
    const n = Math.floor(Math.random() * 5);
    console.log(n);
    const lane = lanes[n];
    console.log(lane);
    cats[i].makeCat(lane);
  }, 700);

  // Get positions of all the cats and removes them
  setInterval(() => {
    cats.forEach((cat, i) => {
      if (i === 0) {
        nul = null;
      } else {
        const pos = cat.getPosition();
        if (pos.y > 600) {
          cat.removeCat();
          cats.splice(i, 1);
        }
      }
    });
  }, 100);
};

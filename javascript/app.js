window.onload = function () {
  const place = new World();
  const cats = [{ type: 'cat' }];
  const bullets = [{ type: 'bullet' }];
  const ship = new Spaceship();
  const lanes = [$('#lane1'), $('#lane2'), $('#lane3'), $('#lane4'), $('#lane5')];
  let nul = null;
  ship.makeShip();

  // Generates Cats and pushes them to cats array
  setInterval(() => {
    cats.push(new Cat());
    const i = cats.length - 1;
    const randomNum = Math.floor(Math.random() * 5);
    // console.log(randomNum);
    const lane = lanes[randomNum];
    // console.log(lane);
    cats[i].makeCat(lane);
    // console.log(ship.getPosition());
  }, 1300);

  // Get positions of all the cats and bullets removes them
  setInterval(() => {
    cats.forEach((cat, i) => {
      if (i === 0) {
        nul = null;
      } else {
        const pos = cat.getPosition();
        if (pos.y > 500) {
          cat.removeCat();
          $('#hp').html($('#hp').html() - 5);
          cats.splice(i, 1);
        }
      }
    });
    bullets.forEach((bullet, i) => {
      if (i === 0) {
        nul = null;
      } else {
        const pos = bullet.getPosition();
        if (pos.y < 7) {
          bullet.removeBullet();
          bullets.splice(i, 1);
        }
      }
    });
  }, 50);

  // Checks for collisions
  // Goes through each bullet and compares it with all the cats for collisions
  setInterval(function() {
    bullets.forEach((bullet, b) => {
      if (b === 0) {
        nul = null;
      } else {
        cats.forEach((cat, c) => {
          if (c === 0) {
            nul = null;
          } else {
            const bulletX = bullet.getPosition().x;
            const bulletY = bullet.getPosition().y;
            const catX = cat.getPosition().x;
            const catY = cat.getPosition().y;
            if (bulletX < catX + 50 &&
                bulletX + 50 > catX &&
                bulletY < catY + 50 &&
                50 + bulletY > catY) {
              bullet.removeBullet();
              bullets.splice(b, 1);
              cat.removeCat();
              cats.splice(c, 1);
              $('#scores').html($('#scores').html() - (-5));
            }
          }
        });
      }
    });
  }, 50);

  // Event listener for moving and shooting the ship
  // Prevents ship from moving past the boundaries
  $('body')[0].addEventListener('keydown', ((event) => {
    const key = event.keyCode;
    const shipX = ship.getPosition().x;
    const shipY = ship.getPosition().y;
    const lane1 = $('#lane1').offset().left;
    const lane5 = $('#lane5').offset().left;
    let newCoordinates = {};
    switch (key) {
      case 37:
        if (shipX > lane1 + 25) {
          newCoordinates = { top: shipY, left: shipX - 50 };
          $('.ship').offset(newCoordinates);
          console.log(1);
        }
        break;
      case 39:
        if (shipX < lane5 + 70) {
          newCoordinates = { top: shipY, left: shipX + 50 };
          $('.ship').offset(newCoordinates);
          console.log(2);
        } else {
          break;
        }
        break;
      case 32:
        bullets.push(new Bullet());
        const len = bullets.length - 1;
        newCoordinates = { top: shipY - 10, left: shipX + 42 };
        bullets[len].makeBullet(newCoordinates);
    }
    console.log(3);
  }));

  setInterval(function() {
    if ($('#scores') === 100 || $('#hp') === 0) {
      if (confirm('You saved the world!, do you want to fight more?')) {

      }
    }
  }, 100);
};

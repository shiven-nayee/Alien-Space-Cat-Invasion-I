// https://github.com/shiven-nayee/scrolling_stars
// Idea from: https://codepen.io/saransh/pen/BKJun?editors=0100

// Counts the number of stars once it generates 100 stars it removes the interval
var num1 = 0;
function makeSmallStars() {
  let star = $('<div>').addClass('smallStar');
  star.appendTo($('body'));
  const randomNum = Math.floor(Math.random() * 1300);
  // const randomNum = Math.floor(Math.random() * 1000);
  const coordinates = { top: 700, left: randomNum };
  star.offset(coordinates);
  num1 += 1;
  if(num1 > 100) {
    clearInterval(smallStars);
    console.log('cleared 1');
  }
}

// Counts the number of stars once it generates 75 stars it removes the interval
var num2 = 0;
function makeMediumStars() {
  let star = $('<div>').addClass('mediumStar');
  star.appendTo($('body'));
  const randomNum = Math.floor(Math.random() * 1300);
  // const randomNum = Math.floor(Math.random() * 1000);
  const coordinates = { top: 700, left: randomNum };
  star.offset(coordinates);
  num2 += 1;
  if(num2 > 75) {
    clearInterval(mediumStars);
    console.log('cleared 2');
  }
}

// Counts the number of stars once it generates 50 stars it removes the interval
var num3 = 0;
function makeLargeStars() {
  let star = $('<div>').addClass('largeStar');
  star.appendTo($('body'));
  const randomNum = Math.floor(Math.random() * 1300);
  // const randomNum = Math.floor(Math.random() * 1000);
  const coordinates = { top: 700, left: randomNum };
  star.offset(coordinates);
  num3 += 1;
  if(num3 > 50) {
    clearInterval(largeStars);
    console.log('cleared 3');
  }
}

var smallStars = setInterval(makeSmallStars, 500);
var mediumStars = setInterval(makeMediumStars, 500);
var largeStars = setInterval(makeLargeStars, 500);

const catImg = document.getElementById('catImg');
const catModal = document.getElementById('catModal');
const originalCatImg = document.getElementById('originalCatImg');
const newCatImg = document.getElementById('newCatImg');
const thing = document.getElementById('thing');
const catBox = document.getElementById('catBox');

document.querySelectorAll('#catImg, #catBox').forEach(element => {
  element.addEventListener('click', function() {
    catModal.style.display = 'flex';
  });
});

originalCatImg.addEventListener('click', function() {
  window.location.href = 'PAGES/CAT/CAT_ORIGINAL';
});

newCatImg.addEventListener('click', function() {
  window.location.href = 'PAGES/CAT/CAT_ORIGINAL';
});

window.addEventListener('click', function(event) {
  if (event.target === catModal) {
    catModal.style.display = 'none';
  }
});

catImg.addEventListener("mouseenter", function() {
  catImg.src = "preview/CAT/original_cat_hover.png";
});

catImg.addEventListener("mouseleave", function() {
  catImg.src = "preview/CAT/original_cat.png";
});

originalCatImg.addEventListener("mouseenter", function() {
  originalCatImg.src = "preview/CAT/original_cat_hover.png";
  thing.innerText = "Original";
});

originalCatImg.addEventListener("mouseleave", function() {
  originalCatImg.src = "preview/CAT/original_cat.png";
  thing.innerText = "Meow";
});

newCatImg.addEventListener("mouseenter", function() {
  newCatImg.src = "preview/CAT/ai_cat_hover.png";
  thing.innerText = "New";
});

newCatImg.addEventListener("mouseleave", function() {
  newCatImg.src = "preview/CAT/ai_cat.png";
  thing.innerText = "Meow";
});

const qBasicCommands = [
  "PRINT \"Hello, World!\"",
  "INPUT \"Enter a number: \", num",
  "IF num > 10 THEN PRINT \"Number is greater than 10\"",
  "FOR i = 1 TO 10",
  "  PRINT i",
  "NEXT i",
  "RANDOMIZE TIMER",
  "CLS",
  "DO",
  "  INPUT \"Enter another number (5 to exit): \", num",
  "  IF num <> 5 THEN PRINT \"You entered: \"; num",
  "LOOP UNTIL num = 5",
  "FOR x = 1 TO 100",
  "  PRINT x",
  "  IF x MOD 10 = 0 THEN SLEEP 100",
  "NEXT x",
  "GOTO 100",
  "LET num = num + 1",
  "WHILE num < 10",
  "  PRINT \"This is a loop\"",
  "  num = num + 1",
  "WEND",
  "DO WHILE x < 20",
  "  PRINT x;\" is the value of x\"",
  "  x = x + 1",
  "LOOP"
];

function getRandomQBasicCommand() {
  return qBasicCommands[Math.floor(Math.random() * qBasicCommands.length)];
}

function createRain() {
  const rain = document.createElement('div');
  rain.classList.add('rain');
  rain.textContent = getRandomQBasicCommand();
  rain.style.left = Math.random() * window.innerWidth + 'px';
  rain.style.animationDuration = Math.random() * 2 + 3 + 's';
  document.body.appendChild(rain);

  setTimeout(() => {
    rain.remove();
  }, 5000);
}

setInterval(createRain, 700);

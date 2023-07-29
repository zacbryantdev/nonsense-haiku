const firstLines = [
  "Stillness of one’s mind",
  "Brilliant it blossoms",
  "Worries strangle growth",
  "Feel the earth below",
  "A hidden respite",
];
const secondLines = [
  "A lone pebble alters fate",
  "Peer through the mist and we’ll be",
  "Unafraid, defenders stand",
  "A cool bed beneath the stars",
  "Deep breaths released to the wind",
];
const thirdLines = [
  "Rising from the depths",
  "Shattered, but alive",
  "Flourishing and free",
  "A sturdy defense",
  "A new beginning",
];

const getFirstLine = () => {
  const randomNumber = Math.floor(Math.random() * firstLines.length);
  return firstLines[randomNumber];
};

const getSecondLine = () => {
  const randomNumber = Math.floor(Math.random() * secondLines.length);
  return secondLines[randomNumber];
};

const getThirdLine = () => {
  const randomNumber = Math.floor(Math.random() * thirdLines.length);
  return thirdLines[randomNumber];
};

const createHaiku = () => {
  const lineOne = getFirstLine();
  const lineTwo = getSecondLine();
  const lineThree = getThirdLine();
  return `${lineOne}\n${lineTwo}\n${lineThree}`;
};

console.log(createHaiku());

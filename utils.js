function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

const celciusToFarhanheit = (celcius) => {
  return (celcius * 9) / 5 + 32;
};

const farhanheitToCelcius = (farhanheit) => {
  return ((farhanheit - 32) * 5) / 9;
};

module.exports = {
  generateRandomNumber,
  celciusToFarhanheit,
  farhanheitToCelcius,
};

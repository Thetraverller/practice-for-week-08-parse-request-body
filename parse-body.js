function firstStep(input) {
  return input.split("&");
}

function secondStep(input) {
  return input.map(pair => pair.split("="));
}

function thirdStep(input) {
  return input.map(pair => pair.map(el => el.replaceAll("+", " ")));
}

function fourthStep(input) {
  return input.map(pair => pair.map(el => decodeURIComponent(el)));
}

function fifthStep(input) {
  return Object.fromEntries(input);
}

function parseBody(str) {
  return fifthStep(fourthStep(thirdStep(secondStep(firstStep(str)))));
}

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody
};
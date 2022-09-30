const assert = require("assert");
const { Given, When, Then } = require("@cucumber/cucumber");

Given("two numbers 4 and 2", function () {
  (a = 4), (b = 2);
});
When("added", function () {
  result = a + b;
});
When("divided", function () {
  result = a / b;
});
When("multiplied", function () {
  result = a * b;
});

Then("the answer {int}", function (answer) {
  if (answer == result) {
    console.log("true");
  } else {
    console.log("false");
  }
  return null;
});

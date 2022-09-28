const assert = require("assert");
const { Given, When, Then } = require("@cucumber/cucumber");
// const { calculate, display } = require("../../public/script2");
// scenario 1
Given("two numbers 4 and 2", function () {
  // Given('user inputs {float} numbers', function (float) {
  // Write code here that turns the phrase above into concrete actions
  //  a=value1,b=value2;
   a=4,b=2;
  //  return {a:a,b:b};
});
When('added', function () {
  
  result =a+b;
  // Write code here that turns the phrase above into concrete actions
  //  return pending';
});
When('divided', function () {
  result =a/b;
  // Write code here that turns the phrase above into concrete actions
  // return 'pending';
});
When('multiplied', function () {
  result =a*b;
  // Write code here that turns the phrase above into concrete actions
  // return 'pending';
});

Then('the answer {int}', function (answer) {

  if (answer==result){
    console.log("true")
  }
  else
  {console.log("false")} 
  return null; 
  });



// // scenario 2
// Given("user inputs {int} numbers", function (int) {
//   // Given('user inputs {float} numbers', function (float) {
//   // Write code here that turns the phrase above into concrete actions
//   return "pending";
// });

// Then("return the difference of the {int} numbers", function (int) {
//   // Then('return the difference of the {float} numbers', function (float) {
//   // Write code here that turns the phrase above into concrete actions
//   return "pending";
// });

// // scenario 3
//  Given("user inputs {int} numbers", function (int) {
//    // Given('user inputs {float} numbers', function (float) {
//    // Write code here that turns the phrase above into concrete actions
//    return "pending";
//  });

//  Then("return the product of the {int} numbers", function (int) {
//    // Then('return the product of the {float} numbers', function (float) {
//    // Write code here that turns the phrase above into concrete actions
//    return "pending";
//  });

//  // Scenario 4
//  Given("user inputs {int} numbers", function (int) {
//    // Given('user inputs {float} numbers', function (float) {
//    // Write code here that turns the phrase above into concrete actions
//    return "pending";
//  });

//  Then("return the division of the {int} numbers", function (int) {
//    // Then('return the division of the {float} numbers', function (float) {
//    // Write code here that turns the phrase above into concrete actions
//    return "pending";
//  });

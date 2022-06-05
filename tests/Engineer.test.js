var Engineer = require("../lib/Engineer");

test("retrieves github from constructor function", () => {
  var userTest = "User";
  var x = new Engineer("Carson", 1, "ccooper@email.com", userTest);
  expect(x.github).toBe(userTest);
});

test("roleReturn() returns 'Engineer'", () => {
  var engineerTest = "Engineer";
  var x = new Engineer("Kate", 1, "kmitchner@email.com", "User");
  expect(x.roleReturn()).toBe(engineerTest);
});

test("retrieves github from githubReturn()", () => {
  var githubTest = "github";
  var x = new Engineer("Morgon", 1, "mbruton@email.com", githubTest);
  expect(x.githubReturn()).toBe(githubTest);
});
var Employee = require("../lib/Employee");

describe("Employee", () => {
  test("Creates employee roster", () => {
    var i = new Employee();
    expect(typeof i).toBe("object");
  });

  test("retrieves full name", () => {
    var nameTest = "Roger";
    var i = new Employee(nameTest);
    expect(i.nameTest).toBe(nameTest);
  });

  test("retrieves id", () => {
    var IDTest = 100;
    var i = new Employee("William", IDTest);
    expect(i.IDTest).toBe(IDTest);
  });

  it("retreives email address", () => {
    var emailTest = "dsanchez@email.com";
    var i = new Employee("Daniel", 1, emailTest);
    expect(i.email).toBe(emailTest);
  });
});

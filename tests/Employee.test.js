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

  describe("nameReturn", () => {
    it("retrieves full name from nameReturn()", () => {
      var nameTest2 = "Cruise";
      var i = new Employee(nameTest2);
      expect(i.nameReturn()).toBe(nameTest2);
    });
  });

  describe("IDReturn", () => {
    it("retrieves id from IDReturn()", () => {
      var IDTest2 = 400;
      var i = new Employee("Justin", IDTest2);
      expect(i.IDReturn()).toBe(IDTest2);
    });
  });

  describe("emailReturn", () => {
    it("retrieves email address from emailReturn", () => {
      var emailTest = "ewalker@email.com";
      var i = new Employee("Emily", 2, emailTest);
      expect(i.emailReturn()).toBe(emailTest);
    });
  });

  describe("roleReturn", () => {
    it(' returns "Employee" occupation', () => {
      var employeeTest = "Employee";
      var i = new Employee("Amanda", 3, "arogue@email.com");
      expect(i.roleReturn()).toBe(employeeTest);
    });
  });
});
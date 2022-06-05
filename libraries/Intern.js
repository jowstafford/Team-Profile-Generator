var Employee = require("./Employee");

class Intern extends Employee {
  constructor(fullName, identification, emailAddress, education) {
    super(fullName, identification, emailAddress);
    this.education = education;
  }

  roleReturn() {
    return "Intern";
  }

  schoolReturn() {
    return this.education;
  }
}

module.exports = Intern;
var Employee = require("./Employee");

class Engineer extends Employee {
  constructor(fullName, identification, emailAddress, githubAccount) {
    super(fullName, identification, emailAddress);
    this.githubAccount = githubAccount;
  }

  roleReturn() {
    return "Engineer";
  }

  githubReturn() {
    return this.githubAccount;
  }
}

module.exports = Engineer;
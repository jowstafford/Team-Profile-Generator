var Employee = require("./Employee");

class Manager extends Employee {
  constructor(fullName, identification, emailAddress, phoneNumber) {
    super(fullName, identification, emailAddress);
    this.phoneNumber = phoneNumber;
  }

  roleReturn() {
    return "Manager";
  }

  phoneNumberReturn() {
    return this.phoneNumber;
  }
}

module.exports = Manager;
class Employee {
    constructor(fullName, identification, emailAddress,) {
      this.fullName = fullName;
      this.identification = identification;
      this.emailAddress = emailAddress;
    }
  
    nameReturn() {
      return this.fullName;
    }
  
    IDReturn() {
      return this.identification;
    }
  
    emailReturn() {
      return this.emailAddress;
    }
    
    roleReturn() {
      return "Employee";
    }
  }
  
  module.exports = Employee;
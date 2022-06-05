var inquirer = require("inquirer");

var addColleague = () => {
  inquirer

    .prompt([
      {
        name: "position",
        message: "Select collgeague's position:",
        choices: ["Manager", "Engineer", "Intern"],
        type: "list",
      },

      {
        name: "fullName",
        message: "Enter colleague's full name:",
        type: "input",
      },

      {
        name: "identification",
        message: "Enter colleague's identification number:",
      },

      {
        name: "emailAddress",
        message: "Enter colleague's email address:",
      },
    ])

    .then(() => {
      var information = "";

      if (position === "Intern") {
        information = "school name";
      } else if (position === "Manager") {
        information = "office phone number";
      } else {
        information = "GitHub username";
      }
    });
};

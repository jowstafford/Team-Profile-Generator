var inquirer = require("inquirer");
var selectedGroup = [];
var colleagues = "";
var executeTemplate = require("./dist/profileTemplate");
var Intern = require("./lib/Intern");
var Engineer = require("./lib/Engineer");
var Manager = require("./lib/Manager");

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

    .then(({ fullName, position, identification, emailAddress }) => {
      var information = "";

      if (position === "Intern") {
        information = "school name";

      } else if (position === "Manager") {
        information = "office phone number";

      } else {
        information = "GitHub username";
      }

      inquirer
      
        .prompt([
          {
            name: "information",
            message: `Enter colleague's ${information}`,
          },

          {
            name: "addition",
            message: "Would you like to add more colleagues?",
            choices: ["yes", "no"],
            type: "list",
          },
        ])

        .then(({ information, addition }) => {
          var addedColleagues;

          if (position === "Intern") {
            addedColleagues = new Intern(fullName, identification, emailAddress, information);
          } 
          else if (position === "Manager") {
            addedColleagues = new Manager(fullName, identification, emailAddress, information);
          } 
          else {
            addedColleagues = new Engineer(fullName, identification, emailAddress, information);
          }

          selectedGroup.push(addedColleagues);
          console.log(selectedGroup);
          executeTemplate(addedColleagues).then((data) => {
            console.log(data);
            colleagues += data;
            if (addition === "yes") {
              addColleague();
            } 
            else {
              var template = runTemplate(colleagues);
            }
          });
        });
    });
};

function initialize() {
  runTemplate();
  addColleague();
}

initialize();
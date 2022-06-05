var inquirer = require("inquirer");
var selectedGroup = [];
var colleagues = "";
var executeTemplate = require("./dist/profileTemplate");
var fs = require("fs");
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

function runTemplate(colleagues) {
  var template = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <link rel="stylesheet" href="../dist/style.css">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Profile Generator</title>
    </head>
  <body>
    <nav class="rosterNavbar">
      <div class="h1">Listed Roster</div>
    </nav>
  <div class="colleagueContainer">
    <div class="containerRow">
      ${colleagues}
    </div>
  </body>
</html>
`;

  fs.writeFile("./src/profile.html", template, (err) => {
    if (err) {console.log(err);}});
  return template;
}

function initialize() {
  runTemplate();
  addColleague();
}

initialize();
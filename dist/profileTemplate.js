function executeTemplate(colleague) {

    return new Promise(() => {
      var fullName = colleague.nameReturn();
      var occupation = colleague.roleReturn();
      var id = colleague.IDReturn();
      var email = colleague.emailReturn();
      var info = "";
  
      if (occupation === "Manager") {
        var phoneNumber = colleague.phoneNumberReturn();
        info =
      `<div class="listContainer">
        <div class="containerMain">
            <div class="card-body">
              <h1>${fullName}</h1>
              <h2>Manager</h2>
              <ul>
                <p>ID Number: ${id}</p>
                <p>Email Address: ${email}</p>
                <p>Phone Number: ${phoneNumber}</p>
              </ul>
            </div>
          </div>
        </div>`;
      } 

      else if (occupation === "Engineer") {
        var githubAccount = colleague.githubReturn();
        info = 
      `<div class="listContainer">
        <div class="containerMain">
            <div class="card-body">
              <h1>${fullName}</h1>
              <h2>Engineer</h2>
              <ul>
                <p>ID Number: ${id}</p>
                <p>Email Address: ${email}</p>
                <p>Github: ${githubAccount}</p>
              </ul>
            </div>
          </div>
        </div>`;
      } 

      else {
        var education = colleague.schoolReturn();
        info = 
      `<div class="listContainer">
        <div class="containerMain">
            <div class="card-body">
              <h1>${fullName}</h1>
              <h2>Intern</h2>
              <ul>
                <p>ID Number: ${id}</p>
                <p>Email Address: ${email}</p>
                <p>School: ${education}</p>
              </ul>
            </div>
          </div>
        </div>`;
      }
  });
}

module.exports = executeTemplate;

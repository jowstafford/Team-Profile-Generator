function executeTemplate(colleague) {
  return new Promise(() => {
    var info = "";

    if (occupation === "Manager") {
      var phoneNumber = colleague;
      info = `<div class="listContainer">
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
  });
}

module.exports = executeTemplate;

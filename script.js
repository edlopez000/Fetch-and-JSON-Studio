window.addEventListener("load", function () {
  fetch(
    "https://handlers.education.launchcode.org/static/astronauts.json"
  ).then(function (response) {
    response.json().then(function (json) {
      let astronauts = "";

      sortedJSON = json.sort(function (a, b) {
        return b.hoursInSpace - a.hoursInSpace;
      });

      for (astronaut in sortedJSON) {
        astronauts += `
        <div class="astronaut">
          <h3>${json[astronaut].firstName} ${json[astronaut].lastName}</h3>
          <ul>
            <li>Hours in Space: ${json[astronaut].hoursInSpace}</li>
            <li>Active: ${json[astronaut].active}</li>
            <li>Skills: ${json[astronaut].skills}</li>
          </ul>
          <img src="${json[astronaut].picture}" class="avatar">
        </div>
        `;
      }

      container = document.getElementById("container");
      container.innerHTML = astronauts;
    });
  });
});

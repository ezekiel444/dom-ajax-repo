function pullRequestContent() {
  let pullRequestList = document.querySelector("#pull-requests-list");

  fetch("https://api.github.com/repos/codeyourfuture/js-exercises/pulls")
    .then(res => {
      return res.json();
    })
    .then(resArr => {
      resArr.forEach(request => {
        let li = document.createElement("li"),
          createLink = document.createElement("a");
        createLink.setAttribute("href", request.html_url);
        createLink.innerText = request.title;
        li.appendChild(createLink);
        pullRequestList.appendChild(li);
      });
    });
}
// pullRequestContent();
/* Requirement 5: Show Only My Pull Requests.
Alternative Solution Using Object Destruction And Async await.*/
async function pullRequestContent2() {
  let pullRequestList = document.querySelector("#pull-requests-list");

  const res = await fetch(
      "https://api.github.com/repos/codeyourfuture/js-exercises/pulls"
    ),
    resArr = await res.json();

  resArr.filter(({ html_url, title, number, user }) => {
    if (user.login === "minotad66") {
      let li = document.createElement("li"),
        createLink = document.createElement("a");
      createLink.setAttribute("href", html_url);
      createLink.innerText = `#${number} - ${title}`;
      li.appendChild(createLink);
      pullRequestList.appendChild(li);
    }
  });
}
//pullRequestContent2();

//Requirement 6: Search for my friend's Pull Requests.
async function functionToSearch() {
  const toFetch = await fetch(
      "https://api.github.com/repos/codeyourfuture/js-exercises/pulls"
    ),
    dataReceived = await toFetch.json();

  let pullRequestList = document.querySelector("#pull-requests-list");
  dataReceived.filter(({ user, html_url, title, number }) => {
    let searchedUsers = document.querySelector("#searchid");
    if (searchedUsers.value === user.login) {
      let li = document.createElement("li"),
        createLink = document.createElement("a");
      createLink.setAttribute("href", html_url);
      createLink.innerText = `#${number} - ${title}`;
      li.appendChild(createLink);
      pullRequestList.appendChild(li);
    }
  });
}

functionToSearch();

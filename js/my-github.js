// Write code here to communicate with Github

//fetch("https://api.github.com/users/ezekiel444/repos");

console.log("Loading Github repos");
function fetchAndShowGithubContent() {
  let reposList = document.querySelector("#repos-list");

  fetch("https://api.github.com/users/ezekiel444/repos")
    .then(res => {
      return res.json();
    })
    .then(reposarr => {
      let changeRepoList = document.querySelector("#repos-count");
      changeRepoList.innerText = reposarr.length;
      reposarr.forEach(repo => {
        // create a link inside of an li and add the li to the list.
        let newLi = document.createElement("li");
        let createLink = document.createElement("a");
        createLink.setAttribute("href", repo.html_url);
        createLink.innerText = repo.name;

        newLi.appendChild(createLink);

        reposList.appendChild(newLi);
      });
    });
}

fetchAndShowGithubContent();

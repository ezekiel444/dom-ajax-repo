// Write code here to communicate with Github

//fetch("https://api.github.com/users/ezekiel444/repos");

console.log("Loading Github repos");

let reposList = document.querySelector("#repos-list");

fetch("https://api.github.com/users/ezekiel444/repos")
  .then(res => {
    return res.json();
  })
  .then(reposarr => {
    reposarr.forEach(repo => {
      let newLi = document.createElement("li");
      console.log(repo.name);
      newLi.innerText = repo.name;
      reposList.appendChild(newLi);
    });
  });

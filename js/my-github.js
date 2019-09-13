// Write code here to communicate with Github

//fetch("https://api.github.com/users/ezekiel444/repos");

fetchUsers = async username => {
  let reposList = document.querySelector("#repos-list");
  const responds = await fetch(
    "https://api.github.com/users/" + username + "/repos"
  );
  let data = await responds.json();
  /// here you should clean all the LI inside the UL
  data.forEach(({ name, html_url }) => {
    // create a link inside of an li and add the li to the list.
    let newLi = document.createElement("li"); //
    let createLink = document.createElement("a"); //
    createLink.setAttribute("href", html_url); //
    createLink.innerText = name; //       create a function for those lines and call it here
    while (newLi.hasChildNodes()) {
      newLi.removeChild(ul.lastChild);
    }
    newLi.appendChild(createLink); //
    reposList.appendChild(newLi); //
  });
};
fetchUsers("ezekiel444");
document
  .querySelector("#searchsubmit")
  .addEventListener("click", fetchAndShowGithubContent);
function fetchAndShowGithubContent() {
  let textId = document.querySelector("#textId").value;
  if (textId !== "") {
    fetchUsers(textId);
  } else {
    fetchUsers("ezekiel444");
  }
}

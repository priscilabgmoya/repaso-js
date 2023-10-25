function NavBar(header) {
    const nav = document.createElement("nav");
    nav.classList = "navbar navbar-expand-lg p-3";
    nav.style = "background-color: #e3f2fd";

    const div = document.createElement("div");
    div.classList = "container";
    div.innerHTML = ` <a class="navbar-brand" href="#">TASK</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>`;
    const divCollapse = document.createElement("div");
    divCollapse.id = "navbarSupportedContent";
    divCollapse.classList = "collapse navbar-collapse";
    divCollapse.innerHTML = `
<ul class="navbar-nav  mb-2 mb-lg-0">
<li class="nav-item">
  <a class="nav-link" aria-current="page" href="#">Home</a>
</li>
<li class="nav-item">
  <a class="nav-link" href="#">Link</a>
</li>
</ul>`;
    const form = document.createElement("form");
    form.role = "search";
    form.classList = "d-flex";

    const input = document.createElement("input");
    input.classList = "form-control me-2";
    input.placeholder = "SEARCH TASK";
    input.type = "search";
    form.appendChild(input);

    const button = document.createElement("button");
    button.classList = "btn btn-outline-success";
    button.type = "submit";
    button.innerText = "Search";
    form.appendChild(button);

    form.addEventListener("submit", searchTask); 

    divCollapse.appendChild(form);
    div.appendChild(divCollapse);
    
    nav.appendChild(div);
    header.appendChild(nav);
}

function searchTask(e) {
    e.preventDefault();
    console.log(e.target[0].value);
}

export {
    NavBar
};
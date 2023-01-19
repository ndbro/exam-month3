const elSearch = document.querySelector("#search");
let filteredPosts = [];
let searchPost = [];
const renderPosts = (array, element = elCards) => {
  element.innerHTML = "";

  array.forEach((post) => {
    const newCard = document.createElement("div");
    newCard.className = "card ms-5 mt-5 col-12 col-sm-5 col-md-3  bg-warning shadow";
    newCard.innerHTML = `
		<div class="card-body">
			<h3 class="card-title text-light">${post.name}</h3>
			<p class="card-text text-secondary ">${post.email}</p>
			<p class="card-text">${post.body}</p>
        	<p class="card-text text-light">${post.postId}</p>
			<div class="d-flex justify-content-between">
				<button data-id="${post.id}" class="btn btn-primary delete-btn form-control"> Delete </button>
			</div>
			</div>`;
    element.appendChild(newCard);
  });
};

renderPosts(posts);

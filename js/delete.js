const elCards = document.querySelector(".cards");


elCards.addEventListener("click", (e) => 
{
  const target = e.target;
  let newPosts = [];

  if (target.className.includes("delete-btn")) {
    const id = Number(target.dataset.id);

    posts.forEach((post) => {
      if (post.id !== id) {
        newPosts.push(post);
      }
    });
    posts=newPosts
    renderPosts(posts);
  }
});

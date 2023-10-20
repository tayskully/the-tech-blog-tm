
async function addPost() {
  console.log("clicked!");
const postForm = document.querySelector('#post-form');

postForm.innerHTML = ``
  const post_text = document.querySelector("#post-text").value.trim();
  const post_title = document.querySelector("#post_title").value;

  if (comment_text) {
    const response = await fetch("/api/comments/", {
      method: "POST",
      body: JSON.stringify({ comment_text, post_id }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      window.location.reload();
    } else {
      alert("can't post right now, sorry 😭");
    }
  }
}

async function deletePost () {
  console.log("delete clicked!")

}

async function editPost() {
  console.log("editing")
}


document.querySelector("#edit").addEventListener("click", editPost);
document.querySelector("#delete").addEventListener("click", deletePost);
document.querySelector("#add-post").addEventListener("click", addPost);


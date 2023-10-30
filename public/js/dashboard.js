async function addPost() {
  console.log("clicked!");
  const postForm = document.querySelector("#post-form");
  const addPostBtn = document.querySelector("#add-post");

  addPostBtn.classList.add("invisible");

  postForm.innerHTML = `  <div class="form-floating">
<textarea class="form-control" id="post-title" placeholder="Title" id="floatingTextarea"></textarea>
<label for="floatingTextarea">Title of Post</label>
</div>
<div class="form-floating">
<textarea class="form-control" id="post-text" placeholder="Write your post here" id="floatingTextarea2" style="height: 100px"></textarea>
<label for="floatingTextarea2">What are your thoughts?</label>
</div>  <button
class="btn btn-light float-end fs-1 focus-ring py-1 px-2 mx-3"
id="submit-post"
>Publish</button>`;
  const post_text = document.querySelector("#post-text").value.trim();
  const post_title = document.querySelector("#post-title").value;

  //i don't remember where i left off here / post request for new blog post that uses title and post
  //and user and date and ....
  if (post_text) {
    const response = await fetch("/api/posts/", {
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

async function deletePost() {
  console.log("delete clicked!");
}

async function editPost() {
  console.log("editing");
}

document.querySelector("#edit").addEventListener("click", editPost);
document.querySelector("#delete").addEventListener("click", deletePost);
document.querySelector("#add-post").addEventListener("click", addPost);

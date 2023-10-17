async function postComment() {
  console.log("clicked!");
  const comment_text = document.querySelector("#comment-form").value.trim();
  const post_id = document.querySelector("#post_id").value;

  if (comment_text) {
    const response = await fetch("/api/comments/", {
      method: "POST",
      body: JSON.stringify({ comment_text, post_id }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      window.location.reload();
    } else {
      alert("can't post comment right now, sorry :/");
    }
  }
}

document.querySelector("#post-comment").addEventListener("click", postComment);

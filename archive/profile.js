var postForm = document.getElementById("postForm");
var newPost = document.getElementById("newPost");
var button = document.getElementById("button");



if(postForm){
    var newPost = document.getElementById("newPost");
    var button = document.getElementById("button");
    button.addEventListener("click", function(e) {
      e.preventDefault();
      var comment = newPost.value;
      if (comment.trim() !== "") {
        var newComment = document.createElement("p");
        newComment.innerHTML = comment;
        postForm.appendChild(newComment);
        newPost.value = "";
      }
    });
}

var data = {
  categories: [
      {
          name: "Categories",
          subcategories: [
              { name: "Coffee Shops" },
              { name: "Parks" },
              { name: "Restaurants" }
          ]
      }
  ]
};
var template = Handlebars.compile(document.getElementById("template").innerHTML);
var html = template(data);
document.getElementById("some-element").innerHTML = html;

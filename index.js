const friends = document.getElementsByTagName("li");

for (const friend of friends) {
  friend.style.backgroundColor = "blue";
  friend.style.margin = "20px";
  //   friend.style.padding = "20px";
  //   friend.style.color = "white";
  //   friend.style.fontSize = "2rem";
  //   friend.style.fontSize = "2rem";
}

const blogs = document.getElementsByTagName("p");
blogs[3].innerText = "hello world";
blogs[3].style.backgroundColor = "green";

const spacialBlog = document.getElementById("blog-spacial");

const classBlog = document.getElementsByClassName("class-blog");
// console.log("classBlog", classBlog);

// const querySelect = document.querySelector(".class-blog");
// querySelect.style.backgroundColor = "blue";
// console.log("this is for query", querySelect);

const querySelectAll = document.querySelectorAll(".class-blog");

for (const arr of querySelectAll) {
  console.log(arr);
}

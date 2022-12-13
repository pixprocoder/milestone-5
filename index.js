const friends = document.getElementById("friend");

const fifth = friends.children[4];
friends.removeChild(fifth);

const blogs = document.getElementsByTagName("p");
blogs[3].innerText = "hello world";
blogs[3].style.backgroundColor = "green";

const spacialBlog = document.getElementById("blog-spacial");

const classBlog = document.getElementsByClassName("class-blog");

const querySelectAll = document.querySelectorAll(".class-blog");

const firstPara = document.getElementById("first-para").style;

const li = document.createElement("li");
li.innerText = "I am the last friend";
const ul = document.getElementById("friends");
ul.appendChild(li);

for (const friend of friends) {
  friend.style.margin = "20px";
  //   friend.style.padding = "20px";
  //   friend.style.color = "white";
  //   friend.style.fontSize = "2rem";
  //   friend.style.fontSize = "2rem";
}

const classBlog2 = document.getElementsByClassName("class-blog");

for (const para of classBlog2) {
  para.style.border = "2px solid red";
  para.style.borderRadius = "10px ";
  para.style.padding = "20px";
  const button = document.createElement("button");
  button.classList.add("h3");
  button.style.display = "block";
  button.innerHTML = `<p>hello how are you </p> <h2> this is for try</h2>`;
  para.append(button);
}

// create element

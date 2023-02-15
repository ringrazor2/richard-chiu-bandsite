let defaultComments = [
  {
    name: "Connor Walton",
    date: "02/17/2021",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Emilie Beach",
    date: "01/09/2021",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Miles Acosta",
    date: "12/ 20/2020",
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

const body = document.querySelector("body");
const footer = document.querySelector(".footer");
const commentButton = document.querySelector(".comment-button");

// generating elements for comments page (poster)
function displayCommentDefault(commentData) {
  const article = document.createElement("article");
  article.classList.add("poster");

  const posterIconContainer = document.createElement("div");
  posterIconContainer.classList.add("poster__icon-container");

  const posterIconAvatar = document.createElement("div");
  posterIconAvatar.classList.add("poster__icon__avatar-default");

  const posterMainContainer = document.createElement("div");
  posterMainContainer.classList.add("poster__main-container");

  const posterNameDateContainer = document.createElement("div");
  posterNameDateContainer.classList.add("poster__name-date-container");

  const posterName = document.createElement("h4");
  posterName.classList.add("poster__name");

  const posterDate = document.createElement("h4");
  posterDate.classList.add("poster__date");

  const posterCommentContainer = document.createElement("div");
  posterCommentContainer.classList.add("poster__comment-container");

  const posterComment = document.createElement("p");
  posterComment.classList.add("poster__comment"); //get value from form and input here

  article.append(posterIconContainer);
  posterIconContainer.append(posterIconAvatar);
  article.append(posterMainContainer);
  posterMainContainer.append(posterNameDateContainer);
  posterNameDateContainer.append(posterName);
  posterNameDateContainer.append(posterDate);
  posterMainContainer.append(posterCommentContainer);
  posterCommentContainer.append(posterComment);

  // Getting data from user(form)
  posterName.append(commentData.name);
  posterDate.append(commentData.date);
  posterComment.append(commentData.comment);

  body.insertBefore(article, footer);
}
function displayComment(commentData) {
 const article = document.createElement("article");
 article.classList.add("poster");

  const posterIconContainer = document.createElement("div");
  posterIconContainer.classList.add("poster__icon-container");

  const posterIconAvatar = document.createElement("div");
  posterIconAvatar.classList.add("poster__icon__avatar-default");

  const posterMainContainer = document.createElement("div");
  posterMainContainer.classList.add("poster__main-container");

  const posterNameDateContainer = document.createElement("div");
  posterNameDateContainer.classList.add("poster__name-date-container");

  const posterName = document.createElement("h4");
  posterName.classList.add("poster__name");

  const posterDate = document.createElement("h4");
  posterDate.classList.add("poster__date");

  const posterCommentContainer = document.createElement("div");
  posterCommentContainer.classList.add("poster__comment-container");

  const posterComment = document.createElement("p");
  posterComment.classList.add("poster__comment"); //get value from form and input here

  article.append(posterIconContainer);
  posterIconContainer.append(posterIconAvatar);
  article.append(posterMainContainer);
  posterMainContainer.append(posterNameDateContainer);
  posterNameDateContainer.append(posterName);
  posterNameDateContainer.append(posterDate);
  posterMainContainer.append(posterCommentContainer);
  posterCommentContainer.append(posterComment);

  // Getting data from user(form)
  posterName.append(commentData.name);
  posterDate.append(commentData.date);
  posterComment.append(commentData.comment);

  const postedComment = document.querySelector(".poster");
  body.insertBefore(article, postedComment);
}

// Getting Default comments to load on page

defaultComments.forEach((i) => displayCommentDefault(i));

let bandComments = [];
//function for adding user data to array
function commentPush() {
  //Getting user data
  const userCommentName = document.querySelector(
    ".comments__article__form-name__input"
  );

  const userName = userCommentName.value;

  const userCommentInput = document.querySelector(
    ".comments__article__form-text__input"
  );
  const userInput = userCommentInput.value;

  // organizing user data into an object
  const newComment = {
    name: userName,
    date: new Date().toLocaleDateString(),
    comment: userInput,
  };
  // pushing new user data to the front of array list
  bandComments.unshift(newComment);
}
commentButton.addEventListener("click", (e) => {
  e.preventDefault();
  commentPush();
  displayComment(bandComments[0]);
  // pull data from form into object than push into defaultComments array

  //Clearing form inputs
  userName = "";
  userInput = "";
});

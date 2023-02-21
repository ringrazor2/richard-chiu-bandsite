// Grabbing elements needed for script
const body = document.querySelector("body");
const footer = document.querySelector(".footer");
const commentButton = document.querySelector(".comment-button");
const commentForm = document.querySelector(".comments__form");

const url = "https://project-1-api.herokuapp.com/comments?api_key=";
const apiKey = "dc918ff5-c704-4806-be51-b9dccadb6820";
const getRes = axios.get(url + apiKey);

//function for converting timestamp into string date
function stringDate(dateCode) {
  const date = new Date(dateCode);
  const dateString = date.toLocaleDateString();
  return dateString;
}

function createCommentElement(commentData) {
  const article = document.createElement("article");
  article.classList.add("poster");

  const posterContentContainer = document.createElement("div");
  posterContentContainer.classList.add("poster__content-container");

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
  posterName.textContent = commentData.name;

  const posterDate = document.createElement("h4");
  posterDate.classList.add("poster__date");
  posterDate.textContent = stringDate(commentData.timestamp);

  const posterCommentContainer = document.createElement("div");
  posterCommentContainer.classList.add("poster__comment-container");

  const posterComment = document.createElement("p");
  posterComment.classList.add("poster__comment");
  posterComment.textContent = commentData.comment;

  article.append(posterIconContainer);
  posterIconContainer.append(posterIconAvatar);
  article.append(posterMainContainer);
  article.append(posterContentContainer);
  posterMainContainer.append(posterNameDateContainer);
  posterNameDateContainer.append(posterName);
  posterNameDateContainer.append(posterDate);
  posterMainContainer.append(posterCommentContainer);
  posterCommentContainer.append(posterComment);

  return article;
}
// generate comment DOM element
getRes.then((response) => {
  commentData = response.data;
  console.log(commentData);
  createCommentElement(commentData);
  addCommentsToPage(commentData);
});

// Making container so I can position desktop view
const posterSection = document.createElement("section");
posterSection.classList.add("poster-container");
body.insertBefore(posterSection, footer);

// Function for rendering comment on page
function displayComment(commentData) {
  const newCommentElement = createCommentElement(commentData);
  // Need to select where we want to insert new element before/after
  const existingCommentElement = document.querySelector(".poster");
  posterSection.insertBefore(newCommentElement, existingCommentElement);
}

// Adding user data to array
function commentPush() {
  // Getting user data
  const userCommentName = document.querySelector(".comments__form-name-input");
  const userName = userCommentName.value;

  const userCommentInput = document.querySelector(".comments__form-text-input");

  const userComment = userCommentInput.value;

  // Error handing
  if (userName === "" && userComment === "") {
    userCommentName.classList.add("error");
    userCommentInput.classList.add("error");
    alert("Please enter a username and comment");
    return;
  } else if (!userName && !userComment) {
    userCommentName.classList.add("error");
    userCommentInput.classList.add("error");
    alert("Please enter a username and comment");
    return;
  } else if (userName === "") {
    userCommentName.classList.add("error");
    userCommentInput.classList.remove("error");
    alert("Please enter a username");
    return;
  } else if (userComment === "") {
    userCommentInput.classList.add("error");
    userCommentName.classList.remove("error");
    alert("please enter a comment");
    return;
  } else {
    userCommentName.classList.remove("error");
    userCommentInput.classList.remove("error");
  }
  // Organizing user data into an object
  const newComment = {
    name: userName,
    date: new Date().toLocaleDateString(),
    comment: userComment,
  };

  // Pushing new user data to the front of the array list
  bandComments.unshift(newComment);
}

// Clear form inputs function
function clearFormInputs() {
  const userCommentName = document.querySelector(".comments__form-name-input");
  const userCommentInput = document.querySelector(".comments__form-text-input");
  userCommentName.value = "";
  userCommentInput.value = "";
}

// Event listener for adding a comment
function eventCommentGeneration(e) {
  e.preventDefault();
  commentPush();
  displayComment(bandComments[0]);
  clearFormInputs();
}

// Add default comments to page
function addCommentsToPage(data) {
  data.forEach((commentData) => {
    const commentElement = createCommentElement(commentData);
    // body.insertBefore(defaultCommentElement, footer);
    posterSection.append(commentElement);
  });
}

// calling the function to render a comment when form is submitted
// commentButton.addEventListener("click", eventCommentGeneration);
commentForm.addEventListener("submit", eventCommentGeneration);

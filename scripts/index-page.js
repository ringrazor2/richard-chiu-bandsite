// Grabbing needed elements
const body = document.querySelector("body");
const footer = document.querySelector(".footer");
const commentButton = document.querySelector(".comment-button");
const commentForm = document.querySelector(".comments__form");

const url = "https://project-1-api.herokuapp.com/comments?api_key=";
const apiKey = "315ef1bb-514d-4f3a-a6b9-027a26682d1b";

//function for converting timestamp into string date
function stringDate(dateCode) {
  const date = new Date(dateCode);
  const dateString = date.toLocaleDateString();
  return dateString;
}

// creating elements with DOM
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

// filling in DOM with API data and rendering on page
function displayCommentData() {
  const getRes = axios.get(url + apiKey);

  getRes.then((response) => {
    commentData = response.data;
    // sort data based off timestamp (in this case most recent first)
    commentData.sort((a, b) => b.timestamp - a.timestamp);
    console.log(commentData);
    addCommentsToPage(commentData);
  });
}

const posterSection = document.createElement("section");
posterSection.classList.add("poster-container");

const posterDesktop = document.createElement("div");
posterDesktop.classList.add("poster-desktop");

body.insertBefore(posterDesktop, footer);
body.insertBefore(posterSection, posterDesktop);
// posterDesktop.append(posterContainer);

// Add default comments to page
function addCommentsToPage(data) {
  posterSection.innerHTML = "";
  data.forEach((comment) => {
    const newComment = createCommentElement(comment);
    posterSection.append(newComment);
  });
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
    comment: userComment,
  };

  // Posting user data to api server with post
  const postRes = axios.post(url + apiKey, newComment);
  postRes
    .then((response) => {
      commentData = response.data;
      displayCommentData(commentData);
    })
    .catch((err) => {
      console.err(`Error: ${err.response.status}`);
    });
}

// Clear form inputs function
function clearFormInputs() {
  const userCommentName = document.querySelector(".comments__form-name-input");
  const userCommentInput = document.querySelector(".comments__form-text-input");
  userCommentName.value = "";
  userCommentInput.value = "";
}

displayCommentData();

// Event listener for adding a comment
function eventCommentGeneration(e) {
  e.preventDefault();
  commentPush();
  clearFormInputs();
}

// calling the function to render a comment when form is submitted
// commentButton.addEventListener("click", eventCommentGeneration);
commentForm.addEventListener("submit", eventCommentGeneration);

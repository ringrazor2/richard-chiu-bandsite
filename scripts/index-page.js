// Grabbing needed elements
const body = document.querySelector("body");
const footer = document.querySelector(".footer");
const commentButton = document.querySelector(".comment-button");
const commentForm = document.querySelector(".comments__form");

// data for api
const url = "https://project-1-api.herokuapp.com/comments?api_key=";
const apiKey = "1d806e99-372f-4ae8-93ed-fa15b3cf981d";

// filling in DOM with API data and rendering on page
function displayCommentData() {
  const getRes = axios.get(url + apiKey);

  getRes.then((response) => {
    commentData = response.data;
    // sort data based off timestamp (in this case most recent first)
    commentData.sort((a, b) => b.timestamp - a.timestamp);
    addCommentsToPage(commentData);
  });
}

// adding rendered data to appropriate containers
const posterSection = document.createElement("section");
posterSection.classList.add("poster-container");
const posterDesktop = document.createElement("div");
posterDesktop.classList.add("poster-desktop");

// inserting elements on the html page
body.insertBefore(posterDesktop, footer);
body.insertBefore(posterSection, posterDesktop);

// render data for initial page load
displayCommentData();

// Event listener fx for adding a comment
function eventCommentGeneration(e) {
  e.preventDefault();
  commentPush();
  commentForm.reset();
}

// calling the function to render a comment when form is submitted
commentForm.addEventListener("submit", eventCommentGeneration);

//function for converting timestamp into string date
function stringDate(dateCode) {
  const date = new Date(dateCode);
  const dateString = date.toLocaleDateString();
  return dateString;
}

// Looping over data and rendering comment for each data in the array
function addCommentsToPage(data) {
  posterSection.innerHTML = "";
  data.forEach((comment) => {
    const newComment = createCommentElement(comment);
    posterSection.append(newComment);
  });
}

// Creating DOM elements needed for comments
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

// Adding user data to array then rendering data
function commentPush() {
  // Getting user data
  const userCommentName = document.querySelector(".comments__form-name-input");
  const userName = userCommentName.value;

  const userCommentInput = document.querySelector(".comments__form-text-input");
  const userComment = userCommentInput.value;
  const errorMessage = document.querySelector(".comments__error");

  // Error handing
  if (userName === "" && userComment === "") {
    userCommentName.classList.add("error");
    userCommentInput.classList.add("error");
    errorMessage.innerText = "Please enter a username and comment";
    errorMessage.classList.remove("hidden");
    return;
  } else if (userName === " " && userComment === " ") {
    userCommentName.classList.add("error");
    userCommentInput.classList.add("error");
    errorMessage.innerText = "Please enter a username and comment";
    errorMessage.classList.remove("hidden");
    return;
  } else if (/ {2,}/.test(userName) || / {2,}/.test(userComment)) {
    userCommentName.classList.add("error");
    userCommentInput.classList.add("error");
    errorMessage.innerText =
      "Please enter a valid username and comment (no multiple spaces)";
    errorMessage.classList.remove("hidden");
    return;
  } else if (userName === "") {
    userCommentName.classList.add("error");
    userCommentInput.classList.remove("error");
    errorMessage.innerText = "Please enter a username";
    errorMessage.classList.remove("hidden");
    return;
  } else if (userComment === "") {
    userCommentInput.classList.add("error");
    userCommentName.classList.remove("error");
    errorMessage.innerText = "please enter a comment";
    errorMessage.classList.remove("hidden");
    return;
  } else {
    userCommentName.classList.remove("error");
    userCommentInput.classList.remove("error");
    errorMessage.classList.add("hidden");
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

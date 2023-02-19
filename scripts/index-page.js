// Grabbing elements needed for script
const body = document.querySelector("body");
const footer = document.querySelector(".footer");
const commentButton = document.querySelector(".comment-button");
const commentForm = document.querySelector(".comments__form");

// need this for new data
const bandComments = [];

// storing default data
const defaultComments = [
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

// generate comment DOM element
function createCommentElement(comment) {
  const article = document.createElement("article");
  article.classList.add("poster");

  const divider = document.createElement("hr");
  divider.classList.add("divider");

  const posterContentContainer = document.createElement('div');
  posterContentContainer.classList.add("poster__content-container")

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
  posterName.textContent = comment.name;

  const posterDate = document.createElement("h4");
  posterDate.classList.add("poster__date");
  posterDate.textContent = comment.date;

  const posterCommentContainer = document.createElement("div");
  posterCommentContainer.classList.add("poster__comment-container");

  const posterComment = document.createElement("p");
  posterComment.classList.add("poster__comment");
  posterComment.textContent = comment.comment;

  article.append(posterIconContainer);
  posterIconContainer.append(posterIconAvatar);
  article.append(posterMainContainer);
  // posterContentContainer.append(divider)
  // posterContentContainer.append(posterIconContainer)
  // posterContentContainer.append(posterMainContainer);
  article.append(posterContentContainer)
  posterMainContainer.append(posterNameDateContainer);
  posterNameDateContainer.append(posterName);
  posterNameDateContainer.append(posterDate);
  posterMainContainer.append(posterCommentContainer);
  posterCommentContainer.append(posterComment);

  return article;
}

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

  // Error handing - might change alert to better visual error if time permits
  if (userName === "" && userComment === "") {
    userCommentName.classList.add("error");
    userCommentInput.classList.add("error");
    return;
  } else if (!userName && !userComment) {
    userCommentName.classList.add("error");
    userCommentInput.classList.add("error");
    return;
  } else if (userName === "") {
    userCommentName.classList.add("error");
    userCommentInput.classList.remove("error");
    return;
  } else if (userComment === "") {
    userCommentInput.classList.add("error");
    userCommentName.classList.remove("error");
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
function addDefaultCommentsToPage() {
  defaultComments.forEach((commentData) => {
    const defaultCommentElement = createCommentElement(commentData);
    // body.insertBefore(defaultCommentElement, footer);
    posterSection.append(defaultCommentElement);
  });
}
addDefaultCommentsToPage();

// calling the function to render a comment when form is submitted
// commentButton.addEventListener("click", eventCommentGeneration);
commentForm.addEventListener("submit", eventCommentGeneration);

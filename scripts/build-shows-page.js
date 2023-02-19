const shows = document.querySelector(".shows");

const showsData = [
  {
    Date: "Mon Sept 06 2021",
    Venue: "Ronald Lane",
    Location: "San Francisco, CA",
  },
  {
    Date: "Tue Sept 21 2021",
    Venue: "Pier 3 East",
    Location: "San Francisco, CA",
  },
  {
    Date: "Fri Oct 15 2021",
    Venue: "View Lounge",
    Location: "San Francisco, CA",
  },
  {
    Date: "Sat Nov 06 2021",
    Venue: "Hyatt Agency",
    Location: "San Francisco, CA",
  },
  {
    Date: "Fri Nov 26 2021",
    Venue: "Moscow Center",
    Location: "San Francisco, CA",
  },
  {
    Date: "Wed Dec 15 2021",
    Venue: "Press Club",
    Location: "San Francisco, CA",
  },
];

// creating shows DOM element
function createShowsElement(Data) {
  const showsMain = document.createElement("div");
  showsMain.classList.add("shows__main");

  const showsInformationContainerDate = document.createElement("div");
  showsInformationContainerDate.classList.add("shows__information-container");
  showsInformationContainerDate.classList.add(
    "shows__information-container--date"
  );

  const showsInformationContainerVenue = document.createElement("div");
  showsInformationContainerVenue.classList.add("shows__information-container");
  showsInformationContainerVenue.classList.add(
    "shows__information-container--venue"
  );

  const showsInformationContainerLocation = document.createElement("div");
  showsInformationContainerLocation.classList.add(
    "shows__information-container"
  );
  showsInformationContainerLocation.classList.add(
    "shows__information-container--location"
  );

  const showsDetailsDate = document.createElement("p");
  showsDetailsDate.classList.add("shows__details");
  showsDetailsDate.classList.add("shows__details--date");
  showsDetailsDate.innerText = "Date";

  const showsDetailsVenue = document.createElement("p");
  showsDetailsVenue.classList.add("shows__details");
  showsDetailsVenue.classList.add("shows__details--venue");
  showsDetailsVenue.innerText = "Venue";

  const showsDetailsLocation = document.createElement("p");
  showsDetailsLocation.classList.add("shows__details");
  showsDetailsLocation.classList.add("shows__details--location");
  showsDetailsLocation.innerText = "Location";

  const showsInfoDate = document.createElement("p");
  showsInfoDate.classList.add("shows__info");
  showsInfoDate.classList.add("shows__info--date");
  showsInfoDate.innerText = Data.Date;

  const showsInfoVenue = document.createElement("p");
  showsInfoVenue.classList.add("shows__info");
  showsInfoVenue.classList.add("shows__info--venue");
  showsInfoVenue.innerText = Data.Venue;

  const showsInfoLocation = document.createElement("p");
  showsInfoLocation.classList.add("shows__info");
  showsInfoLocation.classList.add("shows__info--location");
  showsInfoLocation.innerText = Data.Location;

  const showsButton = document.createElement("button");
  showsButton.classList.add("shows__button");
  showsButton.innerText = "BUY TICKETS";

  shows.append(showsMain);
  showsMain.append(showsInformationContainerDate);
  showsInformationContainerDate.append(showsDetailsDate);
  showsInformationContainerDate.append(showsInfoDate);
  showsMain.append(showsInformationContainerVenue);
  showsInformationContainerVenue.append(showsDetailsVenue);
  showsInformationContainerVenue.append(showsInfoVenue);
  showsMain.append(showsInformationContainerLocation);
  showsInformationContainerLocation.append(showsDetailsLocation);
  showsInformationContainerLocation.append(showsInfoLocation);
  showsMain.append(showsButton);

  if (showsData[0] === Data) {
    showsDetailsDate.classList.add("shows__details--visible");
    showsDetailsVenue.classList.add("shows__details--visible");
    showsDetailsLocation.classList.add("shows__details--visible");
    showsButton.classList.add("shows__button-top");
  }
  return showsMain;
}

// populating elements for the showsData array
showsData.forEach((i) => {
  createShowsElement(i);
});

// Selecting the containers needed to apply active class
const showsMainAll = document.querySelectorAll(".shows__main");
const showsMain = document.querySelector(".shows__main");

const showsDesktop = document.createElement("div");
showsDesktop.classList.add("shows__desktop-div");
shows.append(showsDesktop);

// this variable is to keep track of which show div is active
let activeShowsMain = null;

// Applying active class with conditionals 
showsMainAll.forEach((showsMain) => {
  showsMain.addEventListener("click", () => {
    if (activeShowsMain) {
      // this if checks if there is a currently selected EL and removes active if there is
      activeShowsMain.classList.remove("shows__main--active");
    }
    if (showsMain !== activeShowsMain) {
      showsMain.classList.add("shows__main--active");
      // this sets new selected div as new reference for activeShowsMain
      activeShowsMain = showsMain;
    }
    // if new clicked element same as active element deselect
    else {
      activeShowsMain = null;
    }
  });
  // Need this for desktop styling
  showsDesktop.append(showsMain);
});

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
function createShowsElement(Data) {
  //   const showsDesktop = document.createElement("div");
  //   showsDesktop.classList.add('shows__desktop-div');

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

  //   shows.append(showsDesktop);
  //   shows.append(showsMain);
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

showsData.forEach((i) => {
  createShowsElement(i);
});

// Selecting the containers needed to apply active class
const showsMainAll = document.querySelectorAll(".shows__main");
const showsMain = document.querySelector(".shows__main");

// applying active class to shows section also add new div to flex for desktop
const showsDesktop = document.createElement("div");
showsDesktop.classList.add("shows__desktop-div");
shows.append(showsDesktop);

showsMainAll.forEach((showsMain) => {
  showsMain.addEventListener("click", () => {
    showsMain.classList.toggle("shows__main--active");
  });
  showsDesktop.append(showsMain);
});

// shows.insertBefore(showsDesktop, showsMain);
// showsDesktop.append(showsMain);
// showsDesktop.append(showsMain);

// <section class="shows">
//   <h2 class="shows__title">Shows</h2>
//   <div class="shows__desktop-div">
//     <div class="shows__main">
//       <p class="shows__details">Date</p>
//       <p class="shows__info--date"> Dummy Date</p>
//     </div>
//     <div class="shows__main">
//       <p class="shows__details">Venue</p>
//       <p class="shows__info"> Dummy Venu</p>
//     </div>
//     <div class="shows__main">
//       <p class="shows__details">Location</p>
//       <p class="shows__info"> Dummy address</p>
//     </div>
//     <button class="shows__button">Buy Tickets</button>
//   </div>
// </section>;

// const mediaQueryTablet = window.matchMedia('(max-width: 768px)');
// const mediaQueryDesktop = window.matchMedia('(max-width: 1280px)');

// if (mediaQueryTablet.matches) {

// } else {
//   // apply desktop styles
//   document.querySelector('body').classList.add('desktop');
// }

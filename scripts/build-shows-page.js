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
function createShowsElement(showsData) {
  const showsMain = document.createElement("article");
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
  showsInfoDate.innerText = showsData.Date;

  const showsInfoVenue = document.createElement("p");
  showsInfoVenue.classList.add("shows__info");
  showsInfoVenue.classList.add("shows__info--venue");
  showsInfoVenue.innerText = showsData.Venue;

  const showsInfoLocation = document.createElement("p");
  showsInfoLocation.classList.add("shows__info");
  showsInfoLocation.classList.add("shows__info--location");
  showsInfoLocation.innerText = showsData.Location;

  const showsButton = document.createElement("button");
  showsButton.classList.add("shows__button");
  showsButton.innerText = "BUY TICKETS";

  shows.append(showsMain);
  showsMain.append(showsInformationContainerDate);
  showsInformationContainerDate.append(showsDetailsDate);
  showsInformationContainerDate.append(showsInfoDate);
  showsMain.append(showsInformationContainerVenue);
  showsInformationContainerDate.append(showsDetailsVenue);
  showsInformationContainerDate.append(showsInfoVenue);
  showsMain.append(showsInformationContainerLocation);
  showsInformationContainerDate.append(showsDetailsLocation);
  showsInformationContainerDate.append(showsInfoLocation);
  showsMain.append(showsButton);

  console.log(showsMain);
  return showsMain;
}

showsData.forEach((i) => {
  createShowsElement(i);
});

displayShows();
/* <section class = "shows">
          <h2 class = "shows__title">Shows</h2>
          <div class = "shows__information-container">
            <p class = "shows__details">Date</p>
            <p class = "shows__info--date"> Dummy Date</p>
          </div> 
          <div class = "shows__information-container">
            <p class = "shows__details">Venue</p>
            <p class = "shows__info"> Dummy Venu</p>
          </div>
          <div class = "shows__information-container">
            <p class = "shows__details">Location</p>
            <p class = "shows__info"> Dummy address</p>
          </div>
          <button class = "shows__button">
            Buy Tickets 
          </button>
        </section> */

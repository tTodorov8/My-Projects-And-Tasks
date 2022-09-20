const events = localStorage.getItem("events")
  ? JSON.parse(localStorage.getItem("events"))
  : [];
let clicked = null;
let calendarNav = 0;
const calendar = document.getElementById("calendar");
const container = document.querySelector(".container");
let weekdays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
// main function for creating the calendar grid
function loadCalendar() {
  const currentDate = new Date();
  // if statement for changing hte month with the buttons 0 is the current month, positive is for next months and negative is for previous months
  if (calendarNav !== 0) {
    currentDate.setMonth(new Date().getMonth() + calendarNav);
    console.log(new Date().getMonth() + calendarNav);
  }
  const day = currentDate.getDate();
  let month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  // taking all days in a month (0 is givin the last day of prev month ,so we add +1 to take total days for the current month )
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayInMonth = new Date(year, month, 1);
  const dateString = firstDayInMonth.toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  console.log(dateString);
  // split the date string to take the name of the day only
  const splitedDateString = dateString.split(", ")[0];
  const paddingDays = weekdays.indexOf(splitedDateString);
  const header = document.getElementById("header");
  //clearing the inner html
  calendar.innerHTML = "";
  const newEventModal = document.getElementById("newEventModal");
  const backDrop = document.getElementById("backDrop");
  const eventTitleInput = document.getElementById("eventTitleInput");

  //Creating day squares , looping days in moth plus days from prev month (if have)

  for (let i = 1; i <= paddingDays + daysInMonth; i++) {
    const daySquare = document.createElement("div");
    daySquare.classList.add("day");
    const dayString = `${month + 1}/${i - paddingDays}/${year}`;
    // if i more than paddingDays , seting the day number in the square
    if (i > paddingDays) {
      daySquare.innerHTML = i - paddingDays;
      console.log(dayString);
      //checking for existing event in the events array
      const eventForDayObject = events.find((e) => e.date === dayString);
      //if exist , set the title of event inside the day square box
      if (eventForDayObject) {
        const eventDiv = document.createElement("div");
        eventDiv.innerText = eventForDayObject.title;
        daySquare.appendChild(eventDiv);
        console.log(eventDiv);
      }
      daySquare.addEventListener("click", function () {
        openModal(dayString);
      });
    } else {
      daySquare.innerHTML = "";
      daySquare.classList.add("padding");
    }
    calendar.appendChild(daySquare);
  }
  header.innerText = `${currentDate.toLocaleDateString("en-us", {
    month: "long",
  })},  ${year} `;
}

function openModal(date) {
  clicked = date;
  console.log(date);
  container.style.filter = "blur(10px)";
  const eventForDayObject = events.find((e) => e.date === clicked);
  if (eventForDayObject) {
    console.log(`Event already exist`);
    return;
  } else {
    newEventModal.style.display = "block";
  }
  backDrop.style.display = "block";
}

function closeModal() {
  newEventModal.style.display = "none";
  eventTitleInput.value = "";
  clicked = null;
  container.style.filter = "none";
  backDrop.style.display = "none";
  loadCalendar();
}

function saveEvent() {
  if (eventTitleInput.value) {
    events.push({
      date: clicked,
      title: eventTitleInput.value,
    });

    localStorage.setItem("events", JSON.stringify(events));

    console.log(JSON.stringify(events));
    closeModal();
  } else {
    console.log(`Error`);
  }
}

function allButtons() {
  let nextButton = document.getElementById("next-button");
  let previousButton = document.getElementById("previous-button");

  nextButton.addEventListener("click", (e) => {
    calendarNav++;

    loadCalendar();
  });

  previousButton.addEventListener("click", (e) => {
    calendarNav--;
    console.log(calendarNav);
    loadCalendar();
  });

  let closeButton = document.getElementById("closeButton");
  let saveButton = document.getElementById("saveButton");
  closeButton.addEventListener("click", closeModal);
  saveButton.addEventListener("click", saveEvent);
}

allButtons();
loadCalendar();

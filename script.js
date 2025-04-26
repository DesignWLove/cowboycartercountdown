// Main Tour Opening Countdown (April 28, 2025 at 7PM PDT => 2AM UTC April 29)
const tourOpeningUTC = new Date('2025-04-29T02:00:00Z').getTime();

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

function updateMainCountdown() {
  const now = new Date().getTime();
  const gap = tourOpeningUTC - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  if (gap > 0) {
    const days = Math.floor(gap / day);
    const hours = Math.floor((gap % day) / hour);
    const minutes = Math.floor((gap % hour) / minute);
    const seconds = Math.floor((gap % minute) / second);

    daysEl.innerText = days.toString().padStart(2, '0');
    hoursEl.innerText = hours.toString().padStart(2, '0');
    minutesEl.innerText = minutes.toString().padStart(2, '0');
    secondsEl.innerText = seconds.toString().padStart(2, '0');
  } else {
    document.getElementById('main-countdown').innerHTML = `<h2>Yeehaw! Cowboy Carter Tour Has Begun! 🎶🤠</h2>`;
  }
}

setInterval(updateMainCountdown, 1000);
updateMainCountdown();

// Show list setup
const shows = [
  { city: "LA, Inglewood, SoFi Stadium N1", date: "2025-04-29T02:00:00Z" },
  { city: "LA, Inglewood, SoFi Stadium N2", date: "2025-05-02T02:00:00Z" },
  { city: "LA, Inglewood, SoFi Stadium N3", date: "2025-05-05T02:00:00Z" },
  { city: "LA, Inglewood, SoFi Stadium N4", date: "2025-05-08T02:00:00Z" },
  { city: "LA, Inglewood, SoFi Stadium N5", date: "2025-05-10T02:00:00Z" },
  { city: "Chicago, Soldier Field N1", date: "2025-05-16T00:00:00Z" },
  { city: "Chicago, Soldier Field N2", date: "2025-05-18T00:00:00Z" },
  { city: "Chicago, Soldier Field N3", date: "2025-05-19T00:00:00Z" },
  { city: "East Rutherford, MetLife Stadium N1", date: "2025-05-23T23:00:00Z" },
  { city: "East Rutherford, MetLife Stadium N2", date: "2025-05-25T23:00:00Z" },
  { city: "East Rutherford, MetLife Stadium N3", date: "2025-05-26T23:00:00Z" },
  { city: "East Rutherford, MetLife Stadium N4", date: "2025-05-29T23:00:00Z" },
  { city: "East Rutherford, MetLife Stadium N5", date: "2025-05-30T23:00:00Z" },
  { city: "London, Tottenham Hotspur Stadium N1", date: "2025-06-05T16:00:00Z" },
  { city: "London, Tottenham Hotspur Stadium N2", date: "2025-06-07T16:00:00Z" },
  { city: "London, Tottenham Hotspur Stadium N3", date: "2025-06-10T16:00:00Z" },
  { city: "London, Tottenham Hotspur Stadium N4", date: "2025-06-12T16:00:00Z" },
  { city: "London, Tottenham Hotspur Stadium N5", date: "2025-06-14T16:00:00Z" },
  { city: "London, Tottenham Hotspur Stadium N6", date: "2025-06-16T16:00:00Z" },
  { city: "Saint-Denis, Stade de France N1", date: "2025-06-19T15:00:00Z" },
  { city: "Saint-Denis, Stade de France N2", date: "2025-06-21T15:00:00Z" },
  { city: "Saint-Denis, Stade de France N3", date: "2025-06-22T15:00:00Z" },
  { city: "Houston, NRG Stadium N1", date: "2025-06-29T00:00:00Z" },
  { city: "Houston, NRG Stadium N2", date: "2025-06-30T00:00:00Z" },
  { city: "Landover, Northwest Stadium N1", date: "2025-07-05T23:00:00Z" },
  { city: "Landover, Northwest Stadium N2", date: "2025-07-08T23:00:00Z" },
  { city: "Atlanta, Mercedes-Benz Stadium N1", date: "2025-07-11T23:00:00Z" },
  { city: "Atlanta, Mercedes-Benz Stadium N2", date: "2025-07-12T23:00:00Z" },
  { city: "Atlanta, Mercedes-Benz Stadium N3", date: "2025-07-14T23:00:00Z" },
  { city: "Atlanta, Mercedes-Benz Stadium N4", date: "2025-07-15T23:00:00Z" },
  { city: "Paradise, Allegiant Stadium N1", date: "2025-07-26T02:00:00Z" },
  { city: "Paradise, Allegiant Stadium N2", date: "2025-07-27T02:00:00Z" }
];

const upcomingBtn = document.getElementById('upcoming-btn');
const upcomingShowsDiv = document.getElementById('upcoming-shows');
const showsList = document.getElementById('shows-list');
const returnBtn = document.getElementById('return-btn');

upcomingBtn.addEventListener('click', () => {
  upcomingShowsDiv.classList.toggle('hidden');
  if (!upcomingShowsDiv.classList.contains('hidden')) {
    renderShows();
  }
});

function renderShows() {
  showsList.innerHTML = "";
  const now = new Date().getTime();
  shows.forEach(show => {
    const showTime = new Date(show.date).getTime();
    if (showTime > now) {
      const gap = showTime - now;
      const days = Math.floor(gap / (1000 * 60 * 60 * 24));
      const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((gap % (1000 * 60)) / 1000);

      const showDiv = document.createElement('div');
      showDiv.className = "show-item";
      showDiv.innerHTML = `<strong>${show.city}</strong><br>${days}d ${hours}h ${minutes}m ${seconds}s left`;
      showsList.appendChild(showDiv);
    }
  });
}

returnBtn.addEventListener('click', () => {
  upcomingShowsDiv.classList.add('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const calendar = document.querySelector('#app-calendar');

const isWeekend = (day) => {
  return day % 7 === 5 || day % 7 === 6;
};

let days = {
  selected: 0,
};

for (let day = 1; day <= 31; day++) {
  const date = new Date(2024, 9, day);
  const dayName = new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(
    date
  );

  const weekend = isWeekend(day);

  let name = '';
  if (day <= 7) {
    name = `<div class="name">${dayName}</div>`;
  }

  calendar.insertAdjacentHTML(
    'beforeend',
    `<div class="day ${weekend ? 'weekend' : ''}">${name}${day}</div>`
  );
}

let daysSelected = [];

const dayBoxes = document.querySelectorAll('#app-calendar .day');
dayBoxes.forEach((day) => {
  day.addEventListener('click', toggle);
  // console.log(day.srcElement);
  // saveDays();
});

function toggle(e) {
  e.currentTarget.classList.toggle('selected');
  console.log(e.target.attributes.class.value);
  if (e.target.attributes.class.value === 'day selected') {
    daysSelected.push(e.target.innerText);
    console.log('selected');
    console.log(daysSelected);
  } else {
    console.log('not selected');
  }
}

// function saveDays() {
//   localStorage.setItem('days');
// }

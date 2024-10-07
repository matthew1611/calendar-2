const calendar = document.querySelector('#app-calendar');

const isWeekend = (day) => {
  return day % 7 === 5 || day % 7 === 6;
};

for (let day = 1; day <= 31; day++) {
  const date = new Date(2024, 9, day);
  const dayName = new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(
    date
  );

  const weekend = isWeekend(day);
  calendar.insertAdjacentHTML(
    'beforeend',
    `<div class="day ${
      weekend ? 'weekend' : ''
    }"><div class="name">${dayName}</div>${day}</div>`
  );
}

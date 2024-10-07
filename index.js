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

  let name = '';

  if (day <= 7) {
    name = `<div class="name">${dayName}</div>`;
  }
  calendar.insertAdjacentHTML(
    'beforeend',
    `<div class="day ${weekend ? 'weekend' : ''}">${name}${day}</div>`
  );
}

document.querySelectorAll('#app-calendar .day').forEach((day) => {
  day.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle('selected');
    console.log(day.textContent);
  });
});

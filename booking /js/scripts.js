const date = new Date();
const leapYear = year => (year % 4 == 0 && year % 100 !== 0) || year % 400 == 0;
const currentYear = date.getFullYear();
const calendar = document.getElementById('calendar');
const currentMonth = date.getMonth();
const currentDay = date.getDate();
const rootStyles = document.documentElement.style;
const firstSelect = document.getElementById('dinners');
const secondSelect = document.getElementById('shift');
const thirdSelect = document.getElementById('hours');
const reserveButton = document.getElementById('reserve');
const form = document.getElementById('form');
const reserveStatus = document.getElementById('reserve-status');

const daysOfMonth = {
  january: 31,
  february: leapYear(currentYear) ? 29 : 28,
  march: 31,
  april: 30,
  may: 31,
  june: 30,
  july: 31,
  august: 31,
  september: 30,
  october: 31,
  november: 30,
  december: 31
};
const months = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december'
];

const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Sunday',
  'Saturday'
];

const hours = {
  morning: {
    startTime: 6,
    endTime: 14
  },
  afternoon: {
    startTime: 15,
    endTime: 22
  }
};

let daySelected;

const firstDayMonth = new Date(currentYear, currentMonth, '1');

const createDays = () => {
  for (let index = 0; index <= days.length; index++) {
    const dayHeader = document.createElement('div');
    dayHeader.textContent = days[index];
    calendar.append(dayHeader);
  }
  const fragment = document.createDocumentFragment();
  for (let index = 0; index < daysOfMonth[months[currentMonth]]; index++) {
    const newDay = document.createElement('div');
    newDay.textContent = `${index + 1}`;
    newDay.classList.add('day');
    fragment.append(newDay);
    if (index + 1 == currentDay) {
      newDay.classList.add('today');
    }
    if (index + 1 < currentDay) {
      newDay.classList.add('disabled');
    }
    if (index == 0) {
      newDay.classList.add('first-day');
    }
  }
  calendar.append(fragment);

  let column;

  if (firstDayMonth.getDay() === 0) column = 7;
  else column = firstDayMonth.getDay();

  rootStyles.setProperty('--first-day-column', column);
};
createDays();

const dayOfWeek = (year, month, day) => {
  return new Date(year, month, day).getDay();
};

const createDinnerOptions = day => {
  daySelected = dayOfWeek(currentYear, currentMonth, day);
  let numberOfOptions;
  if (daySelected <= 4) numberOfOptions = 8;
  else numberOfOptions = 15;
  firstSelect.innerHTML = '';
  const fragment = document.createDocumentFragment();
  let newOption = document.createElement('option');
  newOption.textContent = 'Number of dinners';
  newOption.value = 0;
  fragment.append(newOption);

  for (let index = 1; index <= numberOfOptions; index++) {
    newOption = document.createElement('option');
    newOption.value = index;
    if (newOption.textContent === '1') {
      newOption.textContent = index + ' dinner';
    } else newOption.textContent = index + ' dinners';
    fragment.append(newOption);
  }
  firstSelect.append(fragment);
};

const createShiftOptions = () => {
  secondSelect.innerHTML = '';
  const fragment = document.createDocumentFragment();
  let numberOfShifts;
  let newShift = document.createElement('option');
  newShift.value = 0;
  newShift.textContent = 'Select shift';
  fragment.append(newShift);
  if (daySelected > 0) numberOfShifts = 2;
  else numberOfShifts = 1;

  for (let index = 1; index <= numberOfShifts; index++) {
    newShift = document.createElement('option');
    if (index === 1) {
      newShift.value = 'morning';
      newShift.textContent = 'morning';
    } else {
      newShift.value = 'afternoon';
      newShift.textContent = 'afternoon';
    }
    fragment.append(newShift);
  }
  secondSelect.append(fragment);
};

const createHoursOptions = shift => {
  thirdSelect.innerHTML = '';
  const fragment = document.createDocumentFragment();
  let newHour = document.createElement('option');
  newHour.textContent = 'Select hour';
  newHour.value = 0;
  fragment.append(newHour);
  for (
    let index = hours[shift].startTime;
    index <= hours[shift].endTime;
    index++
  ) {
    newHour = document.createElement('option');
    newHour.value = `${index}:00`;
    newHour.textContent = `${index}:00`;
    if (index !== hours[shift].endTime) {
      let newHourHalfPast = document.createElement('option');
      newHourHalfPast.textContent = `${index}:30`;
      newHourHalfPast.value = `${index}:30`;
      fragment.append(newHourHalfPast);
    }
    fragment.append(newHour);
  }
  thirdSelect.append(fragment);
};

let numberDaySelected;

calendar.addEventListener('click', e => {
  secondSelect.disabled = true;
  thirdSelect.disabled = true;
  reserveButton.disabled = true;
  const daysCalendar = document.querySelectorAll('.day');
  daysCalendar.forEach(day => day.classList.remove('selected'));
  if (
    !e.target.classList.contains('day') ||
    e.target.classList.contains('disabled')
  )
    return;
  e.target.classList.add('selected');

  firstSelect.removeAttribute('disabled');
  createDinnerOptions(e.target.textContent);
  numberDaySelected = e.target.textContent;
  reserveStatus.textContent = 'Reserva en proceso';
});

firstSelect.addEventListener('change', e => {
  if (e.target.selectedIndex === 0) secondSelect.setAttribute('disabled', '');
  else secondSelect.removeAttribute('disabled');
  createShiftOptions();
});

secondSelect.addEventListener('change', e => {
  if (e.target.selectedIndex === 0) thirdSelect.setAttribute('disabled', '');
  else thirdSelect.removeAttribute('disabled');
  createHoursOptions(e.target.value);
});

thirdSelect.addEventListener('change', e => {
  reserveButton.disabled = false;
  reserveStatus.textContent = `Has seleccionado una reseva para ${firstSelect.selectedIndex} persona(s) el dia ${numberDaySelected} a las ${e.target.value} `;
});

form.addEventListener('submit', e => {
  e.preventDefault();
});

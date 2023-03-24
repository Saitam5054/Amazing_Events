fetch('https://mindhub-xj03.onrender.com/api/amazing')
  .then(response => response.json())
  .then(data => {
    const maxAttendanceEvent = getMaxAttendanceEvent(data.events);
    console.log(`Evento con mayor porcentaje de asistencia: ${maxAttendanceEvent.name}`);

    const minAttendanceEvent = getMinAttendanceEvent(data.events);
    console.log(`Evento con menor porcentaje de asistencia: ${minAttendanceEvent.name}`);

    const maxCapacityEvent = getMaxCapacityEvent(data.events);
    console.log(`Evento con mayor capacidad: ${maxCapacityEvent.name}`);

    const currentDate = new Date(data.currentDate);

    const pastEvents = data.events.filter(event => new Date(event.date) < currentDate);
    const futureEvents = data.events.filter(event => new Date(event.date) >= currentDate);

    const pastCategories = calculateCategories(pastEvents);
    const futureCategories = calculateCategories(futureEvents);

    createRowTable(".tr1", { maxAttendanceEvent, minAttendanceEvent, maxCapacityEvent });
    createRowTable(".tr2", pastCategories);
    createRowTable(".tr3", futureCategories);
  })
  .catch(error => console.log(error));

function getMaxAttendanceEvent(events) {
  return events.reduce((max, event) => {
    const attendancePercent = (event.assistance / event.capacity) * 100;
    return attendancePercent > max.attendancePercent ? { name: event.name, attendancePercent } : max;
  }, { name: '', attendancePercent: 0 });
}

function getMinAttendanceEvent(events) {
  return events.reduce((min, event) => {
    const attendancePercent = (event.assistance / event.capacity) * 100;
    return attendancePercent < min.attendancePercent ? { name: event.name, attendancePercent } : min;
  }, { name: '', attendancePercent: 100 });
}

function getMaxCapacityEvent(events) {
  return events.reduce((max, event) => {
    return event.capacity > max.capacity ? { name: event.name, capacity: event.capacity } : max;
  }, { name: '', capacity: 0 });
}

const maxAttendanceEvent = getMaxAttendanceEvent(data.events);
console.log(`Evento con mayor porcentaje de asistencia: ${maxAttendanceEvent.name}`);

const minAttendanceEvent = getMinAttendanceEvent(data.events);
console.log(`Evento con menor porcentaje de asistencia: ${minAttendanceEvent.name}`);

const maxCapacityEvent = getMaxCapacityEvent(data.events);
console.log(`Evento con mayor capacidad: ${maxCapacityEvent.name}`);

const currentDate = new Date(data.currentDate);

const pastEvents = data.events.filter(event => new Date(event.date) < currentDate);
const futureEvents = data.events.filter(event => new Date(event.date) >= currentDate);

function calculateCategories(events) {
  const categories = {};
  events.forEach(event => {
    const category = event.category;
    const income = event.price * Math.min(event.assistance || event.estimate, event.capacity);
    const attendance = (event.assistance || event.estimate) / event.capacity * 100;

    if (categories[category]) {
      categories[category].income += income;
      categories[category].attendance += attendance;
      categories[category].count++;
    } else {
      categories[category] = {
        income: income,
        attendance: attendance,
        count: 1
      };
    }
  });
  return categories;
}

const pastCategories = calculateCategories(pastEvents);
const futureCategories = calculateCategories(futureEvents);

function createRowTable(selector, data) {
  const table = document.querySelector(selector);

  if (selector === ".tr1") {
    // Formato de datos para la tabla tr1
    table.innerHTML += `<td>${data.maxAttendanceEvent.name} (${data.maxAttendanceEvent.attendancePercent.toFixed(2)}%)</td>
                        <td>${data.minAttendanceEvent.name} (${data.minAttendanceEvent.attendancePercent.toFixed(2)}%)</td>
                        <td>${data.maxCapacityEvent.name} (${data.maxCapacityEvent.capacity})</td>`;
  } else {
    // Formato de datos para las tablas tr2 y tr3
    for (const category in data) {
      const totalIncome = data[category].income;
      const avgAttendance = data[category].attendance / data[category].count;

      table.innerHTML += `<tr>
                            <td>${category}</td>
                            <td>$${totalIncome.toFixed(2)}</td>
                            <td>${avgAttendance.toFixed(2)}%</td>
                          </tr>`;
    }
  }
}

const tr1Data = [
  { name: maxAttendanceEvent.name, value: maxAttendanceEvent.attendancePercent, unit: "%" },
  { name: minAttendanceEvent.name, value: minAttendanceEvent.attendancePercent, unit: "%" },
  { name: maxCapacityEvent.name, value: maxCapacityEvent.capacity, unit: "" }
];

createRowTable(".tr1", { maxAttendanceEvent, minAttendanceEvent, maxCapacityEvent });

createRowTable(".tr2", pastCategories);

createRowTable(".tr3", futureCategories);

/* const currentDate = new Date(data.currentDate);

const pastEvents = data.events.filter(event => new Date(event.date) < currentDate);
const futureEvents = data.events.filter(event => new Date(event.date) >= currentDate);

const pastCategories = {};
pastEvents.forEach(event => {
  const category = event.category;
  const income = event.price * Math.min(event.assistance || event.estimate, event.capacity);
  const attendance = (event.assistance || event.estimate) / event.capacity * 100;

  if (pastCategories[category]) {
    pastCategories[category].income += income;
    pastCategories[category].attendance += attendance;
    pastCategories[category].count++;
  } else {
    pastCategories[category] = {
      income: income,
      attendance: attendance,
      count: 1
    };
  }
});

const futureCategories = {};
futureEvents.forEach(event => {
  const category = event.category;
  const income = event.price * Math.min(event.estimate, event.capacity);
  const attendance = event.estimate / event.capacity * 100;

  if (futureCategories[category]) {
    futureCategories[category].income += income;
    futureCategories[category].attendance += attendance;
    futureCategories[category].count++;
  } else {
    futureCategories[category] = {
      income: income,
      attendance: attendance,
      count: 1
    };
  }
});

let tr2 = document.querySelector(".tr2");
for (const category in pastCategories) {
  const totalIncome = pastCategories[category].income;
  const avgAttendance = pastCategories[category].attendance / pastCategories[category].count;

  tr2.innerHTML += `<tr>
                      <td>${category}</td>
                      <td>$${totalIncome.toFixed(2)}</td>
                      <td>${avgAttendance.toFixed(2)}%</td>
                    </tr>`
}

let tr3 = document.querySelector(".tr3");
for (const category in futureCategories) {
  const totalIncome = futureCategories[category].income;
  const avgAttendance = futureCategories[category].attendance / futureCategories[category].count;

  tr3.innerHTML += `<tr>
                      <td>${category}</td>
                      <td>$${totalIncome.toFixed(2)}</td>
                      <td>${avgAttendance.toFixed(2)}%</td>
                    </tr>`
}
 */



async function getData() {
  const response = await fetch('https://mindhub-xj03.onrender.com/api/amazing');
  const data = await response.json();
  return data;
}

getData().then(createCards);

function createCards(data) {
  let card = document.getElementById("card-home");
  for (let x in Object.values(data.events)) {
    let property = data.events[x]
    card.innerHTML += `<section class="card text-center p-2 m-2 col-8 col-sm-8 col-md-5 col-lg-4 col-xl-3" id="card_filter">
                        <div class="card rounded-3 shadow-sm" id="card_div">
                            <img src="${property.image}" class="card-img-top" style="height: 170px;" alt="${property.name}">
                            <h2 class="card-title">${property.name}</h2>
                            <p class="list-group-item">${property.description}</p>
                            <ul class="list-group list-group-flush">
                              <li class="list-group-item"><b>Place:</b> ${property.place}</li>
                              <p class="card-text" style="display:none" id="card_property"><b>Category:</b> ${property.category}</p>
                            </ul>
                            <div class="card-body d-flex justify-content-between">
                              <h6 class="card-link"><b>Price:</b> $${property.price}</h6>
                              <h6 class="card-link"><b>Date:</b> ${property.date}</h6>
                            </div>
                            <a class="btn btn-primary" href="./details.html?id=${property._id}">see more</a>
                        </div>
                      </section>`;
  }

  filterCheckboxes();
}

function filterSearch(event) {
  if (event.target.matches(".form-control")) {
    if (event.key === "Escape") event.target.value = "";
    const filter = event.target.value.toLowerCase();
    const cards = document.querySelectorAll("#card_filter");
    let foundMatch = false;
    cards.forEach(card => {
      const match = card.textContent.toLowerCase().includes(filter);
      card.classList.toggle("filter", !match);
      foundMatch = foundMatch || match;
    });
    const noMatches = document.querySelector("#no-match-section");
    if (!foundMatch && !noMatches) {
      const noMatchHTML = `<section class="card text-center p-2 m-2 col-8 col-sm-8 col-md-5 col-lg-4 col-xl-3" id="no-match-section">
                              <div class="card rounded-3 shadow-sm" id="no-match-div">
                                <p class="list-group-item">NO MATCHES FOUND</p>
                                <p class="list-group-item">PLEASE ENTER</p>
                                <p class="list-group-item">A DIFFERENT TERM</p>
                              </div>
                            </section>`;
      document.querySelector("#card-home").insertAdjacentHTML("afterbegin", noMatchHTML);
    } else if (foundMatch && noMatches) {
      noMatches.remove();
    }
  }
}

document.addEventListener("keyup", filterSearch);

function filterCheckboxes() {
  const checkboxes = document.querySelectorAll('input[type=checkbox]');
  const cards = document.querySelectorAll('#card_filter');
  const selectedCheckboxes = Array.from(checkboxes).filter(checkbox => checkbox.checked);
  
  for (const card of cards) {
    const cardCategory = card.querySelector('#card_property').textContent.toLowerCase();
    const showCard = selectedCheckboxes.some(checkbox => cardCategory.includes(checkbox.value.toLowerCase()));
    card.classList.toggle('hidden', !showCard && selectedCheckboxes.length > 0);
  }
  
  checkboxes.forEach(checkbox => checkbox.addEventListener('change', filterCheckboxes));
};

// CREACIÓN Y FILTRO DE LAS TARJETAS DE LA FORMA QUE SE HIZO EN CLASE

/* const card = document.getElementById("card-home")
const checkboxDiv = document.getElementById("checkbox-PRUEBA")
const text = document.querySelector("input")

function createCards(events) {
    if (events.length == 0) {
        card.innerHTML = `<p>LA CHOCA DE UN PACHO</p>`
        return
    }
    let cards = ``
    events.forEach(property => {
        cards += `<section class="card text-center p-2 m-2 col-8 col-sm-8 col-md-5 col-lg-4 col-xl-3" id="card_filter">
        <div class="card rounded-3 shadow-sm" id="card_div">
            <img src="${property.image}" class="card-img-top" style="height: 170px;" alt="${property.name}">
            <h2 class="card-title">${property.name}</h2>
            <p class="list-group-item">${property.description}</p>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><b>Place:</b> ${property.place}</li>
              <p class="card-text" style="display:none" id="card_property"><b>Category:</b> ${property.category}</p>
            </ul>
            <div class="card-body d-flex justify-content-between">
              <h6 class="card-link"><b>Price:</b> $${property.price}</h6>
              <h6 class="card-link"><b>Date:</b> ${property.date}</h6>
            </div>
            <a class="btn btn-primary" href="./details.html?id=${property._id}">see more</a>
        </div>
      </section>`;
    });
    card.innerHTML = cards;
}

function createCheckboxes(events) {
    let checkbox = ""
    let checkboxes = events.map(e => e.category)
    let uniqueCheckboxes = new Set(checkboxes)
    uniqueCheckboxes.forEach(categoryName => {
        checkbox += `<div class="form-check mx-3 my-2">
                        <input class="form-check-input" type="checkbox" id="${categoryName}" value="${categoryName}">
                        <label class="form-check-label" for="${categoryName}">${categoryName}</label>
                    </div>
        `;
    })
    checkboxDiv.innerHTML = checkbox;
}

function searchFilter(events, text) {
    let arrayFilter = events.filter(e => e.name.toLowerCase().includes(text.toLowerCase()))
    return arrayFilter
}

function checkboxFilter(events) {
    let checkboxes = document.querySelectorAll("input[type='checkbox']");
    let arrayCheckboxes = Array.from(checkboxes);
    let checkboxChecked = arrayCheckboxes.filter(check => check.checked);
    if (checkboxChecked.length == 0) {
        return events;
    }
    let checkboxValues = checkboxChecked.map(check => check.value);
    let arrayFilter = events.filter(property => checkboxValues.includes(property.category));
    return arrayFilter;
}

function filterCards() {
    let search = searchFilter(data.events, text.value);
    let checkbox = checkboxFilter(search);
    createCards(checkbox);
}

text.addEventListener("input", filterCards);
checkboxDiv.addEventListener('change', filterCards);

createCards(data.events);
createCheckboxes(data.events); */

// CÓDIGO PROPIO ANTERIOR

/* document.addEventListener("keyup", e => {
  if (e.target.matches(".form-control")) {
    if (e.key === "Escape") e.target.value = "";

    const cardFilter = document.querySelectorAll("#card_filter");
    let foundMatch = false;

    if (!e.target.value) {
      cardFilter.forEach(card => card.classList.remove("filter"));
      return;
    }

    cardFilter.forEach(card => {
      if (card.textContent.toLowerCase().includes(e.target.value.toLowerCase())) {
        card.classList.remove("filter");
        foundMatch = true;
      } else {
        card.classList.add("filter");
      }
    });

    const noMatchSection = document.querySelector("#no-match-section");
    if (!foundMatch) {
      if (!noMatchSection) {
        const noMatchHTML = `<section class="card text-center p-2 m-2 col-8 col-sm-8 col-md-5 col-lg-4 col-xl-3" id="no-match-section">
                              <div class="card rounded-3 shadow-sm" id="no-match-div">
                                <p class="list-group-item">NO MATCHES FOUND</p>
                                <p class="list-group-item">PLEASE ENTER</p>
                                <p class="list-group-item">A DIFFERENT TERM</p>
                              </div>
                            </section>`;
        const cardHome = document.querySelector("#card-home");
        cardHome.insertAdjacentHTML("afterbegin", noMatchHTML);
      }
    } else {
      if (noMatchSection) {
        noMatchSection.remove();
      }
    }
  }
}); */

/* const cards = document.querySelectorAll('#card_filter');

function filterCards() {
  
  const checked = Array.from(checkboxes);
  const selectedCheckboxes = checked.filter(checkbox => checkbox.checked);
  const selectedCategories = selectedCheckboxes.map(checkbox => checkbox.id.toLowerCase().split(' '));

  cards.forEach(card => {
    console.log(card)
    if (selectedCategories.some(category => card.classList.contains(category))) {
      console.log('Mostrando la tarjeta:', card.classList.contains(category));
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

checkboxes.forEach(checkbox => checkbox.addEventListener('change', filterCards));
 */


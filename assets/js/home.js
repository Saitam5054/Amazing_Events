var data = {
  "currentDate": "2022-01-01",
  "events": [
    {
      _id: 1,
      "image": "https://i.postimg.cc/Fs03hQDt/Collectivities-Party.jpg",
      "name": "Collectivities Party",
      "date": "2021-12-12",
      "description": "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
      "category": "Food Fair",
      "place": "Room A",
      "capacity": 45000,
      "assistance": 42756,
      "price": 5
    },
    {
      _id: 2,
      "image": "https://i.postimg.cc/ZmD3Xf57/Korean-style.jpg",
      "name": "Korean style",
      "date": "2022-08-12",
      "description": "Enjoy the best Korean dishes, with international chefs and awesome events.",
      "category": "Food Fair",
      "place": "Room A",
      "capacity": 45000,
      "assistance": 42756,
      "price": 10
    },
    {
      _id: 3,
      "image": "https://i.postimg.cc/GmHRkbNV/Jurassic-Park.jpg",
      "name": "Jurassic Park",
      "date": "2021-11-02",
      "description": "Let's go meet the biggest dinosaurs in the paleontology museum.",
      "category": "Museum",
      "place": "Field",
      "capacity": 82000,
      "assistance": 65892,
      "price": 15
    },
    {
      _id: 4,
      "image": "https://i.postimg.cc/c4C2zXm8/Parisian-Museum.jpg",
      "name": "Parisian Museum",
      "date": "2022-11-02",
      "description": "A unique tour in the city of lights, get to know one of the most iconic places.",
      "category": "Museum",
      "place": "Paris",
      "capacity": 8200,
      "estimate": 8200,
      "price": 3500
    },
    {
      _id: 5,
      "image": "https://i.postimg.cc/KYD0jMf2/comicon.jpg",
      "name": "Comicon",
      "date": "2021-02-12",
      "description": "For comic lovers, all your favourite characters gathered in one place.",
      "category": "Costume Party",
      "place": "Room C",
      "capacity": 120000,
      "assistance": 110000,
      "price": 54
    },
    {
      _id: 6,
      "image": "https://i.postimg.cc/RZ9fH4Pr/halloween.jpg",
      "name": "Halloween Night",
      "date": "2022-02-12",
      "description": "Come with your scariest costume and win incredible prizes.",
      "category": "Costume Party",
      "place": "Room C",
      "capacity": 12000,
      "estimate": 9000,
      "price": 12
    },
    {
      _id: 7,
      "image": "https://i.postimg.cc/PrMJ0ZMc/Metallica-in-concert.jpg",
      "name": "Metallica in concert",
      "date": "2022-01-22",
      "description": "The only concert of the most emblematic band in the world.",
      "category": "Music Concert",
      "place": "Room A"
      , "capacity": 138000,
      "estimate": 138000,
      "price": 150
    },
    {
      _id: 8,
      "image": "https://i.postimg.cc/KvsSK8cj/Electronic-Fest.jpg",
      "name": "Electronic Fest",
      "date": "2021-01-22",
      "description": "The best national and international DJs gathered in one place.",
      "category": "Music Concert",
      "place": "Room A",
      "capacity": 138000,
      "assistance": 110300,
      "price": 250
    },
    {
      _id: 9,
      "image": "https://i.postimg.cc/fyLqZY9K/10-K-for-life.jpg",
      "name": "10K for life",
      "date": "2021-03-01",
      "description": "Come and exercise, improve your health and lifestyle.",
      "category": "Race",
      "place": "Soccer field",
      "capacity": 30000,
      "assistance": 25698,
      "price": 3
    },
    {
      _id: 10,
      "image": "https://i.postimg.cc/zv67r65z/15kny.jpg",
      "name": "15K NY",
      "date": "2022-03-01",
      "description": "We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
      "category": "Race",
      "place": "New York",
      "capacity": 3000000,
      "assistance": 2569800,
      "price": 3
    },
    {
      _id: 11,
      "image": "https://i.postimg.cc/Sst763n6/book1.jpg",
      "name": "School's book fair",
      "date": "2022-10-15",
      "description": "Bring your unused school book and take the one you need.",
      "category": "Book Exchange",
      "place": "Room D1",
      "capacity": 150000,
      "estimate": 123286,
      "price": 1
    },
    {
      _id: 12,
      "image": "https://i.postimg.cc/05FhxHVK/book4.jpg",
      "name": "Just for your kitchen",
      "date": "2021-11-09",
      "description": "If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
      "category": "Book Exchange",
      "place": "Room D6",
      "capacity": 130000,
      "assistance": 90000,
      "price": 100
    },
    {
      _id: 13,
      "image": "https://i.postimg.cc/vH52y81C/cinema4.jpg",
      "name": "Batman",
      "date": "2021-03-11",
      "description": "Come see Batman fight crime in Gotham City.",
      "category": "Cinema",
      "place": "Room D1",
      "capacity": 11000,
      "assistance": 9300,
      "price": 225
    },
    {
      _id: 14,
      "image": "https://i.postimg.cc/T3C92KTN/scale.jpg",
      "name": "Avengers",
      "date": "2022-10-15",
      "description": "Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
      "category": "Cinema",
      "place": "Room D1",
      "capacity": 9000,
      "estimate": 9000,
      "price": 250
    }
  ]
};

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
};

document.addEventListener("keyup", e => {
  if (e.target.matches(".form-control")) {
    if (e.key === "Escape") e.target.value = "";
    const filter = e.target.value.toLowerCase();
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
});

const checkboxes = document.querySelectorAll('input[type=checkbox]');
const cards = document.querySelectorAll('#card_filter');

function checkboxFilter() {
  const selectedCheckboxes = Array.from(checkboxes).filter(checkbox => checkbox.checked);
  for (const card of cards) {
    const cardCategory = card.querySelector('#card_property').textContent.toLowerCase();
    const showCard = selectedCheckboxes.some(checkbox => cardCategory.includes(checkbox.value.toLowerCase()));
    card.classList.toggle('hidden', !showCard && selectedCheckboxes.length > 0);
  }
}

checkboxes.forEach(checkbox => checkbox.addEventListener('change', checkboxFilter));

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


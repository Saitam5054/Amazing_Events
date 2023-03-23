async function getData() {
  const response = await fetch('https://mindhub-xj03.onrender.com/api/amazing');
  const data = await response.json();
  return data;
}

getData().then(createUpcomingCards);

function createUpcomingCards(data) {
  let card = document.getElementById("card-upcoming");
  let currentDate = data.currentDate;

  for (let x in Object.values(data.events)) {
    let property = data.events[x]
    if (property.date > currentDate) {
      card.innerHTML += `<section class="card text-center p-2 m-2 col-8 col-sm-8 col-md-5 col-lg-4 col-xl-3" id="card_filter">
                        <div class="card rounded-3 shadow-sm" id="card_div">
                          <img src="${property.image}" class="card-img-top" style="height: 175px;" alt="${property.name}">
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
  };
  
  filterCheckboxes()
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
      document.querySelector("#card-upcoming").insertAdjacentHTML("afterbegin", noMatchHTML);
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
const queryString = location.search

const params = new URLSearchParams(queryString)

const id = params.get("id")

fetch('https://mindhub-xj03.onrender.com/api/amazing')
  .then(response => response.json())
  .then(data => {
    const details = data.events.find(property => property._id == id)
    let card = document.getElementById("card-details")

    const detailsHtml = `
      <section class="card text-center p-2 m-4 " id="card_filter">
        <div class="card mb-3" style="max-width: auto;">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="${details.image}" class="img-fluid" alt="${details.name}" id="img_details">
            </div>
            <div class="col-md-8">
              <div class="card-body" id="data_details">
                <h3 class="card-title">${details.name}</h3>
                <p class="card-text">${details.description}</p>
                <p class="card-text"><b>Place:</b> ${details.place}</p>
                <p class="card-text"><b>Capacity:</b> ${details.capacity}</p>
                <p class="card-text"><b>${details.estimate ? 'Estimate:' : 'Assistance:'}</b> ${details.estimate || details.assistance}</p>
                <p class="card-text"><b>Category:</b> ${details.category}</p>
                <div class="card-body d-flex justify-content-around" id="h6_details">
                  <h6 class="card-link"><b>Price:</b> $${details.price}</h6>
                  <h6 class="card-link"><b>Date:</b> ${details.date}</h6>
                </div>
                <a class="btn btn-primary" href="./home.html" id="a_details">see less</a>                            
              </div>
            </div>
          </div>
        </div>
      </section>
    `;

    card.innerHTML = detailsHtml;
  })
  .catch(error => console.error(error));
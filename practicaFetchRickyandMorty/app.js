document.addEventListener("DOMContentLoaded", () => {
  fetchData();
});

const fetchData = async () => {
  try {
    loadingData(true);
    const res = await fetch("https://rickandmortyapi.com/api/character");
    const data = await res.json();

    pintarCards(data);
  } catch (error) {
    console.log(error);
  } finally {
    loadingData(false);
  }
};

const pintarCards = (data) => {
  const cards = document.getElementById("card-dinamicas");
  const templateCard = document.getElementById("template-card").content;
  const fragment = document.createDocumentFragment();

  //console.log(data)
  data.results.forEach((element) => {
    const clone = templateCard.cloneNode(true);
    clone.querySelector("h5").textContent = element.name;
    clone.querySelector("p").textContent = element.species;
    clone.querySelector("img").setAttribute("src", element.image);

    fragment.appendChild(clone);
  });

  cards.appendChild(fragment);
};

const loadingData = (estado) => {
  const loading = document.getElementById("loading");
  if (estado) {
    loading.classList.remove("d-none");
  } else {
    loading.classList.add("d-none");
  }
};

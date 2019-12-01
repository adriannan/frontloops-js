const input = document.querySelector("input");
const suggestBox = document.querySelector(".suggest-box");
let pokemons;
let searchPokemon;

fetch("https://pokeapi.co/api/v2/pokemon/")
  .then(response => response.json())
  .then(response => {
    pokemons = response.results.map(item => item.name);
  });

input.addEventListener("input", () => {
  suggestBox.style.display = "block";
  suggestBox.textContent = "";
  searchPokemon = pokemons.filter(pokemon =>
    pokemon.includes(event.target.value)
  );
  showSuggest();
  if (input.value == "" || searchPokemon.length == 0) {
    suggestBox.style.display = "none";
  }
});

function showSuggest() {
  searchPokemon.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    suggestBox.appendChild(li);
    li.addEventListener("click", () => {
      input.value = item;
      suggestBox.style.display = "none";
    });
  });
}

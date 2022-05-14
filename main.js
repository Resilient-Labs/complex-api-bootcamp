const pokeContainer = document.getElementById("pokeContainer");
const button = document.querySelector("button");

// 7-13 allows for the user to input a number, 8 we take the number that was input and we run it through a loop. line 9 allows for the pokeContainer section of my HTML to be empty after the user submits.
const fetchPokemons = async () => {
  const pokemonsNumber = document.querySelector("input").value;
  pokeContainer.innerHTML = "";
  // for (let i = 1; i <= pokemons_number; i++) {  
  const name = await getPokemon(pokemonsNumber);
  await getPokemonCard(name)
};

button.addEventListener("click", fetchPokemons);

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  // console.log(url)
  const res = await fetch(url);
  const pokemon = await res.json();
  createPokemonCard(pokemon);
  console.log(pokemon.forms[0])
  return pokemon.forms[0].name
};

const getPokemonCard = async (name) => {
  const url = `https://api.pokemontcg.io/v2/cards?q=name:${name}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  console.log(pokemon, "pokemon From Second API")
  createTCGCard(pokemon)
}

const createPokemonCard = (pokemon) => {
  const pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemon");
  const { id, name, sprites, types } = pokemon;
  const type = types[0].type.name;
  const pokeInnerHTML = `
  <div class="img-container">
    <img src="${sprites.front_default}" alt="${name}" />
  </div>
  <div class="info">
    <span class="number">${id}</span>
    <h3 class="name">${name}</h3>
    <small class="type">Type: <span>${type}</span></small>
  </div>
  `;
  pokemonEl.innerHTML = pokeInnerHTML;
  pokeContainer.appendChild(pokemonEl);
  // pokemonEl.addEventListener('click', createTCGCard) this was me and line 50 was Mentor Mark from RC
  pokemonEl.addEventListener("click", () => createTCGCard(name)); 
};

const createTCGCard = (pokemon) => {
  const pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemon");
  const data = pokemon.data;
  const randomNumber = Math.floor(Math.random() * data.length);
 
  
  // console.log(data[rando])
  const firstCard = data[randomNumber].images.small;
  console.log(firstCard)
  const getImage = document.querySelector('#pokemonCard')
  getImage.src = firstCard
};

// pokemonE1.addEventListener('click').value

// fetchPokemons();

const gif = async (name) => {
  try {
    const response = await axios.get(`${GIPHY + name}`);
    return { name, data: response.data.data };
  } catch (error) {
    console.error(error);
  }
};

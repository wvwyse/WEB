// Масив з URL анімованих GIF спрайтів покемонів
const pokemonSprites = [
  'https://img.pokemondb.net/sprites/black-white/anim/normal/pikachu-f.gif',
  'https://img.pokemondb.net/sprites/black-white/anim/normal/eevee.gif',
  'https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif',
  'https://img.pokemondb.net/sprites/black-white/anim/normal/charmander.gif',
  'https://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif',
];

// Додавання нового покемона
document.getElementById('spawnButton').addEventListener('click', function () {
  const newPokemon = document.createElement('img');
  const randomPokemon = pokemonSprites[Math.floor(Math.random() * pokemonSprites.length)];
  newPokemon.classList.add('pokemon');
  newPokemon.src = randomPokemon;

  const pokemonArea = document.getElementById('pokemonArea');
  pokemonArea.appendChild(newPokemon);
});

// Зміна фону
document.getElementById('changeBackgroundButton').addEventListener('click', function () {
  const backgrounds = [
    'url("https://i.gifer.com/B9Wr.gif")',
    'url("https://i.gifer.com/2GY.gif")',
    'url("https://i.gifer.com/4DtS.gif")',
  ];
  const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
  document.body.style.backgroundImage = randomBackground;
});

// Міняємо покемонів місцями
document.getElementById('swapPokemonButton').addEventListener('click', function () {
  const pokemonArea = document.getElementById('pokemonArea');
  const pokemonList = pokemonArea.children;

  if (pokemonList.length < 2) {
    alert('Not enough Pokemon to swap!');
    return;
  }

  // Беремо перший і останній покемони
  const firstPokemon = pokemonList[0];
  const lastPokemon = pokemonList[pokemonList.length - 1];

  // Створюємо їх копії
  const firstClone = firstPokemon.cloneNode(true);
  const lastClone = lastPokemon.cloneNode(true);

  // Замінюємо місцями
  pokemonArea.replaceChild(lastClone, firstPokemon);
  pokemonArea.replaceChild(firstClone, lastPokemon);
});

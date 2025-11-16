// obtener PokeAPI
// caputar boton obtener información
// mostrar en pantalla info del pokemon

// boton get-pokemon
const getPokemon = document.getElementById("get-pokemon");
const pokemonInfoContainer = document.getElementById("pokemon-info");

getPokemon.addEventListener("click", () => {
  // capturar el valor del pokemon
  const pokemonValue = document.getElementById("pokemon-select").value;

  //limpiar contenedor antes de cargar la info del pokemon
  pokemonInfoContainer.innerHTML = "<p>Cargando información...</p>";

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonValue}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error al obtener información");
      }
      return response.json();
    })

    .then((data) => {
      const tipos = data.types.map((tipoObj) => tipoObj.type.name).join(", ");
      const template = `
        <h2>${data.name.toUpperCase()}</h2>
        <img src="${data.sprites.front_default}" alt"${data.name}">
        <p><strong>Tipo:</strong> ${tipos}</p></p>
        <p><strong>Altura:</strong> ${data.height / 10} m</p>
        <p><strong>Peso:</strong> ${data.weight / 10} kg</p>
      `;
      pokemonInfoContainer.innerHTML = template;
    })

    .catch((error) => console.log("Error al obtener información", error));
});

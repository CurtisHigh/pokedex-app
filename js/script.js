let pokemonList = [
  {
    name: 'Bulbasaur',
    height: 0.7,
    types: ['monster','grass']
  },
  {
    name: 'Charmander',
    height: 0.6,
    types: ['monster','dragon']
  },
  {
    name: 'Squirtle',
    height: 0.5,
    types: ['monster','water']
  }
];


for (i=0; i < pokemonList.length; i++) {
	document.write(`${pokemonList[i].name} (height: ${pokemonList[i].height}) `);
  if (pokemonList[i].height > 0.6) {
    document.write('- Wow, that\'s big!<br><br>');
  } else {
    document.write('<br><br>');
  }
}

const { AllData, PokemonApi, PokemonDb } = require('./pokemon');

const filterByAscendingAlphabet = async (req, res) => {
  const pokemons = await AllData();
  try {
    const dataFilter = pokemons.sort((a, b) => a.name.localeCompare(b.name));
    res.status(200).send(dataFilter);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const filterByDescendingAlphabet = async (req, res) => {
  const pokemons = await AllData();
  try {
    const dataFilter = pokemons.sort((a, b) => a.name.localeCompare(b.name));
    res.status(200).send(dataFilter.reverse());
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const filterPokemonByType = async (req, res) => {
  const { type } = req.query;
  const pokemons = await AllData();
  try {
    const filter = pokemons.filter((pokemon) => pokemon.types.includes(type));
    if(filter.length){
      res.status(200).send(filter);
    } else res.status(200).send('no results');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const dataBaseInfo = async (req, res) => {
  const pokemonDB = await PokemonDb();
  try {
    if(pokemonDB.length){
      res.status(200).send(pokemonDB);
    } else res.status(200).send('no results');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const apiInfo = async (req, res) => {
  const pokemonApi = await PokemonApi();
  try {
    res.status(200).send(pokemonApi);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const filterByAscendingAttack = async (req, res) => {
  const pokemons = await AllData();
  try {
    const dataFilter = pokemons.sort((a, b) => b.attack - a.attack);
    res.status(200).send(dataFilter.reverse());
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const filterByDescendingAttack = async (req, res) => {
  const pokemons = await AllData();
  try {
    const dataFilter = pokemons.sort((a, b) => a.attack - b.attack);
    res.status(200).send(dataFilter.reverse());
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  filterByAscendingAlphabet,
  filterByDescendingAlphabet,
  filterPokemonByType,
  filterByDescendingAttack,
  filterByAscendingAttack,
  apiInfo,
  dataBaseInfo
};

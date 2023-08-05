const axios = require('axios');
const { Pokemon, Type } = require('../db');

function FilterData(data) {
  const { name, id, sprites, types, stats, height, weight } = data;
  return {
    id,
    name,
    image: sprites.front_default,
    types: types.map((e) => e.type.name),
    //puedo colocar la posicion exacta de stats debido a que la posicion en la que esta hp, attack y los otros no cambia
    hp: stats[0].base_stat,
    attack: stats[1].base_stat,
    defense: stats[2].base_stat,
    speed: stats[5].base_stat,
    height,
    weight,
  };
}

function FilterTypes(data) {
  return data.map((Element) => {
    return {
      id: Element.id,
      image: Element.image,
      name: Element.name,
      hp: Element.hp,
      attack: Element.attack,
      defense: Element.defense,
      speed: Element.speed,
      height: Element.height,
      weight: Element.weight,
      types: Element.types?.map((e) => e.name),
    };
  });
}

const PokemonApi = async () => {
  const response = await axios('https://pokeapi.co/api/v2/pokemon/');
  const results = response.data.results;
  const promises = results.map(async (Element) => {
    const pokemon = await axios(Element.url);
    return FilterData(pokemon.data);
  });
  const pokemons = await Promise.all(promises);
  return pokemons;
};

const PokemonDb = async () => {
  const pokemons = await Pokemon.findAll({
    include: {
      model: Type,
      attributes: ['name'],
      through: { attributes: [] },
    },
  });
  return FilterTypes(pokemons);
};

const AllData = async () => {
  const api = await PokemonApi();
  const dataBase = await PokemonDb();
  return api.concat(dataBase);
};

const SearchPokemonByName = async (name) => {
  const pokemons = await AllData();
  const findName = pokemons.filter((Element) =>
    Element.name.toString().toLowerCase().includes(name.toLowerCase())
  );
  if (findName.length) {
    return findName;
  } else {
    return 'no pokemon was found with that name :(';
  }
};

const SearchPokemonById = async (req, res) => {
  const { id } = req.params;
  try {
    if (id.includes("-")) {
      const response = await Pokemon.findByPk(id);
      res.status(200).send(response);

    } else {
      const response = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const pokemon = response.data;
      res.status(200).send(FilterData(pokemon));
    }

  } catch (error) {
    res.status(400).send(error.message);
  }
};

const Pokemons = async (req, res) => {
  const { name } = req.query;
  const pokemons = await AllData();
  try {
    if (name) {
      const byName = await SearchPokemonByName(name);
      res.status(200).send(byName);
    } else {
      res.status(200).send(pokemons);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const CreatePokemon = async (req, res) => {
  const data = req.body;

  const { types, ...restData } = data;

  try {
    const newPokemon = await Pokemon.create(restData);
    await newPokemon.setTypes(types);

    const pokemons = await PokemonDb();
    res.status(200).send(pokemons);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const DeletePokemon = async (req, res) => {
  const name = req.query;
  try {
    const deletepoke = await Pokemon.destroy({ where: { name: name } });
    res.status(200).send(deletepoke);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  Pokemons,
  SearchPokemonById,
  CreatePokemon,
  AllData,
  PokemonDb,
  PokemonApi,
  DeletePokemon
};

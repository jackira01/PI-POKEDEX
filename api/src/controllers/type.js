const axios = require('axios');
const { Type } = require('../db');

const BringTypes = async (req, res) => {
  const response = await axios('https://pokeapi.co/api/v2/type');
  const results = response.data.results;
  try {
    const types = results.map((Element) => {
      return Element.name;
    });
    types.forEach((Element) => {
      Type.findOrCreate({
        where: { name: Element },
      });
    });
    res.send(
      await Type.findAll()
    );
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  BringTypes,
};

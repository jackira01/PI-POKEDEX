const { Router } = require('express');
const {
  SearchPokemonById,
  Pokemons,
  CreatePokemon,
  DeletePokemon,
} = require('../controllers/pokemon');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/delete', DeletePokemon)

router.get('/:id', SearchPokemonById);
router.get('/', Pokemons);

router.post('/', CreatePokemon);

module.exports = router;

const { Router } = require('express');
const {
  filterByAscendingAlphabet,
  filterByDescendingAlphabet,
  filterPokemonByType,
  filterByDescendingAttack,
  filterByAscendingAttack,
  dataBaseInfo,
  apiInfo,
} = require('../controllers/filters');

const router = Router();

//              ~~~FILTERS~~~
// TYPE
router.get('/by_type', filterPokemonByType)

// DB OR API
router.get('/data_base', dataBaseInfo);
router.get('/api', apiInfo);

// POKEMON ALPHABETIC
router.get('/ascending_alphabet', filterByAscendingAlphabet);
router.get('/descending-alphabet', filterByDescendingAlphabet);

// POKEMON ATTACK
router.get('/attack_ascending', filterByAscendingAttack)
router.get('/attack_descending', filterByDescendingAttack)

module.exports = router;

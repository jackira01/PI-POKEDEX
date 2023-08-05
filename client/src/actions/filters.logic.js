import axios from 'axios';

export const filterByAscendingAlphabet = async (value) => {
  //tengo que forzar el cambio a number porque no llega como number mi value
  const response = await (
    await axios.get('http://localhost:3001/pokemon')
  ).data;
  if (String(value) === 'AscendingAlphabet') {
    const dataFilter = response.sort((a, b) => a.name.localeCompare(b.name));
    return dataFilter;
  } else if (String(value) === 'DescendingAlphabet') {
    const dataFilter = response.sort((a, b) => a.name.localeCompare(b.name));
    return dataFilter.reverse();
  } else if (String(value) === 'Created') {
    const dataFilter = response.filter(
      (Element) => typeof Element.id === 'string'
    );
    return dataFilter;
  } else if (String(value) === 'Existing') {
    const dataFilter = response.filter(
      (Element) => typeof Element.id === 'number'
    );
    return dataFilter;
  } else if (String(value) === 'AscendingAttack') {
    const dataFilter = response.sort((a, b) => a.attack - b.attack);
    return dataFilter;
  } else if (String(value) === 'DescendingAttack') {
    const dataFilter = response.sort((a, b) => b.attack - a.attack);
    return dataFilter;
  } else if (String(value) === 6) {
    const dataFilter = response.filter((Element) => Element.attack < 50);
    return dataFilter;
  }
};

/* export const renderLogic = (data) => {
  const render = useSelector((state) => state.render);
  if(render.length) {
    
  } else {
    return pokemons
  }
} */

const beers = require('../../fixtures/beers.json')
const breweries = require('../../fixtures/breweries.json')

/**
 * Get a formatted `Brewery` from its ID.
 *
 * @param {String} id
 * @returns {Object} Brewery
 */
const getBrewery = (id) => {
  if (!(id in breweries)) {
    throw new Error(`Could not find brewery ID ${id}`)
  }

  const brewery = breweries[id]

  return {
    id,
    location: `${brewery.location.city}, ${brewery.location.state}`,
    name: brewery.name,
    url: brewery.url
  }
}

/**
 * @returns {Object[]} Beers
 */
const getBeers = () => beers.map((beer) => Object.assign({}, beer, {
  brewery: beer.brewery.split(',').map(getBrewery)
}))

module.exports = {
  beers: getBeers
}

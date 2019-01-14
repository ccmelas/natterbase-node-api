/**
 * Handles authentication related functionality
 */
class CountriesController {

  /**
   * Returns a list of countries 
   * @param {object} req
   * @param {object} res
   * @returns { object } [Returns response object]
   */
  static index(req, res) {
    return res.json({ countries});
  }

  /**
   * Adds country to list of countries 
   * @param {object} req
   * @param {object} res
   * @returns { object } [Returns response object]
   */
  static add(req, res) {
    const country = req.body.country;

    if (!country)
        return res.status(422).json({ message: "'country' field is required"});
    
    countries.push(country.toLowerCase());

    return res.json({ message: 'Country added successfully', countries});
  }

  /**
   * Deletes country from list of countries 
   * @param {object} req
   * @param {object} res
   * @returns { object } [Returns response object]
   */
  static delete(req, res) {
    const country = req.params.country;

    if (!country)
        return res.status(422).json({ message: "'country' query param is required"});
    
    const index = countries.indexOf(country.toLowerCase());

    if (index !== -1) {
        countries.splice(index, 1);
        return res.json({ message: `${country} deleted successfully`});    
    }

    return res.status(404).json({ message: 'Country not found'});
  }

}

module.exports = CountriesController;

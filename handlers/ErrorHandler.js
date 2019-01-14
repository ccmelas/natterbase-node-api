/**
 * Handles application errors
 */
class ErrorHandler {
    /**
     * Handles 404 errors
     *
     * @param {object} req
     * @param {object} res
     * @param {funcion} next
     * @returns {undefined} [Returns undefined]
     */
    static notFound(req, res) {
      res.status(404).json({ message: 'Route not found'});
    }

}
  
module.exports = ErrorHandler;
  
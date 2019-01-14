const jwt = require('jsonwebtoken');

/**
 * Handles authentication related functionality
 */
class AuthMiddleware {

  /**
   * Checks if a request is authenticated
   * @param {object} req
   * @param {object} res
   * @param {object} next
   * @returns { object } [Returns response object]
   */
  static middleware(req, res, next) {
    const header = req.header('Authorization') || '';
    const token = header.split(' ')[1];

    if (!token)
        return res.status(401).json({ message: 'Unauthorized' });

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);

        if (payload.user !== process.env.USERNAME) 
            return res.status(401).json({ message: 'Unauthorized' });
    
        next();

    } catch(e) {
        return res.status(400).json({ message: 'Bad Request'});
    }

  }

}

module.exports = AuthMiddleware;

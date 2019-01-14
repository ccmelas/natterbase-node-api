const jwt = require('jsonwebtoken');

/**
 * Handles authentication related functionality
 */
class AuthController {

  /**
   * Logs in a new user
   * @param {object} req
   * @param {object} res
   * @returns { object } [Returns response object]
   */
  static login(req, res) {
    
    if (req.body.username === process.env.USERNAME && req.body.password === process.env.PASSWORD) {

        const token =  jwt.sign(
            { user: process.env.USERNAME },
            process.env.JWT_SECRET,
            { expiresIn: parseInt(process.env.JWT_EXPIRES_IN, 10) }
        );

        return res.json({ token });
    }
        
    return res.status(401).json({ message: 'Incorrect username or password'});
  }

}

module.exports = AuthController;

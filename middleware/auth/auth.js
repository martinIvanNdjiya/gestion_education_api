const jwt = require('jsonwebtoken');
const secretKey = 'TP4-AB3-M34BS0';  
  
  // Middleware pour vérifier l'authentification
function authentification(req, res, next) {
    console.log(req.body.token);
    const token = req.body.token;
  
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  
    jwt.verify(token, secretKey, (err, user) => {
      if (err) {
        return res.status(403).json({ message: 'Invalid token' });
      }
      req.user = user;
      next();
    });
}

module.exports = {authentification}
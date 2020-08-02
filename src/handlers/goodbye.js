const config = require("../config");

module.exports  =  (req, res) => {
  res.status(200).send(config.handlers.goodbye.text);
}

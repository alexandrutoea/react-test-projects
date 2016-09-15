const Aunthentication = require('./controllers/authentication');

module.exports = function(app) {
	app.post('/signup', Aunthentication.signup);
};
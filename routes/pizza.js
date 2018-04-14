/* you'll need two routes:
  - all pizza
  - individual pizza
  - BONUS: can you get individual pizza to work with the `flavorKey` property in the database? Maybe use some array methods... it would be convenient to be able to go to `/pizza/pepperoni` instead of `/pizza/0`.
*/

const express = require('express');
const pizzaRoute = express.Router();
const pizza = require('../db/pizza');

pizzaRoute.get('/pizza', (req, res) => {
	res.render('./pizza/pizza-index', {pizza:pizza});
})


pizzaRoute.get('/pizza/:flavorKey', (req, res) => {
	const pizzaFilter = pizza.filter((element) => {
		if (element.flavorKey === req.params.flavorKey)
	{
		return element;
	}});
	res.render('./pizza/pizza-single', {pizza: pizzaFilter});
});

module.exports = pizzaRoute;
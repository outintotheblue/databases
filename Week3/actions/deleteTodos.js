'use strict'

function deleteTodos(todo, req, res) {
	todo.clearAll()
	.then(() => {
		res.status(204);
		res.end();
	})
	.catch(({message}) => {
		res.status(500);
		res.json({error: message})
	})
}


module.exports = deleteTodos;
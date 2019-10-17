  
'use strict' 

function markAsCompleted(todo, req, res) {
  const id = req.params.id;
res.json(todo.marked(id, 'completed'));

    
}

module.exports = markAsCompleted;
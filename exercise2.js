fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    
     const todosTitles = json.map(todo => todo.title );
     console.log(todosTitles);
    })
  .catch(function(err) { 
    console.log(err);
  });
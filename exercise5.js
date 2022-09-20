fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
      
      const total = json.reduce((acc, todo) => {
        todo.completed
        ? acc
        : acc.push({userId: todo.userId, title: todo.title})
        return acc;    
    
    },[]);

      console.log(total)
   })
  .catch(function(err) { 
    console.log(err);
  });
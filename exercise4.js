fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    
    const completed = json.filter((i, index) => {
        return i.completed === true;
      });
      
      const total = json.reduce((total, todo, index, array) => {return array.length - completed.length},0)
      console.log('Total completed todos = ' + total)
   })
  .catch(function(err) { 
    console.log(err);
  });
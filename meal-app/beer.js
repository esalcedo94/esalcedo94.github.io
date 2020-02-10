var BreweryDb = require('brewerydb-node');
var brewdb = new BreweryDb('dc8ca7a125a666f16bff39c86bfc373b');


// brewdb.search.all( { q: "coron" }, (data) => {
//   console.log(data);
// });

brewdb.category.all((data) => {
  console.log(data);
},
() => {
  console.log("fatal error");
});

// console.log(callback);


$(() => {
  $.ajax({
    url: "https://www.themealdb.com/api/json/v1/1/random.php"
  }).then(
    (data) => {
      const pic = 
    },
    () => {
      console.log("fatal error");
    }
  )
  
  $('input[type="submit"]').on('click', () => {
    // $('.complaints').empty();
    // let userInput = event.target.value.toUpperCase();
    const userInput = $('input[type="text"]').val();
    event.preventDefault();
    $.ajax({
      url: "https://www.themealdb.com/api/json/v1/1/search.php?s=" + userInput
    }).then(
      (data) => {
        console.log(data);
      },
      () => {
        console.log("fatal error");
      }
    )
  });
  

  
})

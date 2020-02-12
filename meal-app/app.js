
$(() => {
  const $picHolder = $(".meal-preview");
  for (let i = 1; i <= 4; i++) {
    $.ajax({
      url: "https://www.themealdb.com/api/json/v1/1/random.php"
    }).then(
      (data) => {
        let picURL = data.meals[0].strMealThumb;
        let imgId =data.meals[0].strMeal;
        // console.log(picURL);
        $("#img" + i).attr('src' , picURL);
        $("#img" + i).attr('id' , imgId);
      },
      () => {
        console.log("fatal error");
      }
    )
  }
  
  
  $('input[type="submit"]').on('click', () => {
    $picHolder.empty();
    
    // let userInput = event.target.value.toUpperCase();
    const userInput = $('input[type="text"]').val();
    event.preventDefault();
    $.ajax({
      url: "https://www.themealdb.com/api/json/v1/1/search.php?s=" + userInput
    }).then(
      (data) => {
        // let ingredients = [];
        // data.meals.forEach((element) => {
        //   for (let i = 0; i < 20; i++) {
        //     ingredients.push([element["strIngredient" + (i + 1)] , element["strMeasure" + (i + 1)]]);
        //     // console.log(element["strIngredient" + (i + 1)]);
        //     // console.log(element["strIngredient" + (i + 1)]);
        //   }
        // })
        for (let i = 0; i < data.meals.length; i++) {
          console.log(data.meals[i]);
          const mealName = data.meals[i].strMeal;
          console.log(mealName);
          const $mealTitle = $("<h3>").html(mealName);
          $mealTitle.appendTo($picHolder);
          const $instructionsButton = $("<button>").text("Instructions");
          $instructionsButton.appendTo($mealTitle);
          const mealInstructions = data.meals[i].strInstructions;
          const $instructions = $("<p>").html(mealInstructions).appendTo($mealTitle).hide();
          $instructionsButton.on("click", () => {
            $instructions.toggle();
          })
        }
      },
      () => {
        console.log("fatal error");
      }
    )
  });
  

  
})

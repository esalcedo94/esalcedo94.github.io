
$(() => {
    $('input[type="submit"]').on('click',  showData);
    homePage();
})

const homePage = () => {
  for (let i = 1; i <= 4; i++) {
    $.ajax({
      url: "https://www.themealdb.com/api/json/v1/1/random.php"
    }).then(
      (data) => {
        let picURL = data.meals[0].strMealThumb;
        let imgId =data.meals[0].strMeal;
        $("#img" + i).attr('title' , imgId);
        $("#img" + i).attr('src' , picURL);
        $("#img" + i).attr('id' , imgId);
      },
      () => {
        console.log("fatal error");
      }
    )
  }
}

const showData = () => {
  const $container = $(".container");

  $container.empty();
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
      if(data.meals == null){
        const $sorry = $("<h3>").appendTo($container).text("No Results Found")
      }
      for (let i = 0; i < data.meals.length; i++) {
        const $mealContainer = $("<div>").addClass("meal").appendTo($container);
        const mealImage = data.meals[i].strMealThumb;
        const mealName = data.meals[i].strMeal;
        const $tooltipText = $("<span>").addClass("tooltipText").text(mealName);
        $tooltipText.appendTo($mealContainer)
        const $mealTitle = $('<input type="image" src="">');
        $mealTitle.attr('src' , mealImage)
        $mealTitle.appendTo($mealContainer);
        const mealYt = data.meals[i].strYoutube;
        const mealInstructions = data.meals[i].strInstructions;
        const $instructions = $("<p>").html(mealInstructions).appendTo($mealContainer).hide();
        const $link =  $('<a href="'+ mealYt +'">Youtube Video</a>');
        $link.appendTo($mealContainer).hide();
        $('input[src="' + mealImage + '"]').on("click", () => {
          $instructions.toggle();
          $link.toggle();
        })
      }
    },
    () => {
      console.log("fatal error");
    }
  )
}

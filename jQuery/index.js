
console.log($("img").attr("src"));


$("h1").addClass("bigTitle");

$("h1").text("Greetings");

$("button").html("<em>Click MEEEEEEEE</em>");

($("a").attr("href","https://www.google.com"));

$("h1").click(() => {
    $("h1").css("color","darkgreen");
})

$("button").click( () => {
    $("h1").css("color","orange");
})


$(document).keypress( (event) => {
    $("h1").text(event.key)

})

$(document).on("mouseover", () => {
    $("h1").css("color", "red")

})

$("h1").before("<p>This is a pharagrah added from jQuery</p>")

// $("button").remove();
// $("h1").hide()  //show()  //toggle()  //fadeOut //fadeIn  //fadeToggle   //sideUp()  //slideDown()   //slideToggle
// animate({"css: rules"})      //(works only on nomeric values not chaning color)
// can add chains .slideUp().slideDown().animate({opacity: 0.5});
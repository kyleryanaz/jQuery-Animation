//Returns a random integer
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

//Moves the chicken on click
$("#chicken").click(function() {
  $(this)
    .animate({ bottom: "+=1vh" })
    .animate({ left: "+=25vh" })
    .animate({ bottom: "-=1vh" });
});

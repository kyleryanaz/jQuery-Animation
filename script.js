//Returns a random integer
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

//Moves the chicken on click
$("#chicken").click(function() {
  let direction = getRandomInt(4);
  switch (direction) {
    case 0:
      console.log("up");
      $(this)
        .animate({ bottom: "+=1vh" })
        .animate({ bottom: "+=20vh" })
        .animate({ bottom: "-=1vh" });
      break;
    case 1:
      console.log("right");
      $(this)
        .animate({ bottom: "+=1vh" })
        .animate({ left: "+=20vh" })
        .animate({ bottom: "-=1vh" });
      break;
    case 2:
      console.log("down");
      $(this)
        .animate({ bottom: "+=1vh" })
        .animate({ bottom: "-=20vh" })
        .animate({ bottom: "-=1vh" });
      break;
    case 3:
      console.log("left");
      $(this)
        .animate({ bottom: "+=1vh" })
        .animate({ left: "-=20vh" })
        .animate({ bottom: "-=1vh" });
      break;
  }
});

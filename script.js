//Returns a random integer
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function moveChicken() {
  let direction = getRandomInt(4);
  switch (direction) {
    case 0:
      console.log("up");
      $("#chicken")
        .animate({ bottom: "+=1vh" })
        .animate({ bottom: "+=20vh" })
        .animate({ bottom: "-=1vh" });
      break;
    case 1:
      console.log("right");
      $("#chicken")
        .animate({ bottom: "+=1vh" })
        .animate({ left: "+=20vh" })
        .animate({ bottom: "-=1vh" });
      break;
    case 2:
      console.log("down");
      $("#chicken")
        .animate({ bottom: "+=1vh" })
        .animate({ bottom: "-=20vh" })
        .animate({ bottom: "-=1vh" });
      break;
    case 3:
      console.log("left");
      $("#chicken")
        .animate({ bottom: "+=1vh" })
        .animate({ left: "-=20vh" })
        .animate({ bottom: "-=1vh" });
      break;
  }
}

setInterval(moveChicken, 3000);

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
        .animate({ bottom: "+=1vh" }, 50)
        .animate({ bottom: "+=5vh" }, 50)
        .animate({ bottom: "-=1vh" }, 50)
        .animate({ bottom: "+=1vh" }, 50)
        .animate({ bottom: "+=5vh" }, 50)
        .animate({ bottom: "-=1vh" }, 50);
      break;
    case 1:
      console.log("right");
      $("#chicken")
        .animate({ bottom: "+=1vh" }, 50)
        .animate({ left: "+=5vh" }, 50)
        .animate({ bottom: "-=1vh" }, 50)
        .animate({ bottom: "+=1vh" }, 50)
        .animate({ left: "+=5vh" }, 50)
        .animate({ bottom: "-=1vh" }, 50);
      break;
    case 2:
      console.log("down");
      $("#chicken")
        .animate({ bottom: "+=1vh" }, 50)
        .animate({ bottom: "-=5vh" }, 50)
        .animate({ bottom: "-=1vh" }, 50)
        .animate({ bottom: "+=1vh" }, 50)
        .animate({ bottom: "-=5vh" }, 50)
        .animate({ bottom: "-=1vh" }, 50);
      break;
    case 3:
      console.log("left");
      $("#chicken")
        .animate({ bottom: "+=1vh" }, 50)
        .animate({ left: "-=5vh" }, 50)
        .animate({ bottom: "-=1vh" }, 50)
        .animate({ bottom: "+=1vh" }, 50)
        .animate({ left: "-=5vh" }, 50)
        .animate({ bottom: "-=1vh" }, 50);
      break;
  }
}

setInterval(moveChicken, 3000);

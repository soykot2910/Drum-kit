const totalKit = document.querySelectorAll(".kit");

totalKit.forEach(function (el) {
  el.addEventListener("click", function () {
    var sound = new Audio(`sounds/${el.classList[0]}.mp3`);
    sound.play();
  });
});


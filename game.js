(function () {
  "use strict";

  var totalObjects = 12;
  var found = new Set();
  var mistakes = 0;

  var foundCount = document.getElementById("found-count");
  var mistakeCount = document.getElementById("mistake-count");
  var message = document.getElementById("game-message");
  var board = document.getElementById("game-board");
  var resetButton = document.getElementById("reset-game");
  var hotspots = Array.prototype.slice.call(document.querySelectorAll(".hotspot"));
  var targets = Array.prototype.slice.call(document.querySelectorAll(".target-list li"));

  function setMessage(text, type) {
    message.textContent = text;
    message.classList.remove("success", "mistake");
    if (type) {
      message.classList.add(type);
    }
  }

  function updateStats() {
    foundCount.textContent = found.size;
    mistakeCount.textContent = mistakes;
  }

  function markTarget(objectId) {
    targets.forEach(function (target) {
      if (target.dataset.object === objectId) {
        target.classList.add("found");
      }
    });
  }

  function resetGame() {
    found = new Set();
    mistakes = 0;
    hotspots.forEach(function (hotspot) {
      hotspot.classList.remove("found");
      hotspot.removeAttribute("aria-disabled");
    });
    targets.forEach(function (target) {
      target.classList.remove("found");
    });
    updateStats();
    setMessage("جاهز؟ ابدأ بالبحث داخل الغرفة.");
  }

  hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("click", function (event) {
      event.stopPropagation();

      var objectId = hotspot.dataset.object;
      if (found.has(objectId)) {
        return;
      }

      found.add(objectId);
      hotspot.classList.add("found");
      hotspot.setAttribute("aria-disabled", "true");
      markTarget(objectId);
      updateStats();

      if (found.size === totalObjects) {
        setMessage("ممتاز! وجدت كل الأشياء المخفية.", "success");
      } else {
        setMessage("رائع! واصل البحث عن بقية الأشياء.", "success");
      }
    });
  });

  board.addEventListener("click", function () {
    mistakes += 1;
    updateStats();
    setMessage("ليست هنا. جرّب مكانًا آخر في الصورة.", "mistake");
  });

  resetButton.addEventListener("click", resetGame);
  updateStats();
})();

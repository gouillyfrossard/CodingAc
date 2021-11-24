
window.addEventListener("DOMContentLoaded", (e) => {
    var count = 0;
    var btn = document.querySelector("footer div");

    btn.onclick = function () {
      count++;
      let disp = document.querySelector("footer div");
      disp.innerHTML = count;
    };
});

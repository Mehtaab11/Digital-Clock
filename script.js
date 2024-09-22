const watch = document.querySelector(".watch");

setInterval(() => {
  const date = new Date();
  const time = date.toLocaleTimeString();
  watch.textContent = time;
}, 1000);

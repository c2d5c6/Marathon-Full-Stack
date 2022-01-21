const input = document.querySelector("input");

document.querySelector("#submit").addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value) {
    fetch("/upload/?url=" + input.value)
      .then((response) => response.json())
      .then((data) => {
        document.querySelector(
          "#img1"
        ).innerHTML = `<img src="public/${data.img[0]}">
        <img src="public/${data.img[1]}">
        <img src="public/${data.img[2]}">
        <img src="public/${data.img[3]}">`;
      });
  }
});
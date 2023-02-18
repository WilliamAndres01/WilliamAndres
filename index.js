const boton = document.getElementById("boton1");
    const body = document.body;

    boton.addEventListener("click", () => {
      body.style.backgroundColor = "#9E9E9E";
    });

const slider = document.getElementById("slider");

slider.addEventListener("input", () => {
  body.style.fontSize = slider.value + "px";
});
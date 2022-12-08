const display = document.querySelector("#display");
const segundos = document.querySelector("#segundos");
const minutos = document.querySelector("#minutos");
const audio = document.querySelector("#audio");
const btn = document.querySelector("#comecar");

let colocarNumeros = (select) => {
  for (let i = 0; i <= 60; i++) {
    if (i < 10) {
      select.innerHTML += '<option value="0' + i + '">0' + i + "</option>";
    } else {
      select.innerHTML += '<option value="' + i + '">' + i + "</option>";
    }
  }
};
colocarNumeros(segundos);
colocarNumeros(minutos);

btn.addEventListener("click", () => {
  let minutoAtual = minutos.value;
  let segundoAtual = segundos.value;

  display.childNodes[1].innerHTML = `${minutoAtual}:${segundoAtual}`;

  if (segundoAtual > 0) {
    btn.setAttribute("disabled", "disabled");
    btn.classList.add("desabilitado");

    let timer = setInterval(() => {
      segundoAtual--;

      if (segundoAtual <= 0) {
        if (minutoAtual > 0) {
          minutoAtual--;
          segundoAtual = 59;
        } else {
          audio.play();
          clearInterval(timer);
          btn.removeAttribute("disabled");
          btn.classList.remove("desabilitado");
        }
      }

      display.childNodes[1].innerHTML = `${minutoAtual}:${segundoAtual}`;
    }, 1000);
  } else {
    audio.play();
  }
});

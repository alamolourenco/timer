"use strict";

/* BUGS:
 * 1 - O cronômetro pausa quando a página é minimizada;
 * 2 - O cronômetro fica tremendo;
 * 3 - A velocidade de contagem aumenta sempre que se aperta o botão start e, depois disso, não é mais possível pausar o cronômetro; */

let min = 0;
let sec = 0;
let millisec = 0;

let cron;

function start() {
  cron = setInterval(() => {
    timer();
  }, 10);
}

function pause() {
  clearInterval(cron);
}

function reset() {
  clearInterval(cron);
  min = 0;
  sec = 0;
  millisec = 0;
  document.querySelector("div#timer").innerText = "00:00:00";
}

function timer() {
  millisec++;
  if (millisec === 100) {
    millisec = 0;
    sec++;

    if (sec === 60) {
      sec = 0;
      min++;

        if (min === 60) {
          return reset();
        }
    }
  }

  let format = `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}:${
    millisec < 10 ? "0" + millisec : millisec
  }`;
  document.querySelector("div#timer").innerText = format;
}

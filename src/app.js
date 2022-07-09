/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  function onload() {
    let random = Math.floor(Math.random() * 3);
    let random1 = Math.floor(Math.random() * 2);
    let random2 = Math.floor(Math.random() * 4);
    let excuse =
      who[random] +
      " " +
      action[random] +
      " " +
      what[random1] +
      " " +
      when[random2];
    return excuse;
  }

  document.querySelector("#button").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = onload();
  });
};

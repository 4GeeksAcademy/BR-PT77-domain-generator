import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {

  let pronoun = ["The", "Our", "His", "Her", "My"]
  let adj = ["great", "big", "amazing", "best", "nicest"]
  let noun = ["dolpin", "wilds", "lewbowski", "fox"]

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {

        console.log(pronoun[i] + adj[j] + noun[k] + '.com')
      }
    }
  }
}
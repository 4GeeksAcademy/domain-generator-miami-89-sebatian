import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
let domain1 = ["sebastian", "sebas", "sebita", "cebolla"];
let domain2 = ["elcrack", "elguapo", "caramonda", "papucho"];
let domain3 = [".com", ".us", ".yahoo", ".net"];
 
let resultado = '';

for(let i=0; i < domain1.length; i++){
  for(let j=0; j < domain2.length; j++){
    for(let k=0; k < domain3.length; k++){
      let finalGenerator = domain1[i] + domain2[j] + domain3[k];
      resultado += `<li>${finalGenerator}</li>`;
    }
  }
}
document.getElementById('generator').innerHTML = resultado;






};

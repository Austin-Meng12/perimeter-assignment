//variables
let calcBtn = document.getElementById("calc-btn");
let distAB = document.getElementById("distanceAB");
let distBC = document.getElementById("distanceBC");
let distAC = document.getElementById("distanceAC");
let perimeterABC = document.getElementById("perABC");
let XAinput = document.getElementById("xA");
let YAinput = document.getElementById("yA");
let XBinput = document.getElementById("xb");
let YBinput = document.getElementById("yb");
let XCinput = document.getElementById("xc");
let YCinput = document.getElementById("yc");
//event listeners
calcBtn.addEventListener ("click", calcBtnClicked);

function calcBtnClicked() {
    let xA = +XAinput.value;
    let yA = +YAinput.value;
    let xb = +XBinput.value;
    let yb = +YBinput.value;
    let xc = +XCinput.value;
    let yc = +YCinput.value;
    
   distAB.innerHTML = Math.sqrt((xb-xA)*(xb-xA)  + (yb-yA)*(yb-yA));
   distAC.innerHTML = Math.sqrt((xc-xA)*(xc-xA) + (yc-yA)*(yc-yA));
   distBC.innerHTML = Math.sqrt((xc-xb)*(xc-xb) + (yc-yb)*(yc-yb));
   perimeterABC.innerHTML = Math.sqrt((xb-xA)*(xb-xA)  + (yb-yA)*(yb-yA)) + Math.sqrt((xc-xA)*(xc-xA) + (yc-yA)*(yc-yA)) + Math.sqrt((xc-xb)*(xc-xb) + (yc-yb)*(yc-yb))
}
  
  







  




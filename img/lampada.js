const turnOn = document.getElementById ( "turnOn");
const turnOff = document.getElementById ("turnOff");
const turnBlink = document.getElementById ("turnBlink");
const lamp = document.getElementById ( "lamp");

function isLampBroken (){
    return lamp.src.indexOf ( "quebrada" ) > -1 
}
       
function lampOn () {
    if ( !isLampBroken () ){
    lamp.src = "./img 2/ligada.jpg";
    }
}

function lampOff (){
    if (!isLampBroken()){
    lamp.src = "./img 2/desligada.jpg";
    }
}

function lampBroken (){
    lamp.src = "./img 2/quebrada.jpg";
}
turnOn.addEventListener ("click", lampOn);
turnOff.addEventListener ("click", lampOff);
lamp.addEventListener ("mouseover", lampOn );
lamp.addEventListener ("mouseleave", lampOff);
lamp.addEventListener("dblclick", lampBroken );
  
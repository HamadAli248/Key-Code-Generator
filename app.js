

document.addEventListener("keydown", keycode)

function keycode(){
    var key = event.key;
    var code = event.code;
    var which = event.which;
    
    document.getElementById("eventKey").innerHTML = key
    document.getElementById("eventCode").innerHTML = code
    document.getElementById("eventWhich").innerHTML = which
}
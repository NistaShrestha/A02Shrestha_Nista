
function Acc() {
    var vel = parseFloat(document.getElementById('Velocity').value);
    var time = parseFloat(document.getElementById('Time').value);
    if (vel < 0) {
        alert("Velocity cannot be negative");
    }

    else if (time < 0) {
        alert("Time cannot be negative");
    }
    else if (isNaN(vel)) {
        alert("Velocity should be number.");
    }
    else if (isNaN(time)) {
        alert("Time should be number.");
    }

    else {
        $("#result").html("The acceleration of the vehicle is: " + Accler(vel, time));
    }
}

function Accler(vel, time) {
    return  vel / time;
}

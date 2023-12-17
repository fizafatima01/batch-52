"use strict";
function checkTemperature(temperature) {
    if (temperature < 10) {
        return "Wear very warm clothes.";
    }
    else if (temperature < 20) {
        return "Wear a jacket.";
    }
    else {
        return "Wear light clothes.";
    }
}
console.log(checkTemperature(5)); // Suggest clothing for a temperature of 5°C

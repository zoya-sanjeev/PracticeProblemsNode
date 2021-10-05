const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function FToC(t) {
    return (t - 32) * 5 / 9;
}

function CToF(t) {
    return (t * 9 / 5) + 32;
}

let temperature = 100;

readLine.question('1. Farenheit to Celcius 2. Celcius to Farenheit', m => {
    switch (Number(m)) {
        case 1: if (temperature >= 32 && temperature <= 212) {
            console.log(FToC(temperature));
        }
            break;
        case 2: if (temperature >= 0 && temperature <= 100) {
            console.log(CToF(temperature));
        }
            break;
        default: console.log("Invalid input");
    }
    readLine.close();
});
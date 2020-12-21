let arrayExo1 = ["Pierre", "Paul"];

function exo1(array) {
    return "Bonjour, " + array.join(", ") ;
}
document.getElementById("para1").innerHTML = exo1(arrayExo1);

arrayExo1.push("Jack");

document.getElementById("para2").innerHTML = exo1(arrayExo1);

let arrayExo2 = [2, 5, 10];

function exo2(array) {
    let somme = 0;
    for(let x = 0; x < array.length; x++) {
        if(Number.isInteger(array[x])) {
            somme += array[x];
        }
    }
   return somme;
}

document.getElementById("para3").innerHTML = (exo2(arrayExo2)).toString();

arrayExo2.push(3);

document.getElementById("para4").innerHTML = (exo2(arrayExo2)).toString();

arrayExo2.push(7);

document.getElementById("para5").innerHTML = (exo2(arrayExo2)).toString();

function exo3(array) {
    let somme = 0;
    for(let x = 0; x < array.length; x++) {
        if(Number.isInteger(array[x])) {
            somme += array[x];
        }
    }
    return parseInt(somme * 11.76);
}

document.getElementById("para6").innerHTML = (exo3(arrayExo2)).toString();
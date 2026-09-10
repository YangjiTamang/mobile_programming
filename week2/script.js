function sum() {

    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);
    let number3 = Number(document.getElementById("number3").value);
    let number4 = Number(document.getElementById("number4").value);
    let number5 = Number(document.getElementById("number5").value);
    let number6 = Number(document.getElementById("number6").value);
    let number7 = Number(document.getElementById("number7").value);
    let number8 = Number(document.getElementById("number8").value);

    let result = number1 + number2 + number3 + number4 +
                 number5 + number6 + number7 + number8;

    document.getElementById("result").innerHTML =
        "The total marks are: " + result;
}
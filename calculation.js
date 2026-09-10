function calculate(operator){
    
    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);
    let result;
    result=eval(number1+operator+number2);
    document.getElementById("result").innerHTML="the total is : " + result;  
}
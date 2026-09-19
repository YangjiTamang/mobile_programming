let balance = 10000;
let password=1234;
let pinverified=false;
function checkPin(){
    
   
    
    let number3 = Number(document.getElementById("num3").value);
    if(number3 == password){
        pinverified=true;
        document.getElementById("result").innerHTML="PIN correct. Welcome !!!";
    }else{
        pinverified=false;
        document.getElementById("result").innerHTML="Incorrect Pin";

    }
}
       
    function withdraw(){
        if(pinverified == false){
         
        document.getElementById("result").innerHTML="Please enter PIN number";

        }
        else{
            let number1 = Number(document.getElementById("num1").value);
            if (number1<1 || number1 % 100 !=0){
                document.getElementById("result").innerHTML =
                "Invalid Amount";
            }
            else if (number1>balance){
           document.getElementById("result").innerHTML =
            "Insufficient balance";
        }
            else{
            balance -= number1;
            document.getElementById("result").innerHTML =
            "Withdraw amount: " + number1 + "<br> "+"Current  balance: " + balance;
    }
}
}

function deposit(){
     if(pinverified == false){
       
        document.getElementById("result").innerHTML="Please enter PIN number";

        }
        else{
            let number1 = Number(document.getElementById("num1").value);
            if (number1<1 || number1 % 100 != 0){
            document.getElementById("result").innerHTML =
            "Invalid Amount";
        }
            else{
            balance += number1;
            document.getElementById("result").innerHTML =
            "deposit amount: " + number1 + "<br>"+ "Current  balance: " + balance;
    }
}

}
function checkBalance(){
     document.getElementById("result").innerHTML =
        "current balance:" + balance;

}


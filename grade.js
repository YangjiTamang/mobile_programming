function calculate(){
    let totalmarks =
        Number(document.getElementById("sub1").value)+
        Number(document.getElementById("sub2").value)+
        Number(document.getElementById("sub3").value)+
        Number(document.getElementById("sub4").value)+
        Number(document.getElementById("sub5").value)+
        Number(document.getElementById("sub6").value)+
        Number(document.getElementById("sub7").value)+
        Number(document.getElementById("sub8").value);

    document.getElementById("total").innerHTML="total marks: " + totalmarks + "/800";
    
if (totalmarks >= 700){
        document.getElementById("result").innerHTML= "Distinction";
        document.getElementById("result").style.color="green";
    }
    else if(totalmarks >=600){
        document.getElementById("result").innerHTML= "First division";
    }
    else if(totalmarks >= 500){
        document.getElementById("result").innerHTML= "second division";
    }
    else if(totalmarks >=400){
        document.getElementById("result").innerHTML= "third division";

    } 
    else{
        document.getElementById("result").innerHTML= "Fail";
        document.getElementById("result").style.color="red";
    }


}

function calculate(){
    let totalmarks =
        Number(document.getElementById("sub1").value)+
        Number(documents.getElementById("sub2").value)+
        Number(documents.getElementById("sub3").value)+
        Number(documents.getElementById("sub4").value)+
        Number(documents.getElementById("sub5").value)+
        Number(documents.getElementById("sub6").value)+
        Number(documents.getElementById("sub7").value)+
        Number(documents.getElementById("sub8").value);

    document.getElementById("total").innerHTML="total marks: " + totalmarks + "/800";
    
if (totalmarks >= 700){
        documents.getElementById("result").innerHTML= "Distinction";
        documents.getElementById("result").style.color="green";
    }
    else if(totalmarks >=600){
        documents.getElementById("result").innerHTML= "First division";
    }
    else if(totalmarks >= 500){
        documents.getElementById("result").innerHTML= "second division";
    }
    else if(totalmarks >=400){
        documents.getElementById("result").innerHTML= "third division";

    } 
    else{
        documents.getElementById("result").innerHTML= "Fail";
        documents.getElementById("result").style.color="red";
    }


}

function calculate_tip(){
    document.getElementById("totalTip").style.display="none";
    document.getElementById("each").style.display="none";

    var bill_amount=document.getElementById("billamt").value;
    var service_quality=document.getElementById("serviceQual").value;
    var people_number=document.getElementById("peopleamt").value;

    if(bill_amount==="" || service_quality==0){
        alert("Please fill in the fields");
        return
    }

    if(people_number==="" || people_number==0  || people_number==1){
        people_number=1;
        document.getElementById("each").style.display="none";
    }
    else{
        document.getElementById("each").style.display="block";
    }

    document.getElementById("totalTip").style.display="block";

    var final_amount=(bill_amount*service_quality)/people_number;

    final_amount=(Math.round(final_amount)*100/100).toFixed(2);

    document.getElementById("tip").innerHTML=final_amount;
}


document.getElementById("totalTip").style.display="none";

document.getElementById("calculate").onclick=function(){
    calculate_tip();
}
function check(){
    let width = document.getElementById("width").value;
    let hight = document.getElementById("hight").value;

    let bmi = (width / (hight/100 * hight/100) )
    // alert(bmi)
    let x = document.getElementById("val");
    let total = bmi;
    
    if(total <= 18.4){
        x.innerText = "Your Bmi is "+ total + " which means You are UnderWeight"
    }
    else if(total >= 18.5 && total <= 24.9){
        x.innerText = "Your Bmi is "+ total + " which means You are Normal Weigth"
    } else if(total >= 25 && total <= 29.9){
        x.innerText = "Your Bmi is "+ total + " which means You are Overweigth"
    }
    else if( total >= 30){
        // alert("Your Bmi is "+ total + " which means You are Obese")
        x.innerText = "Your Bmi is "+ total + " which means You are Obese"
    }

}
function myFunction(){
    var n1 = document.getElementById("n1").value;
    if(n1 == 18){
        document.write("Your age is " + n1 + " and congratulations, you are eligible for vote casting.")
    }else if(n1 > 18){
        document.write("Your age is " + n1 + " and congratulations, you are eligible for vote casting.")
    }else if(n1 < 18 && n1 > 0){
        document.write("Your age is " + n1 + " and we are sorry to let you know that you are not eligible for vote casting.")
    }else if(n1 == 0){
            document.write("Please join Earth first.")
    }else if(n1 < 0){
            document.write("You are not born yet.")
    }else{
        document.write("")
    }
}

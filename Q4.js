var num1=prompt("enter the first number:")

if(num1!=null){
    num2=prompt("enter the second number");
    if(num2!=null && num1<num2){
        alert("the larger number is "+num2);
    }
    else if(num2!=null && num2<num1){
        alert("the larger number is "+num1);

    }
}
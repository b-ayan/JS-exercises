var num1=prompt("enter the first number:")

if(num1!=null){
    num2=prompt("enter the second number");
    if(num2!=null && num1<num2){
        alert("the numbers are "+num1+" and "+num2);
    }
    else if(num2!=null && num2<num1){
        alert("the numbers are "+num2+" and "+num1);

    }
}
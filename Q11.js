num=prompt("enter a number between 0 and 100");

while(num<0 || num>100 || isNaN(num)){
    alert("try again!")
    num=prompt("enter a number between 0 and 100");
}
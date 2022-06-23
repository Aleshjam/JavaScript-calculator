var num1 = parseInt(prompt("Enter first number: "))
var opr = prompt("Enter operator(+, -, *, /): ")
var num2 = parseInt(prompt("Enter second number: "))

if(isNaN(num1) || isNaN(num2)){
    alert('Wrong input! Refresh the page again and provide data!');
}else{
    if(opr == "+"){
    result = num1 + num2;
    } else if(opr == "-"){
    result = num1 - num2;
    }else if(opr == "*"){
    result = num1 * num2;
    } else if(opr == "/"){
    result = num1 / num2;
    }
    alert('=' + result);
}

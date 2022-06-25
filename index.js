let firstnumber = Number(prompt("Enter first number"));
let secondnumber = Number(prompt("Enter second number"));
let operator = prompt("Enter operator between +, -, *, /");

let result = undefined;
if (operator === "+") {
  result = firstnumber + secondnumber;
}else if (operator === "-") {
  result = firstnumber - secondnumber;
}else if (operator === "*") {
  result = firstnumber * secondnumber;
}else if (operator === "/") {
  result = firstnumber / secondnumber;
}else {
 result= undefined
}
if(result){
toAlert= `The answer of  ${firstnumber}${operator}${secondnumber} is = ${result}`
alert(toAlert);
}else{
    alert("Invalid operator");
}

// calcolator nesting functions 
function calc(num1,num2,operator) {
    return operator(num1,num2);
}
function add(num1,num2) {
    return num1 + num2;
}
function sub(num1,num2) {
    return num1 - num2;
}
function dev(num1,num2) {
    return num1 / num2;
}
function mul(num1,num2) {
    return num1 * num2;
}
function dif(num1,num2) {
    return num1 % num2;
}

console.log(calc(2,4,dif));
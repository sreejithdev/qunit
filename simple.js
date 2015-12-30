SimpleMath=function(){
};
SimpleMath.prototype.getFactorial=function(number){

if(number<0){
throw new error("no factorial for negative number");
}
else if(number == 1 || number == 0){
return 1;
}
else{
return number * this.getFactorial(number-1);
}
}
SimpleMath.prototype.signum=function(number){
if(number > 0)
{
return 1;
}
else if(number == 0)
{
return 0;
}
else{
return -1;
}}
SimpleMath.prototype.average=function(number1,number2){

return (number1+number2)/2;

}
SimpleMath.prototype.square=function(n){

return n*n;

}

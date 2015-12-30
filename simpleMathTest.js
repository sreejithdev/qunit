module("Factorial",{
setup:function(){
this.simpleMath=new SimpleMath();
},teardown:function(){
delete this.simpleMath;
}
});
test("calculating factorial for positive number",function(){
equal(this.simpleMath.getFactorial(3),6,"factorial of three must equal six");
});
test("calculating factorial for zero",function(){
equal(this.simpleMath.getFactorial(0),1,"factorial of zero must equal one");
});
test("calculating factorial for negative number",function(){
raises (function() {
this.simpleMath.getFactorial(-10)
},"no factorial for negative numbers");
});

module("signum",{
setup:function(){
this.simpleMath=new SimpleMath();
},teardown:function(){
delete this.simpleMath;
}
});

test("calculating signum for positive number",function(){
equal(this.simpleMath.signum(3),1,"signum of three must equal one");
});
test("calculating signum for zero number",function(){
equal(this.simpleMath.signum(0),0,"signum of zero must equal zero");
});
test("calculating signum for negative number",function(){
equal(this.simpleMath.signum(-10),-1,"signum of negative is -1");
});
module("average",{
setup:function(){
this.simpleMath=new SimpleMath();
},teardown:function(){
delete this.simpleMath;
}
});
test("calculating avg for two  number",function(){
equal(this.simpleMath.average(3,6),4.5,"avg of 3 and 6 is 4.5");
});
module("square",{
setup:function(){
this.simpleMath=new SimpleMath();
},teardown:function(){
delete this.simpleMath;
}
});
test("calculating square for positive number",function(){
equal(this.simpleMath.square(2),4,"sqr of 2 is 4");
});
test("calculating square for negative number",function(){
equal(this.simpleMath.square(-2),4,"sqr of -2 is 4");
});
test("calculating square for zero number",function(){
equal(this.simpleMath.square(0),0,"sqr of 0 is 0");
});














var a=2 , b=1;
var result = --a - --b + ++b + b--;
// --a value of a is 2 (1-2)=  1 >>>> a = 1
//1 - (--b = 1-1 => 0) =>> 1 - 0 >>>> b = 0 
// 1 - 0 + (++b = 1+0 => 1) 1 - 0 + 1 >>>> b = 1
//1 - 0 + 1 - (b-- b will decrease after b curent value evaluation) b = 1
// a =1 and b=0 and result = 3


document.writeln("a is :"+a+"<br>");
document.writeln("b is :"+b+"<br>");
document.writeln("result is :"+result+"<br>");


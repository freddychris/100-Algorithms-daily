Absolute Values Sum Minimization

1)
Given a sorted array of integers a, find an integer x from a such that the value of 

abs(a[0] - x)+ abs(a[1] - x)+...+ abs(a[a.length -1]-x)

is the smallest possibale .

Example:
  For a=[2,4,7], the output should be absoluteValuesSumMinimizaton(a)=4.

  For a=[2,4,7,6], the output should be absoluteValuesSumMinimizaton(a)=4.

Hint:

* Math.floor() ==>  "The floor() method rounds a number DOWNWARDS to the nearest integer, and returns the result.
If the passed argument is an integer, the value will not be rounded."

function absoluteValuesSumMinimization(a:number[]):number
{
const isEven =a.length %2 ===0;
return isEven ? a[a.length /2-1]: a[math.floor(a.length/2/)];
}

console.log(absoluteValuesSumMinimization([2,4,7])); => 4
console.log(absoluteValuesSumMinimization([2,4,7,6])); => 4
console.log(absoluteValuesSumMinimization([2,4,7,6,6])); => 7
console.log(absoluteValuesSumMinimization([2,4,7,6,6,8])); => 7


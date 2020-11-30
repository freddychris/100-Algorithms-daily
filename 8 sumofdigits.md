ADD TO DIGITS.

You are given a two-digit interger n.Return the sum of its digits.

Example:
for n=29,the output should be addTwoDigits(n) = 11.

Hint

=> split()
=> parseint()
=> toString()
=> reduce()

input/Output

=> [execution time limit] 4 seconds (js)
=> [input] integer n
   A positive two-digit integer.
Guaranteed constraints:

    10<= n <=99.
	=> [output]integer
	   The sum of the first and second digits of the input number

Solution:
TO sum the digit

1)
Function addTwoDigits(n: any): number 
{
	const nums = n.toString().split('');
		return nums.reduce((a: string, b: string) =>{
			return parseInt(a)+parseInt(b);
		});
}

console.log(addTwoDigits(29));    OUTPUT:11

2)
Function addTwoDigits(n: any): number 
{
	const nums = n.toString().split('');
		return parseInt(nums[0]) + parseInt(nums[1]);
}

console.log(addTwoDigits(29));    OUTPUT:11




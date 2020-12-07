ADJACENT ELEMENTS PRODUCT

Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

Example

For inputArray =[3,6,-2,-5,7,3], the output should be adjacentElementsproduct(inputArray) =21.
7and 3 produce the largest product.

Hints

=> None

Input/Output

=> [time limit]4000ms (js)
=> [input] array.integer inputArray

An array of integers containing at least two elements.

Guaranteed Constraints:

2<= inputArray.length <=10, -1000 <=inputArray[i] <= 1000

	=> [output] integer

The largest product of adjacent elements.


Solution:
 
function adjacentElementsproduct(inputArray: number[]): number{
    let largestproduct = inputArray[0]* inputArray[1];
    for(let i=1; i<inputArray.length-1; i++)
{
	const product =inputArray[i]* inputArray[i+1];
	largestproduct = largestproduct < product ? product : largestproduct;
}
	return largestproduct;
}

console.log(adjacentElementsProduct([3,6,-2,-5,7,3]));        //OUTPUT => 21.

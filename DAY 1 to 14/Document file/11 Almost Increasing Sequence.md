Almost Increasing Sequence

Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

EXample:
  => For sequence =[1,3,2,1],the output should be almostincreasingSequence(sequence)= false;

There is no one element in this array that can be removed in order to get a strictly increasing sequence.
 you can remove 3 from the array to get the strictly increasing sequence [1,2]. Alternately, you can remove 2 to get the strictly increasing sequence [1,3].

Hints:
  => Nope
Input/Output
  =>[time limit] 4000ms(js)
  =>[input array.integer sequence]
Guaranteed constraints:
 1<= sequence.length <= 105.
-105 <= sequence[i] <= 105.
[output] boolean
Return true if it is possible to remove one element from the array in order to f=get a strictly increasing sequence, otherwise return false.


Solution:

function almostIncreasingSequence(sequence: number[]): boolean{
  let count = 0;
  for(let i=0;i< sequence.length; i++)
  {
     if(sequence[i]<= sequence[i-1])
        {
	  count++;
	  if(sequence[i]<= sequence[i-2] && sequence[i+1] <= sequence[i-1])
		{
		   return false;
		}
        }
  }
  return count <= 1;
}
console.log(almostIncreasingSequence([1,3,1,1]))  // false
console.log(almostIncreasingSequence([1,3,2]))  // true


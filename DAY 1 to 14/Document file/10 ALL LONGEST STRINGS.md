 ALL LONGEST STRINGS

Given an array of strings, return another array containing all of its longest strings.

Example:

for inputArray =["aba" , "aa" , "ad" , "vcd" , "aba"], the output should be allLongestStrings(inputArray) = ["aba","vcd","aba"].

Hints
=> None

Input / Output

=> [time limit] 4000ms(js)
=> [input]array.string inputArray
A non-empty array

Guaranteed constraints:
1<= inputArray.length <= 10,
1<= inputArray[i].length <=10.

  =>[output] array.string
Array of the longest strings, stored in the same order as in the inputArray.

Solution:

function allLongestStrings(inputArray: string[]): string[]{
let longestLength =0;
const longestWords =[];

inputArray.forEach((word: string) =>{
	longestLength = longestLength < word.length ? word.length : longestLength;
});

inputArray.forEach((word: string) =>{
	if(word.length === longestLength) {
	   longestWords.push(word);
}
});
  return longestWords;
}

cponsole.log(allLongestStrings(["aba","aa","ad","vcd","aba"]));   OUTPUT //=> ['aba','vcd','aba']

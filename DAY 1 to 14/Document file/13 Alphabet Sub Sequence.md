<div>DAY-13</div>

## Alphabet Sub Sequence

CHeck whether the given string is a subsequence of the plaintext alphabet.

## Example

   For s = "effg" or s= "cdce",the output should be alphabetSubsequence(s) = false. 
   For s="ace" or s ="bxz", the output should be alphabetSubsequence(s) = true.

  ## Hints
  => size property
  =>charCodeAt()

  Input/Output
  =>[execution time limit] 5seconds(ts)
  =>[input]string s

  Guaranteed constraints:
  2<= s.length <=15.

  [Output] boolean
    true if the given string is a subsequence of the alphabet, false otherwise.

```
function alphabetSubsequence(s: string): boolean {

const chars: string[] = s.split('');
const charsValues: number[]=[];

chars.forEach((char: string) => {
	charsValues.push(char.charCodeAt(0));
});
if(new Set (charsValues).size !== charsValues.length)
{
	return false;
}
for(let i=0;i<charsValues.length - 1; i++)
{
    if(charsValues[i] >= charsValues[i+1])
        {
            return false;
        }
}
return true;
}
console.log(alphabetSubsequence('effg')); 
console.log(alphabetSubsequence('cdce'));
console.log(alphabetSubsequence('acce'));
console.log(alphabetSubsequence('bxy'));

```
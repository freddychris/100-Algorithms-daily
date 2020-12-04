ALPHABETIC SHIFT

Givenn a string, replace each its character by the next one in the english alphabet (z would be replaced by a).

Example:
	For inputString = "crazy",the output should be alphabeticshift(inputString)= "dsbaz".

Hints
=> split()
=> indexof()
=> join()

Input/ output 
=> [time limit ]4000ms (js)
=> [input] string inputString
Non-empty string consisting of lowercase English characters.

Guaranteed constraints:
1 <= inputString.length <= 10
  
=> [output]string
THe result string after replacing all of its characters.


Solution :

1)


function alphabeticShift(inputString: string): string{

  const alphabet: string[]=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let inputShifted = inputString.split('');
  
  for (let i=0; i< inputShifted.length;i++) {
       let index =0;
	if(inputshifted[i] !== 'z')
{
	   index=alphabet.indexOf(inputshifted[i])+1;
}
	inputShifted[i] = alphabbet[index];

}
    return inputShifted.join('');
}


console.log(alphabeticShift('crazy'));     // => OUTPUT : dsbaz


2)

function alphabeticShift(inputString: string): string{

  const alphabet: object ={'a':'b','b':'c','c':'d','d':'e','e':'f','f':'g','g':'h','h':'i','i':'j','j':'k','k':'l','l':'m','m':'n','n':'o','o':'p','p':'q','q':'r','r':'s','s':'t','t':'u','u':'v','v':'w','w':'x','x':'y','y':'z','z':'a'};
  
   let inputShifted = inputString.split('');
  
  for (let i=0; i< inputShifted.length;i++) 
	{
	   inputShifter[i] =alphabet[inputShifted[i]];      
	}
    return inputShifted.join('');
}


console.log(alphabeticShift('crazy'));     // => OUTPUT : dsbaz




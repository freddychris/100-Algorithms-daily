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


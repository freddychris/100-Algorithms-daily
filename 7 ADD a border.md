add a border

given a rectangler matrix of characters, add a border of asterisks(*)to it

Example:
 
for
picture= ["abc",
          "ded"]

the output should be

addBorder(picture)= ['*****' , 
                     "*abc*" ,
                     "*ded*" ,
                     "*****"]

Hints:
 
=> concat()
=> unshift()
=> push()

input/Output
=>[time limit]4000ms(js)
=>[input]array.string picture

A non-empty array of non-empty equal-length string.



SOLUTION:

Step 1:
function addBorder(picture: string[]): any {
const lengthOfWall = picture[0].length +2;
let wall = ' ';

for(let i=0;i<lengthOfWall;i++)
{
wall = wall.concat('*');
}

console.log(addBorder(["abc","ded"]));

OUTPUT:

"*****"

Step 2:

//Using the length build the walls using function.

function addBorder(picture: string[]): any {
const lengthOfWall = picture[0].length +2;
let wall = ' ';

for(let i=0;i<lengthOfWall;i++)
{
wall = wall.concat('*');
}
	picture.unshift(wall);
	picture.push(wall);

   for(let i=1 ; i< picture,length -1; i++)
{
picture[i]='*'.concat(picture[i], '*');
}
	return picture;
}

console.log(addBorder(["abc","ded"]));

OUTPUT:

[ '*****' , '*abc*' , '*ded*' , '*****' ]

Step 3:

//First to print the * based on the length

function addBorder(picture: string[]): any {
const Wall = '*'.repeat(picture[0].length +2);

	picture.unshift(wall);
	picture.push(wall);

   for(let i=1 ; i< picture,length -1; i++)
{
picture[i]='*'.concat(picture[i], '*');
}
	return picture;
}

console.log(addBorder(["abc","ded"]));

OUTPUT:

[ '*****' , '*abc*' , '*ded*' , '*****' ]


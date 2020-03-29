// OddNumber Using Array.push Method 

var oddNumber = [];
for (i = 1; i <= 200; i += 2 )
{
oddNumber.push(i) 
}

document.write(oddNumber)
alert(oddNumber)


// OddNumber Using function 

function myFunction() {

for (var i=1; i<=200; i+=2)
    {
    if(i % 2 == 0); document.write(i + ' ') 
    }
} // still needs fixing to remove Undefined.

console.log(myFunction()) // calling the function.


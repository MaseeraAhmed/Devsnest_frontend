// Write a JavaScript function to check whether an `input` is an array or not
// Test Data :

function is_array(input){
    return Array.isArray(input);
}
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));


// Write a JavaScript function to clone an array
// Test Data :

function array_Clone(input){
    return input.slice(0);
}
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));


// Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
// Test Data :

function first(input){
    return input.slice(0, n);
}
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));

// Write a simple JavaScript program to join all elements of the following array into a string.

myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join(","))


// Write a JavaScript program to find the most frequent item of an array:

var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var count=0;
var max=0;
var ans;
for(var i=0;i<arr1.length;i++)
{
    for(var j=0;j<arr1.length;j++)
    {
        if (arr1[i]==arr1[j])
        {
            count+=1;
            if (c>max){
                max=c;
                ans=arr1[i];
            }
        }
    }
    count=0;
}
console.log(ans+" is occuring ("+max+" times)")
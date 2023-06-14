const arr=[2,4,6,89,4,8];
var sum=0;

arr.forEach((value,index,wholearray)=>{
 sum=sum+value;

})

console.log(sum);


//Only use the for-each loop when you want to loop through all the values in an array or list.
//If you only want to loop through part of an array or list use a for loop instead. Also use a for
//loop instead of a for-each loop if you want to change any of the values in the array or list


  //Nested Object
  
  let nestedObj={
    id:102,
    contact:{
        email:'@gmail.com',
        num:1234,
    address:{
        house:12,
        street:'main street',
    }

    }
  }
//   console.log(nestedObj.contact.email);
//   console.log(nestedObj.contact);
   

  //Nested Array  

  const arr = [
    ["Rohit ",45],
    ["Virat ",18],
    ["Dhoni",7]
];
 
// console.log(arr[0][1]);   
// console.log(arr[2][0]);

 arr.map((ele)=>{
    console.log(ele);
 })

 
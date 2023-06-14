// const arr=[
//      {name:'a', id:101,},
//      {name:'b', id:102},
//      {name:'c', id:103},


// ]

//   //How to add value in 
// const arr1=arr[0]
// arr1.class="tgut"
// console.log(arr1);
// console.log(arr);


//  // Add obj in array with unshift method  anly add first
// //   const obj={name:'aa',id:0};
// //   arr.unshift(obj);
// //   console.log(arr);


// //Add.... in end
// //    const objend={name:'ww',id:3};
// //    arr.push(objend);
// //    console.log(arr);
  

// //    Add a new object in the middle - Array.splice

// // const objmid={name:'tt',id:5};
// // arr.splice(2,0,objmid);
// // console.log(arr);


// // reterive  particular obj;

// // let findobj=arr.find((name)=>name='a');
// // console.log(findobj);


// //how to reterive of array of object
// //    arr.map((obj)=>{
// //    console.log(obj);
// //    })


// //How to update data in array of object

// // new_obj=arr.findIndex((obj)=>obj.name='qwrewr');
 
// // arr[new_obj].name='qqwqwwwww'

// // console.log(arr[new_obj]);
 



// //How to  update particular object data
// // const arr1 = [
// //     {id: 1, name: 'Alice'},
// //     {id: 2, name: 'Bob'},
// //     {id: 3, name: 'Charlie'},
// //   ];
  
// //   const index = arr1.findIndex(obj => {
// //   
// //   return obj.id === 2;
// //   });
// //   console.log(index);  
// //   arr1[index].name = 'Alfred';
  
  
// //   console.log(arr1);

 
// // arr.map((obj,one)=>{
// //     console.log(obj.name);
// // })


let  arr=[
    {name:'a',id:1},
    {name:'b',id:2},
    {name:'c',id:3},
    {name:'d',id:4},

];
// let arr1=arr.map((obj)=>
 
// {obj.id==2?{...obj,city:"indore"}:obj}) 
//  console.log(arr1)

// const index=arr.findIndex((obj)=>{
 
//      if(obj.id==2){
//         obj.name:'qwertyu'
//      }

               

// })
//   console.log(arr);
 
arr = arr.map(p =>
    p.id === 2? { ...p, name: 'new description' }: p
  );

  console.log(arr);
 //Example of shallow copy

// const obj={
//     name:'q',
//     id:101,
     
// }
// const objshallow=obj;
// // console.log(objshallow);
//  objshallow.class='one';

//  console.log(objshallow);
//  console.log('orginal obj',obj);

 const deepObj={
    name:'qwerty',
    id:122,
}

// JSON.stringify() takes a JavaScript object as an argument and then transforms it into a JSON string. 
// This JSON string is passed to the JSON.parse() method which then transforms it into a JavaScript object. 

const newdeepObj=JSON.parse(JSON.stringify(deepObj));
  newdeepObj.class="deep"

  console.log(newdeepObj);
  console.log(deepObj);
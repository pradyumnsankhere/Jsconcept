//Currying in JavaScript transforms a function with multiple arguments into a nested series
//of functions, each taking a single argument. Currying helps you avoid passing the same
//variable multiple times, and it helps you create a higher order function.

  function sum(a){
    return (b)=>{
        return (c)=>{
            return a+b+c;
        }
    }
  }

  console.log(sum(1)(2)(3));
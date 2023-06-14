    function Person(name,age){
        this.name=name,
        this.age=122
        console.log(this.name);
    }


    Person.prototype.greet=function(){
        console.log("Hello",this.name)
    }
    const personobj=new Person('a',12);


    personobj.greet();
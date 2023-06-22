let person = {
    name: "Lidana",
    sayHi: function() {
      console.log("Hi, my name is: " + this.name);
    }
  }
  
  person.sayHi()
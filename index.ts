

class Greeter {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    showGreeting() {

        let column2 = document.getElementById('r1c2');
        column2.innerHTML= 'Hello ' + this.firstName + ' ' + this.lastName + "!"
       
    }

    resetGreeting() {
        
        let column2 = document.getElementById('r1c2');
        column2.innerHTML= 'r1c2'
    }
  
}


const greeter = new Greeter('Anthony', 'Ortega');
//greeter.showGreeting();

const resetGreeter = new Greeter('','');
//resetGreeter.resetGreeting();



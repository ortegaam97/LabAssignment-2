var Greeter = (function () {
    function Greeter(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Greeter.prototype.showGreeting = function () {
        var column2 = document.getElementById('r1c2');
        column2.innerHTML = 'Hello ' + this.firstName + ' ' + this.lastName + ".";
    };
    Greeter.prototype.resetGreeting = function () {
        var column2 = document.getElementById('r1c2');
        column2.innerHTML = 'r1c2';
    };
    return Greeter;
})();
var greeter = new Greeter('Anthony', 'Ortega');
//greeter.showGreeting();
var resetGreeter = new Greeter('', '');
//resetGreeter.resetGreeting();

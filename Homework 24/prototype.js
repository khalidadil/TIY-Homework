 // * HOMEWORK for Thursday - Sunday, July 10-13, 2014
 // *
 // * Part 1:
 // *
 // * - Create a Cat, Dog, Horse, and Barn function.

function Cat(){}
Cat.prototype.scratch = function(action){
	console.log(action);
}
Cat.prototype.speak = function(mood){
	if (typeof mood === 'undefined'){
		console.log('purr');
	}
	else if (mood ==='scared'){
		console.log('MEOW!');
	}
}

var tabbyCat = new Cat();
tabbyCat.speak("scared");

function Dog(){}
Dog.prototype.hideValuables = function(action){
	console.log(action);
}
Dog.prototype.speak = function(mood){
	if (typeof mood === 'undefined'){
		console.log('woof');
	}
	else if (mood ==='scared'){
		console.log('BARK BARK!');
	}
}

var blackLab = new Dog();
blackLab.speak("scared");

function Horse(){}
Horse.prototype.gallop = function(action){
	console.log(action);
}
Horse.prototype.speak = function(mood){
	if (typeof mood === 'undefined'){
		console.log('neigh');
	}
	else if (mood ==='scared'){
		console.log('NEIGHHH!');
	}
}

var stallion = new Horse();
stallion.speak("scared");

function Barn(){
	this.shelteredAnimals = [];
}
Barn.prototype.shelter = function(animal){
	this.shelteredAnimals.push(animal);
}
Barn.prototype.rollCall = function(){
	this.shelteredAnimals.forEach(function(animal){
		animal.speak();
	})
}

var redBarn = new Barn();
redBarn.shelter(tabbyCat);
redBarn.shelter(blackLab);
redBarn.shelter(stallion);
redBarn.rollCall();

 // * Part 2: create a Calculator class and define / use all the following functions
 
 // * multiply
 // * divide
 // * add
 // * subtract
 
 // * The calculator should throw an error if an input is not a number!!!

var value;	
function Calculator(value){
	this.value = value || 0;
}

Calculator.prototype.add = function(){
	var args = [].slice.call(arguments);
	var total = 0;
	var value = this.value;

	if (args.length > 1){
		args.forEach(function(n){
			if (typeof n !== "number"){
				throw new Error("Not a number!");
			}
			else{
				total = total + parseInt(n);
			}
		})
		console.log(total);
	}
	else{
		var that = this; //redefines the this.value of the outer function as that.value so we can continue to use it
		args.forEach(function(n){
			//this.value can't work here, since it'll look for a 'value' relating to this function
			total = that.value + parseInt(n);
			console.log(total);
		})
	}
}

Calculator.prototype.subtract = function(x,y){
	if (typeof x !== "number" || typeof y !== "number"){
				throw new Error("Not a number!");
			}
	var total = 0;
	total = x - y;
	console.log(total);
}

Calculator.prototype.multiply = function(x,y){
	if (typeof x !== "number" || typeof y !== "number"){
				throw new Error("Not a number!");
			}
	var total = 0;
	total = x * y;
	console.log(total);
}

Calculator.prototype.divide = function(x,y){
	if (typeof x !== "number" || typeof y !== "number"){
				throw new Error("Not a number!");
			}
	var total = 0;
	total = x / y;
	console.log(total);
}

var c = new Calculator(10);
c.add(4,10); //--> 14 (state is set as 14 now)
c.add(5); //--> 15
c.add(5,4,3,1,10);
c.subtract(10,4);
c.multiply(10,4);
c.divide(10,4);
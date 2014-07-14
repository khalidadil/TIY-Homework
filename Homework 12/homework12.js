/**
 * PART 1
 *
 * Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
 */

function triangle_area(a,b,c)
{
	var hp = (a+b+c)/2;
	return Math.sqrt(hp*(hp-a)*(hp-b)*(hp-c));
}

console.log(triangle_area(5,6,7));

/**
 * PART 2
 *
 * Write a JavaScript program to convert temperatures to and from celsius, fahrenheit.
 * [ Formula : c/5 = f-32/9 [ where c = temperature in celsius and f = temperature in fahrenheit ]
 *
 * Expected Output :
 * 60°C is 140 °F
 * 45°F is 7.222222222222222°C
 */

function tempConvert(temp,currentformat){
	if (currentformat==='c'){
		var f = temp*(9/5)+32;
		var converted = temp + "°C is " + f + "°F";
	}
	if (currentformat==='f'){
		var c = (temp-32)*(5/9);
		var converted = temp + "°F is " + c + "°C";
	}
	return converted;
}

console.log(tempConvert(60,'c'));
console.log(tempConvert(45,'f'));

/**
 * PART 3
 *
 * Write a JavaScript function that reverse a number.
 *
 * Example x = 32243;
 * Expected Output : 34223
 */


var x = 33243;
var reverse = x.toString().split("").reverse().join("");
console.log(reverse);

var reverse = [];
var x = 33243;
reverse = x.toString().split("").forEach(function(a){ reverse.unshift(a);});
reverse = reverse.join("");

var reverse = [];
var x = 33243;
x.toString().split("").forEach(function(a){x.unshift(a.pop()); })).join("");

function (a){
	.shift()
	.push(a);
}

/**
 * PART 4
 *
 * Write a simple JavaScript program to join all elements of the following array into a string. Go to the editor
 *
 * Sample array : myColor = ["Red", "Green", "White", "Black"];
 *
 * Expected Output :
 * "Red,Green,White,Black"
 * "Red,Green,White,Black"
 * "Red+Green+White+Black"
 */

var myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join(","));
console.log(myColor.join(","));
console.log(myColor.join("+"));

/**
 * PART 5
 *
 * Write a JavaScript program to compute the sum and product of an array of integers.
 */

var myNumbers = [10,20,30,40,50];
var totalSum = myNumbers.reduce(function(a, b) {
    return a + b;
});

var totalProduct = myNumbers.reduce(function(a, b) {
    return a * b;
});

console.log(totalSum);
console.log(totalProduct);


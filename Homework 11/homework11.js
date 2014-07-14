/**
 * homework:
 *
 * - create a JS program that takes the two arrays, A and B, and uses push/pop to put all elements in A into B, in reverse order
 * e.g.:
 *
 * 		at the end, A will be [],
 * 		and B will be [9,8,7,6,5,4,3,2,1,0]
 */

var A = [0,1,2,3,4,5,6,7,8,9];
var B = [];

for(i=A.length; i>0; i--)
{
	B.push(A.pop()); //pulls last A and adds to end of B
}

console.log(B);

var A = [0,1,2,3,4,5,6,7,8,9];
var B = [];

for(i=A.length; i>0; i--)
{
	B.unshift(A.pop()); //pulls last A and adds to start of B
}

console.log(B);

var A = [0,1,2,3,4,5,6,7,8,9];
var B = [];

for(i=A.length; i>0; i--)
{
	B.push(A.shift()); //pulls first A and adds to end of B
}

console.log(B);

var A = [0,1,2,3,4,5,6,7,8,9];
var B = [9,8,7,6,5,4,3,2,1,0];
console.log(A.concat(B)); //outputs the combination

var A = [0,1,2,3,4,5,6,7,8,9];
console.log(A.reverse()); //outputs the reverse

// your code here

// this is a mental tongue-twister; and you *can* do this using only push and pop together (hint! hint!)

/**
 * Part 2
 *
 * Investigate this, we'll discuss tomorrow
 *
 * Hint: write some code with push('jace'), pop('dennis'), and arr[1] = 'mark' and investigate what is happening. Just try to explain in English :-)
 */

var arr = [];
arr[999] = 'john';	//looks like this creates an array 1000 spaces long, since arrays start at 0 index
arr.push('jace');	//adds 1 to the length of the array by adding 'jace'
arr.pop('dennis');	//subtracts 1 from the length of the array by 'pop' but doesn't do anything with 'dennis'
arr[1] = 'mark';	//changes the undefined value of arr[1] to 'mark', note this isn't the first position
console.log(arr.length);

/**
 * Part 3
 *
 * sort() an array with your own comparator (refer to notes)
 *
 * one comparator will return the objects in alphabetical order compared to their name,
 * one comparator will return the objects in reverse
 */

/*explicit way*/
var myComparator = function(a, b){
	if (a.name < b.name) return -1;
	else if (a.name > b.name) return 1;
	else return 0;
}

/*same, harder logic-wise*/
// var myComparator = function(a, b){
// 	return a.name > b.name;
// }

/*explicit way*/
var myComparatorReverse = function(a, b){
	if (a.name > b.name) return -1;
	else if (a.name < b.name) return 1;
	else return 0;
}

/*same, harder logic-wise*/
// var myComparatorReverse = function(a, b){
// 	return a.name < b.name;
// }

var sortByLast = function(a, b){
	return a.name.substring(a.name.length-1, a.name.length) > b.name.substring(b.name.length-1, b.name.length);
}
var listOfObjects = [{
	name: 'michael'
}, {
	name: 'khalid'
}, {
	name: 'amy'
}, {
	name: 'keya'
}, {
	name: 'joey'
}, {
	name: 'david'
}, {
	name: 'roberto'
}, {
	name: 'darron'
}]

var listOfObjects2 = [{
	name: 'michael'
}, {
	name: 'khalid'
}, {
	name: 'amy'
}, {
	name: 'keya'
}, {
	name: 'joey'
}, {
	name: 'david'
}, {
	name: 'roberto'
}, {
	name: 'darron'
}]

var listOfObjects3 = [{
	name: 'michael'
}, {
	name: 'khalid'
}, {
	name: 'amy'
}, {
	name: 'keya'
}, {
	name: 'joey'
}, {
	name: 'david'
}, {
	name: 'roberto'
}, {
	name: 'darron'
}]

console.log(listOfObjects.sort(myComparator));
console.log(listOfObjects2.sort(myComparatorReverse));
console.log(listOfObjects3.sort(sortByLast)); //imperfect since it looks at only last character
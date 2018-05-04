function squareNumber(num){
	return num * num;
}

console.log('The result of sqauring the number 3 is ' + squareNumber(3));

function halfNumber(num){
	return num / 2;
}

console.log('Half of 5 is ' + halfNumber(5));

function percentOf(num1, num2){
	return num1 / num2;
	}

percentOf(60, 5);
console.log('5 is ' + percentOf(60, 5) + '\% of 60\.');

function areaOfCircle(num){
	return num * 2 * 3.14;
}

console.log('The area for a circle with radius 6 is ' + areaOfCircle(6));

function bonus(num){ 
	var half = halfNumber(num);
	var squared = squareNumber(half);
	var area = areaOfCircle(squared);
	var result = percentOf(squared, area); 
}

console.log(bonus(6))
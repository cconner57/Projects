// 1. Print 1-255
// Print1to255()
// Print all the integers from 1 to 255

function Print1To255() {
	for (i = 1; i < 256; i++) {
		console.log(i);
	}
}

// 2.Print Odds 1-255
// PrintOdds1To255()
// Print all odd integers from 1 to 255

function PrintOdds1To255() {
	for (i = 1; i < 256; i += 2) {
		console.log(i);
	}
}

// 3.Print Ints and Sum 0-255
// PrintIntsAndSum0To255()
// Print integers from 0 to 255, and with each integer print the sum so far

function PrintIntsAndSumTo255() {
	let sum = 0;
	for (let i = 0; i <= 255; i++) {
		sum += i;
		console.log(i, sum);
	}
}

// 4.Interate and Print Array
// PrintArrayVals(arr)
// Iterate through a given Array, printing each value

function PrintArrayVals(arr) {
	for (i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
}

// 5.Find and Print Max
// PrintMaxOfArray(arr)
// Given an Array, find and print its largest element

function PrintMaxOfArray(arr) {
	let max = arr[0];
	for (i = 1; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
	}
	console.log(max);
}

// 6.Get and Print Average
// PrintAverageOfArray(arr)
// Analyze an array's values and print the average

function FindAverage(arr) {
	var average = arr[0];
	for (let idx = 1; idx < arr.length; idx++) {
		average = average + arr[idx];
	}
	console.log(average / arr.length);
}

// 7.Array with Odds
// ReturnOddsArray1To255()
// Create an array with all the odd integers between 1 and 255 (inclusive)

function ArrOfOdds() {
	var odds = [];
	for (let idx = 1; idx <= 50; idx++) {
		if (idx % 2 === 1) {
			odds.push(idx);
		}
	}
	console.log(odds);
}

// 8.Square the Values
// SquareArrayVals(arr)
// Square each value in a given Array, returning that same array with changed values

function Squared(arr) {
	for (let idx = 0; idx < arr.length; idx++) {
		arr[idx] = arr[idx] * arr[idx];
	}
	console.log(arr);
}

// 9.Greater than Y
// ReturnArrayCountGreaterThanY(arr, y)
// Given an array and a value Y, count and print the number of array values greater than Y

function GreaterThanY(arr, Y) {
	var count = 0;
	for (let idx = 1; idx < arr.length; idx++) {
		if (arr[idx] > Y) {
			count = count + 1;
		}
	}
	console.log(arr);
}

// 10.Zero Out Negative Numbers
// ZeroOutArrayNegativeVals(arr)
// Return the given Array, after setting any negative values to zero

function NoNegatives(arr) {
	for (let idx = 0; idx < arr.length; idx++) {
		if (arr[idx] < 0) {
			arr[idx] = 0;
		}
	}
	console.log(arr);
}

// 11.Max, Min, Average
// PrintMaxMinAverageArrayVals(arr)
// Given an Array, print the max, min, and average values for that array

function MaxMinAvg(arr) {
	var max = arr[0];
	var min = arr[0];
	var sum = arr[0];

	for (let idx = 1; idx < arr.length; idx++) {
		if (arr[idx] > max) {
			max = arr[idx];
		}

		if (arr[idx] < min) {
			min = arr[idx];
		}
		sum = sum + arr[idx];
	}
	var avg = sum / arr.length;
	var arrNew = [ max, min, avg ];
	console.log(arrNew);
}

// 12.Shift Array Values
// ShiftArrayValsLeft(arr)
// Given an Array, move all values forward (to the left) by one indexedDB, dropping the first value and leaving a 0 (zero) value at the end of the array

function shiftVal(arr) {
	var min = arr[0];
	var max = arr[0];
	var sum = 0;
	for (var i = 0; i < arr.length; i++) {
		sum += arr[i];
		if (min > arr[i]) {
			min = arr[i];
		}
		if (max < arr[i]) {
			max = arr[i];
		}
	}
	var avg = sum / arr.length;
	console.log('Min: ' + min + ' Max: ' + max + ' Avg: ' + avg);
}

// 13.Eliminate Negative Numbers
// Given any array x, say [1, 5, 10, -2], create an algorithm
// that replaces any negative number with the value of 0.
// When the program is done, x should have no negative values, say [1, 5, 10, 0].

function noNegatives(arr) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] < 0) {
			arr[i] = 0;
		}
	}
	console.log(arr);
}

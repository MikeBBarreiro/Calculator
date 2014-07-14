var prompt = require('sync-prompt').prompt;



console.log('Welcome! ');

var numbers = [];

var input =prompt('Would you like to (d)ivide, (m)ultiply, (a)dd, (s)ubstract? or (q)uit  ');
if (input !== 'q'){
var number1 = prompt('What number would you like to first input? ');
number1 = parseFloat(number1);
numbers.push(number1);
var number2 = prompt('Second number? ');
number2 = parseFloat(number2)
numbers.push(number2);

while( input !== 'q'){
if (input === 'd') {
console.log('The numbers ' + numbers +' is equal to: ', number1 / number2);
}else if( input === 'm') {
console.log( 'The numbers ' + numbers + ' is equal to: ', number1 * number2 );
}else if( input === 'a') {
console.log( 'The numbers ' + numbers + ' is equal to: ', number1 + number2 );
}else if(input == 's'){
console.log( 'The numbers ' + numbers + ' is equal to: ', number1 - number2 );
}

var input =prompt('Would you like to (d)evide, (m)ultiply, (a)dd, (s)ubstract? or (q)uit  ');
if( input !== 'q'){
var number1 = prompt('What number would you like to first input? ');
number1 = parseFloat(number1);
numbers.push(number1);
var number2 = prompt('Second number? ');
number2 = parseFloat(number2)
numbers.push(number2);

numbers.shift();
numbers.shift();
}
}
}




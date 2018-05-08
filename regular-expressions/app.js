

// let re;
// re = /hello/;  // regular regular expression
// re = /hello/i;  // i = case insensitive
// re = /hello/g;  // g = global search



// console.log(re);
// console.log(re.source);

// exec() will return the result in an array or null
// const result = re.exec('hello world');

// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);


// test() returns true or false if there is a match
// const result = re.test('Hello');
// console.log(result);


// match() will return result array or null
// const str = "hello there";
// const result = str.match(re);
// console.log(result);


// search() Returns the index of the first match, if not returns -1
// const str = 'hello there';
// const result = str.search(re);
// console.log(result);


// replace() will return a new string with some or all matches of a pattern
// const string = 'hello there';
// const newStr = string.replace(re, 'Hi');
// console.log(newStr);



let re;
// literal characters
re = /hello/i;  // i = case insensitive 

// meta character symbols
re = /^h/i;       // Must start with 'h'
// ends with
re = /d$/i;       // Must end with 'd'
re = /^hello$/i;  // Must begin and end with 'hello'
re = /h.llo/i;    // Matches any one character
re = /h*llo/i;    // Matches any character 0 or more times
re = /gre?a?y/    // Optional character
re = /gre?a?y\?/  // Escape character


// Brackets [] - Character sets
re = /gr[ae]y/i;  // Must be an A or an E
re = /[GF]ray/;   // Must be an G or an F
re = /[^GF]ray/;  // Match anything EXCEPT a G or an F
re = /[A-Z]ray/;  // Match any UPPERCASE letter
re = /[a-z]ray/;  // Match any LOWERCASE letter
re = /[A-Za-z]ray/;  // Match any ANY letter
re= /[0-9]rey/;   //Match anything between 0 and 9

// Braces {} = Quantifiers
re = /Hel{2}o/i;    // Looking for the quantity of the preceeding character
re = /Hel{2,4}o/i;  // Looking for the ammount between the two numbers
re = /Hel{2,}o/i;   // Must occur at least n times

// Parens () - Grouping
re = /([0-9]x){3}/; 

// Shorthand Character Classes
re = /\W/;    // Word character - alphanumeric or underscore
re = /\W+/;   // + = 1 or more
re = /\w/;    // Word character - lowercase = non-word 
re = /\d/;    // Match any digit
re = /\d+/;   // Match any digit 0 or more times
re = /\D/;    // Match any non-digit
re = /\s/;    // Match any whitespace char
re = /\S/;    // Match any non whitespace char
re = /Hell\b/i;  // Word boundary -- splits off the chars that preceed the \b

// Assertions
re = /x{?=y}/; // Will only match x if it's followed by y;
re = /x{?=!y}/; // Will only match x if not followed by y;



















// String to match
const str = 'Hello';

// Log results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
    if(re.test(str)) {
        console.log(`${str} matches ${re.source}`);
    } else {
        console.log(`${str} does not match ${re.source}`);
    };
}


reTest(re, str);
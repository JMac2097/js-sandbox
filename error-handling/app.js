const user = {email: `jdoe@email.com`};

try {

// Reference error
// myFunction();

// Produce a type error
// null.myFunction();

// Produce a syntax error
// eval(hello world);    

// Produce a URIerror
// decodeURIComponent('%');

if(!user.name) {
    // throw 'user has no name';
    throw new SyntaxError('User has no name');
};

} catch(e) {
    console.log(`User Error: ${e.message}`);    
    // console.log(e);
    // console.log(e.message);
    // console.log(e.name);
    // console.log(e instanceof ReferenceError);
    // console.log(`${e.name}: It\'s null dickhead`);
    
    
} finally {
    console.log('Finally runs regardless of result');
};

console.log('Program Continues');
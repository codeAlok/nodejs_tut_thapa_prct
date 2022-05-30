// fat arrow function ????

const add = (a, b)=>{
    return a+b;
}

const sub = (a, b)=>{
    return a-b;
}

const mul = (a, b)=>{
    return a * b;
}

const myname = "alok";

// module.exports = add;   // this says that anyone can access add function
// set this feature/function to public

// module.exports = sub;

// module.exports.add1 = add;  // now passed as an object
// module.exports.sub1 = sub;
// module.exports.mul1 = mul;


// ***** module destructuring  ***
module.exports = { add, sub, mul, myname};



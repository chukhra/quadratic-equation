const a = parseFloat(prompt('Enter A'));
const b = parseFloat(prompt('Enter B'));
const c = parseFloat(prompt('Enter C'));
//the previous three lines read the incoming data from the user
const result = solveQuadr(a, b, c);
alert('Result is ' + result);

function solveQuadr(a, b, c){       //calculation of the roots of the quadratic equation
    const d = calcDiscr(a, b, c);
    if (d === false){
        return 'no roots!';
    }else if (d === 0){
        const x1 = (-b + Math.sqrt(d)) / (2 * a);
        return x1;
    }else{
        const x1 = (-b + Math.sqrt(d)) / (2 * a);
        const x2 = (-b - Math.sqrt(d)) / (2 * a);
        return x1, x2;
    }
}

function calcDiscr(a, b, c){      //discriminant calculation
    const d = b * b - 4 * a * c;
    if (d < 0){
        return false;
    }else{
        return d;
    }
}
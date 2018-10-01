function solveQuadrEq(a, b, c){
    const d = calcDiscr(a, b, c);
    if (d > 0) {
        const x1 = ((-b - Math.sqrt( d )) / ( 2 * a ));//
        const x2 = ((-b + Math.sqrt( d )) / ( 2 * a ));//
        return 'The result is\nX1 = ' + x1 + '\nX2 = ' + x2;
    }
    else if (d == 0) {
        const x = (-b) / (2 * a);
        return x;
    }
    else {
        return 'Sorry, no results!';
    }
}

function calcDiscr(a, b, c){
    const d = b*b - 4*a*c;
    return d;
}

const a = parseFloat(prompt('Please enter A value'));
const b = parseFloat(prompt('Please enter B value'));
const c = parseFloat(prompt('Please enter C value'));

const solution = solveQuadrEq(a, b, c);

alert(solution);
// const userName = prompt('Enter your name');
// const greetings = 'Hello ' + userName;
// alert(greetings);

// const userAge = parseInt(prompt ('Enter your age'));
// const nextAge = userAge + 1;
// alert ('Next year you will be ' + nextAge);

// const userBirthNumber = parseInt(prompt ('Enter month of birth number'));
// const halfTime = userBirthNumber / 2;
// alert ('Half of your month number is ' + halfTime);

// const userAge = parseInt(prompt ('Enter your age'));
// if (userAge >= 18) { // < > <= >= == === != !== - нерівність
//     alert('You are adult');
// } else {
//     alert('You are child');
// }

// function addOne(num) {
// const newNum = num + 1;
// return newNum;
// }

// let result = addOne(10);
// alert(result);
// result = addOne(result);
// alert(result);

// result = Math.sqrt(16);
// alert(result);
// alert(result);

// питаєм у користувача a b c


function solveQuadrEq(a, b, c) {
    const d = calcDiscr(a, b, c);
    if (d > 0) {
        const x1 = (-b - Math.sqrt(d)) / (2 * a);
        const x2 = (-b + Math.sqrt(d)) / (2 * a);
        return 'The result is\nX1 = ' + x1 + '\nX2 = ' + x2;
    }   else if (d == 0) {
        return 'The result is X = ' + -b / 2 * a;
    }   return 'Sorry, no results!';
}

function calcDiscr(a, b, c) {
    const d = b * b - 4 * a * c;
    return d;
}

const a = parseFloat(prompt('Please enter A value'));
const b = parseFloat(prompt('Please enter B value'));
const c = parseFloat(prompt('Please enter C value'));

const solution = solveQuadrEq(a, b, c);

alert(solution);
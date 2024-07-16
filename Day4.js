// Task 1
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
console.log('----------------------------------');

// Task 2
let num = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
}
console.log('----------------------------------');

// Task 3
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}
console.log('----------------------------------');

// Task 4
let j = 10;
while (j >= 1) {
    console.log(j);
    j--;
}
console.log('----------------------------------');

// Task 5
let a = 1;
do {
    console.log(a);
    a++;
} while (a <= 5);
console.log('----------------------------------');

// Task 6
let n = 5;
let b = 1, f = 1;
do {
    f *= b;
    b++;
} while (b <= n);
console.log(`The factorial of ${n} is ${f}`);
console.log('----------------------------------');

// Task 7: Method 1
var x,y,chr;
for(x=1; x <=6; x++)
{
    for (y=1; y < x; y++)
    {
        chr=chr+("*");        
    }
    console.log(chr);
    chr='';    
}
console.log('----------------------------------');

// Task 7: Method 2
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++){
        process.stdout.write("*");
    }
    console.log();
}
console.log('----------------------------------');

// Task 8
for (let i = 1; i <= 10; i++) {
    if (i == 5) continue;
    console.log(i);
}
console.log('----------------------------------');

// Task 9
for (let i = 1; i <= 10; i++) {
    if (i == 7) break;
    console.log(i);
}
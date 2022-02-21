'use strict';

const fs = require('fs');

function noninteractive(values) {
  const [a, b, c] = values;
  if (a === 0) {
    console.log('a is 0');
    process.exit(1);
  }
  const d = Get_discriminant(a, b, c);
  Solve(a, b, c, d);
}

fs.readFile(process.argv[2], 'utf8', function (err, contents) {
  Get_noninteractive_input(contents);
});

function Get_noninteractive_input(values) {
  const value_list = values.split(' ');
  const converted_values_list = [];
  try {
    for (const item of value_list) {
      if (isNaN(item)) throw error;
      converted_values_list.push(Number(item));
    }
  } catch {
    console.log('Invalid values');
    process.exit(1);
  }

  noninteractive(converted_values_list);
}

function Get_discriminant(a, b, c) {
  return Math.pow(b, 2) - 4 * a * c;
}

function Solve(a, b, c, d) {
  console.log(`Equation is: (${a}) x^2 + (${b}) x + (${c}) = 0`);
  if (d > 0) {
    const x1 = (-b - Math.sqrt(d)) / (2 * a);
    const x2 = (-b + Math.sqrt(d)) / (2 * a);
    console.log('There are 2 roots');
    console.log(`x1 = ${x1}, x2 = ${x2}`);
  } else if (d == 0) {
    let x = -(b / (2 * a));
    console.log('There are 1 root');
    console.log(`x = ${x}`);
  } else console.log('There are 0 roots');
}

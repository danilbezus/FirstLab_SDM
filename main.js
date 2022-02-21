'use strict';

const fs = require('fs');
const readlineSync = require('readline-sync');
const { stdin: input, stdout: output } = require('process');

function noninteractive(values) {
  CheckForPatterns(values);
  const [a, b, c] = Get_noninteractive_input(values);
  if (a === 0) {
    console.log('a cannot be 0');
    process.exit(1);
  }
  const d = Get_discriminant(a, b, c);
  Solve(a, b, c, d);
}
BAAAAAAAAD commit
function interactive() {
  const a = Get_interactive_input('a = ');
  const b = Get_interactive_input('b = ');
  const c = Get_interactive_input('c = ');
  const d = Get_discriminant(a, b, c);
  Solve(a, b, c, d);
}

function start() {
  let path = process.argv[2];
  if (path) {
    fs.readFile(path, 'utf8', function (err, contents) {
      noninteractive(contents);
    });
  } else interactive();
}

function CheckForPatterns(values) {
  const regexp = /^-?\d+\.?\d*\s\-?\d+\.?\d*\s\-?\d+\.?\d*\s\n$/s;
  if (!regexp.test(values)) {
    console.log('Invalid file format');
    process.exit(1);
  }
}

function Get_interactive_input(text) {
  let temp = Number(readlineSync.question(text));
  if (isNaN(temp)) {
    console.log(`Error. Expected a valid real number, got ${temp} instead`);
    return Get_interactive_input(text);
  } else if (text === 'a = ' && temp === 0) {
    console.log('Error. a cannot be 0');
    return Get_interactive_input(text);
  } else {
    return temp;
  }
}

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

  return converted_values_list;
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

start();

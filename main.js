'use strict';

const fs = require('fs');

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

  console.log(converted_values_list);
}

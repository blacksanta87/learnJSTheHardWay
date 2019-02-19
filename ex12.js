const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Give me a number: ', (number) => {
  let bigger = number * 100;
  console.log(`A bigger number is ${bigger}`);
  
  rl.question('Give me another number: ', (another) => {
    number = another;
    let smaller = number / 100;
    console.log(`A smaller number is ${smaller}`);

    rl.close();
  });
});
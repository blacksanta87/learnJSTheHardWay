const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('How old are you? ', (age) => {
  rl.question('How tall are you? ', (height) => {
    rl.question('How much do you weight? ', (weight) => {
      console.log(`So, you're ${age} old, ${height} tall and ${weight}`);
      rl.close();
    });
  });
});
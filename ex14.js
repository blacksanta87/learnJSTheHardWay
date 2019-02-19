let userName = process.argv.slice(2);
let prompt = '>';

console.log(`Hi ${userName}`);
console.log(`I'd like to ask you a few question.`);

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`Do you like me ${userName}?\n${prompt}\n`, (likes) => {
  rl.question(`Where do you live ${userName}?\n${prompt}\n`, (lives) => {
    rl.question(`What kind of computer do you have?\n${prompt}\n`, (computer) => {
      console.log(`
      Alright, so you said ${likes} about liking me.
      You live in ${lives}. Not sure where that is.
      And you have a ${computer} computer. Nice.
      `);

      rl.close();
    });
  });
});
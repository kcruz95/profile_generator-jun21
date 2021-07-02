const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :)", (ansNo1) => {
  rl.question("What's an activity you like doing?", (ansNo2) => {
    rl.question("What do you listen to while doing that?", (ansNo3) => {
      rl.question("Which meal is your favourite?", (ansNo4) => {
        rl.question("What's your favourite thing to eat for that meal?", (ansNo5) => {
          rl.question("Which sport is your absolute favourite?", (ansNo6) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (ansNo7) => {
              console.log(`${ansNo1} loves listening to ${ansNo3} while ${ansNo2}, devouring ${ansNo5} for ${ansNo4}, prefers ${ansNo6} over any other sport, and is amazing at ${ansNo7}.`)
              rl.close();
            });
          });
        });
      });
    });
  });
});
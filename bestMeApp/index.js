const questions = [
  "O que aprendi hoje?",
  "O que me desanima?",
  "O que me motiva?",
  "Onde eu quero chegar?",
];

const ask = (index = 0) => {
  process.stdout.write(`\n\n${questions[index]}\nR: `);
};

ask();

const answers = [];

process.stdin.on("data", (data) => {
  answers.push(data.toString().trim());

  if (answers.length < questions.length) {
    ask(answers.length);
  } else {
    // console.log(answers);
    process.exit(); // finaliza o programa
  }
});

process.on("exit", () => {
  // callback
  console.log("Show de bola, retorne amanhã para mais questões");
});

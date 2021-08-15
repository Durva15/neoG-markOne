const readlineSync = require('readline-sync');

const chalk = require('chalk');

let name = readlineSync.question(chalk.white('Hi, What\'s your name? '));

while(name.length === 0) {
	name = readlineSync.question(chalk.blue.bgWhite('Hi, What\'s your name? '));
}

console.log(chalk.blue.bgWhite(`Welcome, ${name}! \n`));
console.log(chalk.bold.cyan('Let\'s see how well do you know me! \n'));

let start= readlineSync.keyInYN('Lets start?');
let score = 0;

function askQuestion(ques, ans) {
	let userAns = readlineSync.question(chalk.bold(ques));

	while(userAns.length === 0) {
		userAns = readlineSync.question(chalk.bold(ques));
	}

	if(userAns.toLowerCase() == ans.toLowerCase()) {
		console.log(chalk.bold.greenBright('Correct Answer :)'));
		score++;
	} else {
		console.log(chalk.bold.redBright('Incorrect Answer :('));
		console.log(chalk.bold.green(`The correct answer is ${ans}.`));}

	console.log(chalk.underline.bold.bgMagenta(`Score: ${score} \n`));
}

let questionList = [
	{
		q: 'What is my full name? ',
		a: 'Durva Ruparelia',
	},
	{
		q: 'How old am I? ',
		a: '21',
	},
	{
		q: 'What do I study? ',
		a: 'B.Tech',
    a: 'Engineering'
	},
	{
		q: 'What is my Mother Tongue? ',
		a: 'Gujarati',
	},
	{
		q: 'Which is my favourite color? ',
		a: 'Purple',
	},
	{
		q: 'Which country do I live in? ',
		a: 'India',
	},
	{
		q: 'Name of one of my hobbies.',
		a: 'Reading',
	},	
];

for(let i=0; i<questionList.length; i++) {
	askQuestion(questionList[i]["q"], questionList[i]["a"]);
}

console.log(chalk.underline.bold.blue.bgWhite(`Result: You scored ${score} points!`));
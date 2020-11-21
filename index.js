var readlineSync = require('readline-sync');
var chalk = require('chalk');

console.log(chalk.red('Welcome to the Quiz'));
var username = readlineSync.question(chalk.cyan("What's your Name: \n"));
console.log(chalk.cyan('Hello', username, ", Let's Play the Quiz!!"));

console.log('\n');
console.log(chalk.white.bgRed.bold.underline('Rules & Instructions: '));
console.log(chalk.yellow('1.', username + ', There are 10 Questions on India and all are Compulsory.'));
console.log(chalk.yellow('2. You will get 2 points on each Right Answer.'));
console.log(chalk.yellow('3. One Point will be deducted if the Answer is Wrong.'));
console.log(chalk.yellow('4. In MCQ based questions you have to type the Serial Number / Index Value.'));
console.log('\n');

var leaderboard = [
    { name: 'Siddhi', score: '19' },
    { name: 'Ritu N', score: '17' },
    { name: 'Riya K', score: '14' }
];

console.log(chalk.yellowBright.underline('LeaderBoard:'));
console.log(chalk.cyanBright('Name       Score'));
for (var i = 0; i < leaderboard.length; i++) {
    console.log(chalk.greenBright(leaderboard[i].name, '   ', leaderboard[i].score));
}

var score = 0;

function quiz(question, answer) {
    var userAnswer = readlineSync.question(question);

    if (userAnswer.toLowerCase() == answer.toLowerCase()) {
        console.log(chalk.green('You are Right.'));
        score = score + 2;
    } else {
        console.log(chalk.red('You are Wrong.'));
        console.log(chalk.blue('The Correct Answer is:', answer));
        score = score - 1;
    }

    if (score < 0) {
        score = 0;
    }
    console.log(chalk.cyan('Score is: ', score));
}

function quizMcq(listOfAnswers, question, answer) {
    var userAnswer = readlineSync.keyInSelect(listOfAnswers, question);
    console.log('\n');
    if (listOfAnswers[userAnswer] === answer) {
        console.log(chalk.green('You are Right.'));
        score = score + 2;
    } else {
        console.log(chalk.red('You are Wrong.'));
        console.log(chalk.blue('The Correct Answer is: ', answer));
        score = score - 1;
    }

    if (score < 0) {
        score = 0;
    }

    console.log(chalk.cyan('Score is: ', score));
}

var questionsList = [{
        question: 'India\'s Largest City by Population: ',
        answer: 'Mumbai',
    },
    {
        question: 'National Song of India: ',
        answer: 'Vande Mataram',
    },
    {
        question: 'National Motto of India: ',
        answer: 'Satyameva Jayate',
    },
    {
        question: 'Golden Temple is situated in: ',
        answer: 'Amritsar',
    },
];

var mcqList = [

    {
        array: ['Mumbai', 'Hyderabad', 'Guragon', 'Bangalore'],
        question: 'Which City is known as "Electronic City of India"? ',
        answer: 'Bangalore'
    },
    {
        array: ['Kerala', 'Madras', 'Bangalore', 'New Delhi'],
        question: 'The Indian Institute of Science is located at ',
        answer: 'Bangalore'
    },
    {
        array: ['Dugong', 'Blue whale', 'River Dolphin', 'Pygmy Killer Whale'],
        question: 'What is the name of India\'s National Aquactic Animal: ',
        answer: 'River Dolphin'
    },
    {
        array: ['New Delhi', 'Hyderabad', 'Amritsar', 'Mumbai'],
        question: 'The Centre for Cellular and Molecular Biology in India is situated at: ',
        answer: 'Hyderabad'
    },
    {
        array: ['Delhi', 'Dehradun', 'Lucknow', 'Gandhinagar'],
        question: 'National Institute of Aeronautical Engineering is located at ',
        answer: 'Delhi'
    },
    {
        array: ['T.N.Kaul', 'J.R.D. Tata', 'Nani Palkhivala', 'Khushwant Singh'],
        question: 'Who wrote the famous book - "We the people"? ',
        answer: 'Nani Palkhivala'
    },
];

for (var i = 0; i < questionsList.length; i++) {
    console.log('\n');
    console.log(chalk.cyanBright('Question', i + 1));
    quiz(questionsList[i].question, questionsList[i].answer);
    console.log('*******************************');
}

var j = 5;
for (var i = 0; i < mcqList.length; i++) {
    console.log('\n');
    console.log(chalk.cyanBright('Question', j++));
    quizMcq(mcqList[i].array, mcqList[i].question, mcqList[i].answer);

    console.log('*******************************');
}

console.log('\n');
console.log(chalk.cyanBright.italic.underline('Congratulations,', username, 'your Total Score is: ', score));
console.log('\n');
console.log(chalk.yellowBright.italic('Thanks for Solving the Quiz,if you have beaten the score that is on the leaderboard than Please take the Screenshot of the Score and Send it to Prerana.'));
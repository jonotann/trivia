$(document).ready(function() {
	var index = 0;
	var countdownTimer = {
		time : 30,
		reset: function() {
			this.time = 30;
			$('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
		},
		start: function() {
			counter = setInterval(countdownTimer.count, 1000);	
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				countdownTimer.time--;
				console.log(countdownTimer.time);

			if (countdownTimer.time >= 0) {
				$('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
			}
			else {
				index++;
				answerWrong();
				countdownTimer.reset();
				if (index < questionArray.length) {
					loadQuestion(index);
				} else {
					$(".answerchoice").hide();
					showScore();
				}
			}
		}
	};

var correct = 0;
var wrong = 0;
var q1 = {
	question : 'What is the name of Leela\'s pet?',
	possibleAnswers : ['A. Nobbler',
				 'B. Nibbler',
				 'C. Nubben',
				 'D. Norman'],
	flags : [false, true, false, false],
	answer : 'B. Nibbler'
};

var q2 = {
	question: 'What was Fry\'s job in 1999 ?',
	possibleAnswers: ['A. Pizza Delivery Boy',
				 'B. Newspaper Delivery Boy',
				 'C. Milkman',
				 'D. Shoe Shine Boy'],
	flags : [true, false, false, false],
	answer : 'A. Pizza Delivery Boy'
};

var q3 = {
	question : 'What company does Dr. Farnsworth run ?',
	possibleAnswers : ['A. Space Express',
				 'B. Earth Express',
				 'C. Planet Express',
				 'D. Federal Express'],
	flags : [false, false, true, false],
	answer : 'C. Planet Express'
};

var q4 = {
	question : 'Name Captain Zapp\'s assistant ...',
	possibleAnswers : ['A. Zip',
				 'B. Kif',
				 'C. Cif',
				 'D. Yif'],
	flags : [false, true, false, false],
	answer : 'B. Kif'
};

var q5 = {
	question : 'Bender is, Bending Unit ___ ?',
	possibleAnswers : ['A. 20',
				 'B. 21',
				 'C. 22',
				 'D. 23'],
	flags : [false, false, true, false],
	answer : 'C. 22'
};

var q6 = {
	question : 'What was Fry\'s bank account balance in 1999 ?',
	possibleAnswers : ['A. 33 cents',
				 'B. 53 cents',
				 'C. 73 cents',
				 'D. 93 cents'],
	flags : [false, false, false, true],
	answer : 'D. 93 cents'
};

var q7 = {
	question : 'What did the Professors smelloscope detect in space ?',
	possibleAnswers : ['A. A Planet of cheese',
				 'B. A comet',
				 'C. A ball of garbage',
				 'D. An alien ship'],
	flags : [false, false, true, false],
	answer : 'C. A ball of garbage'
};

var q8 = {
	question : 'What was the name of the space cruise ship that was destroyed by a black hole ?',
	possibleAnswers : ['A. The QE2',
				 'B. The Titanic',
				 'C. The Enterprise',
				 'D. The Dawn Star'],
	flags : [false, true, false, false],
	answer : 'B. The Titanic'
};

var q9 = {
	question : 'When Fry returns to college, who is his roommate ?',
	possibleAnswers : ['A. A Dog',
				 'B. A Monkey',
				 'C. Santa Claus',
				 'D. Flexo'],
	flags : [false, true, false, false],
	answer : 'B. A Monkey'
};

var q10 = {
	question : 'What is Fry\'s favourite soft drink ?',
	possibleAnswers : ['A. Slurm',
				  'B. Slop',
				  'C. Glurm',
				  'D. Gloop'],
	flags : [true, false, false, false],
	answer : 'A. Slurm'
}

var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

function loadQuestion(questionSelection) {
	console.log(questionSelection);
	countdownTimer.reset();
  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
  $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
  $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
  $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
  $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();
// getAnswer();
// nextQuestion(index);
}


function setup() {
	index = 0;
	$('.question').append('<button id="startButton">Start</button>');
	$('#startButton').on('click', function() {
		$(this).hide();
		countdownTimer.start();
	 	loadQuestion(index);
	});
}		

function getAnswer() {
//  nextQuestion();
	$('.answerchoice').on('click', function() {
	  console.log('alert', index);
		index++;
		console.log('click', index);
		$(".question").text('');
		$("#buttonA").text('');
		$("#buttonB").text('');
		$("#buttonC").text('');
		$("#buttonD").text('');
		loadQuestion();
	})
}

function answerCorrect() {
	correct++;
	alert("Correct!");
	console.log("correct");
}

function answerWrong() {
	wrong++;
	alert("Incorrect!");
	console.log("wrong");
}

function showScore() {
	$('.question').empty();
	$('.question').append("<h2><p>" + correct + " correct</p></h2>");
	$('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
	countdownTimer.stop();
	$('.timer').empty();

}

setup();
$('.answerchoice').on('click', function() {
 console.log($(this));
 if(this.id == 'buttonA') {
 	var answerChosen = 'A';
 } else if(this.id == 'buttonB') {
 	answerChosen = 'B';
 } else if (this.id == 'buttonC') {
 	answerChosen = 'C';
 } else if (this.id == 'buttonD') {
 	answerChosen = 'D';
 } 
 if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'A') {
 	answerWrong();
 }
 if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'B') {
 	answerWrong();
 }
if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'C') {
 	answerWrong();
 }
if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'D') {
 	answerWrong();
 }

 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
 	loadQuestion(index);
 } else {
 	$(".answerchoice").hide();
 	showScore();
 }
});

});
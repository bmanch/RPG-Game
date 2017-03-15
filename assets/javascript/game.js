var mauryHP = 100;

var mauryAttack = 0;

var rickiHP = 120;

var rickiAttack = 0;

var jerryHP = 150;

var jerryAttack = 0;

var oprahHP = 180;

var oprahAttack = 0;

var currentFighter = "";

var currentOpponent = "";

var clicked = true;

var fightersEngaged = false;

var wins = 0;

$(document).ready(function() {

	function battle() {

		if (currentFighter === "maury") {
			$('#attack').click(mauryBattle);
			function mauryBattle() {
				if (currentOpponent === "ricki") {
					rickiHP -= mauryAttack;
					if (rickiHP > 0) {
						mauryHP -= rickiAttack;
						console.log(rickiAttack);
						$('#result').html("You attacked Ricki Lake for " + mauryAttack + " damage.<br>Ricki Lake attacked you for " + rickiAttack + " damage");
					}
					else {
						$('#ricki').remove();
						$('#result').html("You beat Ricki Lake. Choose your next opponent!");
						wins++;
					}
					$('#healthPointsMaury').html("HP: " + mauryHP);
					$('#healthPointsRicki').html("HP: " + rickiHP);
					mauryAttack += mauryAttack;
					referee(currentFighter);
				}

				if (currentOpponent === "jerry") {
					jerryHP -= mauryAttack;
					if (jerryHP > 0) {
						mauryHP -= jerryAttack;
						$('#result').html("You attacked Jerry Springer for " + mauryAttack + " damage.<br>Jerry Springer attacked you for " + jerryAttack + " damage");
					}
					else {
						$('#jerry').remove();
						$('#result').html("You beat Jerry Springer. Choose your next opponent!");
						wins++;
					}
					$('#healthPointsMaury').html("HP: " + mauryHP);
					$('#healthPointsJerry').html("HP: " + jerryHP);
					mauryAttack += mauryAttack;
					referee(currentFighter);
				}

			};
		}

	};

	function referee (fighter) {
		if (fighter === "maury") {
			if (mauryHP < 1) {
				$('#result').html("Your powers with the mic have been overcome. Click restart to play again.");
				$('#result').append('<button id="restart">Restart</button>');
				$('#restart').on('click', function() {
					$('#yourFighter').html("Your Fighter");
					$('#yourOpponent').html("Your Opponent");
					$('#yourEnemies').html('<h1>Your Enemies</h1>');
					$('#allCharacters').html(
						'<h1>They can all Talk the Talk</h1>' +
						'<div class="picButton" id="maury"><h3>Maury Povich</h3><img src="assets/images/maury.jpg" alt="Maury Povich" width="120" height="90"><h3 id="healthPointsMaury">HP: 100</h3></div>' +
						'<div class="picButton" id="ricki"><h3>Ricki Lake</h3><img src="assets/images/ricki.jpg" alt="Ricki Lake" width="120" height="90"><h3 id="healthPointsRicki">HP: 120</h3></div>' +
						'<div class="picButton" id="jerry"><h3>Jerry Springer</h3><img src="assets/images/springer.jpg" alt="Jerry Springer" width="120" height="90"><h3 id="healthPointsJerry">HP: 150</h3></div>' +
						'<div class="picButton" id ="oprah"><h3>Oprah Winfrey</h3><img src="assets/images/oprah.jpg" alt="Oprah Winfrey" width="120" height="90"><h3 id="healthPointsOprah">HP: 180</h3></div>');
				});
				wins = 0;
			}

			else if (wins < 3) {
				battle();
			}

			else {
				$('#result').html("You are the master talk show host! Click Restart to play again!");
				$('#result').append('<button id="restart">Restart</button>');
				$('#restart').on('click', function() {
					$('#yourFighter').html("Your Fighter");
					$('#yourOpponent').html("Your Opponent");
					$('#yourEnemies').html('<h1>Your Enemies</h1>');
					$('#allCharacters').html(
						'<h1>They can all Talk the Talk</h1>' +
						'<div class="picButton" id="maury"><h3>Maury Povich</h3><img src="assets/images/maury.jpg" alt="Maury Povich" width="120" height="90"><h3 id="healthPointsMaury">HP: 100</h3></div>' +
						'<div class="picButton" id="ricki"><h3>Ricki Lake</h3><img src="assets/images/ricki.jpg" alt="Ricki Lake" width="120" height="90"><h3 id="healthPointsRicki">HP: 120</h3></div>' +
						'<div class="picButton" id="jerry"><h3>Jerry Springer</h3><img src="assets/images/springer.jpg" alt="Jerry Springer" width="120" height="90"><h3 id="healthPointsJerry">HP: 150</h3></div>' +
						'<div class="picButton" id ="oprah"><h3>Oprah Winfrey</h3><img src="assets/images/oprah.jpg" alt="Oprah Winfrey" width="120" height="90"><h3 id="healthPointsOprah">HP: 180</h3></div>');
				});
				wins = 0;
			}
		}
	}


	$('#maury').click(mauryFighter);
	$('#ricki').click(rickiFighter);
	$('#jerry').click(jerryFighter);
	$('#oprah').click(oprahFighter);

	function mauryFighter() {
		$('#allCharacters').html("Game on!");
		$('#yourEnemies').append(
			'<div class="picButtonEnemies" id="ricki"><h3>Ricki Lake</h3><img src="assets/images/ricki.jpg" alt="Ricki Lake" width="120" height="90"><h3 id="healthPointsRicki">HP: 120</h3></div>' +
			'<div class="picButtonEnemies" id="jerry"><h3>Jerry Springer</h3><img src="assets/images/springer.jpg" alt="Jerry Springer" width="120" height="90"><h3 id="healthPointsJerry">HP: 150</h3></div>' +
			'<div class="picButtonEnemies" id ="oprah"><h3>Oprah Winfrey</h3><img src="assets/images/oprah.jpg" alt="Oprah Winfrey" width="120" height="90"><h3 id="healthPointsOprah">HP: 180</h3></div>');
		$('#yourFighter').html('<div class="picBattle" id="maury"><h3>Maury Povich</h3><img src="assets/images/maury.jpg" alt="Maury Povich" width="120" height="90"><h3 id="healthPointsMaury">HP: 100</h3></div>');
		currentFighter = "maury";
		mauryAttack = 6;

		$('#ricki').on('click', function () {
			$('#ricki').remove();
			$('#yourOpponent').html('<div class="picBattle" id="ricki"><h3>Ricki Lake</h3><img src="assets/images/ricki.jpg" alt="Ricki Lake" width="120" height="90"><h3 id="healthPointsRicki">HP: 120</h3></div>');
			fightersEngaged = true;
			currentOpponent = "ricki";
			rickiAttack = 60;
			battle();
		});

		$('#jerry').on('click', function () {
			$('#jerry').remove();
			$('#yourOpponent').html('<div class="picBattle" id="jerry"><h3>Jerry Springer</h3><img src="assets/images/springer.jpg" alt="Jerry Springer" width="120" height="90"><h3 id="healthPointsJerry">HP: 150</h3></div>');
			fightersEngaged = true;
			currentOpponent = "jerry";
			jerryAttack = 40;
			battle();
		});

		$('#oprah').on('click', function () {
			$('#oprah').remove();
			$('#yourOpponent').html('<div class="picBattle" id ="oprah"><h3>Oprah Winfrey</h3><img src="assets/images/oprah.jpg" alt="Oprah Winfrey" width="120" height="90"><h3 id="healthPointsOprah">HP: 180</h3></div>');
			fightersEngaged = true;
			currentOpponent = "oprah";
			oprahAttack = 10;
			battle();
		});
	};

	function rickiFighter() {
		$('#allCharacters').html("Game on!");
		$('#yourEnemies').append(
			'<div class="picButtonEnemies" id="maury"><h3>Maury Povich</h3><img src="assets/images/maury.jpg" alt="Maury Povich" width="120" height="90"><h3 id="healthPointsMaury">HP: 100</h3></div>' +
			'<div class="picButtonEnemies" id="jerry"><h3>Jerry Springer</h3><img src="assets/images/springer.jpg" alt="Jerry Springer" width="120" height="90"><h3 id="healthPointsJerry">HP: 150</h3></div>' +
			'<div class="picButtonEnemies" id ="oprah"><h3>Oprah Winfrey</h3><img src="assets/images/oprah.jpg" alt="Oprah Winfrey" width="120" height="90"><h3 id="healthPointsOprah">HP: 180</h3></div>');
		$('#yourFighter').html('<div class="picBattle" id="ricki"><h3>Ricki Lake</h3><img src="assets/images/ricki.jpg" alt="Ricki Lake" width="120" height="90"><h3 id="healthPointsRicki">HP: 120</h3></div>');
		currentFighter = "ricki";

		$('#maury').on('click', function () {
			$('#maury').remove();
			$('#yourOpponent').html('<div class="picBattle" id="maury"><h3>Maury Povich</h3><img src="assets/images/maury.jpg" alt="Maury Povich" width="120" height="90"><h3 id="healthPointsMaury">HP: 100</h3></div>');
			fightersEngaged = true;
			currentOpponent = "maury";
		});

		$('#jerry').on('click', function () {
			$('#jerry').remove();
			$('#yourOpponent').html('<div class="picBattle" id="jerry"><h3>Jerry Springer</h3><img src="assets/images/springer.jpg" alt="Jerry Springer" width="120" height="90"><h3 id="healthPointsJerry">HP: 150</h3></div>');
			fightersEngaged = true;
			currentOpponent = "jerry";
		});

		$('#oprah').on('click', function () {
			$('#oprah').remove();
			$('#yourOpponent').html('<div class="picBattle" id ="oprah"><h3>Oprah Winfrey</h3><img src="assets/images/oprah.jpg" alt="Oprah Winfrey" width="120" height="90"><h3 id="healthPointsOprah">HP: 180</h3></div>');
			fightersEngaged = true;
			currentOpponent = "oprah";
		});
	};

	function jerryFighter() {
		$('#allCharacters').html("Game on!");
		$('#yourEnemies').append(
			'<div class="picButtonEnemies" id="maury"><h3>Maury Povich</h3><img src="assets/images/maury.jpg" alt="Maury Povich" width="120" height="90"><h3 id="healthPointsMaury">HP: 100</h3></div>' +
			'<div class="picButtonEnemies" id="ricki"><h3>Ricki Lake</h3><img src="assets/images/ricki.jpg" alt="Ricki Lake" width="120" height="90"><h3 id="healthPointsRicki">HP: 120</h3></div>' +
			'<div class="picButtonEnemies" id ="oprah"><h3>Oprah Winfrey</h3><img src="assets/images/oprah.jpg" alt="Oprah Winfrey" width="120" height="90"><h3 id="healthPointsOprah">HP: 180</h3></div>');
		$('#yourFighter').html('<div class="picBattle" id="jerry"><h3>Jerry Springer</h3><img src="assets/images/springer.jpg" alt="Jerry Springer" width="120" height="90"><h3 id="healthPointsJerry">HP: 150</h3></div>');
		currentFighter = "jerry";

		$('#ricki').on('click', function () {
			$('#ricki').remove();
			$('#yourOpponent').html('<div class="picBattle" id="ricki"><h3>Ricki Lake</h3><img src="assets/images/ricki.jpg" alt="Ricki Lake" width="120" height="90"><h3 id="healthPointsRicki">HP: 120</h3></div>');
			fightersEngaged = true;
			currentOpponent = "ricki";
		});

		$('#maury').on('click', function () {
			$('#maury').remove();
			$('#yourOpponent').html('<div class="picBattle" id="maury"><h3>Maury Povich</h3><img src="assets/images/maury.jpg" alt="Maury Povich" width="120" height="90"><h3 id="healthPointsMaury">HP: 100</h3></div>');
			fightersEngaged = true;
			currentOpponent = "maury";
		});

		$('#oprah').on('click', function () {
			$('#oprah').remove();
			$('#yourOpponent').html('<div class="picBattle" id ="oprah"><h3>Oprah Winfrey</h3><img src="assets/images/oprah.jpg" alt="Oprah Winfrey" width="120" height="90"><h3 id="healthPointsOprah">HP: 180</h3></div>');
			fightersEngaged = true;
			currentOpponent = "oprah";
		});
	};

	function oprahFighter() {
		$('#allCharacters').html("Game on!");
		$('#yourEnemies').append(
			'<div class="picButtonEnemies" id="maury"><h3>Maury Povich</h3><img src="assets/images/maury.jpg" alt="Maury Povich" width="120" height="90"><h3 id="healthPointsMaury">HP: 100</h3></div>' +
			'<div class="picButtonEnemies" id="ricki"><h3>Ricki Lake</h3><img src="assets/images/ricki.jpg" alt="Ricki Lake" width="120" height="90"><h3 id="healthPointsRicki">HP: 120</h3></div>' +
			'<div class="picButtonEnemies" id="jerry"><h3>Jerry Springer</h3><img src="assets/images/springer.jpg" alt="Jerry Springer" width="120" height="90"><h3 id="healthPointsJerry">HP: 150</h3></div>');
		$('#yourFighter').html('<div class="picBattle" id ="oprah"><h3>Oprah Winfrey</h3><img src="assets/images/oprah.jpg" alt="Oprah Winfrey" width="120" height="90"><h3 id="healthPointsOprah">HP: 180</h3></div>');
		currentFighter = "oprah";

		$('#ricki').on('click', function () {
			$('#ricki').remove();
			$('#yourOpponent').html('<div class="picBattle" id="ricki"><h3>Ricki Lake</h3><img src="assets/images/ricki.jpg" alt="Ricki Lake" width="120" height="90"><h3 id="healthPointsRicki">HP: 120</h3></div>');
			fightersEngaged = true;
			currentOpponent = "ricki";
		});

		$('#jerry').on('click', function () {
			$('#jerry').remove();
			$('#yourOpponent').html('<div class="picBattle" id="jerry"><h3>Jerry Springer</h3><img src="assets/images/springer.jpg" alt="Jerry Springer" width="120" height="90"><h3 id="healthPointsJerry">HP: 150</h3></div>');
			fightersEngaged = true;
			currentOpponent = "jerry";
		});

		$('#maury').on('click', function () {
			$('#maury').remove();
			$('#yourOpponent').html('<div class="picBattle" id="maury"><h3>Maury Povich</h3><img src="assets/images/maury.jpg" alt="Maury Povich" width="120" height="90"><h3 id="healthPointsMaury">HP: 100</h3></div>');
			fightersEngaged = true;
			currentOpponent = "maury";
		});
	};

});
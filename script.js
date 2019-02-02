let indexDiff = 0;

while (indexDiff === 0) {
	let player1 = prompt('1st player.', 'paper');
	let player2 = prompt('2nd player.', 'scissors');
	let player1Tools = ['paper', 'rock', 'scissors'];
	let player2Tools = ['paper', 'rock', 'scissors'];
	let player1Index = player1Tools.indexOf(player1);
	let player2Index = player2Tools.indexOf(player2);
	
	if (player1Index !== -1 && player2Index !== -1) {
		indexDiff = player1Index - player2Index;
		
		if (indexDiff === 0) {
			alert('Draw! Enter new values.');
		}
    
	} else {
		indexDiff = 0;
	}
  
}
	
if (indexDiff === -1 || indexDiff === 2) {
	alert('1st  player wins!');
} else {  	 // if (indexDiff === -2 || indexDiff === 1)
	alert('2nd player wins!');
}
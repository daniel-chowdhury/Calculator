const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


reader.question("What would you like to perform (enter +, -, *, /, or √ (for √, hold down Alt, and type 251)):  ", function(input){
const mathSymbol = input;
reader.question("Enter the first number:  ", function(input){
	const num1 = Number(input);
	if (mathSymbol !== "√") {
	reader.question("enter the second number:  ", function(input){
		const num2 = Number(input);
	
	
		if (mathSymbol === "+"){
			console.log(num1 + num2);
	  }
	
	  if (mathSymbol === "-"){
		console.log(num1 - num2);
	}
	
	if (mathSymbol === "*"){
		console.log(num1 * num2);
	}
	
	if (mathSymbol === "/"){
		console.log(num1 / num2);
	}
	
	reader.close()
	
	});

} else {
	console.log(Math.sqrt(num1))
	reader.close()
}
	
	});

	

});










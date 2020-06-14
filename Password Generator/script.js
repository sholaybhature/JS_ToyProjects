var passLength = document.getElementById("passLength");
var uppercaseCheck = document.getElementById("uppercaseCheck");
var lowercaseCheck = document.getElementById("lowercaseCheck");
var symbolCheck = document.getElementById("symbolCheck");
var numbersCheck = document.getElementById("numbersCheck");
var genPass = document.getElementById("genPass");
function generate(){
	genPass.value = generatePass(passLength.value,uppercaseCheck.checked,lowercaseCheck.checked,numbersCheck.checked,symbolCheck.checked);
}

function passwordLength(length){
	document.getElementById("passLengthLabel").innerHTML = "Password Length: " + length; 
}

function generatePass(length, upper, lower, num, sym){
	var temp = "";
	for(i = 0; i < length; i++){
		rand = Math.floor(Math.random() * 4)
		if(rand == 0 && upper == true){
			temp = temp.concat(getRandomUpper());
		}
		else if(rand == 1 && lower==true){
			temp = temp.concat(getRandomLower());
		}
		else if(rand == 2 && num==true){
			temp = temp.concat(getRandomNumber());
		}
		else if(rand == 3 && sym==true){
			temp = temp.concat(getSymbol());
		}
		else{
			temp.concat(getSymbol());
		}

	}
	return temp;
}

function getRandomUpper(){
	return String.fromCharCode(65+Math.floor(Math.random() * 26));
}

function getRandomLower(){
	return String.fromCharCode(97+Math.floor(Math.random() * 26));
}

function getSymbol(){
	return String.fromCharCode(32+Math.floor(Math.random() * 15));
}

function getRandomNumber(){
	return Math.floor(Math.random() *10);
}

function copyPassword(){
	genPass.select();
	document.execCommand("copy");
}
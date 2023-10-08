var user = ['martin', 'martin'];
var dropdown = document.getElementById('user-dropdown');
var login = document.getElementById('log-in');

if (user != null){
	dropdown.style.display = 'block';
	login.style.display = 'none';
} else {
	dropdown.style.display = 'none';
	login.style.display = 'block';
}

function logOut(){
	user = null;
	dropdown.style.display = 'none';
	login.style.display = 'block';
}

function logIn(username, pass){
	user = [username, pass];
	dropdown.style.display = 'block';
	login.style.display = 'none';
}

function signUp(username, pass){
	user = [username, pass];
	dropdown.style.display = 'block';
	login.style.display = 'none';
}

function showPopUpLogIn(){
	document.getElementById('log-in-popup').style.display = 'block';
	document.getElementById('sign-up-popup').style.display = 'none';
}

function showPopUpSignUp(){
	document.getElementById('log-in-popup').style.display = 'none';
	document.getElementById('sign-up-popup').style.display = 'block';
}

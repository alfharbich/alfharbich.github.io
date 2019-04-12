// ALL PAGES

// ELEMENT SELECTOR :: STRING
function $id(id) {
	return document.getElementById(id);
}

function $q(q) {
	return document.querySelector(q);
}

// ELEMENT SELECTOR :: ARRAY
function $all(q) {
	return document.querySelectorAll(q);
}

// CREATE HTML ELEMENT :: HTML
function make(type) {
	return document.createElement(type);
}

// AJAX REQUEST FUNCTION :: JSON
function get(url, callback) {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);
	xhr.onload = () => {
		let data = JSON.parse(xhr.responseText);
		callback(data);
	}
	xhr.onerror = () => {
		console.log('Transaction Failed');
	}
	xhr.send();
}

// UPPERCASE FIRST LETTER :: STRING
function ucfirst(str) {
	return str.charAt(0).toUpperCase() + str.substr(1);
}

// LocalStorage
function lsTest() {
	try {
		localStorage.setItem('test', 'test');
		localStorage.removeItem('test');
		return true;
	} catch (e) {
		return false;
	}
}

function lsGet(ref) {
	try {
		return JSON.parse(localStorage.getItem(ref));
	} catch (e) {
		return false;
	}
}

function lsSet(ref, obj) {
	localStorage.setItem(ref, JSON.stringify(obj));
}

function lsClear() {
	localStorage.clear();
}
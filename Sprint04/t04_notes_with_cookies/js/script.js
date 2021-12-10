let storage = 'cookie';
renderOutput();

function addNotes() {
	let textField = document.querySelector('.textarea-input');
	
	if(textField.value) {
		if(storage === 'cookie') {
			
			document.cookie = Date.now() + '=' + textField.value + '; expires=' + new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

		} else {

		}	
	} else {
		alert('It\'s empty. Try to input something in "Text input"');
	}
    
	textField.value = '';
    renderOutput();
}

function clearNotes() {
	if(confirm('Are You sure?')) {

	
		if(storage === 'cookie') {
			cookieToArray(document.cookie).forEach((item, index, key) => {
				document.cookie = item[0] + '=1; max-age=-1';
			});
			
		} else {
		}
	}
    renderOutput();
}

function renderOutput() {
	let render = '';
    if(storage === 'cookie') {
		if(document.cookie) {
			console.log(document.cookie);
			cookieToArray(document.cookie).forEach((item, index, key) => {
				render += `--> ${item[1]}\n`;
			});
		} else {
			render += '[Empty]';
		}
	}
	document.querySelector('.textarea-arh').innerHTML = render;
}

function cookieToArray(cook) {
	let obj = {};
	cook.split('; ').forEach((item, index, array) => {
		obj[item.split('=')[0]] = item.split('=')[1];
	});
	return Object.entries(obj); // array = [[куки1, значение],[куки2, значение], и т.д.]
}
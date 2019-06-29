// Ключ и сообщение транслируются в двоичный код, выполняется сложение, новое сообщение транслируется в текст
var a = [];
var d = [];
var i = ' '.charCodeAt(0);
var j = '~'.charCodeAt(0);
for (; i <= j; ++i) {
	if (i == 61) {
		continue;
	};
	a.push(String.fromCharCode(i));
	d.push(i);
};
delete i, j;
var i = 0;
d = d.map(function(name) {
	return name.toString(2);
});
function encrypt(message, key = '') {
	if ((key == undefined) || (key == null) || (key == '')) {
		key = generateKey(message);
	}
	var i = 0;
	var encsms = []
	var enckey = []
	for (; i < message.length; i++) {
		encsms.push(d[a.indexOf(message[i])])
	};
	i = key.length - 1;
	for (; i >= 0; i--) {
		enckey.push(d[a.indexOf(key[i])])
	};
	var ince = 0;
	while (enckey.length < encsms.length) {
		enckey.push(enckey[ince])
		ince++
	}
	var encmes = []																																																																																																																																																																																													
	encsms.forEach(function(item,i) {																																																																																													
		var c = parseInt(item, 2) ^ parseInt(enckey[i], 2);
		encmes.push(c)																																																																																											
	});
	var q = [];
	i = 0;
	for (; i < encmes.length; i++) {
		q.push(String.fromCharCode(encmes[i]));
	};

	return q.join('');
}
function generateKey(message) {
	var key = [];
	while (key.length != message.split('').length) {
		key.push(a[Math.floor(Math.random()*25)])
	}
	return key;
}

// You found me!
// Congrulations!

function checkCrypt(encryptMessage) {
	switch (encryptMessage) {
		case `TT'u\u0013\u001ce
\u0016
Ye([^]%\u0004]PuF\u0001\"?\u0004\u0019`:
			return 1;
		case `\"$7\u0002?*\u001f#0<,\u001f ,4E`:
			return 2;
		case `U\u0015'\u0001B*`:
			return 3;
		default:
			return 0;
	}
}
function getMessage(num) {
	switch (num) {
		case 0:
			return 'Oops! You made a mistake'
		case 1:
			return 'Oh! No! No! I will found you! You must stay at here! I have already calculated your IP!'
		case 2:
			return 'He-he <0xFF0E>, well done! :)'
		case 3:
			return "Do you think, that it's cheat code? No, no!"
	}
}
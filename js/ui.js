document.body.addEventListener('DOMContentLoaded', () => {
	document.body.classList.toggle(loadTheme());
});
bgColorOption_focused = false;

function showHint(e, id) {
	var id = (id) ? (id.trim() != '' ? (`#${id}`) : '') : '';
	var hint = document.querySelector('.hint' + id);
	hint.style.top = (e.pageY + 'px');
	hint.style.left = (e.pageX + 'px');
	hint.style.opacity = '1';
};
function hideHint(e, id) {
	var id = (id) ? (id.trim() != '' ? (`#${id}`) : '') : '';
	var hint = document.querySelector('.hint' + id);
	hint.style.opacity = '0';
};

function toggleTheme(e) {
	e.target.classList.toggle('switch-on');
	document.body.classList.toggle('light');
	if (document.body.classList.contains('light'))
		saveTheme('light');
	else
		saveTheme('dark');
};

function toggle(id) {
	//e.target.classList.toggle('switch-on');
	document.getElementById(id).classList.toggle('switch-on');
};
function switchRadioButton(id) {
	var current = document.getElementById(id);
	var curradio = current.parentNode.querySelector('input.radio');
	var radios = current.parentNode.parentNode.querySelectorAll('input.radio');
	var stylized_radios = current.parentNode.parentNode.querySelectorAll('span.radio-btn');
	for (var i = 0; i < radios.length; i++) {
		if (radios[i] != curradio)
			radios[i].checked = false;
	}
	for (var i = 0; i < stylized_radios.length; i++) {
		stylized_radios[i].classList.remove('radio-on');
	}
	current.classList.add('radio-on');
};

function checkKey(e) {
	if (e.code.startsWith('Key') && !e.key.toLowerCase().match(/#*([0-9A-Fa-f]+)$/)) {
		e.preventDefault();
		return false;
	}
};

function bdrsChange(e) {
	e.target.parentNode.querySelector('#bdradius-text').innerHTML = e.target.value;
};

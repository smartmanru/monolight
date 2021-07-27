function monolight() {
	var usercode = document.getElementById('usercode').innerHTML.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;');
	var theme = document.getElementById('theme-option').value;
	var font = document.getElementById('font-option').value;
	var fontdl = (font.includes('JetBrains Mono') ? 'http://darkcat09.github.io/monolight/css/jetbrainsmono.css' : '');
	var lang = document.getElementById('language-option').value;
	var exportlang = document.getElementById('export-option').value;
	var bg_checkedid = document.querySelector('#bg-radio .radio-on').parentNode.querySelector('input.radio').id;
	var bg =
	(bg_checkedid == 'custombg-option') ? `#${document.getElementById('bgcolor-option').value.match(/#*([0-9A-Fa-f]+)$/)[1]}` :
	(bg_checkedid == 'transpbg-option') ? 'rgba(0, 0, 0, 0)' : null;
	var scroll = document.getElementById('scroll-option').checked;
	var border = document.getElementById('border-option').checked;
	var bdrs = `${document.getElementById('bdradius-option').value}px`;
	var controls = {
		'copy': document.getElementById('ctrlcopy-option').checked,
		'win':  document.getElementById('ctrlwin-option').checked,
		'lnum': document.getElementById('ctrlline').checked,
		'wrap': document.getElementById('ctrlwrap').checked,
		'cons': document.getElementById('ctrlcons').checked
	};
	var outtype = document.getElementById('type-option').value;

	//
};

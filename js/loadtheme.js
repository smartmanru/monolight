function saveTheme(theme) {
	document.cookie = `theme=${encodeURIComponent(theme)}`;
};

function loadTheme() {
	var result = document.cookie.match(/;*theme=(\w+)(?:;|$)/m);
	return (result) ? result[1] : 'dark';
};

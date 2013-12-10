function $(s, el) {
	return (el || document)[{
	'#': 'getElementById',
	'.': 'getElementsByClassName',
	'@': 'getElementsByName',
	'=': 'getElementsByTagName',
	'^': 'querySelector'}[s[0]]
	|| 'querySelectorAll'](s.slice(1));
}

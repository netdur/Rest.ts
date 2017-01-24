export function Template(strings: any, ...keys: any[]) {
	return (function(...values: any[]) {
		var dict = values[values.length - 1] || {};
		var result = [strings[0]];
		keys.forEach(function(key, i) {
			var value = Number.isInteger(key) ? values[key] : dict[key];
			result.push(value, strings[i + 1]);
		});
		return result.join('');
	});
}
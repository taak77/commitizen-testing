module.exports = {
	isAlpha: function(value) {
		return !/[^a-z\xDF-\xFF]|^$/.test(value.toLowerCase());
	}
};
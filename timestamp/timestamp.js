module.exports = {
	parse: function(req, res) {
		const dateString = req.params.query;
		const date = new Date(dateString);

		if (date instanceof Date && !isNaN(date)) {
			res.json({
				unix: date.getTime(),
				utc: date.toUTCString()
			});
		} else {
			res.json({
				error: 'Invalid Date'
			});
		}
	}
};

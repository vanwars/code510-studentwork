var Universities = Collection.extend({
	sort_field: 'average_gpa_weighted',
	model: University,
	url: 'http://dev.localground.org/api/0/forms/1/data/'
});

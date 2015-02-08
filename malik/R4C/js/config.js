var config = {
	username: 'vanwars',
	password: 'my_password',
	templateNames: [
		'SplashPage',
		'MenuAnonymous',
		'myuniversitypage'
	],
	urls: {
		"": welcome,
		"universities/:id": showTheUniversity
	},
	router: null,
	loginURL: "login",
	user: null,
	context: {
		universities: null
	},
	headerView: null,
	footerView: null
};
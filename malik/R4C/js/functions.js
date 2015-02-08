function welcome(){
	new StaticView({
		el: '#content',
		templateName: 'SplashPage'	
	});
}

function showTheUniversity(id) {
	new DetailView({
		el: "#content",
		model: new University({id:  id}),
		templateName: 'myuniversitypage'
	});
}	

/*
function universityList(){
	new ListView({
		el: ????,
		collection: ???,
		templateName: ???
	});
}
*/ 

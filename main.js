// dom elements
let questions = document.querySelectorAll('.question'),
	title = document.querySelectorAll('h4'),
	icon = document.querySelectorAll('.icon img'),
	small = document.querySelectorAll('.text small');


// loop through all questions elements
questions.forEach((question) => {
	question.addEventListener('click', function () {

		// trigger delete classes function
		deleteClasses()

		// add active class to the arrow icon
		question.querySelector('.icon img').classList.add('active');
		// add active class to the title
		question.querySelector('.text h4').classList.add('active');
		// add active class to the small element answer
		question.querySelector('.text small').classList.add('active');

	})
});
// delete all active classes 
function deleteClasses() {

	// delete all active classes from title
	title.forEach((e) => {
		e.classList.remove('active');
	});
	// delete all active classes from arrow icon
	icon.forEach((img) => {
		img.classList.remove('active');
	});
	// delete all active classes from small elements
	small.forEach((e) => {
		e.classList.remove('active');
	});

}

console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form Was Submitted Successfully');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

const duckPhoto = document.querySelector('img')

const compliment = () => {
	alert("You look even better than this duck!")
 }

 duckPhoto.addEventListener('mouseover', compliment)
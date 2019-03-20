const input = document.getElementById("input").value;
const button = document.getElementsByTagName("button")[0];
let output = document.getElementById("output");

console.log(input);

button.addEventListener('click',() => {
	const xhr = new XMLHttpRequest();
	xhr.onreadystatechange = () => {
		if(xhr.readyState === XMLHttpRequest.DONE){
			output.innerHTML = JSON.parse(xhr.response).contents.translated;
			console.log(xhr.responseText);
		}
	}
	xhr.open('GET',`https://api.funtranslations.com/translate/yoda.json?text=${input}`, true);
	xhr.send();
})

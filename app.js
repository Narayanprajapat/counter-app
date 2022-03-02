let value = document.getElementById('value');
function counter(x) {
	let count = parseInt(value.innerHTML);
	if (x == 'increment') {
		count++;
		value.innerHTML = count;
	} else if (x == 'decrement') {
		count--;
		value.innerHTML = count;
	} else {
		value.innerHTML = 0;
	}
}

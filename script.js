const filter = document.querySelectorAll('.main__content-item');

document.querySelector('nav').addEventListener('click', event => {
	if (event.target.tagName !== 'BUTTON') return false;
	let filterClass = event.target.dataset['f'];

	filter.forEach(element => {
		element.classList.remove('display-none');
		if (!element.classList.contains(filterClass)) {
			element.classList.add('display-none');
		}
	})
});
const allIcons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];


// GENERATORE COLORE RANDOM PER OGNI ELEMENTO DELLE CARDS 
allIcons.forEach((element) => {
	element.color = generateColor();
});

// Richiamo il mio elemento HTML a cui voglio inserire tutte le mie cards
const iconContainer = document.querySelector('.js-all-card'); 

// FUNCTION PER POPOLARE IL DOM
printCards(allIcons, iconContainer);


// ----------------------
//     EVENT CHANGE
// ----------------------
// CATEGORIZZO LE CARDS DA STAMPARE IN BASE ALLA SCELTA DELL'UTENTE 
const selectCategory = document.querySelector('#category'); 
// Reset dei valori a All per ogni volta che l'utente fa refresh della pagina
selectCategory.value = 'all';

selectCategory.addEventListener('change',
	function() {

		// Rendo leggibile la scelta dell'utente
		const userValue = this.value;
		// Svuoto il popolamento delle pagine ogni volta che l'utente cambia la sua categoria
		iconContainer.innerHTML = '';

		// Se nei dati dell'oggetto non e' compreso il type ALL allora 
		if(userValue !== 'all') {
			const filteredIcons = allIcons.filter((element) => {
				return element.type === userValue;
			});

			// Popolazione DOM
			printCards(filteredIcons, iconContainer);
		} else {
			// Popolazione DOM
			printCards(allIcons, iconContainer); 
		}
	}
);


// --------------------
// 		FUNCTION
// --------------------
// Popolazione DOM
function printCards(array, container) {
	array.forEach((element) => { 
		const {name, prefix, type, family, color} = element; 
	
		const newCard = `
		<div class="card" style="color: ${color}">
			<i class="${family} ${prefix}${name}"></i>
			<span>${name}</span>
		</div>
		`
		container.innerHTML += newCard; 
	}); 
};

// Generatore colore casuale
function generateColor() {
	let color = '#';
	
	// Generiamo una stringa che sia della stessa lunghezza di: #1b2b3a (esadecimale) 
	// Variante a stringa con tutti i numeri a nostra disposizione
	const symbols = '0123456789abcdef';
	
	for(let i = 0; i < 6; i++) {
		const randomIndex = getRndInteger(0, symbols.length - 1);

		const randomSymbol = symbols[randomIndex];

		color += randomSymbol;
	}
	return color;
};


// Generatore numero random
function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
};

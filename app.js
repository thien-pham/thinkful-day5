//state object
const appState = {
	items: [
		{ title: 'apples', done: true },
		{ title: 'oranges', done: true },
		{ title: 'milk', done: false },
		{ title: 'bread', done: true }
	]
};


//state modification functions
//function to add item
function addItem(appState, item) {
	appState.items.push(item);
}


//function to remove item
function removeItem(appState, itemIndex) {
	appState.items.splice(itemIndex, 1);
}

//function to check item, no jq - toggle boolean in appState
// instead .shopping-item__checked 
function checkItem(appState, item) {
	let checkedItem = appState.item.strike();
}


//render functions
function renderList(appState, element) {
	let itemsHTML = appState.items.map(function) {
		return `<li> item </li>`;
	}
	element.html(itemsHTML);
}



//event listeners, calll after 
function addEventListeners() {
	$('.shopping-list-add').submit(function(event) {
		event.preventDefault();
    	let item = $('.shopping-list-add-input').val();
    	addItem(appState, item);

    	renderList(appState, $('.shopping-list'));
	});
}

console.log(appState);
console.log("hello world");








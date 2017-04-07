//state object
const appState = {
	items: [
		{ title: 'apples', done: true },
		{ title: 'oranges', done: true },
		{ title: 'milk', done: false },
		{ title: 'bread', done: true }
	];
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

//function to check item



//render functions



//event listeners
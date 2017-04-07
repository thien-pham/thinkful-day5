//state object
const appState = {
	items: []
};

const testState = {
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
};


//function to remove item
// function removeItem(appState, itemIndex) {
// 	appState.items.splice(itemIndex, 1);
// }

//function to check item, no jq - toggle boolean in appState
// instead .shopping-item__checked 
// function checkItem(appState, item) {
// }


//render functions
function renderList(appState, item, element) {
	console.log(item, 'test')
	let itemsHTML = appState.items.map(function(item) {
		return `<li>
        			<span class="shopping-item">${item}</span>
        			<div class="shopping-item-controls">
          				<button class="shopping-item-toggle">
            				<span class="button-label">check</span>
          				</button>
          				<button class="shopping-item-delete">
            				<span class="button-label">delete</span>
          				</button>
        			</div>
      			</li>`;
	});
	//$('.shopping-list').attr(element.html(itemsHTML) );
	// $('.shopping-list').attr().append('<li>');
	element.append(itemsHTML);
};


//event listeners, calll after 
$(document).ready(function (addEventListeners) {
	$('.shopping-list-add').on("click",function(event) {
		event.preventDefault();
    	let item = addItem(appState, $('.shopping-list-add-input').val());
    	//let item = $('.shopping-list').append('<li>');
    	//$('.shopping-list').append
    	renderList(appState, item, $('.shopping-list'));
	});
	// $('.shopping-item-delete').remove(function(event) {
	// 	event.preventDefault();
 //    	let itemToRemove = $('.shopping-list-remove-input').val();
 //    	removedItem(appState, item);
 //    	renderList(appState, $('.shopping-list'));
	// });
	// $('.shopping-item-toggle').check(function(event) {
	// 	event.preventDefault();
 //    	let item = $('.shopping-list-toggle-input').val();
 //    	addItem(appState, item);
 //    	renderList(appState, $('.shopping-list'));
	// });


delete.  on click 

check

});

console.log(appState);








// JavaScript Document

// Function to Create a new DIV
function makeDiv(id, close) {
	// Create a new DIV Element
	var div = document.createElement('div');
	
	// Giving our DIV some Attributes
	div.setAttribute('id', id);
	div.className = 'box';
	
	if (close && close === true) {
		var btn = makeBtn('&times;', removeParent);
		
		div.appendChild(btn);
	}
	
	return div;
}

// Make a List
function makeList(id, listItems, type) {
	var list;
	
	if (type) {
		list = document.createElement(type);
	} else {
		list = document.createElement('ul');
	}
	
	list.setAttribute('id', id);
	list.className = 'list';
	
	listItems.forEach(function(item) {
		var li = document.createElement('li');
		var btn = makeBtn('&times;', removeParent);
		
		try {
			li.innerHTML = item;
		} catch(e) {
			li.innerText = item;
		}
		
		li.appendChild(btn);
		list.appendChild(li);
	});
	
	return list;
}

function makeBtn(label, callback) {
	var btn = document.createElement('button');
	
	btn.innerHTML = label;
	btn.addEventListener('click', callback, false);
	
	return btn;
}

function addItem() {
	var item = document.getElementById('newitem').value;
	
	var li = document.createElement('li');
	var btn = makeBtn('&times;', removeParent);
	
	li.innerText = item;
	li.appendChild(btn);
	
	document.getElementById('todo').appendChild(li);
}

function removeParent(e) {
	e.target.parentElement.remove();
}
var list = document.getElementById('list');
var add = document.getElementById('addElem');
add.addEventListener('click', function(e){
	var element = document.createElement('li')
	element.innerHTML = 'item' + ' ' + document.getElementsByTagName('li').length;
	list.appendChild(element);
	})
	
	
	
	
	
	
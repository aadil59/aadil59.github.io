var ul = document.getElementById('list');
var li, checkbox, label;
let formGroup = document.querySelector('.form-group');
let errorMsgElem = document.createElement('label');
errorMsgElem.setAttribute('class', 'alert-danger p-1')
errorMsgElem.textContent = 'Please enter your TODO';

let addButton = document.getElementById('add');
addButton.addEventListener('click', addItems);

let removeAllButton = document.getElementById('removeAll');
removeAllButton.addEventListener('click', removeAllitems);

let removeButton = document.getElementById('remove');
removeButton.addEventListener('click', removeItems);



function addItems () {
    let input = document.getElementById('todoInput');
    let item = input.value;
    let itemstring = item.split(' ');
    console.log(itemstring);
    let firstElem = itemstring[0].toLowerCase();
    let textNode = document.createTextNode(item);
    
    if(item === '') {
        formGroup.appendChild(errorMsgElem);
    }
    else {
        if(document.querySelector('.alert-danger')) {
            formGroup.removeChild(errorMsgElem);
        }
        // LIST ITEM CREATION
        li = document.createElement('li');
        li.setAttribute('class', 'list-group-item')
        // CHECKBOX CREATION
        checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id', `${firstElem}`);
//        console.log(checkbox);
        // LABEL CREATION
        label = document.createElement('label');
        label.setAttribute('for', `${firstElem}`);
//        console.log(label);
        
        li.appendChild(checkbox);
        label.appendChild(textNode);
        li.appendChild(label);
        ul.appendChild(li);
//  ===================== IF WANT TO ADD BEFORE LIST ITEM ==================
//      ul.insertBefore(li, ul.childNodes[0]);
        
        // CLEAR Field
        input.value = '';
    }
};
function removeItems () {
    li = ul.children;
    for(let i = 0; i < li.length; i++) {
        while(li[i] && li[i].children[0].checked){
            ul.removeChild(li[i]);
        }
    }
};
function removeAllitems () {
    ul.innerHTML = '';
}

